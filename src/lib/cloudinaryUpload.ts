export type CloudinaryUploadResult = {
  secure_url: string;
  public_id: string;
  width: number;
  height: number;
};

/**
 * Uploads straight from the guest's browser to Cloudinary using an unsigned
 * upload preset, bypassing our own server entirely. This keeps large photo
 * bodies off Vercel's serverless functions (which cap request size) and
 * means our API only ever handles small JSON metadata calls.
 */
export function uploadToCloudinary(
  file: File,
  onProgress?: (percent: number) => void,
  onXhrReady?: (xhr: XMLHttpRequest) => void
): Promise<CloudinaryUploadResult> {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    return Promise.reject(new Error("Cloudinary is not configured"));
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  formData.append("folder", "wedding-guest-photos");

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`);
    onXhrReady?.(xhr);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable && onProgress) {
        onProgress(Math.round((event.loaded / event.total) * 100));
      }
    };

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          resolve(JSON.parse(xhr.responseText));
        } catch {
          reject(new Error("Unexpected Cloudinary response"));
        }
      } else {
        reject(new Error(`Upload failed (${xhr.status})`));
      }
    };

    xhr.onerror = () => reject(new Error("Network error during upload"));
    // A guest tapping X mid-upload calls xhr.abort(), which fires this event
    // instead of onerror/onload — without a handler the promise would hang
    // forever and processFile() would never clean up the queue item.
    xhr.onabort = () => reject(new Error("Cancelado"));
    xhr.send(formData);
  });
}

// Vercel Blob Configuration

const BLOB_BASE_URL = 'https://sfzosntztvdlvtw8.public.blob.vercel-storage.com';

const blobFiles = {
  // Videolar
  'xlog-3d.mp4': `${BLOB_BASE_URL}/xlog-3d.mp4`,
  'porsuk.mp4': `${BLOB_BASE_URL}/porsuk.mp4`,
  
  // Büyük resimler
  'porsuk.png': `${BLOB_BASE_URL}/porsuk.png`,
  'xlog.png': `${BLOB_BASE_URL}/xlog.png`,
  'logotypep.png': `${BLOB_BASE_URL}/logotypep.png`,
  'porsuk-image-04.png': `${BLOB_BASE_URL}/porsuk-image-04.png`,
  'porsuk-image-05.png': `${BLOB_BASE_URL}/porsuk-image-05.png`,
  'porsuk-image-06.png': `${BLOB_BASE_URL}/porsuk-image-06.png`,
  'porsuk-image-07.png': `${BLOB_BASE_URL}/porsuk-image-07.png`,
  'p-post-01.png': `${BLOB_BASE_URL}/p-post-01.png`,
  'p-post-02.png': `${BLOB_BASE_URL}/p-post-02.png`,
  'p-post-03.png': `${BLOB_BASE_URL}/p-post-03.png`,
  'p-post-04.png': `${BLOB_BASE_URL}/p-post-04.png`,
  'p-post-05.png': `${BLOB_BASE_URL}/p-post-05.png`,
  'p-post-06.png': `${BLOB_BASE_URL}/p-post-06.png`,
  'p-post-07.png': `${BLOB_BASE_URL}/p-post-07.png`,
  'p-post-08.png': `${BLOB_BASE_URL}/p-post-08.png`,
  'x-post-01.png': `${BLOB_BASE_URL}/x-post-01.png`,
  'x-post-02.png': `${BLOB_BASE_URL}/x-post-02.png`,
  'x-post-03.png': `${BLOB_BASE_URL}/x-post-03.png`,
  'x-post-04.png': `${BLOB_BASE_URL}/x-post-04.png`,
  'x-post-05.png': `${BLOB_BASE_URL}/x-post-05.png`,
  'x-post-06.png': `${BLOB_BASE_URL}/x-post-06.png`,
  'x-post-07.png': `${BLOB_BASE_URL}/x-post-07.png`,
  'x-post-08.png': `${BLOB_BASE_URL}/x-post-08.png`,
  'x-post-09.png': `${BLOB_BASE_URL}/x-post-09.png`,
  'x-post-10.png': `${BLOB_BASE_URL}/x-post-10.png`,
  'x-post-11.png': `${BLOB_BASE_URL}/x-post-11.png`,
  'x-post-12.png': `${BLOB_BASE_URL}/x-post-12.png`,
  'xlog-sitemockup.png': `${BLOB_BASE_URL}/xlog-sitemockup.png`,
  'arjeta-sitemockup.png': `${BLOB_BASE_URL}/arjeta-sitemockup.png`,
  
  // PDF dosyaları
  'porsuk-katalog.pdf': `${BLOB_BASE_URL}/porsuk-katalog.pdf`,
  'xlog-katalog.pdf': `${BLOB_BASE_URL}/xlog-katalog.pdf`
};

function getBlobUrl(filename) {
  return blobFiles[filename] || `assets/images/${filename}`;
}

function updateMediaSources() {
  document.querySelectorAll('video[src*="assets/images"]').forEach(video => {
    const filename = video.src.split('/').pop();
    if (blobFiles[filename]) {
      video.src = blobFiles[filename];
    }
  });
  
  document.querySelectorAll('img[src*="assets/images"]').forEach(img => {
    const filename = img.src.split('/').pop();
    if (blobFiles[filename]) {
      img.src = blobFiles[filename];
    }
  });
  
  document.querySelectorAll('a[href*="assets/images"]').forEach(link => {
    const filename = link.href.split('/').pop();
    if (blobFiles[filename]) {
      link.href = blobFiles[filename];
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateMediaSources);
} else {
  updateMediaSources();
}

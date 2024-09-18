// src/helpers/imageHelpers.js
export const getPlaceholderImage = (url = '', domain = '') => {
    // Check if the domain is valid and contains "youtube"
    if (domain.includes('youtube')) {
      let videoId = '';
  
      // Handle different types of YouTube URLs
      if (url.includes('youtube.com/watch?v=')) {
        const urlParams = new URLSearchParams(new URL(url).search);
        videoId = urlParams.get('v');
      } else if (url.includes('youtu.be/')) {
        // Handle shortened YouTube URLs like https://youtu.be/VIDEO_ID
        videoId = url.split('youtu.be/')[1];
      } else if (url.includes('youtube.com/embed/')) {
        // Handle embedded YouTube URLs like https://www.youtube.com/embed/VIDEO_ID
        videoId = url.split('embed/')[1];
      }
  
      if (videoId) {
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // YouTube thumbnail using video ID
      }
    }
  
    // Default placeholder with domain name, handling empty domain case
    const domainName = domain ? domain.charAt(0).toUpperCase() + domain.slice(1) : 'No Image';
    return `https://via.placeholder.com/150x100.png?text=${domainName}`;
  };
  
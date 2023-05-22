// This component converts timestamp to human readble date format
function HumanTimeAgo({ timestampdate }) {
  const currentTimestamp = new Date();
  const oldTimestamp = new Date(timestampdate);

  const timestampDiff = currentTimestamp - oldTimestamp;
  const minutes = Math.round(timestampDiff / (1000 * 60));
  const hours = Math.round(timestampDiff / (1000 * 60 * 60));
  const days = Math.round(timestampDiff / (1000 * 60 * 60 * 24));
  const months = Math.round(timestampDiff / (1000 * 60 * 60 * 24 * 30));
  const years = Math.round(timestampDiff / (1000 * 60 * 60 * 24 * 365));

  if (minutes < 60) {
    return minutes < 2 ? minutes + " minute ago" : minutes + " minutes ago";
  } else if (hours < 24) {
    return hours < 2 ? hours + " hour ago" : hours + " hours ago";
  } else if (days < 30) {
    return days < 2 ? days + " day ago" : days + " days ago";
  } else if (months < 12) {
    return months < 2 ? months + " month ago" : months + " months ago";
  } else {
    return years < 2 ? years + " year ago" : years + " years ago";
  }
}

export default HumanTimeAgo;

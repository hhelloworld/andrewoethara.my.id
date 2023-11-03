import Quill from 'quill';

const BlockEmbed = Quill.import('blots/block/embed');

class YoutubeVideoBlot extends BlockEmbed {
  static create(value) {
    const node = super.create();
    node.setAttribute('src', `https://www.youtube.com/embed/${value.videoId}`);
    node.setAttribute('frameborder', '0');
    node.setAttribute('allowfullscreen', 'true');
    node.setAttribute('width', '560'); // Set the video width as needed
    node.setAttribute('height', '315'); // Set the video height as needed
    return node;
  }

  static value(node) {
    return { videoId: node.getAttribute('src').split('/').pop() };
  }
}

YoutubeVideoBlot.blotName = 'youtube-embed';
YoutubeVideoBlot.className = 'ql-youtube-embed';
YoutubeVideoBlot.tagName = 'iframe';

Quill.register(YoutubeVideoBlot);

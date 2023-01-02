import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shared-button',
  templateUrl: './shared-button.component.html',
  styleUrls: ['./shared-button.component.scss']
})
export class SharedButtonComponent implements OnInit{

  @Input() url: string;
  @Input() exclude: Array<string>;
  @Input() theme: string;
  @Input() layout: string;
  @Input() textButton: string;
  @Input() colorButton: string;
  
  verifyExclude(social: string){
    if(this.exclude){
      return !this.exclude.includes(social);
    }else{
      return true;
    }
}

  ngOnInit(): void {
    if(this.colorButton == ''){
      this.colorButton = '#747272'
    }else{
      this.colorButton = '#' + this.colorButton.replace('#', '')
    }
  }
  
  shareSocial(social: string){
    switch (social) {
      case 'facebook':
        window.open('http://www.facebook.com/sharer.php?u=' + this.url);
        break;
      case 'twitter':
        window.open('https://twitter.com/intent/tweet?text=' + this.url);
        break;
      case 'pinterest':
        window.open('http://pinterest.com/pin/create/button/?url=' + this.url);
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3D'+ this.url);
        break;
      case 'whatsapp':
        window.open('https://api.whatsapp.com/send?text=' + this.url);
        break;
      case 'wechat':
        window.open('http://admin.wechat.com/wiki/index.php?title=' + this.url);
        break;
      case 'weibo':
        window.open('http://service.weibo.com/share/share.php?url=' + this.url);
        break;
      case 'reddit':
        window.open('http://www.reddit.com/submit?url=' + this.url);
        break;
      case 'tumblr':
        window.open('https://www.tumblr.com/widgets/share/tool/preview?canonicalUrl=' + this.url);
        break;
      case 'messenger':
        window.open('fb-messenger://share?link=' + this.url);
        break;
      case 'telegram':
        window.open('https://telegram.me/share/url?url=' + this.url);
        break;
      case 'messages':
        window.open('sms:?body=' + this.url);
        break;
      case 'email':
        window.open('mailto:?body=' + this.url);
        break;
      case 'copy':
        navigator.clipboard.writeText(this.url);
        break;
      case 'print':
        setTimeout(function() {
          window.print();
        }, 200);
        break;
    }
  }
}
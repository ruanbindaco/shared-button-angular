import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedButtonComponent } from './shared-button.component';

describe('SharedButtonComponent', () => {
  let component: SharedButtonComponent;
  let fixture: ComponentFixture<SharedButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedButtonComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should wait for social media name to remove from shared button', () => {
    component.exclude = [
      'facebook' , 'twitter' ,  'linkedin', 'pinterest' , 'print' ,  'copy', 'email' , 'messages' ,  'telegram', 
      'messenger' , 'tumblr' , 'reddit' , 'weibo' ,  'wechat', 'whatsapp' , 'pinterest'
    ];
    component.colorButton = '';
    component.exclude.includes('facebook')
    fixture.detectChanges();
    expect(component.verifyExclude('facebook')).not.toBeTruthy();
  });     

describe('should wait for social media name to open a new tab', () => {

  it('should open facebook', () => {
    const windowSpy = spyOn(window, 'open');
    component.shareSocial('facebook');
    expect(windowSpy).toHaveBeenCalled();
    expect(windowSpy).toHaveBeenCalledWith('http://www.facebook.com/sharer.php?u=' + component.url);
  });

  it('should open twitter', () => {
    const windowSpy = spyOn(window, 'open');
    component.shareSocial('twitter');
    expect(windowSpy).toHaveBeenCalled();
    expect(windowSpy).toHaveBeenCalledWith('https://twitter.com/intent/tweet?text=' + component.url);
  });

  it('should open linkedin', () => {
    const windowSpy = spyOn(window, 'open');
    component.shareSocial('linkedin');
    expect(windowSpy).toHaveBeenCalled();
    expect(windowSpy).toHaveBeenCalledWith('https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3D' + component.url);
  });

  it('should open pinterest', () => {
    const windowSpy = spyOn(window, 'open');
    component.shareSocial('pinterest');
    expect(windowSpy).toHaveBeenCalled();
    expect(windowSpy).toHaveBeenCalledWith('http://pinterest.com/pin/create/button/?url=' + component.url);
  });
    
  it('should open weibo', () => {
    const windowSpy = spyOn(window, 'open');
    component.shareSocial('weibo');
    expect(windowSpy).toHaveBeenCalled();
    expect(windowSpy).toHaveBeenCalledWith('http://service.weibo.com/share/share.php?url=' + component.url);
  });

  it('should open wechat', () => {
    const windowSpy = spyOn(window, 'open');
    component.shareSocial('wechat');
    expect(windowSpy).toHaveBeenCalled();
    expect(windowSpy).toHaveBeenCalledWith('http://admin.wechat.com/wiki/index.php?title=' + component.url);
  });

  it('should open whatsapp', () => {
    const windowSpy = spyOn(window, 'open');
    component.shareSocial('whatsapp');
    expect(windowSpy).toHaveBeenCalled();
    expect(windowSpy).toHaveBeenCalledWith('https://api.whatsapp.com/send?text=' + component.url);
  });

  it('should open reddit', () => {
    const windowSpy = spyOn(window, 'open');
    component.shareSocial('reddit');
    expect(windowSpy).toHaveBeenCalled();
    expect(windowSpy).toHaveBeenCalledWith('http://www.reddit.com/submit?url=' + component.url);
  });

  it('should open tumblr', () => {
    const windowSpy = spyOn(window, 'open');
    component.shareSocial('tumblr');
    expect(windowSpy).toHaveBeenCalled();
    expect(windowSpy).toHaveBeenCalledWith('https://www.tumblr.com/widgets/share/tool/preview?canonicalUrl=' + component.url);
  });

  it('should open telegram', () => {
    const windowSpy = spyOn(window, 'open');
    component.shareSocial('telegram');
    expect(windowSpy).toHaveBeenCalled();
    expect(windowSpy).toHaveBeenCalledWith('https://telegram.me/share/url?url=' + component.url);
  });

  it('should open email', () => {
    const windowSpy = spyOn(window, 'open');
    component.shareSocial('email');
    expect(windowSpy).toHaveBeenCalled();
    expect(windowSpy).toHaveBeenCalledWith('mailto:?body=' + component.url);
  });

  it('should open messages', () => {
    const windowSpy = spyOn(window, 'open');
    component.shareSocial('messages');
    expect(windowSpy).toHaveBeenCalled();
    expect(windowSpy).toHaveBeenCalledWith('sms:?body=' + component.url);
  });
    
  it('should open messenger', () => {
    const windowSpy = spyOn(window, 'open');
    component.shareSocial('messenger');
    expect(windowSpy).toHaveBeenCalled();
    expect(windowSpy).toHaveBeenCalledWith('fb-messenger://share?link=' + component.url);
  });

  it('should copy', () => {
    component.shareSocial('copy');
  });

  it('should print', (done) => {
    expect(component.shareSocial('print')).toBeFalsy();
    const windowSpy = spyOn(window, 'print');
    setTimeout(() => {
      window.print();
      done();
      expect(windowSpy).toHaveBeenCalled()
    }, 251);
  });
    
});

  it('should change the svg colorButton to specific one', () => {
    component.colorButton = 'cccccc';
    fixture.detectChanges();
    const colorEl: HTMLElement = fixture.debugElement.query(By.css('.featureToBeTested')).nativeElement;
    expect(colorEl.style.color).toEqual('rgb(204, 204, 204)');
    });
      
  it('should change the svg colorButton to default', () => {
    component.colorButton = '';
    fixture.detectChanges();
    const colorEl: HTMLElement = fixture.debugElement.query(By.css('.featureToBeTested')).nativeElement;
    expect(colorEl.style.color).toEqual('rgb(116, 114, 114)');
  });
  
  it('should appear textButton', () => {
    component.textButton = 'shared' ;
    component.colorButton = '';
    const button = fixture.debugElement.query(By.css('.featureToBeTested'));
    expect(button.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges();
    expect(button.nativeElement.textContent.trim()).toBe('SHARED');
  });

  it('should not appear textButton', () => {
    component.textButton = '';
    component.colorButton = '';
    const button = fixture.debugElement.query(By.css('.featureToBeTested'));
    expect(button.nativeElement.textContent.trim()).toBe('');
  });
  
  
});

var ua = navigator.userAgent.toLowerCase();
var isWechat = ua.indexOf('micromessenger') !== -1;
var isAndroid = ua.indexOf("android") !== -1;
document.addEventListener('WeixinJSBridgeReady', function() {
  if(isWechat){
    var videos = document.getElementsByTagName('video');
    for (var i = 0; i < videos.length; i++) {
      videos[i].play();
    }
  }
  if (isAndroid) {
    document.addEventListener('touchstart', function() {
      for (var i = 0; i < videos.length; i++) {
        videos[i].play();
      }
    });
    document.addEventListener('touchmove', function(event) {
        event.preventDefault();
    });
    document.addEventListener('touchend', function() {
      for (var i = 0; i < videos.length; i++) {
        videos[i].play();
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", function() {
  var videos = document.getElementsByTagName("video");
  if (isWechat && isAndroid) {
    for (var i = 0; i < videos.length; i++) {
        videos[i].setAttribute("poster", "gif/"+(i+1)+".gif");
    }
  }
  if (isWechat) {
    var linkElements = {
    "link_home": "https://facto.hk",
	"link_backhome": "https://facto.hk",
    "link_about": "https://facto.hk/about",
	"link_homeabout": "https://facto.hk/about",
	"link_projects": "https://facto.hk/projects",
	"link_branding": "https://facto.hk/capabilities/branding",
	"link_webdesign": "https://facto.hk/capabilities/web-design",
	"link_webdevelopment": "https://facto.hk/capabilities/web-development",
	"link_content": "https://facto.hk/capabilities/content",
	"link_digitalstrategy": "https://facto.hk/capabilities/digital-strategy",
	"link_aqara": "https://facto.hk/projects/aqara",
	"link_setshoot": "https://facto.hk/projects/setshoot",
	"link_jiuchensiji": "https://facto.hk/projects/jiuchensiji",
	"link_cmoffer": "https://facto.hk/projects/cmoffer",
	"link_landlane": "https://facto.hk/projects/landlane",
	"link_qfgift": "https://facto.hk/projects/qfgift",
	"link_cmb": "https://facto.hk/projects/cmb",
	"link_shiguangmeng": "https://facto.hk/projects/shiguangmeng",
	"link_jieguang": "https://facto.hk/projects/jieguang",
	"link_dripen": "https://facto.hk/projects/dripen",
	"link_outap": "https://facto.hk/projects/outap",
	"link_typoss": "https://facto.hk/projects/typoss",
	"link_chicstall": "https://facto.hk/projects/chicstall"
    };
    for (var id in linkElements) {
var link = document.getElementById(id);
if (link) {
link.href = linkElements[id];
}
}
}
});



var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?6e4d7e44a23d7f9a3fa3b2ad0e96f98c";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();//baidu




    var imgContainers = document.querySelectorAll('.img-container');
    imgContainers.forEach(function (container) {
        var copyText = container.querySelector('.copy-text');
        var openLink = container.querySelector('.open-link');
        var altValue = container.querySelector('img').getAttribute('data-alt');
        var href = container.getAttribute('data-href');
        var isCopied = false;
        container.addEventListener('mouseenter', function () {
            copyText.style.display = 'block';
            openLink.style.display = 'block';
        });
        container.addEventListener('mouseleave', function () {
            copyText.style.display = 'none';
            openLink.style.display = 'none';
        });
        copyText.addEventListener('click', function (event) {
            event.stopPropagation(); // 阻止事件冒泡，避免点击"复制提示词"后也触发打开链接
            if (!isCopied) {
                copyToClipboard(altValue);
                copyText.textContent = '已复制';
                isCopied = true;
                setTimeout(function () {
                    copyText.textContent = '复制提示词';
                    isCopied = false;
                }, 2000);
            }
        });
        openLink.addEventListener('click', function (event) {
            event.stopPropagation(); // 阻止事件冒泡，避免点击"打开"后也触发复制提示词的操作
            window.open(href, '_blank');
        });
    });
    function copyToClipboard(text) {
        var input = document.createElement('textarea');
        input.style.position = 'fixed';
        input.style.opacity = 0;
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
    }//blog_copy_prompts



var lazyImages = document.querySelectorAll('img[imggrid-data-src]');

var observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      var lazyImage = entry.target;
      lazyImage.src = lazyImage.getAttribute('imggrid-data-src');
      lazyImage.removeAttribute('imggrid-data-src');
      observer.unobserve(lazyImage);
    }
  });
});

lazyImages.forEach(function(lazyImage) {
  observer.observe(lazyImage);
});//blog_grid_background
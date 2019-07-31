setCssToHead(["@charset \x22UTF-8\x22;\nbody { background-color: #f9f9f9; }\n@-webkit-keyframes showPopup { 0% { opacity: 0; }\n100% { opacity: 1; }\n}@keyframes showPopup { 0% { opacity: 0; }\n100% { opacity: 1; }\n}@-webkit-keyframes hidePopup { 0% { opacity: 1; }\n100% { opacity: 0; }\n}@keyframes hidePopup { 0% { opacity: 1; }\n100% { opacity: 0; }\n}@-webkit-keyframes showLayer { 0% { -webkit-transform: translateY(0); transform: translateY(0); }\n100% { -webkit-transform: translateY(-100%); transform: translateY(-100%); }\n}@keyframes showLayer { 0% { -webkit-transform: translateY(0); transform: translateY(0); }\n100% { -webkit-transform: translateY(-100%); transform: translateY(-100%); }\n}@-webkit-keyframes hideLayer { 0% { -webkit-transform: translateY(-100%); transform: translateY(-100%); }\n100% { -webkit-transform: translateY(0); transform: translateY(0); }\n}@keyframes hideLayer { 0% { -webkit-transform: translateY(-100%); transform: translateY(-100%); }\n100% { -webkit-transform: translateY(0); transform: translateY(0); }\n}.",[1],"status { width: 100%; height: 0; position: fixed; z-index: 10; top: 0; height: var(--status-bar-height); background-color: #f1f1f1; }\n.",[1],"header { width: 100%; height: ",[0,80],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; position: fixed; top: 0; z-index: 10; top: var(--status-bar-height); }\n.",[1],"header .",[1],"before, .",[1],"header .",[1],"after { width: 92%; padding: 0 4%; height: ",[0,80],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; position: fixed; top: 0; top: var(--status-bar-height); }\n.",[1],"header .",[1],"before .",[1],"back, .",[1],"header .",[1],"after .",[1],"back { width: ",[0,125],"; height: ",[0,60],"; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; }\n.",[1],"header .",[1],"before .",[1],"back .",[1],"icon, .",[1],"header .",[1],"after .",[1],"back .",[1],"icon { margin-left: -10%; width: ",[0,60],"; height: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; font-size: ",[0,36],"; }\n.",[1],"header .",[1],"before .",[1],"middle, .",[1],"header .",[1],"after .",[1],"middle { width: 100%; }\n.",[1],"header .",[1],"before .",[1],"icon-btn, .",[1],"header .",[1],"after .",[1],"icon-btn { width: ",[0,125],"; height: ",[0,60],"; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"header .",[1],"before .",[1],"icon-btn .",[1],"icon, .",[1],"header .",[1],"after .",[1],"icon-btn .",[1],"icon { width: ",[0,60],"; height: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,36],"; }\n.",[1],"header .",[1],"before .",[1],"icon-btn .",[1],"icon:first-child, .",[1],"header .",[1],"after .",[1],"icon-btn .",[1],"icon:first-child { margin-right: ",[0,5],"; }\n.",[1],"header .",[1],"before .",[1],"back .",[1],"icon { color: #fff; background-color: rgba(0, 0, 0, 0.2); border-radius: 100%; }\n.",[1],"header .",[1],"before .",[1],"icon-btn .",[1],"icon { color: #fff; background-color: rgba(0, 0, 0, 0.2); border-radius: 100%; }\n.",[1],"header .",[1],"after { background-color: #ffffff; border-bottom: ",[0,1]," #ddd solid; }\n.",[1],"header .",[1],"after .",[1],"back .",[1],"icon { color: #666; }\n.",[1],"header .",[1],"after .",[1],"icon-btn .",[1],"icon { color: #666; }\n.",[1],"header .",[1],"after .",[1],"middle { height: ",[0,100],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"header .",[1],"after .",[1],"middle wx-view { padding: ",[0,10]," 0%; margin: 0 3%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,32],"; }\n.",[1],"header .",[1],"after .",[1],"middle wx-view.",[1],"on { margin-bottom: ",[0,-4],"; color: #c9141d; border-bottom: solid ",[0,4]," #c9141d; }\n.",[1],"swiper-box { position: relative; width: 100%; height: ",[0,760],"; }\n.",[1],"swiper-box wx-swiper { width: 100%; height: ",[0,760],"; }\n.",[1],"swiper-box wx-swiper wx-swiper-item wx-image { width: ",[0,760],"; height: ",[0,760],"; }\n.",[1],"swiper-box .",[1],"indicator { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: 0 ",[0,25],"; height: ",[0,40],"; border-radius: ",[0,40],"; font-size: ",[0,22],"; position: absolute; bottom: ",[0,20],"; right: ",[0,20],"; color: #fff; background-color: rgba(0, 0, 0, 0.2); }\n.",[1],"goods-info { width: 94%; padding: ",[0,20]," 3% 0 3%; background-color: #fff; }\n.",[1],"goods-info .",[1],"price { font-size: ",[0,46],"; font-weight: 600; color: #c9141d; padding-left: 30px; }\n.",[1],"goods-info .",[1],"title { font-size: ",[0,32],"; word-break: break-all; -o-text-overflow: ellipsis; text-overflow: ellipsis; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; line-height: ",[0,50],"; }\n.",[1],"goods-info .",[1],"title wx-text { border: ",[0,1]," solid #c9141d; padding: ",[0,3]," ",[0,10],"; border-radius: ",[0,10],"; font-size: ",[0,24],"; color: #c9141d; margin-right: ",[0,10],"; }\n.",[1],"goods-info .",[1],"title .",[1],"jieshao { color: #999; font-size: ",[0,26],"; word-break: break-all; -o-text-overflow: ellipsis; text-overflow: ellipsis; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }\n.",[1],"goods-info .",[1],"title .",[1],"jieshao .",[1],"jiang { border: 0; font-size: ",[0,32],"; padding: 0 ",[0,10]," 0 0; margin: 0; }\n.",[1],"iconzhibi { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAqCAYAAAAqAaJlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjlFM0U1QzlBOEM4MURCMTE4NzM0REI1OEZEREU0QkE3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIxQkUyNEE2NzI2RTExRTlBMjY0RjRDNDUxREJCMzQxIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIxQkUyNEE1NzI2RTExRTlBMjY0RjRDNDUxREJCMzQxIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIElsbHVzdHJhdG9yIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NTg2ODJBNDcyNEUxMUU5QkM4N0NFREQ1REZFNjQzNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NTg2ODJBNTcyNEUxMUU5QkM4N0NFREQ1REZFNjQzNSIvPiA8ZGM6dGl0bGU+IDxyZGY6QWx0PiA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPm9tYy1sb2dv5pa55qGI5LiAPC9yZGY6bGk+IDwvcmRmOkFsdD4gPC9kYzp0aXRsZT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7sK/1BAAADiklEQVR42uyZXUhUQRTHd621bdmwwh4kqAj7MqJIqy3o4yEy6KkIyqKwfInMQiIL8lHBgiLogwhKKdDtpZ7CfaykEitKtzKyoHzZh6SUxGxtd/sfOAvjcO/ujDs3dmEHftzxzt47557zn48zuhOJhCtXSoErh0re2LyxKNOdfPnrojnJqhtoj+TykZ//3bOrQA8I5IIMLoIK8By0gwXZamwZ2CFIoQp8BE3Ar/syt7woCDpLV2aDRrAd1IEuK83hfaWo3rOQQYSfbwNxpzRLg/I4GACnwWrwBNwBxRYdfsZlI9gDBoWmEnAbvFDVs66xO0EvuC4ZRiE+AvpBNf89yUPgIapL2JujQvN6VT0XaGivkykT7g9L4acPaAWPwQoLL0dBM6qLORJxHT2nM7aYvdjLXk2Wv+AGe2orOAqGhPYt4C302gRmWhj9HdRw+LuFJvrtefAJHFI1tpD1OMD6FBePEOkUndWCIZAArezJNmHyL+SOwzC40mYAvcRlEzhgoeeYymwQ4NFbKv32A30AOgilWbXIqzctZHAf1OP5iM1zXnbQOXCL+0rr2W2SoRTeWvZmSGGJfIrLGh5Iv4WmfTyI7J4bZz0vBA1T2RtcIsHjJcOaa3oUl2Z4K8iar1Tdi+DZHzqzgU+oT+gaKnX8BZerwq2Y6b2BR6iPGV5+R53cyExk++Z7huE+ipw01ivU/xg2fMRJGYxnuww8hvuY5aSxPsMDTOzjl5MyMD11xU0bazrV8TmZiosau4slcwOt81iNtEKI52iPuh+cFCOlkDbN5VkjprKR6RKWxWncWT862athaMBm9x9N8ZiXt5TfOCNWThgreJtXLv3+ETiBL/5qYyQZ1sIeFVMb2n1d5jZ5yU1GoEX6sIPop11Fn68Ahf+UNIJ3gfcw6izwCEb6KSvgtKRKMJQ80QGWW+ReVNbZRCDCUdVOxeeDK0CWwTtwDCzjvKlEaqd0pV5KW5JlHnuyWnLYpAjImtU5NyCvXgOLhHsJOZPl9IR2+0GL8y1Kdc5wu196T5DvD5o4NyC9rgQXhMXCLW3/GjnkHRaG7uacTs5ee2zysIzn1DH++rXgmTDRU1q9lLIDKZVxcYpEBxkPLHRZwwcg3VOdZ1UK6XUzOAz6wJsU5w3hVLrM6KzLZGH9d/KZg6Uu06RFRjyrUxr4sKRONdymZaBTwnyelXEI3fn/gzlU/gkwAHe3LMZI4jx1AAAAAElFTkSuQmCC) no-repeat 0 ",[0,20],"; background-size: ",[0,46],"; }\n.",[1],"fuwu { margin-top: ",[0,10],"; }\n.",[1],"chima { margin-top: ",[0,10],"; }\n.",[1],"yangshilist { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; background: #fff; }\n.",[1],"yangshilist .",[1],"ystext { width: ",[0,120],"; font-size: ",[0,28],"; color: #999; padding-top: ",[0,20],"; padding-left: ",[0,30],"; }\n.",[1],"serviceitem { padding: ",[0,20]," ",[0,10],"; color: #333; }\n.",[1],"mansonglist { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; background: #fff; margin-top: ",[0,10],"; padding: ",[0,10]," 0px; }\n.",[1],"mansonglist .",[1],"ystext2 { width: ",[0,120],"; font-size: ",[0,28],"; color: #999; padding-left: ",[0,30],"; padding-top: ",[0,10],"; }\n.",[1],"manjiusong { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; padding-top: ",[0,10],"; padding-left: ",[0,20],"; }\n.",[1],"manjiusong \x3e wx-view { -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; border: #c9141d solid ",[0,1],"; font-size: ",[0,22],"; margin-right: ",[0,15],"; padding: ",[0,5]," ",[0,15]," 0 ",[0,15],"; border-radius: ",[0,10],"; color: #c9141d; margin-bottom: ",[0,10],"; }\n.",[1],"times { color: #999; font-size: ",[0,26],"; }\n.",[1],"masongje { color: #797979; font-size: ",[0,32],"; }\n.",[1],"masongje wx-text { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAqCAYAAAAqAaJlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjlFM0U1QzlBOEM4MURCMTE4NzM0REI1OEZEREU0QkE3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIxQkUyNEE2NzI2RTExRTlBMjY0RjRDNDUxREJCMzQxIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIxQkUyNEE1NzI2RTExRTlBMjY0RjRDNDUxREJCMzQxIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIElsbHVzdHJhdG9yIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NTg2ODJBNDcyNEUxMUU5QkM4N0NFREQ1REZFNjQzNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NTg2ODJBNTcyNEUxMUU5QkM4N0NFREQ1REZFNjQzNSIvPiA8ZGM6dGl0bGU+IDxyZGY6QWx0PiA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPm9tYy1sb2dv5pa55qGI5LiAPC9yZGY6bGk+IDwvcmRmOkFsdD4gPC9kYzp0aXRsZT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7sK/1BAAADiklEQVR42uyZXUhUQRTHd621bdmwwh4kqAj7MqJIqy3o4yEy6KkIyqKwfInMQiIL8lHBgiLogwhKKdDtpZ7CfaykEitKtzKyoHzZh6SUxGxtd/sfOAvjcO/ujDs3dmEHftzxzt47557zn48zuhOJhCtXSoErh0re2LyxKNOdfPnrojnJqhtoj+TykZ//3bOrQA8I5IIMLoIK8By0gwXZamwZ2CFIoQp8BE3Ar/syt7woCDpLV2aDRrAd1IEuK83hfaWo3rOQQYSfbwNxpzRLg/I4GACnwWrwBNwBxRYdfsZlI9gDBoWmEnAbvFDVs66xO0EvuC4ZRiE+AvpBNf89yUPgIapL2JujQvN6VT0XaGivkykT7g9L4acPaAWPwQoLL0dBM6qLORJxHT2nM7aYvdjLXk2Wv+AGe2orOAqGhPYt4C302gRmWhj9HdRw+LuFJvrtefAJHFI1tpD1OMD6FBePEOkUndWCIZAArezJNmHyL+SOwzC40mYAvcRlEzhgoeeYymwQ4NFbKv32A30AOgilWbXIqzctZHAf1OP5iM1zXnbQOXCL+0rr2W2SoRTeWvZmSGGJfIrLGh5Iv4WmfTyI7J4bZz0vBA1T2RtcIsHjJcOaa3oUl2Z4K8iar1Tdi+DZHzqzgU+oT+gaKnX8BZerwq2Y6b2BR6iPGV5+R53cyExk++Z7huE+ipw01ivU/xg2fMRJGYxnuww8hvuY5aSxPsMDTOzjl5MyMD11xU0bazrV8TmZiosau4slcwOt81iNtEKI52iPuh+cFCOlkDbN5VkjprKR6RKWxWncWT862athaMBm9x9N8ZiXt5TfOCNWThgreJtXLv3+ETiBL/5qYyQZ1sIeFVMb2n1d5jZ5yU1GoEX6sIPop11Fn68Ahf+UNIJ3gfcw6izwCEb6KSvgtKRKMJQ80QGWW+ReVNbZRCDCUdVOxeeDK0CWwTtwDCzjvKlEaqd0pV5KW5JlHnuyWnLYpAjImtU5NyCvXgOLhHsJOZPl9IR2+0GL8y1Kdc5wu196T5DvD5o4NyC9rgQXhMXCLW3/GjnkHRaG7uacTs5ee2zysIzn1DH++rXgmTDRU1q9lLIDKZVxcYpEBxkPLHRZwwcg3VOdZ1UK6XUzOAz6wJsU5w3hVLrM6KzLZGH9d/KZg6Uu06RFRjyrUxr4sKRONdymZaBTwnyelXEI3fn/gzlU/gkwAHe3LMZI4jx1AAAAAElFTkSuQmCC) no-repeat ",[0,0]," ",[0,5],"; background-size: ",[0,32],"; padding-left: ",[0,30],"; color: #C9141D; }\n.",[1],"lipin { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; border: ",[0,1]," dotted #ddd; background: #f9f9f9; padding: ",[0,20]," ",[0,20]," ",[0,5]," ",[0,20],"; margin: ",[0,20]," 0; border-radius: ",[0,10],"; }\n.",[1],"lipin wx-image { width: ",[0,100],"; height: ",[0,100],"; margin-right: ",[0,20],"; border-radius: ",[0,10],"; }\n.",[1],"lpbiaoti .",[1],"lptitle { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; overflow: hidden; color: #797979; }\n.",[1],"lpbiaoti .",[1],"lpjiage { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAqCAYAAAAqAaJlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjlFM0U1QzlBOEM4MURCMTE4NzM0REI1OEZEREU0QkE3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIxQkUyNEE2NzI2RTExRTlBMjY0RjRDNDUxREJCMzQxIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIxQkUyNEE1NzI2RTExRTlBMjY0RjRDNDUxREJCMzQxIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIElsbHVzdHJhdG9yIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NTg2ODJBNDcyNEUxMUU5QkM4N0NFREQ1REZFNjQzNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NTg2ODJBNTcyNEUxMUU5QkM4N0NFREQ1REZFNjQzNSIvPiA8ZGM6dGl0bGU+IDxyZGY6QWx0PiA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPm9tYy1sb2dv5pa55qGI5LiAPC9yZGY6bGk+IDwvcmRmOkFsdD4gPC9kYzp0aXRsZT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7sK/1BAAADiklEQVR42uyZXUhUQRTHd621bdmwwh4kqAj7MqJIqy3o4yEy6KkIyqKwfInMQiIL8lHBgiLogwhKKdDtpZ7CfaykEitKtzKyoHzZh6SUxGxtd/sfOAvjcO/ujDs3dmEHftzxzt47557zn48zuhOJhCtXSoErh0re2LyxKNOdfPnrojnJqhtoj+TykZ//3bOrQA8I5IIMLoIK8By0gwXZamwZ2CFIoQp8BE3Ar/syt7woCDpLV2aDRrAd1IEuK83hfaWo3rOQQYSfbwNxpzRLg/I4GACnwWrwBNwBxRYdfsZlI9gDBoWmEnAbvFDVs66xO0EvuC4ZRiE+AvpBNf89yUPgIapL2JujQvN6VT0XaGivkykT7g9L4acPaAWPwQoLL0dBM6qLORJxHT2nM7aYvdjLXk2Wv+AGe2orOAqGhPYt4C302gRmWhj9HdRw+LuFJvrtefAJHFI1tpD1OMD6FBePEOkUndWCIZAArezJNmHyL+SOwzC40mYAvcRlEzhgoeeYymwQ4NFbKv32A30AOgilWbXIqzctZHAf1OP5iM1zXnbQOXCL+0rr2W2SoRTeWvZmSGGJfIrLGh5Iv4WmfTyI7J4bZz0vBA1T2RtcIsHjJcOaa3oUl2Z4K8iar1Tdi+DZHzqzgU+oT+gaKnX8BZerwq2Y6b2BR6iPGV5+R53cyExk++Z7huE+ipw01ivU/xg2fMRJGYxnuww8hvuY5aSxPsMDTOzjl5MyMD11xU0bazrV8TmZiosau4slcwOt81iNtEKI52iPuh+cFCOlkDbN5VkjprKR6RKWxWncWT862athaMBm9x9N8ZiXt5TfOCNWThgreJtXLv3+ETiBL/5qYyQZ1sIeFVMb2n1d5jZ5yU1GoEX6sIPop11Fn68Ahf+UNIJ3gfcw6izwCEb6KSvgtKRKMJQ80QGWW+ReVNbZRCDCUdVOxeeDK0CWwTtwDCzjvKlEaqd0pV5KW5JlHnuyWnLYpAjImtU5NyCvXgOLhHsJOZPl9IR2+0GL8y1Kdc5wu196T5DvD5o4NyC9rgQXhMXCLW3/GjnkHRaG7uacTs5ee2zysIzn1DH++rXgmTDRU1q9lLIDKZVxcYpEBxkPLHRZwwcg3VOdZ1UK6XUzOAz6wJsU5w3hVLrM6KzLZGH9d/KZg6Uu06RFRjyrUxr4sKRONdymZaBTwnyelXEI3fn/gzlU/gkwAHe3LMZI4jx1AAAAAElFTkSuQmCC) no-repeat ",[0,0]," ",[0,12],"; background-size: ",[0,30],"; padding-left: ",[0,30],"; color: #C9141D; margin-top: ",[0,10],"; font-size: ",[0,28],"; }\n.",[1],"mansongcont { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; color: #797979; }\n.",[1],"arrow { position: absolute; right: 4%; color: #999; padding-top: ",[0,10],"; }\n.",[1],"taozhuang { padding-bottom: ",[0,20],"; }\n.",[1],"floor-item { padding: ",[0,15]," ",[0,15]," 0 ",[0,15],"; border-radius: ",[0,15],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; margin-bottom: ",[0,20],"; }\n.",[1],"floor-item wx-image { width: ",[0,100],"; border-radius: ",[0,6],"; height: ",[0,100],"; margin-right: ",[0,20],"; }\n.",[1],"tzcont { color: #797979; }\n.",[1],"floor-item .",[1],"titlex { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; overflow: hidden; font-size: ",[0,30],"; padding: 0; margin: 0; color: #797979; }\n.",[1],"floor-item .",[1],"price { color: #C9141D; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAqCAYAAAAqAaJlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjlFM0U1QzlBOEM4MURCMTE4NzM0REI1OEZEREU0QkE3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIxQkUyNEE2NzI2RTExRTlBMjY0RjRDNDUxREJCMzQxIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIxQkUyNEE1NzI2RTExRTlBMjY0RjRDNDUxREJCMzQxIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIElsbHVzdHJhdG9yIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NTg2ODJBNDcyNEUxMUU5QkM4N0NFREQ1REZFNjQzNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NTg2ODJBNTcyNEUxMUU5QkM4N0NFREQ1REZFNjQzNSIvPiA8ZGM6dGl0bGU+IDxyZGY6QWx0PiA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPm9tYy1sb2dv5pa55qGI5LiAPC9yZGY6bGk+IDwvcmRmOkFsdD4gPC9kYzp0aXRsZT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7sK/1BAAADiklEQVR42uyZXUhUQRTHd621bdmwwh4kqAj7MqJIqy3o4yEy6KkIyqKwfInMQiIL8lHBgiLogwhKKdDtpZ7CfaykEitKtzKyoHzZh6SUxGxtd/sfOAvjcO/ujDs3dmEHftzxzt47557zn48zuhOJhCtXSoErh0re2LyxKNOdfPnrojnJqhtoj+TykZ//3bOrQA8I5IIMLoIK8By0gwXZamwZ2CFIoQp8BE3Ar/syt7woCDpLV2aDRrAd1IEuK83hfaWo3rOQQYSfbwNxpzRLg/I4GACnwWrwBNwBxRYdfsZlI9gDBoWmEnAbvFDVs66xO0EvuC4ZRiE+AvpBNf89yUPgIapL2JujQvN6VT0XaGivkykT7g9L4acPaAWPwQoLL0dBM6qLORJxHT2nM7aYvdjLXk2Wv+AGe2orOAqGhPYt4C302gRmWhj9HdRw+LuFJvrtefAJHFI1tpD1OMD6FBePEOkUndWCIZAArezJNmHyL+SOwzC40mYAvcRlEzhgoeeYymwQ4NFbKv32A30AOgilWbXIqzctZHAf1OP5iM1zXnbQOXCL+0rr2W2SoRTeWvZmSGGJfIrLGh5Iv4WmfTyI7J4bZz0vBA1T2RtcIsHjJcOaa3oUl2Z4K8iar1Tdi+DZHzqzgU+oT+gaKnX8BZerwq2Y6b2BR6iPGV5+R53cyExk++Z7huE+ipw01ivU/xg2fMRJGYxnuww8hvuY5aSxPsMDTOzjl5MyMD11xU0bazrV8TmZiosau4slcwOt81iNtEKI52iPuh+cFCOlkDbN5VkjprKR6RKWxWncWT862athaMBm9x9N8ZiXt5TfOCNWThgreJtXLv3+ETiBL/5qYyQZ1sIeFVMb2n1d5jZ5yU1GoEX6sIPop11Fn68Ahf+UNIJ3gfcw6izwCEb6KSvgtKRKMJQ80QGWW+ReVNbZRCDCUdVOxeeDK0CWwTtwDCzjvKlEaqd0pV5KW5JlHnuyWnLYpAjImtU5NyCvXgOLhHsJOZPl9IR2+0GL8y1Kdc5wu196T5DvD5o4NyC9rgQXhMXCLW3/GjnkHRaG7uacTs5ee2zysIzn1DH++rXgmTDRU1q9lLIDKZVxcYpEBxkPLHRZwwcg3VOdZ1UK6XUzOAz6wJsU5w3hVLrM6KzLZGH9d/KZg6Uu06RFRjyrUxr4sKRONdymZaBTwnyelXEI3fn/gzlU/gkwAHe3LMZI4jx1AAAAAElFTkSuQmCC) no-repeat ",[0,0]," ",[0,4],"; font-size: ",[0,30],"; background-size: ",[0,40],"; padding-left: ",[0,40],"; line-height: 1; }\n.",[1],"yuanjia { color: #797979; text-decoration: line-through; margin-left: ",[0,20],"; }\n.",[1],"floor-item .",[1],"price_line { color: #797979; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAqCAYAAAFdBpLzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABNBJREFUeNpi/P//PwM2wARjVFVVgfBfFAmgwGt0hWBGW1ubKJSfAZNgBNkB1CENZLsD8Twg/g9UyMiIy3KAAMIqge6ib2BBIKMCSREXkC8EUqmMrBVo2TuYK2AGMwJxC1aLAAIIp7OwARZkDtT4w0BsC7UCBEBirUA31MDCrh3qKJACO6hCb5gYSCGyf3WBGiai2ToNyUYhrG4GShgCqfNADIq6n0BTuWByAAFEkgeZGEgALOgCoLhCCgVeoDO+YDgDqGg7kPKAimsB8XUgngvESdBQgic7kA5fqCAIB0FNToYpRHEzUPAPkmtaKfYgLsWMeJMx1N1XgFgHiE8AsSW6B1EiBaiBEeox/EFHDAAIIJIUUxTbeGIfBnSBmBsaBqDoIc3FQANBlj4HYhEgng8KQCTpQCBeB2WfAhpujtdgoGHFQKoHyt0B1OAJdTHI8FfQaL0LxCpoUf0AiOWAOBqoZxlKUAANaAJStcjJEQm8QUpD3tCYZYQGBYgtj+HiyspKmsQecuJcCqSi0F2MJfIyoUUPI9GRBzTkDJAyhnIVgZoeIBkMCrtIpMxZgy+M8aWKDiBVDuWCcokYEH8nK1VQMx0DBBBNch4TLVID02ApH04DsSlS8U2xS0G1iQk0p7WQXEQCXZgFpKZCDRCDZmEYeAhNoyBgCXTtCbyGAg0DueYqlPsBiAWg7ENAbI+kFNSIegH1LSgdi8FKf+RWEBsQv0cyUBuoSBCaexZAmxb/oY0uEAA12ZhBWR2IOYH4M7aI+gmls4GGTUMLjUQgToe6fAcQHwBiR2hELQdSy4EOYsYVUR1YDISBX6CmG66qFKjvLy5DPxKZCr7gLQppUcaiV/5ZQG9MJ5D4/0OLxGhiEz+x3v9ISt5fBHQZLx71sAL7G5bMgjX2TaHp7hNQwRY0PaDc8w/qbVBCb0AyLBIadH/w5ajVQCoEyrUBYhBfEpYlYQU0vhyFNe8DDeaCJnRWqFANWgOStLyPZng8kFqIVkpdRa4ISS76gBoWogldA+Iz0BxVQ9fWIUCA0azJOWTqPloBFkoNwFLs4OrQ/MeRzgZVyG6HFiCwQkSO7mkWGKIC0BzmAsS50BEAbADUj1gMxBZo4s+h+hcAQ/cf1R0LdCCob90LLWcYcPRLSqFlEjaD2aDyoLEWHrQaawVIHOjwR2Q5Fug4UG+rEYjT0NI3qNyfBcT1QPwWiBOAuAvaO0NuOXRDC83vOKwA1T+TcIR6OdDhiwm12iyg0aaCpYAtBhqwg0AGAzXEZgCxJpr4SiAuhDoEI4MBzeEAmQ8N9VlA8WJiSgMHJIeCorwFqPEDCcn5EFIyUYa2fUEtyHAgloaObGErFX5AY6GVlNKAH7mRQqJD0QGooz6ZjMYR/dqEtALY0uw0aH+dAVvbk4xKAdRpWIrUbY+mZqWAnAx+UyFAkM37TO22AbLYNyo4lguJ/Y8Sg7CVBheAOBTa/l4KHep5CsQFwChbQ6S5oOKvH0v5+QFPciJYdOHrcoMcmw3tr/OihTZodK0PaOBvaJrlgVpSBO3UYtRMQPyI6pUCHp+DhvWmALECmmPQ+7WPoI5bgaXKpV11i8fhOtBayhqaDhdAGyXPB01DhsyiCza5gDVJkFJ0sTDQHnjia3wP2z4YAG5dFUTvMULuAAAAAElFTkSuQmCC) no-repeat ",[0,0]," ",[0,4],"; font-size: ",[0,30],"; background-size: ",[0,40],"; padding-left: ",[0,40],"; line-height: 1; }\n.",[1],"youhuixinxi { background: #f9f9f9; border-radius: ",[0,20],"; padding: ",[0,20],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; color: #797979; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"jiarugouwuche { width: 94%; height: ",[0,80],"; border-radius: ",[0,40],"; color: #fff; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; background-color: #f47952; font-size: ",[0,28],"; margin: ",[0,20]," 3%; }\n.",[1],"guanbi { position: absolute; z-index: 10; right: ",[0,30],"; top: ",[0,30],"; width: ",[0,50],"; height: ",[0,50],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; border: ",[0,1]," solid #f3f3f3; border-radius: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; font-size: ",[0,30],"; -webkit-box-shadow: 0 0 ",[0,10]," #f1f1f1; box-shadow: 0 0 ",[0,10]," #f1f1f1; color: #aaa; font-size: ",[0,28],"; background: #fff; }\n.",[1],"yangshi { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; padding: ",[0,10]," 0; width: 100%; }\n.",[1],"fahuodi { width: 94%; padding: ",[0,0]," 3%; background-color: #fff; }\n.",[1],"kuaidi { padding-right: ",[0,20],"; color: #333; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"kuaidi \x3e wx-view { color: #666; font-size: ",[0,26],"; margin: ",[0,10]," ",[0,10]," ",[0,10]," 0; }\n.",[1],"kuaidi \x3e wx-view \x3e wx-text { margin-right: ",[0,8],"; font-size: ",[0,26],"; }\n.",[1],"yangshi .",[1],"xuanxiang { border: ",[0,1]," solid #ddd; color: #333; margin-right: ",[0,10],"; font-size: ",[0,26],"; border-radius: ",[0,50],"; padding: ",[0,3]," ",[0,25],"; margin: ",[0,10]," ",[0,10]," ",[0,10]," 0; }\n.",[1],"yangshi .",[1],"on { border: solid ",[0,1]," #c9141d; color: #c9141d; }\n.",[1],"comments { width: 92%; padding: ",[0,20]," 4%; background-color: #fff; margin-top: ",[0,10],"; }\n.",[1],"comments .",[1],"row { width: 100%; height: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; margin: 0 0 ",[0,30]," 0; }\n.",[1],"comments .",[1],"row .",[1],"text { font-size: ",[0,30],"; }\n.",[1],"comments .",[1],"row .",[1],"pj_red { color: #c9141d; }\n.",[1],"comments .",[1],"row .",[1],"arrow { font-size: ",[0,28],"; position: absolute; right: 4%; color: #999; }\n.",[1],"comments .",[1],"row .",[1],"arrow .",[1],"show { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"comments .",[1],"row .",[1],"arrow .",[1],"show .",[1],"icon { color: #ccc; }\n.",[1],"comments .",[1],"comment { width: 100%; }\n.",[1],"comments .",[1],"comment .",[1],"user-info { width: 100%; height: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"comments .",[1],"comment .",[1],"user-info .",[1],"face { width: ",[0,40],"; height: ",[0,40],"; margin-right: ",[0,8],"; }\n.",[1],"comments .",[1],"comment .",[1],"user-info .",[1],"face wx-image { width: ",[0,40],"; height: ",[0,40],"; border-radius: 100%; }\n.",[1],"comments .",[1],"comment .",[1],"user-info .",[1],"username { font-size: ",[0,24],"; color: #999; }\n.",[1],"comments .",[1],"comment .",[1],"content { margin-top: ",[0,10],"; font-size: ",[0,26],"; }\n.",[1],"description .",[1],"title { width: 100%; height: ",[0,80],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,32],"; color: #333; background: #fff; margin-top: ",[0,10],"; }\n.",[1],"footer { position: fixed; bottom: ",[0,0],"; width: 100%; height: ",[0,100],"; border-top: solid ",[0,1]," #eee; background-color: #fff; z-index: 10; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"icons { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"icons .",[1],"box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"icons .",[1],"box .",[1],"icon { font-size: ",[0,45],"; width: ",[0,45],"; height: ",[0,45],"; padding: ",[0,5]," 0 0 0; line-height: ",[0,50],"; }\n.",[1],"icons .",[1],"box .",[1],"text { font-size: ",[0,20],"; line-height: ",[0,24],"; }\n.",[1],"btn { -webkit-box-flex: 2; -webkit-flex: 2; -ms-flex: 2; flex: 2; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; margin: ",[0,5]," ",[0,10],"; }\n.",[1],"joinCart, .",[1],"buy, .",[1],"shouqing, .",[1],"goumai { line-height: ",[0,80],"; height: ",[0,80],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; color: #fff; }\n.",[1],"joinCart { background: #f47952; border-radius: ",[0,40]," 0 0  ",[0,40],"; }\n.",[1],"buy { background: #c9141d; border-radius: 0 ",[0,40]," ",[0,40],"  ",[0,0],"; }\n.",[1],"shouqing { background: #999; border-radius: ",[0,40],"; }\n.",[1],"goumai { background: #c9141d; border-radius: ",[0,40],"; }\n.",[1],"popup { position: fixed; top: 0; width: 100%; height: 100%; z-index: 20; display: none; }\n.",[1],"popup .",[1],"mask { position: fixed; top: 0; width: 100%; height: 100%; z-index: 21; background-color: rgba(0, 0, 0, 0.6); }\n.",[1],"popup .",[1],"layer { position: fixed; z-index: 22; bottom: -70%; width: 92%; padding: 0 4%; height: 70%; border-radius: ",[0,20]," ",[0,20]," 0 0; background-color: #fff; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-align-content: space-between; -ms-flex-line-pack: justify; align-content: space-between; }\n.",[1],"popup .",[1],"layer .",[1],"content { width: 100%; padding: ",[0,20]," 0; }\n.",[1],"popup .",[1],"layer .",[1],"btn { width: 100%; height: ",[0,100],"; }\n.",[1],"popup .",[1],"layer .",[1],"btn .",[1],"button { width: 100%; height: ",[0,80],"; border-radius: ",[0,40],"; color: #fff; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; background-color: #f47952; font-size: ",[0,28],"; }\n.",[1],"popup.",[1],"show { display: block; }\n.",[1],"popup.",[1],"show .",[1],"mask { -webkit-animation: showPopup 0.2s linear both; animation: showPopup 0.2s linear both; }\n.",[1],"popup.",[1],"show .",[1],"layer { -webkit-animation: showLayer 0.2s linear both; animation: showLayer 0.2s linear both; }\n.",[1],"popup.",[1],"hide { display: block; }\n.",[1],"popup.",[1],"hide .",[1],"mask { -webkit-animation: hidePopup 0.2s linear both; animation: hidePopup 0.2s linear both; }\n.",[1],"popup.",[1],"hide .",[1],"layer { -webkit-animation: hideLayer 0.2s linear both; animation: hideLayer 0.2s linear both; }\n.",[1],"popup.",[1],"none { display: none; }\n.",[1],"popup.",[1],"service .",[1],"row { margin: ",[0,30]," 0; }\n.",[1],"popup.",[1],"service .",[1],"row .",[1],"title { font-size: ",[0,30],"; margin: ",[0,10]," 0; }\n.",[1],"popup.",[1],"service .",[1],"row .",[1],"description { font-size: ",[0,28],"; color: #999; }\n.",[1],"popup.",[1],"service .",[1],"row .",[1],"description wx-image { width: ",[0,50],"; height: ",[0,50],"; }\n.",[1],"length { background: #FFFFFF; margin-top: ",[0,10],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: ",[0,20]," ",[0,25],"; }\n.",[1],"length .",[1],"text { font-size: ",[0,30],"; }\n.",[1],"length .",[1],"number { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"length .",[1],"number .",[1],"input { width: ",[0,80],"; height: ",[0,60],"; margin: 0 ",[0,5],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; text-align: center; }\n.",[1],"length .",[1],"number .",[1],"input wx-input { width: ",[0,80],"; height: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; text-align: center; font-size: ",[0,36],"; }\n.",[1],"length .",[1],"number .",[1],"sub, .",[1],"length .",[1],"number .",[1],"add { width: ",[0,40],"; height: ",[0,40],"; border: ",[0,1]," solid #f3f3f3; border-radius: ",[0,40],"; }\n.",[1],"length .",[1],"number .",[1],"sub .",[1],"icon, .",[1],"length .",[1],"number .",[1],"add .",[1],"icon { font-size: ",[0,30],"; width: ",[0,40],"; height: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"share { display: none; }\n.",[1],"share.",[1],"show { display: block; }\n.",[1],"share.",[1],"show .",[1],"mask { -webkit-animation: showPopup 0.15s linear both; animation: showPopup 0.15s linear both; }\n.",[1],"share.",[1],"show .",[1],"layer { -webkit-animation: showLayer 0.15s linear both; animation: showLayer 0.15s linear both; }\n.",[1],"share.",[1],"hide { display: block; }\n.",[1],"share.",[1],"hide .",[1],"mask { -webkit-animation: hidePopup 0.15s linear both; animation: hidePopup 0.15s linear both; }\n.",[1],"share.",[1],"hide .",[1],"layer { -webkit-animation: hideLayer 0.15s linear both; animation: hideLayer 0.15s linear both; }\n.",[1],"share.",[1],"none { display: none; }\n.",[1],"share .",[1],"mask { background-color: rgba(0, 0, 0, 0.5); position: fixed; width: 100%; height: 100%; top: 0; z-index: 11; }\n.",[1],"share .",[1],"layer { width: 92%; position: fixed; z-index: 12; padding: ",[0,20]," 4% 0 4%; top: 100%; background-color: white; border-radius: ",[0,20]," ",[0,20]," 0 0; padding-bottom: ",[0,20],"; }\n.",[1],"share .",[1],"layer .",[1],"list { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; padding: ",[0,10]," 0 ",[0,30]," 0; }\n.",[1],"share .",[1],"layer .",[1],"list .",[1],"box { width: 25%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"share .",[1],"layer .",[1],"list .",[1],"box wx-image { width: 13.8vw; height: 13.8vw; }\n.",[1],"share .",[1],"layer .",[1],"list .",[1],"box .",[1],"title { margin-top: ",[0,10],"; width: 100%; font-size: ",[0,26],"; }\n.",[1],"share .",[1],"layer .",[1],"list .",[1],"box .",[1],"title wx-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"share .",[1],"layer .",[1],"btn { width: 100%; height: ",[0,100],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,28],"; border-top: solid ",[0,1]," #f5f5f5; }\n.",[1],"share .",[1],"layer .",[1],"h1 { width: 100%; height: ",[0,120],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,34],"; }\n.",[1],"share .",[1],"layer .",[1],"h2 { width: 100%; height: ",[0,120],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,34],"; }\n.",[1],"product-list { padding: ",[0,0]," 1% ",[0,0]," 1%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"productx { width: 47%; margin: ",[0,15]," 1.5% ",[0,15]," 1.5%; }\n",],undefined,{path:"./pages/product/product-show.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/product/product-show.wxml') } }));
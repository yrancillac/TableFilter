TF.prototype.SetStatusBar=function(){if(!this.hasGrid&&!this.isFirstLoad)return;var e=this.fObj;this.statusBarTgtId=e.status_bar_target_id!=undefined?e.status_bar_target_id:null,this.statusBarDiv=null,this.statusBarSpan=null,this.statusBarSpanText=null,this.statusBarText=e.status_bar_text!=undefined?e.status_bar_text:"",this.statusBarCssClass=e.status_bar_css_class!=undefined?e.status_bar_css_class:"status",this.statusBarCloseDelay=250;var t=tf_CreateElm("div",["id",this.prfxStatus+this.id]);t.className=this.statusBarCssClass;var n=tf_CreateElm("span",["id",this.prfxStatusSpan+this.id]),r=tf_CreateElm("span",["id",this.prfxStatusTxt+this.id]);r.appendChild(tf_CreateText(this.statusBarText)),this.onBeforeShowMsg=tf_IsFn(e.on_before_show_msg)?e.on_before_show_msg:null,this.onAfterShowMsg=tf_IsFn(e.on_after_show_msg)?e.on_after_show_msg:null,this.statusBarTgtId==null&&this.SetTopDiv();var i=this.statusBarTgtId==null?this.lDiv:tf_Id(this.statusBarTgtId);this.statusBarDiv&&tf_isIE&&(this.statusBarDiv.outerHTML=""),this.statusBarTgtId==null?(t.appendChild(r),t.appendChild(n),i.appendChild(t)):(i.appendChild(r),i.appendChild(n)),this.statusBarDiv=tf_Id(this.prfxStatus+this.id),this.statusBarSpan=tf_Id(this.prfxStatusSpan+this.id),this.statusBarSpanText=tf_Id(this.prfxStatusTxt+this.id)},TF.prototype.RemoveStatusBar=function(){if(!this.hasGrid)return;this.statusBarDiv&&(this.statusBarDiv.innerHTML="",this.statusBarDiv.parentNode.removeChild(this.statusBarDiv),this.statusBarSpan=null,this.statusBarSpanText=null,this.statusBarDiv=null)},TF.prototype.StatusMsg=function(e){e==undefined&&this.StatusMsg(""),this.status&&this.WinStatusMsg(e),this.statusBar&&this.StatusBarMsg(e)},TF.prototype.WinStatusMsg=function(e){if(!this.status)return;this.onBeforeShowMsg&&this.onBeforeShowMsg.call(null,this,e),window.status=e,this.onAfterShowMsg&&this.onAfterShowMsg.call(null,this,e)},TF.prototype.StatusBarMsg=function(e){function n(){t.statusBarSpan.innerHTML=e,t.onAfterShowMsg&&t.onAfterShowMsg.call(null,t,e)}if(!this.statusBar||!this.statusBarSpan)return;this.onBeforeShowMsg&&this.onBeforeShowMsg.call(null,this,e);var t=this,r=e==""?this.statusBarCloseDelay:1;window.setTimeout(n,r)};
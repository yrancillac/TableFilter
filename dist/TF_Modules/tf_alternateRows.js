TF.prototype.SetRowBg=function(e,t){if(!this.alternateBgs||isNaN(e))return;var n=this.tbl.rows,r=t==undefined?e:t;this.RemoveRowBg(e),tf_AddClass(n[e],r%2?this.rowBgEvenCssClass:this.rowBgOddCssClass)},TF.prototype.RemoveRowBg=function(e){if(isNaN(e))return;var t=this.tbl.rows;tf_RemoveClass(t[e],this.rowBgOddCssClass),tf_RemoveClass(t[e],this.rowBgEvenCssClass)},TF.prototype.SetAlternateRows=function(){if(!this.hasGrid&&!this.isFirstLoad)return;var e=this.tbl.rows,t=this.validRowsIndex==null,n=t?this.refRow:0,r=t?this.nbFilterableRows+n:this.validRowsIndex.length,i=0;for(var s=n;s<r;s++){var o=t?s:this.validRowsIndex[s];this.SetRowBg(o,i),i++}},TF.prototype.RemoveAlternateRows=function(){if(!this.hasGrid)return;var e=this.tbl.rows;for(var t=this.refRow;t<this.nbRows;t++)this.RemoveRowBg(t);this.isStartBgAlternate=!0};
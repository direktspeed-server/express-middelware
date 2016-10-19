/*
	DIREKTSPEED Server - useExpress Middelware
	COPYRIGHT Frank Lemanschik
*/
 module.exports = function(eapp){
        
    this.attachExpress = function attachExpress($){
	    $.eapp = function(){
            eapp($.request, $.response, $.return)
        }
        $.return()
    }

    this.useExpress = function useExpress($) {
       eapp($.request, $.response, $.return)
    }

    return this

}
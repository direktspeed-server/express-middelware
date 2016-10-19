/*
	DIREKTSPEED Server - useExpress Middelware
	COPYRIGHT Frank Lemanschik
*/
 module.exports = function(eapp){
    this.eapp = eapp

    this.attachExpress = function attachExpress($){
	    
        $.eapp = function(){
            this.eapp($.request, $.response, $.return)
        }.bind(this)
        
        $.return()
    }

    this.useExpress = function useExpress($) {
       this.eapp($.request, $.response, $.return)
    }

    this.attach = function attachExpress($){
        $.eapp = function(){
            this.eapp($.request, $.response, $.return)
        }.bind(this)
        $.return()
    }

    this.use = function useExpress($) {
       this.eapp($.request, $.response, $.return)
    }

    return this

}
var _aaq = window._aaq || (window._aaq = []);

var host_mapping = {
	"e2e.ti.com": "//www.ti.com/assets/js/evergage/evergage.min.js",
	"e2e-uat.ti.com": "//www.ti.com/assets/js/evergage/evergage.min.test.js",
	"e2echina.ti.com": "//www.ti.com/assets/js/evergage/evergage.min.js",
	"e2echina-uat.ti.com": "//www.ti.com/assets/js/evergage/evergage.min.test.js",
	"store.ti.com":"//www.ti.com/assets/js/evergage/evergage.min.js",
	"uat.estore-tisep.harte-hanks.com":"//www.ti.com/assets/js/evergage/evergage.min.test.js",
	"www.ti.com":"//www.ti.com/assets/js/evergage/evergage.min.js",
	"www.ti.com.cn":"//www.ti.com.cn/assets/js/evergage/evergage.min.js",
	"www.tij.co.jp":"//www.tij.co.jp/assets/js/evergage/evergage.min.js",
	"www-cn-int.itg.ti.com":"//www-cn-int.itg.ti.com/assets/js/evergage/evergage.min.test.js",
	"www-cn-uat.itg.ti.com":"//www-cn-uat.itg.ti.com/assets/js/evergage/evergage.min.test.js",
	"www-cn-sat.itg.ti.com":"//www-cn-sat.itg.ti.com/assets/js/evergage/evergage.min.test.js",
	"www-int.itg.ti.com":"//www-int.itg.ti.com/assets/js/evergage/evergage.min.test.js",
	"www-uat.itg.ti.com":"//www-uat.itg.ti.com/assets/js/evergage/evergage.min.test.js",
	"www-sat.itg.ti.com":"//www-sat.itg.ti.com/assets/js/evergage/evergage.min.test.js",
	"www-jp-int.itg.ti.com":"//www-jp-int.itg.ti.com/assets/js/evergage/evergage.min.test.js",
	"www-jp-uat.itg.ti.com":"//www-jp-uat.itg.ti.com/assets/js/evergage/evergage.min.test.js",
	"www-jp-sat.itg.ti.com":"//www-jp-sat.itg.ti.com/assets/js/evergage/evergage.min.test.js",
	"training.ti.com":"//www.ti.com/assets/js/evergage/evergage.min.js",
	"training-dev.ti.com":"//www.ti.com/assets/js/evergage/evergage.min.test.js",
	"www-qa.itg.ti.com":"//www-qa.itg.ti.com/assets/js/evergage/evergage.min.test.js",
	"www-cn-qa.itg.ti.com":"//www-cn-qa.itg.ti.com/assets/js/evergage/evergage.min.test.js",
	"www-jp-qa.itg.ti.com":"//www-jp-qa.itg.ti.com/assets/js/evergage/evergage.min.test.js",

	"www-int2.itg.ti.com": "//www-int2.itg.ti.com/assets/js/evergage/evergage.min.test.js",
	"www-jp-int2.itg.ti.com": "//www-jp-int2.itg.ti.com/assets/js/evergage/evergage.min.test.js",
	"www-cn-int2.itg.ti.com": "//www-cn-int2.itg.ti.com/assets/js/evergage/evergage.min.test.js",

	"www-uat2.itg.ti.com": "//www-uat2.itg.ti.com/assets/js/evergage/evergage.min.test.js",
	"www-jp-uat2.itg.ti.com": "//www-jp-uat2.itg.ti.com/assets/js/evergage/evergage.min.test.js",
	"www-cn-uat2.itg.ti.com": "//www-cn-uat2.itg.ti.com/assets/js/evergage/evergage.min.test.js",

	"www-sat2.ext.ti.com": "//www-sat2.ext.ti.com/assets/js/evergage/evergage.min.test.js",
	"www-jp-sat2.ext.ti.com": "//www-jp-sat2.ext.ti.com/assets/js/evergage/evergage.min.test.js",
	"www-cn-sat2.ext.ti.com": "//www-cn-sat2.ext.ti.com/assets/js/evergage/evergage.min.test.js",

	"www-prod2.ext.ti.com": "//www-prod2.ext.ti.com/assets/js/evergage/evergage.min.js",
	"www-jp-prod2.ext.ti.com": "//www-jp-prod2.ext.ti.com/assets/js/evergage/evergage.min.js",
	"www-cn-prod2.ext.ti.com": "//www-cn-prod2.ext.ti.com/assets/js/evergage/evergage.min.js"
};

function page_cookies(){
	var pairs = document.cookie.split(";");
	var c = {};
	for (var i=0; i<pairs.length; i++){
		var p = pairs[i].split(/=(.+)/);
		c[(p[0]+'').trim()] = decodeURIComponent(p[1]);
	}
	return c;
};

//Optimized function to insert script with evergage js. Removed duplicate condition checks.
//As we are using hostname to get evergage js we don't need to have multiple checks like the previous version of this js.

function evergage(calledAfterConsent) {

	var cks = page_cookies();

	if(cks){
		var cst,glc,opt;
		cst = glc = opt = false;
		
		if(!cks.chipset){
			cst = true;
		}
		if(!cks.ti_geo || (cks.ti_geo && (cks.ti_geo === "" || cks.ti_geo.toUpperCase().indexOf("EU") >= 0))){
			glc = true;
		}
		if(!cks.CONSENTMGR || (cks.CONSENTMGR && (cks.CONSENTMGR.toUpperCase().indexOf("C6:1") < 0))){
			opt = true;
		}
		if(cst && glc && opt || (cks.CONSENTMGR && (cks.CONSENTMGR.toUpperCase().indexOf("C6:0") >= 0))){
			evergageAbort = true;
			return;
		}
	}

	evergageAbort = false;

	var d = document,
	g = d.createElement('script'),
	s = d.getElementsByTagName('script')[0];
	g.type = 'text/javascript';
	var patt = /analog\/powermanagement\/power_portal/gi;
	var matt = "/product/ads5500, /product/CC1310, /product/CC3200, /product/CC2541, /product/MSP430G2553, /product/TMS320F28377D, /product/LP5907, /product/LM5175, /product/SN6501, /product/LDC1614, /product/BQ25504";	
	var productUrl = "/product/";
	if(!patt.test(location.pathname)) {
		if(location.pathname.indexOf(productUrl)>=0) {
			if((matt.toLowerCase()).indexOf(location.pathname.toLowerCase()) < 0) {
					g.defer = true;
					g.async = true;
			}
		} else {
			g.defer = true;
			g.async = true;			
		}	
	}
	else if (calledAfterConsent) {
			g.defer = true;
			g.async = true;
			var _aaq = window._aaq || [];
			_aaq.push(["personalizedSectionsHaveBeenHidden"]);
	}

	if (location.hostname.indexOf('myportal.ti.com') != -1 || location.hostname.indexOf('tiportal-url1.itg.ti.com') != -1) {
		var gotoParams = /goto=([^&]+)/.exec(location.href);
		if(gotoParams !== null) {
			var gotoUri = gotoParams[1];
			var newHostname = null;
			if (gotoUri !== null && gotoUri !== undefined) {
				gotoUri = decodeURIComponent(gotoUri);
				if (gotoUri.indexOf("://") > -1) {
					newHostname = gotoUri.split('/')[2];
				} else {
					newHostname = gotoUri.split('/')[0];
				}
				if(newHostname !== null) {
					newHostname = newHostname.split(':')[0];
				}
			}
			
			if (newHostname !== null && host_mapping[newHostname] !== (null || undefined)) //checking the new doamin in host_mapping object.
			{	
				g.src = host_mapping[newHostname.toLowerCase()];
			} 
		}
	} else if(host_mapping[location.hostname] !== (null || undefined)) {
		var hostMappingVal = location.hostname;
		g.src = host_mapping[hostMappingVal.toLowerCase()];
	}
	if(g.src !== null){
		s.parentNode.insertBefore(g, s);
	}
};

evergage(false);

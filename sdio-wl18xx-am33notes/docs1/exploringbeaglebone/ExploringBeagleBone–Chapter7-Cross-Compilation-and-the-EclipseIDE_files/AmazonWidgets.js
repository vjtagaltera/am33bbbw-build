var _amzn_source_utils = {

    defaultTag: 'defaultTag',
    defaultTitle: 'defaultTitle',
    widgetStrings: new Object(),
    populateCAWidgetStrings : function() {
        this.widgetStrings['CA'+'_'+'8001'+'_'+this.defaultTitle] = 'I Recommend';
    },
    populateFRWidgetStrings : function() {
        this.widgetStrings['FR'+'_'+'8001'+'_'+this.defaultTitle] = 'Tester le titre';

    },
    populateGBWidgetStrings : function() {
        this.widgetStrings['GB'+'_'+'8001'+'_'+this.defaultTitle] = 'I Recommend';

    },
    populateDEWidgetStrings : function() {
        this.widgetStrings['GB'+'_'+'8001'+'_'+this.defaultTitle] = 'Produkt testen';

    },
    populateCNWidgetStrings : function() {
        this.widgetStrings['CN'+'_'+'8001'+'_'+this.defaultTitle] = 'I Recommend';
    },
    populateUSWidgetStrings : function() {
        this.widgetStrings['US'+'_'+'8001'+'_'+this.defaultTitle] = 'I Recommend';
    },
    populateJPWidgetStrings : function() {
        this.widgetStrings['JP'+'_'+'8001'+'_'+this.defaultTitle] = '仮題';
    },

    getStringForCA: function(key) {
        switch (key) {
            case this.DefaultTag: return 'amawid-20';
            default: return 'Unknown string';
        }
    },

    getStringForCN: function(key) {
        switch (key) {
            case this.DefaultTag: return 'widgetsamazon-23';
            default: return 'Unknown string';
        }
    },

    getStringForDE: function(key) {
        switch (key) {
            case this.defaultTag: return 'amawid0f-21';
            default: return 'Unknown string';
        }
    },

    getStringForFR: function(key) {
        switch (key) {
            case this.defaultTag: return 'amawid0b-21';
            default: return 'Unknown string';
        }
    },

    getStringForGB: function(key) {
        switch (key) {
            case this.defaultTag: return 'amawid-21';
            default: return 'Unknown string';
        }
    },

    getStringForJP: function(key) {
        switch (key) {
            case this.defaultTag: return 'widgetsamazon-22';
            default: return 'Unknown string';
        }
    },

    getStringForUS: function(key) {
        switch (key) {
            case this.defaultTag: return 'widgetsamazon-20';
            default: return 'Unknown string';
        }
    },

    getString: function(key, marketPlace) {
        switch(marketPlace) {
            case 'CA' : return this.getStringForCA(key);
            case 'CN' : return this.getStringForCN(key);
            case 'DE' : return this.getStringForDE(key);
            case 'FR' : return this.getStringForFR(key);
            case 'JP' : return this.getStringForJP(key);
            case 'GB' : return this.getStringForGB(key);
            default : return this.getStringForUS(key);
        }
    },
    populateWidgetStrings: function( marketPlace) {
        switch(marketPlace) {
            case 'CA' : return this.populateCAWidgetStrings();
            case 'CN' : return this.populateCNWidgetStrings();
            case 'DE' : return this.populateDEWidgetStrings();
            case 'FR' : return this.populateFRWidgetStrings();
            case 'JP' : return this.populateJPWidgetStrings();
            case 'GB' : return this.populateGBWidgetStrings();
            default   : return this.populateUSWidgetStrings();
        }
    },
    getWidgetString: function(templateId, key, marketPlace) {
            return this.widgetStrings[marketPlace+'_'+templateId+'_'+key];
    }
}
if (amzn_wdgt && (amzn_wdgt.widget == 'MyFavorites' || amzn_wdgt.widget == 'Search')) {

    var getNum = function(str) {
        return typeof str == 'string' ? parseInt(str) : str;
    }

    var getBoolean = function(b) {
        if (typeof b == 'undefined' || b == null) {
            b = true;
        }
        return /^true$/i.test(b);
    }

    var new_amzn_wdgt = {serviceVersion: "20070822"};
    new_amzn_wdgt.marketPlace = amzn_wdgt.marketPlace ? amzn_wdgt.marketPlace : "US";
    _amzn_source_utils.populateWidgetStrings(new_amzn_wdgt.marketPlace);
    new_amzn_wdgt.tag = amzn_wdgt.tag ? amzn_wdgt.tag : _amzn_source_utils.getString('defaultTag',new_amzn_wdgt.marketPlace);
    new_amzn_wdgt.show_image = getBoolean(amzn_wdgt.showImage);
    new_amzn_wdgt.show_price = getBoolean(amzn_wdgt.showPrice);
    new_amzn_wdgt.show_review = getBoolean(amzn_wdgt.showRating);

    new_amzn_wdgt.width = getNum(amzn_wdgt.width);
    if (new_amzn_wdgt.width < 150 || new_amzn_wdgt.width > 800) {
        new_amzn_wdgt.width = 160;
    }

    if(typeof amzn_wdgt.height != 'undefined') {
        new_amzn_wdgt.height = getNum(amzn_wdgt.height);
        if (new_amzn_wdgt.height < 150 || new_amzn_wdgt.height > 800) {
	            new_amzn_wdgt.height = 600;
	    	
        }else if(new_amzn_wdgt.height < 250 && amzn_wdgt.widget!='MyFavorites' ){	
		new_amzn_wdgt.height = 600;	
	}
    }

    new_amzn_wdgt.cols = getNum(amzn_wdgt.columns);
    if (!new_amzn_wdgt.cols) {
        new_amzn_wdgt.cols = 1;
    }

    new_amzn_wdgt.rows = getNum(amzn_wdgt.rows);
    if (!new_amzn_wdgt.rows) {
        new_amzn_wdgt.rows = 1;
    }

    amzn_wdgt.design = getNum(amzn_wdgt.design);
    if (!amzn_wdgt.design) {
        amzn_wdgt.design = 1;
    }

    if (!amzn_wdgt.colorTheme) {
        amzn_wdgt.colorTheme = 'default';
    }

    switch(amzn_wdgt.design) {
        default: amzn_wdgt.design = 6;
            switch (amzn_wdgt.colorTheme) {
                case 'Pistachio':
                    new_amzn_wdgt.outer_bkgd_color = "#c3cf98";
                    new_amzn_wdgt.head_text_color = "#334141";
                    new_amzn_wdgt.inner_bkgd_color = "#e3f1ad";
                    new_amzn_wdgt.text_color = "#355d38";
                    new_amzn_wdgt.curve_corners = true;
                    new_amzn_wdgt.price_color = "#000000";
                    break;
                case 'RedGrey':
                    new_amzn_wdgt.outer_bkgd_color = "#cb0021";
                    new_amzn_wdgt.head_text_color = "#effbcb";
                    new_amzn_wdgt.inner_bkgd_color = "#d0cbc4";
                    new_amzn_wdgt.text_color = "#000000";
                    new_amzn_wdgt.curve_corners = true;
                    new_amzn_wdgt.price_color = "#6c6964";
                    break;
                case 'Pink':
                    new_amzn_wdgt.outer_bkgd_color = "#e39fbb";
                    new_amzn_wdgt.head_text_color = "#500735";
                    new_amzn_wdgt.inner_bkgd_color = "#edcfc8";
                    new_amzn_wdgt.text_color = "#500735";
                    new_amzn_wdgt.curve_corners = true;
                    new_amzn_wdgt.price_color = "#000000";
                    break;
                case 'Pumpkin':
                    new_amzn_wdgt.outer_bkgd_color = "#e4a54a";
                    new_amzn_wdgt.head_text_color = "#000000";
                    new_amzn_wdgt.inner_bkgd_color = "#ede0c8";
                    new_amzn_wdgt.text_color = "#704b1b";
                    new_amzn_wdgt.curve_corners = true;
                    new_amzn_wdgt.price_color = "#000000";
                    break;
                default:
                    new_amzn_wdgt.outer_bkgd_color = "#4a6676";
                    new_amzn_wdgt.head_text_color = "#eae493";
                    new_amzn_wdgt.inner_bkgd_color = "#b3c1c8";
                    new_amzn_wdgt.text_color = "#31658b";
                    new_amzn_wdgt.curve_corners = true;
                    new_amzn_wdgt.price_color = "#3f3c39";
                    break;
            }
            break;

        case 2:
            amzn_wdgt.design = 7;
            switch (amzn_wdgt.colorTheme) {
                case 'Blue' :
                    new_amzn_wdgt.outer_bkgd_color = "#3C75A6";
                    new_amzn_wdgt.head_text_color = "#EFEADB";
                    new_amzn_wdgt.inner_bkgd_color = "#EFEADB";
                    new_amzn_wdgt.text_color = "#19566D";
                    new_amzn_wdgt.border_color = "#EFEADB";
                    new_amzn_wdgt.price_color = "#9D0017";
                    break;

                case 'Grey' :
                    new_amzn_wdgt.outer_bkgd_color = "#504E49";
                    new_amzn_wdgt.head_text_color = "#D4D1CA";
                    new_amzn_wdgt.inner_bkgd_color = "#62605C";
                    new_amzn_wdgt.text_color = "#D3D045";
                    new_amzn_wdgt.border_color = "#504E49";
                    new_amzn_wdgt.price_color = "#D4D1CA";
                    break;

                case 'Orange' :
                    new_amzn_wdgt.outer_bkgd_color = "#CF6623";
                    new_amzn_wdgt.head_text_color = "#F0EEAE";
                    new_amzn_wdgt.inner_bkgd_color = "#F0EEAE";
                    new_amzn_wdgt.text_color = "#6D4624";
                    new_amzn_wdgt.border_color = "#F0EEAE";
                    new_amzn_wdgt.price_color = "#000000";
                    break;

                case 'Pink' :
                    new_amzn_wdgt.outer_bkgd_color = "#FECECA";
                    new_amzn_wdgt.head_text_color = "#693939";
                    new_amzn_wdgt.inner_bkgd_color = "#FECECA";
                    new_amzn_wdgt.text_color = "#693939";
                    new_amzn_wdgt.border_color = "#FECECA";
                    new_amzn_wdgt.price_color = "#000000";
                    break;

                case 'White' :
                    new_amzn_wdgt.outer_bkgd_color = "#FFFFFF";
                    new_amzn_wdgt.head_text_color = "#666666";
                    new_amzn_wdgt.inner_bkgd_color = "#FFFFFF";
                    new_amzn_wdgt.text_color = "#184A9C";
                    new_amzn_wdgt.border_color = "#FFFFFF";
                    new_amzn_wdgt.price_color = "#9C0000";
                    break;
                default:
                    new_amzn_wdgt.outer_bkgd_color = "#DEDEDE";
                    new_amzn_wdgt.head_text_color = "#000000";
                    new_amzn_wdgt.inner_bkgd_color = "#FFFFFF";
                    new_amzn_wdgt.text_color = "#000000";
                    new_amzn_wdgt.border_color = "#636363";
                    new_amzn_wdgt.price_color = "#9C0000";
                    break;
                }
                break;
        case 3:
                amzn_wdgt.design = 4;
                switch (amzn_wdgt.colorTheme) {
                    case 'Cinnamon' :
                        new_amzn_wdgt.head_text_color = "#666666";
                        new_amzn_wdgt.text_color = "#CC6600";
                        new_amzn_wdgt.price_color = "#999999";
                        new_amzn_wdgt.theme_version = "0";
                        break;

                    default:
                        new_amzn_wdgt.head_text_color = "#666666";
                        new_amzn_wdgt.text_color = "#66A0B2";
                        new_amzn_wdgt.price_color = "#999999";
                        new_amzn_wdgt.theme_version = "1";
                        break;

                    case 'Spearmint' :
                        new_amzn_wdgt.head_text_color = "#595959";
                        new_amzn_wdgt.text_color = "#51621d";
                        new_amzn_wdgt.price_color = "#333333";
                        new_amzn_wdgt.theme_version = "2";
                        break;
                }
                break;
        case 4:
                amzn_wdgt.design = 5;
                switch (amzn_wdgt.colorTheme) {
                    default :
                        new_amzn_wdgt.head_text_color = "#cacd34";
                        new_amzn_wdgt.text_color = "#cacd34";
                        new_amzn_wdgt.price_color = "#cdcdcd";
                        new_amzn_wdgt.theme_version = "0";
                        break;
                    case 'Cobalt' :
                        new_amzn_wdgt.head_text_color = "#ffd200";
                        new_amzn_wdgt.text_color = "#ffd200";
                        new_amzn_wdgt.price_color = "#e8e8e8";
                        new_amzn_wdgt.theme_version = "1";
                        break;
                    case 'Ruby' :
                        new_amzn_wdgt.head_text_color = "#ffcccc";
                        new_amzn_wdgt.text_color = "#ffcccc";
                        new_amzn_wdgt.price_color = "#ffffff";
                        new_amzn_wdgt.theme_version = "2";
                        break;
                }
                break;
        case 5:
                amzn_wdgt.design = 1;
                switch (amzn_wdgt.colorTheme) {
                    default :
                        new_amzn_wdgt.head_text_color = "#666666";
                        new_amzn_wdgt.text_color = "#5179a1";
                        new_amzn_wdgt.price_color = "#666666";
                        new_amzn_wdgt.theme_version = "0";
                        break;

                    case 'BrushedNickel' :
                        new_amzn_wdgt.head_text_color = "#d5d5d5";
                        new_amzn_wdgt.text_color = "#5179a1";
                        new_amzn_wdgt.price_color = "#666666";
                        new_amzn_wdgt.theme_version = "1";
                        break;

                    case 'BrushedCopper' :
                        new_amzn_wdgt.head_text_color = "#ffffff";
                        new_amzn_wdgt.text_color = "#385857";
                        new_amzn_wdgt.price_color = "#666666";
                        new_amzn_wdgt.theme_version = "2";
                        break;
                }

                break;
    }
    new_amzn_wdgt.displayTemplate = amzn_wdgt.design;

    if (amzn_wdgt.outerBackgroundColor) {
        new_amzn_wdgt.outer_bkgd_color = amzn_wdgt.outerBackgroundColor;
    }

    if (amzn_wdgt.innerBackgroundColor) {
        new_amzn_wdgt.inner_bkgd_color = amzn_wdgt.innerBackgroundColor;
    }

    if (amzn_wdgt.headerTextColor) {
        new_amzn_wdgt.head_text_color = amzn_wdgt.headerTextColor;
    }

    if (amzn_wdgt.bodyTextColor) {
        new_amzn_wdgt.price_color = amzn_wdgt.bodyTextColor;
    }

    if (amzn_wdgt.linkedTextColor) {
        new_amzn_wdgt.text_color = amzn_wdgt.linkedTextColor;
    }

    if (amzn_wdgt.borderColor) {
        new_amzn_wdgt.border_color = amzn_wdgt.borderColor;
    }

    if (typeof amzn_wdgt.roundedCorners != 'undefined') {
        new_amzn_wdgt.curve_corners = amzn_wdgt.roundedCorners;
    }

    if (amzn_wdgt.widget == 'MyFavorites') {
        new_amzn_wdgt.templateId = '8001';
        new_amzn_wdgt.operations = "MyFavorites";
        new_amzn_wdgt.sort_order = getBoolean(amzn_wdgt.shuffleProducts);
        if(new_amzn_wdgt.sort_order){
            new_amzn_wdgt.sort_order = "Random";    
        }
        new_amzn_wdgt.title = typeof amzn_wdgt.title == 'undefined' ? _amzn_source_utils.getWidgetString('8001','defaultTitle',new_amzn_wdgt.marketPlace) : amzn_wdgt.title;
        if (amzn_wdgt.ASIN) {
            new_amzn_wdgt.items = new Array();
            amzn_wdgt.ASIN = amzn_wdgt.ASIN.split(/ *, */);
            function createItem(_asin, _comment) {
                var item = {};
                item.asin = _asin;
                item.comment = _comment;
                new_amzn_wdgt.items[new_amzn_wdgt.items.length] = item;
            }
            for (var i = 0; i < amzn_wdgt.ASIN.length; i++) {
                createItem(amzn_wdgt.ASIN[i], "");
            }
        }

        if (new_amzn_wdgt.cols * new_amzn_wdgt.rows - new_amzn_wdgt.items.length > new_amzn_wdgt.cols) {
            new_amzn_wdgt.rows = Math.ceil(new_amzn_wdgt.items.length/new_amzn_wdgt.cols);
        }
    } else if (amzn_wdgt.widget == 'Search') {
        new_amzn_wdgt.templateId = '8002';
        new_amzn_wdgt.operations = "Search";
        new_amzn_wdgt.use_default_search_term = false;
        if (amzn_wdgt.defaultSearchTerm) {
            new_amzn_wdgt.use_default_search_term = true;
            new_amzn_wdgt.default_search_term = amzn_wdgt.defaultSearchTerm;
        }
        if (amzn_wdgt.searchIndex) {
            new_amzn_wdgt.category = amzn_wdgt.searchIndex;
        }
        if (new_amzn_wdgt.cols * new_amzn_wdgt.rows > 20) {
            new_amzn_wdgt.rows = Math.floor(20 / new_amzn_wdgt.cols);
        }
    }

    var de_ws_url = "//ws-eu.amazon-adsystem.com";
    var us_ws_url = "//ws-na.amazon-adsystem.com";
    var fr_ws_url = "//ws-eu.amazon-adsystem.com";
    var ca_ws_url = "//ws-na.amazon-adsystem.com";
    var cn_ws_url = "//ws-cn.amazon-adsystem.com";
    var gb_ws_url = "//ws-eu.amazon-adsystem.com";
    var jp_ws_url = "//ws-fe.amazon-adsystem.com";
    
    var amzn_MarketPlace =  amzn_wdgt["marketPlace"];
    if( amzn_MarketPlace == null ||  amzn_MarketPlace == "" ){
        amzn_MarketPlace= "US";
    }
    
    var amzn_ws_url = us_ws_url;
    switch(amzn_MarketPlace){
        case "US": amzn_ws_url = us_ws_url;break;
        case "DE": amzn_ws_url = de_ws_url;break;
        case "GB": amzn_ws_url = gb_ws_url;break;
        case "CA": amzn_ws_url = ca_ws_url;break;
        case "CN": amzn_ws_url = cn_ws_url;break;
        case "FR": amzn_ws_url = fr_ws_url;break;
        case "JP": amzn_ws_url = jp_ws_url;break;
        default: amzn_ws_url = us_ws_url;
    }
    
    var amzn_ws_path = amzn_ws_url + "/widgets/q?";

    var de_wms_url = "//wms-eu.amazon-adsystem.com";
    var us_wms_url = "//wms-na.amazon-adsystem.com";
    var fr_wms_url = "//wms-eu.amazon-adsystem.com";
    var ca_wms_url = "//wms-na.amazon-adsystem.com";
    var cn_wms_url = "//wms-cn.amazon-adsystem.com";
    var gb_wms_url = "//wms-eu.amazon-adsystem.com";
    var jp_wms_url = "//wms-fe.amazon-adsystem.com";

    var amzn_wms_url = us_wms_url;
    switch(new_amzn_wdgt.marketPlace){
        case "US": amzn_wms_url = us_wms_url.replace(/US\/?$/, "");break;
        case "DE": amzn_wms_url = de_wms_url.replace(/DE\/?$/, "");break;
        case "GB": amzn_wms_url = gb_wms_url.replace(/GB\/?$/, "");break;
        case "CA": amzn_wms_url = ca_wms_url.replace(/CA\/?$/, "");break;
        case "CN": amzn_wms_url = ca_wms_url.replace(/CN\/?$/, "");break;
        case "FR": amzn_wms_url = fr_wms_url.replace(/FR\/?$/, "");break;
        case "JP": amzn_wms_url = jp_wms_url.replace(/JP\/?$/, "");break;
        default: amzn_wms_url = us_wms_url;
    }

    var scriptName = new_amzn_wdgt.templateId + '_' + new_amzn_wdgt.displayTemplate;
    amzn_wdgt = new_amzn_wdgt;
    amzn_wdgt.isWidgetSource = true;
    amzn_wdgt.pandaCompliant = true;
    if(typeof wsPreview != 'undefined'){
        amzn_wms_url = amzn_wms_url.replace(/^http:\/\//, "https://");
        amzn_ws_path  = amzn_ws_path.replace(/^http:\/\//, "https://");
    }
    if (typeof wsPreview == 'undefined') {
        document.write('<script charset=\'utf-8\' type=\'text/javascript\' src=\'' + amzn_ws_path + 'MarketPlace=' + new_amzn_wdgt.marketPlace + '&Operation=' + new_amzn_wdgt.operations + '&ServiceVersion=20070822&WS=1&ID=LStrings' +  '\'> <\/script>');
        document.write('<script charset=\'utf-8\' type=\'text/javascript\' src=\'' + amzn_wms_url + '/panda/20070822/' + amzn_wdgt.marketPlace + '/js/' + scriptName + '.js\'> <\/script>');
    } else {
        var targetDiv = document.getElementById("preview_section_demo");
        if (targetDiv.hasChildNodes()) {
            while (targetDiv.childNodes.length >= 1) {
                targetDiv.removeChild(targetDiv.firstChild);
            }
        }
        var lstringsElement = document.createElement('script');
        lstringsElement.src = amzn_ws_path + 'MarketPlace=' + new_amzn_wdgt.marketPlace + '&Operation=' + new_amzn_wdgt.operations + '&ServiceVersion=20070822&WS=1&ID=LStrings';
        lstringsElement.async = false;
        document.getElementById("preview_section_demo").appendChild(lstringsElement);
        var demoElement = document.createElement('script');
        demoElement.src = amzn_wms_url + "/panda/20070822/" + amzn_wdgt.marketPlace + "/js/" + scriptName + ".js";
        demoElement.async = false;
        demoElement.onload = demoElement.onreadystatechange = function() {
            if(!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                amazonWidgetsLoaded = true;
            }
        }
        document.getElementById("preview_section_demo").appendChild(demoElement);
    }
}


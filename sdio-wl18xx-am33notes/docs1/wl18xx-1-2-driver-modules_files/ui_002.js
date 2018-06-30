(function ($, global, undef) {
    
    // hide search box at top of home page
    var isHomePage = window.location.pathname == '/';
    
    if (isHomePage) {
        $('.search').hide();
    } else {
        $('.search').show();
    }
    
    $(window).scroll(function () {
        if (isHomePage) {
            if ($(window).scrollTop() < 60) {
                $('.search').hide();
            } else {
                $('.search').show();
            }
        }
    });

	var openHeaderListContext = null;
	var activateMessage = 'telligent.evolution.widgets.siteBanner.activate';
	var deactivateMessage = 'telligent.evolution.widgets.siteBanner.deactivate';

    function supportsTouch() {
        //solution found at https://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device-in-jquery
        //license CC BY-SA 3.0
        var isMobile = false; //initiate as false
        // device detection
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
            isMobile = true;
        }
        return isMobile;
    }

	var util = {
		throttle: function(fn, limit) {
			var lastRanAt, timeout;
			return function() {
				var scope = this,
					attemptAt = (new Date().getTime()),
					args = arguments;
				if(lastRanAt && (lastRanAt + (limit || 50)) > attemptAt) {
					global.clearTimeout(timeout);
					timeout = global.setTimeout(function(){
						lastRanAt = attemptAt;
						fn.apply(scope, args);
					}, (limit || 50));
				} else {
					lastRanAt = attemptAt;
					fn.apply(scope, args);
				}
			};
		}
	}

	// UI which can render endlessly-scrolling items in a popup.
	// Supports defining filters
	// Updating site-wide bubble counts
	var HeaderList = (function($){
		// private static members of a HeaderList
		var titleCount = /^\([0-9]+\)\s+/,
			totalTitleCount = 0, // title bar count which multiple instances can contribute to
			mask,
			defaults = {
				key: '',
				activationLink: null,
				activationInput: null,
				initialUnreadCount: 0,
				footerContent: null,
				showCount: true,
				endlessScroll: false,
				cssClass: '',
				template: '',
				loading: false,
				titleCount: false,
				titleCountClass: '',
				previousCount: 0,
				wrapper: null,
				unreadCountMessageSingular: 'You have {0} unread item',
				unreadCountMessagePlural: 'You have {0} unread items',
				onShowLoadingIndicator: function() { return true; },
				onLoad: function(pageIndex, shouldRefreshUnreadCount, filter, complete) {
					// load more items
					// for each item loaded, marks it as read
					// after items loaded and marks as read, gets new unread count and updates via updateUnreadCount via refreshUnreadCount
					// complete(contentToShow)
					complete('');
				},
				onRefreshUnreadCount: function(complete) {
					// get new unread count
					// update it via complete()
					complete(5);
				},
				onBuildFilter: null, // function(filtered) {
					// when defined, returns a DOM node to be inserted at the top which presentes a filtering UI
					// filtered(filter) can be called to raise a filter
				// }
				onShow: function(activator, complete) { // deferred display options
					// calls complete with display options to use when displaying
					// complete({
						//width: 280
						//maxHeight: 300
						//attachTo: activator
					//})
					complete({});
				},
				onHide: function() {

				},
				onSelect: function(item) {
				    var url = $(item).data('contenturl');
				    // Sitecatalyst tracking
				    _TrackSC(window.location, "Search");
					if(url) {
						window.location = url;
					}
				}
			},
			defaultShowSettings = {
				attachTo: null,
				width: 280,
				maxHeight: 300,
				cssClass: null
			};

		function updateTitle(context) {
			if(totalTitleCount <= 0) {
				context.handheldBannerLinksCount.hide();
				document.title = document.title.replace(titleCount, '');
			} else {
				context.handheldBannerLinksCount.html(totalTitleCount).show();
				document.title = '(' + totalTitleCount + ') ' + document.title.replace(titleCount, '');
			}
		}

		function blockWindowScrolling(context) {
			if($('body').hasClass('stop-scrolling'))
				return;

			// block window scrolling not in the popup, or popup scrolling at its boundaries
			context.popupContentList.on('DOMMouseScroll mousewheel', function(e){
				var e = e || window.event,
					originalEvent = e.originalEvent || e,
					delta = 0,
					scrollTop = context.popupContentList.get(0).scrollTop,
					scrollHeight = context.popupContentList.get(0).scrollHeight,
					height = context.popupContentList.height();

				if (originalEvent.wheelDelta)
					delta = originalEvent.wheelDelta/120;
				if (originalEvent.detail)
					delta = -originalEvent.detail/3;

				if((scrollTop === (scrollHeight - height) && delta < 0) ||
					(scrollTop === 0 && delta > 0)) {
					if(e.preventDefault)
						e.preventDefault();
					e.returnValue = false;
				}
			});

			// block touch scrolling
			var lastY;
			$('body').addClass('stop-scrolling')
				.on('pointerstart.scrollfix', function(e){
					lastY = e.pointers[0].pageY;
				})
				.on('pointerend.scrollfix', function(e){
					lastY = null;
				})
				.on('pointermove.scrollfix', function(e){
					if(!e.pointers || e.pointers.length == 0)
						return;

					var isDirectionDown = e.pointers[0].pageY - lastY > 0;

					var list = $(e.target).closest('.popup-list ul.content-list.content');
					if(!list || list.length == 0) {
						e.preventDefault();
						return false;
					}

					var ul = context.popupContentList.get(0),
						ulScrollTop = ul.scrollTop,
						ulScrollHeight = ul.scrollHeight,
						ulHeight = ul.offsetHeight;

					if(ulHeight == 0 || ulScrollHeight == 0)
						return;

					// list isn't scrollable, so block scrolling
					if(ulScrollHeight - ulHeight <= 0) {
						e.preventDefault()
						return false;
					}

					// list is scrollable and at the top
					if(ulScrollTop == 0 && isDirectionDown) {
						e.preventDefault();
						return false;
					}
					// list is scrollable and at end
					if((ulScrollTop + ulHeight >= ulScrollHeight) && !isDirectionDown) {
						e.preventDefault();
						return false;
					}
				});

			if(!mask)
				mask = $('<div></div>')
					.addClass('mask')
					.appendTo('body')
					.css({ opacity: 0.01, zIndex: 1 })
					.evolutionTransform({ opacity: 0.7 }, { duration: 150 })
					.on('click', function(){
						api.hideCurrent();
					});

			preventBodyBounce($('body').children().first());
		}

		function unblockWindowScrolling(context) {
			if(!$('body').hasClass('stop-scrolling'))
				return

			$('body').removeClass('stop-scrolling').off('.scrollfix');

			if(context.popupContentList)
				context.popupContentList.off('DOMMouseScroll mousewheel');

			if(mask) {
				setTimeout(function(){
					if(mask) {
						if(!$('body').hasClass('stop-scrolling')) {
							mask.evolutionTransform({ opacity: 0.01 }, { duration: 100 });
							setTimeout(function(){
								if(mask)
									mask.remove();
								mask = null;
							}, 100);
						}
					}
				}, 100);
			}

			allowBodyBounce($('body').children().first());
		}

		function allowBodyBounce(selection) {
			selection.off('.scrollfix');
		}

		function preventBodyBounce(selection) {
			var originalScrollTop,
				elem = selection.get(0);
			selection.on('pointerstart.scrollfix', function(e){
				originalScrollTop = elem.scrollTop;

				if(originalScrollTop <= 0)
					elem.scrollTop = 1;

				if(originalScrollTop + elem.offsetHeight >= elem.scrollHeight)
					elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;

				originalScrollLeft = elem.scrollLeft;

				if(originalScrollLeft <= 0)
					elem.scrollLeft = 1;

				if(originalScrollLeft + elem.offsetWidth >= elem.scrollWidth)
					elem.scrollLeft = elem.scrollWidth - elem.offsetWidth - 1;
			});
		}

		function buildCountBubble(context) {
			var wrapper = context.activationLink.wrap('<span></span>').parent('span').css({
				position: 'relative'
			});
			var count = $('<a href="#" class="popup-list-count ' + context.titleCountClass + '"></a>');
			count.appendTo(wrapper).hide().on('click', function(e){
				e.preventDefault();
				context.activationLink.click();
			});
			return count;
		}

		function buildUnreadCountMessage(context, count) {
			count = count || 0;
			if(count === 1) {
				return context.unreadCountMessageSingular.replace(/\{0\}/gi, count);
			} else {
				return context.unreadCountMessagePlural.replace(/\{0\}/gi, count);
			}
		}

		function showUnreadCount(context, count) {
			if(!context.showCount)
				return;
			var difference = count - context.previousCount;
			context.previousCount = count;
			if(context.titleCount) {
				totalTitleCount += difference;
				updateTitle(context);
			}
			var unreadCountMessage = buildUnreadCountMessage(context, count);
			if(count <= 0) {
				// remove bubble ui
				if(context.count)
					context.count.fadeOut(200);
				context.activationLink.attr('data-tip', unreadCountMessage).attr('title', unreadCountMessage);
			} else {
				// add bubble ui if not there
				context.count = context.count || buildCountBubble(context);
				// set the count and display it
				context.count
					.html((context.limitCount && context.limitCount < count) ? context.limitCount + "+" : count)
					.attr('title', unreadCountMessage)
					.fadeIn(200);
				context.activationLink.attr('data-tip', unreadCountMessage).attr('title', unreadCountMessage);
			}
		}

		function loadShowSettings(activator, context) {
			return $.Deferred(function(dfd){
				context.onShow(activator, function(settings){
					dfd.resolve($.extend({}, defaultShowSettings, settings || {}));
				});
			}).promise();
		}

		function loadContent(context, pageIndex, shouldRefreshUnreadCount) {
			context.loading = true;
			// call the injected loading method, and return a promise
			// which, when done, provides the content from the loading method
			return $.Deferred(function(dfd){
				if(context.onShowLoadingIndicator()) {
					showLoading(context, (pageIndex > 0));
				}
				context.onLoad(pageIndex, shouldRefreshUnreadCount, context.filter || '', function(content){
					if(context.onShowLoadingIndicator())
						hideLoading(context, (pageIndex > 0));
					dfd.resolve(content);
				});
			}).promise();
		}

		function buildPopUp(context) {
			context.compiledTemplate = context.compiledTemplate || $.telligent.evolution.template.compile(context.template);

			context.popup = $(context.compiledTemplate(context));
			context.loadingIndicator = context.popup.find('.loading').hide();
			context.popupContentList = context.popup.find('.content-list');
			context.footer = context.popup.find('.content-list-footer');
			context.popup.glowPopUpPanel({
				cssClass: 'popup-list ' + context.cssClass,
				hideOnDocumentClick: false,
				hideOnResize: (supportsTouch() ? false : true),
				position: 'down',
				zIndex: 1000
			}).on('glowPopUpPanelHidden', function(){
				(context.activator).removeClass('active');
				context.onHide();
				unblockWindowScrolling(context);
			});
			$(document).on('click', function(){
				context.popup.glowPopUpPanel('hide');
			});
			if(context.onBuildFilter !== null) {
				var filter = context.onBuildFilter(function(result){
					if(!isOpenOrOpening(context))
						return;
					context.filter = result;
					context.currentPageIndex = 0;
					loadContent(context, context.currentPageIndex, true).then(function(content) {
						appendToPopup(context, content, true);
					});
				});
				if(filter) {
					$(filter).insertBefore(context.popupContentList);
				}
			}
		}

		function showLoading(context, append) {
			if(append) {
				context.loadingIndicator.show();
			} else {
				setTimeout(function(){
					if(!context.loading)
						return;
					if(openHeaderListContext) {
						hidePopup(openHeaderListContext);
					}
					openHeaderListContext = context;
					context.popup.glowPopUpPanel('show', (context.showSettings.attachTo || context.activator), true);
					context.loadingIndicator.show();
					(context.activator).addClass('active');
					blockWindowScrolling(context);
				}, 20);
			}
		}

		function hideLoading(context, append) {
			context.loadingIndicator.hide();
		}

		function showPopup(context, content, showSettings) {
			if(openHeaderListContext) {
				hidePopup(openHeaderListContext);
			}
			openHeaderListContext = context;
			context.popupContentList.html(content);
			context.popup.glowPopUpPanel('show', (showSettings.attachTo || context.activator), true);
			context.loading = false;
			context.hasMore = context.popupContentList.children('li:last').data('hasmore') ? true : false;
			(context.activator).addClass('active');
			context.popupContent = context.popupContentList.closest('.popup-list');
			context.popupContainer = context.popupContent.parent();
			context.popupContent.find('.ui-viewhtml').on('rendered', function(){
				context.popupContainer.css({ height: context.popupContent.outerHeight() });
			});
			blockWindowScrolling(context);
			context.currentItemIndex = null;
			$.telligent.evolution.messaging.publish(activateMessage, { key: context.key });
		}

		function hidePopup(context) {
			context.popup.glowPopUpPanel('hide');
			unblockWindowScrolling(context);
			$.telligent.evolution.messaging.publish(deactivateMessage, { key: context.key });
		}

		function appendToPopup(context, content, shouldReplace) {
			if(shouldReplace) {
				context.popupContentList.html(content);
			} else {
				context.popupContentList.append(content);
			}
			context.loading = false;
			context.hasMore = context.popupContentList.children('li:last').data('hasmore') ? true : false;
			context.popupContainer.css({ height: context.popupContent.outerHeight() });
			context.popupContent.find('.ui-viewhtml').on('rendered', function(){
				context.popupContainer.css({ height: context.popupContent.outerHeight() });
			});
		}

		function deactivate(context) {
		    hidePopup(context);
		    if (context.activationInput.val().length > 2 || context.activationInput.val().length < 1) {
		        _tiAnalyticsTrack("e2e search abandonment", context.activationInput.val(), "e2e-quicksearch", "all");
		    }
		}

		function activate(activator, context) {
			context.currentPageIndex = 0;
			context.hasMore = true;
			activator.addClass('active');
			loadShowSettings(activator, context).then(function(showSettings) {
				context.showSettings = showSettings;
				context.popupContentList.css({
					width: showSettings.width,
					maxHeight: showSettings.maxHeight
				});
				loadContent(context, context.currentPageIndex, true).then(function(content) {
					showPopup(context, content, showSettings);
					context.popupContainer.removeClass().addClass(showSettings.containerCssClass);
				});
			});
		}

		function handlePopoupOpenerClick(link, context) {
			if(context.popup.glowPopUpPanel('isOpening')) {
				return;
			} else if(context.popup.glowPopUpPanel('isShown')) {
				hidePopup(context);
				deactivate(context);
			} else {
				activate(link, context);
			}
		}

		function isOpenOrOpening(context) {
			return context.popup.glowPopUpPanel('isOpening') ||
				context.popup.glowPopUpPanel('isShown');
		}

		function move(context, direction, handler) {
			var availableItems = $(context.popupContentList.children('li.content-item'));
			if(availableItems.length == 0)
				return;

			availableItems.removeClass('selected');

			if(context.currentItemIndex === null) {
				context.currentItemIndex = 0;
			} else if(direction == 'down') {
				context.currentItemIndex++;
				if(context.currentItemIndex >= availableItems.length)
					context.currentItemIndex = 0;
			} else if(direction == 'up') {
				context.currentItemIndex--;
				if(context.currentItemIndex < 0)
					context.currentItemIndex = (availableItems.length - 1);
			}

			// get item to scroll to
			var selectedItem = $(availableItems[context.currentItemIndex]);
			if(!selectedItem)
				return;

			// scroll to it
			context.popupContentList.animate({
				scrollTop: (context.popupContentList.scrollTop() -
					context.popupContentList.offset().top +
					selectedItem.offset().top -
					selectedItem.height())
			}, 100);

			// highlight it
			selectedItem.addClass('selected');

			// inform calling code of selection
			handler(selectedItem);
		}

		function handleEvents(context) {
			context.activationLink.on('click', function(e){
				e.preventDefault();
				handlePopoupOpenerClick(context.activationLink, context);
				return false;
			});
			// go ahead and immeidately handle, as handleEvents is only
			// first called from a deferred click
			// handlePopoupOpenerClick(context.activationLink, context);

			context.activationInput.on({
				focus: function(e) {
					e.preventDefault();

					// workaround for ios5+ bug where fixed header becomes unfixed with keyboard open
					if(supportsTouch()){
						global.scrollTo(0,0);
						context.wrapper.css({ position: 'absolute' });
						// also absolutize any parents that are fixed, and track them to fix them when keyboard closed
						context.absolutized = [];
						setTimeout(function(){
							context.wrapper.parents().each(function(){
								if($(this).css('position') == 'fixed') {
									context.absolutized.push(this);
									$(this).css({
										position: 'absolute'
									});
								}
							})
						}, 100);
					}

					var val = $.trim(context.activationInput.val());
					if(!isOpenOrOpening(context) && val.length >= 3) {
						activate($(e.target), context);
					}

					return false;
				},
				blur: function(e) {
					// workaround for ios5+ bug where fixed header becomes unfixed with keyboard open
					if(supportsTouch()) {
						context.wrapper.css({ position: 'fixed' });
						// fix any previously-absolutized elements when
						if(context.absolutized) {
							$.each(context.absolutized, function(i, abs) {
								$(abs).css({ position: 'fixed '});
							})
						}
					}
				},
				input: function(e) {
					e.preventDefault();

					var val = $.trim(context.activationInput.val());
					if(!isOpenOrOpening(context) && val.length >= 3) {
						activate($(e.target), context);
					} else if(isOpenOrOpening(context) && val.length < 3) {
						deactivate(context);
					}
				}


			})
			// handle endless scrolling if enabled
			if(context.endlessScroll) {
				context.popupContentList.on('scrollend', function(){
					if(!context.hasMore) {
						return false;
					}
					if(context.loading) {
						return false;
					}
					context.currentPageIndex++;
					loadContent(context, context.currentPageIndex, true).then(function(content) {
						appendToPopup(context, content);
					});
					return false;
				});
			}
			context.popupContentList.on('click','.content-item', function(e){
				e.preventDefault();
				context.onSelect(this);
			});
			context.popupContentList.on('click','a',function(e){
				e.stopPropagation();
			});
		}

		function initContext(context) {
			context.activationLink = $(context.activationLink);
			context.activationInput = $(context.activationInput);
			context.activator = context.activationLink.length > 0 ? context.activationLink : context.activationInput;
		}

		function api(options) {
			// private instance members of a HeaderList
			var context = $.extend({}, defaults, options || {});
			initContext(context);
			var inited = false;

			function init() {
				if(inited)
					return;
				inited = true;
				buildPopUp(context);
				handleEvents(context);
			}

			// lazy-setup until clicked
			context.activationLink.one('click', function(e){
				e.preventDefault();
				init();
				context.activationLink.click();
			});
			context.activationInput.one('focus', function(e){
				init();
				context.activationInput.focus();
			});
			showUnreadCount(context, context.initialUnreadCount);

			// public instance members of a HeaderList
			return {
				refreshUnreadCount: function() {
					return context.onRefreshUnreadCount(function(newCount){
						showUnreadCount(context, newCount);
						setTimeout(function(){
							context.popupContainer.css({ height: context.popupContent.outerHeight() });
						}, 110)
					});
				},
				refreshContent: function() {
					// refreshing content only has an effect if already shown
					if(context.popup && context.popup.glowPopUpPanel('isShown')) {
						context.currentPageIndex = 0;
						loadContent(context, context.currentPageIndex, false).then(function(content) {
							appendToPopup(context, content, true);
						});
					}
				},
				content: function() {
					return context.popupContentList;
				},
				footer: function() {
					return context.footer;
				},
				activate: function() {
					init();
					activate($(context.activationInput || context.activationLink), context);
				},
				deactivate: function() {
					deactivate(context);
				},
				moveUp: function(handler) {
					move(context, 'up', handler);
				},
				moveDown: function(handler) {
					move(context, 'down', handler);
				}
			};
		};
		// public static members of a HeaderList
		api.hideCurrent = function() {
			if(openHeaderListContext) {
				hidePopup(openHeaderListContext);
			}
		};

		return api;

	})($);

	function initNotificationList(context) {
		var debouncedNotificationReadTimeout;
		var suppressNotificationsReadMessage = false;
		var suppressNotificationsReadMessageTimeout;
		var currentTotalCount = 0;

		function displayNotificationPreference(context, notificationItem) {
			// set the notification list size during preference-displaying so that it does not resize out of the bounds of the popup
			context.notificationList = context.notificationList || notificationItem.closest('ul');
			context.notificationList.css({
				height: context.notificationList.height()
			});
			if(context.preferenceUi) {
				hideNotificationPreference(context, context.preferenceUi);
				context.preferenceUi = null;
			}
			context.preferenceTemplate = context.preferenceTemplate || $.telligent.evolution.template.compile(context.notificationPreferenceTemplate);
			context.preferenceUi = $(context.preferenceTemplate({
					notificationTypeName: notificationItem.data('notificationtypename'),
					notificationTypeId: notificationItem.data('notificationtypeid')
				}))
				.hide()
				.appendTo(notificationItem);
			context.preferenceUi.css({
				position: 'absolute',
				top: 0,
				left: 0,
				zIndex: 2000
			});

			notificationItem.addClass('with-preference');
			notificationItem.data('originalHeight', notificationItem.outerHeight());
			notificationItem.animate({ height: context.preferenceUi.height() }, 150);

			context.preferenceUi.fadeTo(150, 0.98);
		}

		function hideNotificationPreference(context, preferenceItem) {
			context.notificationList.css({ height: 'auto' });
			if(preferenceItem) {
				var notificationItem = preferenceItem.parent();
				notificationItem.animate({ height: notificationItem.data('originalHeight') }, 150);
				preferenceItem.fadeOut(150, function(){
					notificationItem.removeClass('with-preference');
					preferenceItem.remove();
				});
			}
		}

		function disableNotificationType(context, notificationTypeId) {
			return $.telligent.evolution.put({
				url: $.telligent.evolution.site.getBaseUrl() + 'api.ashx/v2/notificationpreference.json',
				data: {
					NotificationTypeId: notificationTypeId,
					IsEnabled: false
				},
				dataType: 'json'
			});
		}

		function initNotificationItemHandlers() {
			// mark individual notifications as read
			context.notificationsList.content().on('click', '.mark a', function(e) {
				e.preventDefault();
				var markLink = $(e.target);
				var notificationLineItem = $(this).closest('li');
				var notificationId = notificationLineItem.data('notificationid');
				markNotificationAsRead(notificationId).then(function(){
					markLink.hide();
					notificationLineItem.removeClass('unread');
					context.notificationsList.refreshUnreadCount()
				});
				return false;
			});

			// display preference change ui on 'x' click
			context.notificationsList.content().on('click', '.preference a', function(e) {
				e.preventDefault();
				displayNotificationPreference(context, $(this).closest('li'));
				return false;
			});

			// handle cancels of preference change when clicking 'cancel'
			context.notificationsList.content().on('click', '.notification-preference .cancel', function(e){
				e.preventDefault();
				e.stopPropagation();
				hideNotificationPreference(context, $(this).closest('.notification-preference'));
				context.preferenceUi = null;
				return false;
			});

			// handle cancels of preference change by clicking anything other than 'turn off'
			context.notificationsList.content().on('click', '.notification-preference', function(e){
				e.preventDefault();
				e.stopPropagation();
				hideNotificationPreference(context, $(this));
				context.preferenceUi = null;
				return false;
			});

			// handle confirmed preference changes
			context.notificationsList.content().on('click', '.notification-preference .confirm', function(e){
				e.preventDefault();
				var notificationPreference = $(this).closest('.notification-preference'),
					notificationItem = notificationPreference.closest('li');
				disableNotificationType(context, $(this).data('notificationtypeid')).then(function(){
					notificationItem.fadeOut(200, function() {
						notificationPreference.remove();
						notificationItem.remove();
					});
					context.preferenceUi = null;
				});
				return false;
			});
		};

		function markNotificationAsRead(notificationId) {
			clearTimeout(suppressNotificationsReadMessageTimeout);
			suppressNotificationsReadMessage = true;
			var markNotificationPromise = $.telligent.evolution.put({
				url: $.telligent.evolution.site.getBaseUrl() + 'api.ashx/v2/notification/{NotificationId}.json',
				data: {
					NotificationId: notificationId,
					MarkAsRead: true
				}
			});
			markNotificationPromise.done(function(){
				suppressNotificationsReadMessageTimeout = setTimeout(function(){
					suppressNotificationsReadMessage = false;
				}, 5000);
			});
			return markNotificationPromise;
		}

		function markAllAsRead() {
			var unreadItems = context.notificationsList.content().find('> li.unread');
			// remove unread UI state immediately before waiting for server change
			unreadItems.removeClass('unread');
			clearTimeout(suppressNotificationsReadMessageTimeout);
			suppressNotificationsReadMessage = true;
			$.telligent.evolution.batch(function(){
				// loop through all of the currently visible unread notification items
				unreadItems.each(function(){
					// and mark the notificaiton as read
					markNotificationAsRead($(this).data('notificationid'));
				});
			}).then(function(){
				context.notificationsList.refreshContent();
				context.notificationsList.refreshUnreadCount()
				suppressNotificationsReadMessageTimeout = setTimeout(function(){
					suppressNotificationsReadMessage = false;
				}, 5000);
			});
		}

		context.notificationsList = HeaderList({
			key: 'notifications',
			footerContent: context.notificationListFooterContent,
			initialUnreadCount: context.notificationsUnread,
			activationLink: context.notificationsLink,
			endlessScroll: true,
			titleCount: true,
			limitCount: 99,
			cssClass: 'notifications',
			unreadCountMessageSingular: context.notificationssUnreadCountMessageSingular,
			unreadCountMessagePlural: context.notificationssUnreadCountMessagePlural,
			wrapper: context.banner,
			handheldBannerLinksCount: context.handheldBannerLinksCount,
			onLoad: function(pageIndex, shouldRefreshUnreadCount, filter, complete) {
				if(!context.isInited) {
					context.isInited = true;
					initNotificationItemHandlers();
				}
				if(context.notificationList) {
					context.notificationList.css({ height: 'auto' });
				}
				$.telligent.evolution.get({
					url: context.notificationsUrl,
					data: {
						w_pageIndex: pageIndex,
						w_filter: (currentTotalCount > 0 ? (filter || 'all') : 'all')
					},
					success: function(response) {
						// show response
						complete(response);
						// update count
						if(shouldRefreshUnreadCount)
							context.notificationsList.refreshUnreadCount();
					}
				});
			},
			onRefreshUnreadCount: function(complete) {
				// find the mark as read link if not already found
				if(!context.notificationMarkAsReadLink && context.notificationsList) {
					var footer = context.notificationsList.footer();
					if(footer) {
						context.notificationMarkAsReadLink = footer.find('a.mark-read').on('click', function(e){
							e.preventDefault();
							markAllAsRead();
							return false;
						});
					}
				}
				var query = {
					IsRead: false,
					PageSize: 1,
					PageIndex: 0
				};
				// exclude conversation notifications
				query['_Filters_' + context.conversationNotificationTypeId] = 'Exclude';
				return $.telligent.evolution.get({
					url: $.telligent.evolution.site.getBaseUrl() + 'api.ashx/v2/notifications.json',
					cache: false,
					data: query,
					success: function(response) {
						complete(response.TotalCount);
						if(context.notificationMarkAsReadLink) {
							currentTotalCount = response.TotalCount;
							if(response.TotalCount > 0) {
								context.notificationMarkAsReadLink.show();
								context.notificationsFilter.slideDown(100);
							} else {
								context.notificationMarkAsReadLink.hide();
								context.notificationsFilter.slideUp(100);
							}
						}
					},
					error: { }
				});
			},
			template: context.notificationsTemplate,
			onShow: function(activator, complete) {
				complete(buildShowSettings(context, activator, {}));
			},
			onSelect: function(item) {
				item = $(item);
				var notificationId = item.data('notificationid'),
					contentUrl = item.data('contenturl');

				if(item.hasClass('unread')) {
					// mark as read
					markNotificationAsRead(notificationId).then(function(){
						// then navigate to it if different or just refresh the unread count
						if(window.location.href != contentUrl) {
							window.location.href = contentUrl;
						} else {
							context.notificationsList.refreshUnreadCount();
						}
					});
				} else {
					window.location.href = contentUrl;
				}
			},
			onBuildFilter: function(filtered) {
				var filterTemplate = $.telligent.evolution.template.compile(context.notificationsFilterTemplate);
				context.notificationsFilter = $(filterTemplate({}));
				context.notificationsFilter.find('a:first').addClass('selected');
				context.notificationsFilter.on('click','a', function(e){
					e.preventDefault();
					e.stopPropagation();
					var target = $(e.target);
					target.closest('ul').find('a').removeClass('selected');
					target.addClass('selected');
					filtered(target.data('filter'));
				});

				return context.notificationsFilter.hide();
			}
		});

		// update the notification list's count when a new notification is received which isn't a conversation type
		$.telligent.evolution.messaging.subscribe('notification.raised', function(notification) {
			if(notification.typeId !== context.conversationNotificationTypeId) {
				context.notificationsList.refreshUnreadCount().then(function(){
					context.notificationsList.refreshContent();
				});
			}
		});

		// update the notification list's count when a new notification is received which isn't a conversation type
		$.telligent.evolution.messaging.subscribe('notification.read', function(notification) {
			if(notification.typeId !== context.conversationNotificationTypeId) {
				// wait until a gap in notification.read events, in case many have just been received
				clearTimeout(debouncedNotificationReadTimeout);
				debouncedNotificationReadTimeout = setTimeout(function(){
					if(suppressNotificationsReadMessage) {
						return;
					}
					context.notificationsList.refreshUnreadCount().then(function(){
						context.notificationsList.refreshContent();
					});
				}, 100);
			}
		});

		return context.notificationsList;
	}

	function initConversationList(context) {

		context.conversationsList = HeaderList({
			key: 'conversations',
			footerContent: context.conversationListFooterContent,
			initialUnreadCount: context.conversationsUnread,
			activationLink: context.conversationsLink,
			endlessScroll: true,
			titleCount: true,
			cssClass: 'conversations',
			unreadCountMessageSingular: context.conversationsUnreadCountMessageSingular,
			unreadCountMessagePlural: context.conversationsUnreadCountMessagePlural,
			wrapper: context.banner,
			handheldBannerLinksCount: context.handheldBannerLinksCount,
			onLoad: function(pageIndex, shouldRefreshUnreadCount, filter,complete) {
				$.telligent.evolution.get({
					url: context.conversationsUrl,
					data: {
						w_pageIndex: pageIndex
					},
					success: function(response) {
						// show response
						complete(response);
						// update count
						if(shouldRefreshUnreadCount)
							context.conversationsList.refreshUnreadCount();
					}
				});
			},
			onRefreshUnreadCount: function(complete) {
				return $.telligent.evolution.get({
					url: $.telligent.evolution.site.getBaseUrl() + 'api.ashx/v2/conversations.json',
					cache: false,
					data: {
						ReadStatus: 'Unread'
					},
					success: function(response) {
						complete(response.TotalCount);
					},
					error: { }
				});
			},
			template: context.conversationsTemplate,
			onShow: function(activator, complete) {
				complete(buildShowSettings(context, activator, {}));
			}
		});

		// update the message list's count when a new notification is received which is a conversation type
		$.telligent.evolution.messaging.subscribe('notification.raised', function(notification) {
			if(notification.typeId === context.conversationNotificationTypeId) {
				context.conversationsList.refreshUnreadCount().then(function(){
					context.conversationsList.refreshContent();
				});
			}
		});

		// update the message list's count when a message was read on the conversation list
		$.telligent.evolution.messaging.subscribe('ui.messageread', function(notification) {
			context.conversationsList.refreshUnreadCount();
		});

		$.telligent.evolution.messaging.subscribe(context.messagePrefix + 'startconversation', function(){
			$.glowModal(context.conversationNewConversationModalUrl, {
				width: 550,
				height: 360
			});
		});

		return context.conversationsList;
	}

	function initBookmarksList(context) {
		// gets all selected content types from the content type filter
		function getCurrentContentTypes(bookmarkFilter) {
			var contentTypes = [];
			var selectedFilters = context.bookmarkFilter.find('a.selected').each(function(){
				contentTypes.push($(this).data('contenttypeids'));
			});
			return contentTypes.join(',');
		};

		context.bookmarksList = HeaderList({
			key: 'bookmarks',
			footerContent: context.bookmarksListFooterContent,
			activationLink: context.bookmarksLink,
			endlessScroll: true,
			initialUnreadCount: context.bookmarksIsBookmarked ? 1 : 0,
			titleCount: false,
			showCount: false,
			cssClass: 'bookmarks',
			wrapper: context.banner,
			handheldBannerLinksCount: context.handheldBannerLinksCount,
			unreadCountMessageSingular: context.bookmarksBookmarks,
			unreadCountMessagePlural: context.bookmarksBookmarks,
			onLoad: function(pageIndex, shouldRefreshUnreadCount, filter, complete) {
				var filteredContentTypeIds = filter || getCurrentContentTypes(context.bookmarkFilter);
				$.telligent.evolution.get({
					url: context.bookmarksUrl,
					data: {
						w_pageIndex: pageIndex,
						w_contentTypeIds: filteredContentTypeIds
					},
					success: function(response) {
						if(filteredContentTypeIds && filteredContentTypeIds.length > 0 && getCurrentContentTypes(context.bookmarkFilter) !== filteredContentTypeIds)
							return;
						// show response
						complete(response);
						// update count
						if(shouldRefreshUnreadCount)
							context.bookmarksList.refreshUnreadCount();
					}
				});
			},
			onRefreshUnreadCount: function(complete) {
				complete(context.bookmarksIsBookmarked ? 1 : 0);
			},
			onBuildFilter: function(filtered) {
				var filterTemplate = $.telligent.evolution.template.compile(context.bookmarksFilterTemplate),
					filterTemplateData = {
						contentTypeIds: '',
						applicationContentTypeIds: '',
						containerTypes: []
					};
				if(context.bookmarksContentTypes.length > 0)
					filterTemplateData.contentTypeIds = context.bookmarksContentTypes.substr(0, context.bookmarksContentTypes.length - 1)
				if(context.bookmarksApplicationContentTypes.length > 0)
					filterTemplateData.applicationContentTypeIds = context.bookmarksApplicationContentTypes.substr(0, context.bookmarksApplicationContentTypes.length - 1)
				if(context.bookmarksContainerContentTypes.length > 0) {
					var rawContainers = context.bookmarksContainerContentTypes.split(',');
					$.each(rawContainers, function(i, rawContainer) {
						if(rawContainer && rawContainer.length > 0) {
							var containerComponents = rawContainer.split(':', 2);
							if(containerComponents.length === 2) {
								filterTemplateData.containerTypes.push({
									name: containerComponents[1],
									id: containerComponents[0]
								});
							}
						}
					});
				}

				context.bookmarkFilter = $(filterTemplate(filterTemplateData));
				context.bookmarkFilter.find('a:first').addClass('selected');
				context.bookmarkFilter.on('click','a', function(e){
					e.preventDefault();
					e.stopPropagation();
					var target = $(e.target);
					target.closest('ul').find('a').removeClass('selected');
					target.addClass('selected');
					filtered(getCurrentContentTypes(context.bookmarkFilter));
				});

				return context.bookmarkFilter;
			},
			template: context.bookmarksTemplate,
			onShow: function(activator, complete) {
				complete(buildShowSettings(context, activator, {}));
			}
		});

		// refresh content when bookmarks are added/removed
		$.telligent.evolution.messaging.subscribe('ui.bookmark', function(data) {
			// if this represents a change in bookmark state of current content,
			// track that
			if(data.contentId == context.bookmarksCurrentContentId) {
				context.bookmarksIsBookmarked = data.bookmarked;
				context.bookmarksList.refreshUnreadCount();
				if(data.bookmarked) {
					context.bookmarksLink.addClass('bookmarked');
					$.telligent.evolution.notifications.show(context.bookmarkAdded, {
						id: 'bookmark-' + data.contentId
					});
				} else {
					context.bookmarksLink.removeClass('bookmarked');
					$.telligent.evolution.notifications.show(context.bookmarkRemoved, {
						id: 'bookmark-' + data.contentId
					});
				}
			}
			context.bookmarksList.refreshContent();
		});

		if(context.bookmarksIsBookmarked)
			context.bookmarksLink.addClass('bookmarked');

		return context.bookmarksList;
	}

	function initUserPopup(context) {
		var userContent = $($.telligent.evolution.template.compile(context.userContentTemplate)());

		context.userPopup = HeaderList({
			key: 'user',
			activationLink: context.userLink,
			endlessScroll: false,
			titleCount: false,
			cssClass: 'user',
			showCount: false,
			wrapper: context.banner,
			handheldBannerLinksCount: context.handheldBannerLinksCount,
			onLoad: function(pageIndex, shouldRefreshUnreadCount, filter, complete) {
				global.setTimeout(function(){
					complete(userContent)
				}, 10)
			},
			template: context.userPopupTemplate,
			onShow: function(activator, complete) {
				complete(buildShowSettings(context, activator, {}));
			}
		});

		return context.userPopup;
	};

	function initSearchPopup(context) {
		// gets all selected content types from the content type filter
		function getCurrentSearchFilters(context) {
			var selectedPlace = context.searchFilter.find('a.place.selected');
			var selectedType = context.searchFilter.find('a.type.selected');
			return {
				placeKey: selectedPlace.data('key') || 'anywhere',
				placeValue: selectedPlace.data('value') || 'anywhere',
				type: selectedType.data('key'),
				query: $.trim(context.searchInput.val())
			}
		};

		function loadSearchPlaces(context) {
			var places = [];

			if (context.searchPlaceApplicationId) {
				places.push({
					key: 'application',
					value: context.searchPlaceApplicationId,
					name: context.searchPlaceApplicationName
				});
			}

			if (context.searchPlaceGroupId) {
				places.push({
					key: 'group',
					value: context.searchPlaceGroupId,
					name: context.searchPlaceGroupName
				});
			}

			if (places.length > 0) {
				places.push({
					key: 'anywhere',
					value: 'anywhere',
					name: context.searchPlaceAnywhereName
				});
			}

			context.searchPlaces = places;
		}

		function loadSearchFilters(context, scope) {
			var filters = [];

			// build first party filters first
			filters.push({
				key: 'content',
				name: context.searchFilterContentName
			});

			if (scope.key == 'anywhere' || scope.key == 'group') {
				filters.push({
					key: 'groups',
					name: context.searchFilterGroupsName
				});
			}

			if (scope.key == 'anywhere' && context.searchShowPeople) {
				filters.push({
					key: 'users',
					name: context.searchFilterPeopleName,
					advancedSearchUrl: function(query) {
						var params = { q: query };
						return context.searchAdvancedUserUrl
							.replace(/\{0\}/gi, $.param(params))
							.replace(/\+/gi, '%20')
							.replace(/'/gi, '%27');
					}
				});
			}

			// add custom filters
			var i = 1;
			$.telligent.evolution.messaging.publish('search.registerFilters', {
				scope: scope,
				register: function(settings) {
					filters.push($.extend(
						{
							name: '',
							query: function(queryData, complete) { },
							advancedSearchUrl: function(queryText) { return null; },
							isDefault: false
						},
						settings,
						{
							key: 'custom' + (i++)
						}
					));
				}
			});

			context.searchFilters = filters;
		};

		function setDefaultAdvancedSearchUrl(context) {
			var query = $.trim($(context.searchInput).val());
			if(query && query.length > 0) {
				var params = { q: query };
				context.currentAdvancedSearchUrl = context.searchAdvancedUrl
					.replace(/\{0\}/gi, $.param(params))
					.replace(/\+/gi, '%20')
					.replace(/'/gi, '%27');
				$('#' + context.advancedSearchId).css('visibility', 'visible');
			} else {
				$('#' + context.advancedSearchId).css('visibility', 'hidden');
			}
		}

		// default to supporting inlineSearch though search.ready can override it
		context.supportsInlineSearch = true;

		setTimeout(function(){
			$.telligent.evolution.messaging.publish('search.ready', {
				init: function(settings) {
					var injectedSettings = $.extend({
						customResultRendering: false,
						initialQuery: ''
					}, settings);
					context.supportsInlineSearch = !injectedSettings.customResultRendering;
					if(injectedSettings.initialQuery !== null) {
						context.searchInput.val(injectedSettings.initialQuery);
					}
				}
			});
		}, 50);

		context.searchPopup = HeaderList({
			key: 'search',
			footerContent: context.searchFooterContent,
			activationInput: context.searchInput,
			endlessScroll: false,
			titleCount: false,
			showCount: false,
			cssClass: 'search',
			wrapper: context.banner,
			handheldBannerLinksCount: context.handheldBannerLinksCount,
			onShowLoadingIndicator: function() {
				return context.supportsInlineSearch;
			},
			onLoad: function(pageIndex, shouldRefreshUnreadCount, filter, complete) {
				if(!context.supportsInlineSearch)
					return;

				var effectiveSearchFilter = filter || getCurrentSearchFilters(context);

				// prevent empty searches
				if(!effectiveSearchFilter.query || effectiveSearchFilter.query.length == 0) {
					complete('');
					return;
				}

				var filter = $.grep(context.searchFilters, function(e) { return e.key == effectiveSearchFilter.type })[0];
				if (filter && filter.query) {
					filter.query({
							pageIndex: pageIndex,
							query: effectiveSearchFilter.query
						}, function(response) {
							complete(response);
							context.searchInput.addClass('with-results');

							if (!context.currentAdvancedSearchUrl) {
								$('#' + context.advancedSearchId).css('visibility', 'hidden');
							} else {
								$('#' + context.advancedSearchId).css('visibility', 'visible');
							}
						});
				} else {
					$.telligent.evolution.get({
						url: context.searchUrl,
						data: {
							w_pageIndex: pageIndex,
							w_query: effectiveSearchFilter.query,
							w_placeKey: effectiveSearchFilter.placeKey,
							w_placeValue: effectiveSearchFilter.placeValue,
							w_type: effectiveSearchFilter.type
						},
						success: function(response) {
							// show response
							complete(response);
							context.searchInput.addClass('with-results');
						}
					});
				}
			},
			onRefreshUnreadCount: function(complete) {
				complete(0);
			},
			onBuildFilter: function(filtered) {
				loadSearchPlaces(context);
				loadSearchFilters(context, context.searchPlaces.length > 0 ? context.searchPlaces[0] : { key: 'anywhere', value: 'anywhere' });

				var filterTemplate = $.telligent.evolution.template.compile(context.searchFilterTemplate),
					filterTemplateData = {
						contentTypeIds: '',
						applicationContentTypeIds: '',
						containerTypes: [],
						filters: context.searchFilters,
						places: context.searchPlaces
					};

				context.searchFilter = $('<div></div>').hide().appendTo('body');
				$(filterTemplate(filterTemplateData)).appendTo(context.searchFilter);

				var filter = $.grep(context.searchFilters, function(e) { return e.isDefault; })[0];
				if (filter) {
					context.searchFilter.find('a.type[data-key="' + filter.key + '"]').addClass('selected');
				} else {
					context.searchFilter.find('a.type:first').addClass('selected');
				}
				context.searchFilter.find('a.place:first').addClass('selected');
				context.searchFilter.on('click', 'a', function(e){
					e.preventDefault();
					e.stopPropagation();
					var target = $(e.target);
					target.closest('ul').find('a').removeClass('selected');
					target.addClass('selected');

					if (target.hasClass('place')) {
						var key = target.data('key'), value = target.data('value');

						loadSearchFilters(context, { key: key, value: value });
						context.searchFilter.empty().append($(filterTemplate({
							contentTypeIds: '',
							applicationContentTypeIds: '',
							containerTypes: [],
							filters: context.searchFilters,
							places: context.searchPlaces
						})));

						var filter = $.grep(context.searchFilters, function(e) { return e.isDefault; })[0];
						if (filter) {
							context.searchFilter.find('a.type[data-key="' + filter.key + '"]').addClass('selected');
						} else {
							context.searchFilter.find('a.type:first').addClass('selected');
						}
						context.searchFilter.find('a.place[data-key="' + key + '"][data-value="' + value + '"]').addClass('selected');
					}

					filtered(getCurrentSearchFilters(context));
				});

				var lastQuery = null;
				context.searchInput.on({
					input: util.throttle(function(e){
						var filter = getCurrentSearchFilters(context);
						if(filter.query == lastQuery) {
							e.preventDefault()
							return false;
						}
						lastQuery = filter.query;
						filtered(filter);
						if (document.URL.indexOf("com/search") == -1) {
						    $.telligent.evolution.messaging.publish('search.query', {
						        value: $.trim(context.searchInput.val())
						    });
						}
					}, 500),
					click: function(e) {
						if(!supportsTouch())
							return false;
					}
				});
				context.searchInput.on({
					input: function(e) {
						var filter = getCurrentSearchFilters(context);
						if(filter && filter.advancedSearchUrl)
							context.currentAdvancedSearchUrl = filter.advancedSearchUrl(filter.query);
						else
							setDefaultAdvancedSearchUrl(context);
					}
				});

				return context.searchFilter.show();
			},
			template: context.searchTemplate,
			onShow: function(activator, complete) {
				// make search open 100% wide, and 70% of the height of the viewport
				complete(buildShowSettings(context, activator, {
                    attachTo: context.searchInput,
                    width: 700,
					maxHeight: ($(global).height() * .7),
					cssClass: 'search-container'
				}));
			},
			onHide: function() {
				context.searchInput.removeClass('with-results');
			}
		});

		// advanced search
		function redirectToAdvancedSearch() {
			if(context.supportsInlineSearch && !context.currentAdvancedSearchUrl)
				setDefaultAdvancedSearchUrl(context);
			if(context.currentAdvancedSearchUrl)
				window.location = context.currentAdvancedSearchUrl;
		}
		$.telligent.evolution.messaging.subscribe(context.messagePrefix + 'advancedsearch', redirectToAdvancedSearch);

		// if not touch, support enter to use advanced search
		$(context.searchInput).on('keydown', function(e){
			if(e.which === 13) {
				if(!context.supportsInlineSearch || !$('body').hasClass('touch')) {
					e.preventDefault();
					e.stopPropagation();
					// if there's a selected item, redirect to it, otherwise redirect to advanced search
					var selectedItem = context.searchPopup.content().children('li.content-item.selected');
					if(selectedItem.length > 0) {
						selectedItem.click();
					} else {
                        // SiteCatalyst Tracking
					    _TrackSC(window.location, "Search");
						redirectToAdvancedSearch();
					}
					if($('body').hasClass('touch')) {
						context.searchInput.blur();
					}
					return false;
				} else {
					context.searchInput.blur();
					e.preventDefault();
					e.stopImmediatePropagation();
					return false;
				}
			};
		});

        // Click the search button goes to advanced search
        $(".search .field-item-input input[type=button]").on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            // SiteCatalyst Tracking
            _TrackSC(window.location, "Search");
            redirectToAdvancedSearch();

            if ($('body').hasClass('touch')) {
                context.searchInput.blur();
            }
            return false;
        });

		return context.searchPopup;
	}

	// returns show settings to use for header popups
	function buildShowSettings(context, activator, settings) {
		if($(window).width() <= 570) {
			return {
				attachTo: context.banner,
				width: context.banner.width(),
				maxHeight: $(global).height() / 2,
				containerCssClass: settings.containerCssClass
			};
		} else {
			return settings;
		}
	}

	function initSiteNavigation(context) {
		context.siteNavigationList = HeaderList({
			key: 'site',
			activationLink: context.siteNavigationLink,
			endlessScroll: true,
			titleCount: false,
			cssClass: ('site ' + (context.siteNavigationType === 'my_groups' ? 'group' : context.siteNavigationType) + ' ' + (context.siteNavigationType == 'custom' ? 'without-avatar' : '')),
			wrapper: context.banner,
			unreadCountMessagePlural: context.siteNavigationTitle,
			unreadCountMessageSingular: context.siteNavigationTitle,
			onLoad: function(pageIndex, shouldRefreshUnreadCount, filter,complete) {
				$.telligent.evolution.get({
					url: context.siteNavigationUrl,
					data: {
						w_siteNavigationType: context.siteNavigationType,
						w_pageIndex: pageIndex
					},
					success: function(response) {
						complete(response);
					}
				});
			},
			onRefreshUnreadCount: function(complete) {
				complete(0);
			},
			template: context.siteNavigationTemplate,
			onShow: function(activator, complete) {
				complete(buildShowSettings(context, activator, {}));
			}
		});

		if(context.siteNavigationCustomItems &&
			context.siteNavigationCustomItems.length > 0)
		{
			setTimeout(function(){
				$.telligent.evolution.messaging.publish('navigation.siteNavigationContent', {
					items: context.siteNavigationCustomItems
				});
			}, 100);
		}

		return context.siteNavigationList;
	}

	function initHandheldLinks(context) {
		var openHandheldContainer = null, activeLink, open = false;

		function registerHandheldLink(link, container, onShow, onHide) {
			link.on('click', function(e){
				e.preventDefault();
				if (openHandheldContainer && openHandheldContainer == container) {
					if(activeLink)
						activeLink.removeClass('active');
					onHide();
					open = false;
					if(openHandheldContainer)
						openHandheldContainer.hide();
					openHandheldContainer = null;
				} else if(openHandheldContainer) {
					if(activeLink)
						activeLink.removeClass('active');
					onHide();
					open = false;
					if(openHandheldContainer)
						openHandheldContainer.hide();
					openHandheldContainer = container;
				} else {
					openHandheldContainer = container;
				}
				if(openHandheldContainer !== null) {
					openHandheldContainer.show();
					onShow();
					open = true;
					if(activeLink)
						activeLink.removeClass('active');
					activeLink = link.addClass('active');
				} else {
					onShow();
					open = false;
					if(activeLink)
						activeLink.removeClass('active');
					activeLink = link.addClass('active');
				}
			});
		}

		registerHandheldLink(context.handheldSiteLinksLink, null,
			function(){
				context.handheldSiteLinksLink.addClass('active');
				context.siteNavigationLink.click();
			},
			function(){
				context.handheldSiteLinksLink.removeClass('active');
				context.siteNavigationLink.click();
			});
		registerHandheldLink(context.handheldSearchFieldsLink, context.handheldSearchFields,
			function(){
				context.searchFields.contents().appendTo(context.handheldSearchFields);
				// focus on search
				context.searchInput.focus();
				// scroll to top (iOS requires this... )
				global.scrollTo(0,0);
			},
			function(){ context.handheldSearchFields.contents().appendTo(context.searchFields); });
		registerHandheldLink(context.handheldBannerLinksLink, context.handheldBannerLinks,
			function(){ context.bannerLinks.contents().appendTo(context.handheldBannerLinks); },
			function(){ context.handheldBannerLinks.contents().appendTo(context.bannerLinks); });
	}

	var popupList = [];
	var popups = {};

	function registerPopup(popup, key) {
		var index = popupList.length;
		popupList.push(popup);
		popups[key] = {
			popup: popup,
			index: index
		};
	}

	function initKeyboardEvents(context) {
		var isActive = false;
		var currentIndex = null;

		$.telligent.evolution.messaging.subscribe(activateMessage, function(data){
			isActive = true;
			currentIndex = popups[data.key].index;
			if(data.key == 'search') {
				setTimeout(function(){
					context.searchInput.focus();
				}, 10)
			}
		});
		$.telligent.evolution.messaging.subscribe(deactivateMessage, function(data){
			if(data.key != 'search') {
				isActive = false;
			}
			clearInterval(testInterval);
		});
		var body = document.body,
			doc = document,
			win = window,
			currentSelection = null;

		var keys = {
			enter: 13,
			esc: 27,

			slash: 191,

			up: 38,
			p: 80,
			k: 75,

			down: 40,
			n: 78,
			j: 74,

			left: 37,
			right: 39,
			h: 72,
			l: 76
		};

		function blockKey(e) {
			e.preventDefault();
			e.stopPropagation();
		}

		$('body').on('click', function(e){
			var isBannerTarget = $(e.target).closest(context.wrapper + ', .popup-list').length > 0;
			if(!isBannerTarget) {
				var currentPopup = popupList[currentIndex];
				isActive = false;
				if(currentPopup)
					currentPopup.deactivate();
				context.searchInput.blur();
				currentSelection = null;
			}
		})

		$(document).on('keydown', function(e){
			var isWindowEvent = (e.target == body || e.target == doc || e.target == win);
			var isBannerEvent = $(e.target).closest(context.wrapper + ', .popup-list').length > 0;

			//var isBannerTarget = e.target
			// slash opens search
			if(!isActive && isWindowEvent && e.which == keys.slash) {
				blockKey(e);
				context.searchInput.focus();
				isActive = true;
				currentIndex = popups['search'].index;
			} else if(isActive) {
				var currentPopup = popupList[currentIndex];

				if(!isBannerEvent && !isWindowEvent) {
					isActive = false;
					if(currentPopup)
						currentPopup.deactivate();
					context.searchInput.blur();
					currentSelection = null;
					return true;
				}

				if(!currentPopup) {
					return true;
				}

				// hide on esc or slash in non input
				if(e.which == keys.esc || (e.which == keys.slash && isWindowEvent)) {
					blockKey(e);
					currentPopup.deactivate();
					context.searchInput.blur();
					isActive = false;
					currentSelection = null;
				}

				// left/right to change current open popup
				else if((e.which == keys.left && !(e.ctrlKey || e.metaKey)) ||
					(e.which == keys.h && currentPopup !== context.searchPopup)) {
					blockKey(e);
					currentPopup.deactivate();
					context.searchInput.blur();
					currentIndex--;
					if(currentIndex < 0) {
						currentIndex = popupList.length - 1;
					}

					currentPopup = popupList[currentIndex];
					currentPopup.activate();
				}
				else if((e.which == keys.right && !(e.ctrlKey || e.metaKey)) ||
					(e.which == keys.l && currentPopup !== context.searchPopup)) {
					blockKey(e);
					currentPopup.deactivate();
					context.searchInput.blur();
					currentIndex++;
					if(currentIndex >= popupList.length) {
						currentIndex = 0;
					}

					currentPopup = popupList[currentIndex];
					currentPopup.activate();
				}

				// up
				else if(e.which == keys.up ||
					((e.which == keys.p || e.which == keys.k) && (currentPopup !== context.searchPopup))) {
					blockKey(e);
					currentPopup.moveUp(function(item){
						currentSelection = item;
					});
				}

				// down
				else if(e.which == keys.down ||
					((e.which == keys.n || e.which == keys.j) && (currentPopup !== context.searchPopup))) {
					blockKey(e);
					currentPopup.moveDown(function(item){
						currentSelection = item;
					});
				}

				// select
				else if(e.which == keys.enter) {
					blockKey(e);
					if(currentSelection) {
						currentSelection.click();
					}
				}

			}
		});

	}

	var api = {
		register: function(context) {
			if(context.siteNavigationLink && context.siteNavigationLink.length > 0)
				registerPopup(initSiteNavigation(context), 'site');

			if(context.searchInput.length > 0)
				registerPopup(initSearchPopup(context), 'search');

			if(context.notificationsLink.length > 0)
				registerPopup(initNotificationList(context), 'notifications');

			if(context.conversationsLink.length > 0)
				registerPopup(initConversationList(context), 'conversations');

			if(context.bookmarksLink.length > 0)
				registerPopup(initBookmarksList(context), 'bookmarks');

			if(context.userLink.length > 0)
			    registerPopup(initUserPopup(context), 'user');

			initHandheldLinks(context);

			initKeyboardEvents(context);

		}
	};

	$.telligent = $.telligent || {};
	$.telligent.evolution = $.telligent.evolution || {};
	$.telligent.evolution.widgets = $.telligent.evolution.widgets || {};
	$.telligent.evolution.widgets.siteBanner = api;

}(jQuery, window));

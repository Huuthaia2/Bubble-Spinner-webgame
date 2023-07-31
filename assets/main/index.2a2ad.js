window.__require = function e(t, i, a) {
	function n(o, r) {
		if (!i[o]) {
			if (!t[o]) {
				var c = o.split("/");
				if (c = c[c.length - 1], !t[c]) {
					var h = "function" == typeof __require && __require;
					if (!r && h) return h(c, !0);
					if (s) return s(c, !0);
					throw new Error("Cannot find module '" + o + "'")
				}
				o = c
			}
			var l = i[o] = {
				exports: {}
			};
			t[o][0].call(l.exports, function(e) {
				return n(t[o][1][e] || e)
			}, l, l.exports, e, t, i, a)
		}
		return i[o].exports
	}
	for (var s = "function" == typeof __require && __require, o = 0; o < a.length; o++) n(a[o]);
	return n
}({
	1: [function(e, t) {
		function i() {
			this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
		}

		function a(e) {
			return "function" == typeof e
		}

		function n(e) {
			return "object" == typeof e && null !== e
		}

		function s(e) {
			return void 0 === e
		}
		t.exports = i, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._maxListeners = void 0, i.defaultMaxListeners = 10, i.prototype.setMaxListeners = function(e) {
			if ("number" != typeof e || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
			return this._maxListeners = e, this
		}, i.prototype.emit = function(e) {
			var t, i, o, r, c, h;
			if (this._events || (this._events = {}), "error" === e && (!this._events.error || n(this._events.error) && !this._events.error.length)) {
				if ((t = arguments[1]) instanceof Error) throw t;
				var l = new Error('Uncaught, unspecified "error" event. (' + t + ")");
				throw l.context = t, l
			}
			if (s(i = this._events[e])) return !1;
			if (a(i)) switch (arguments.length) {
				case 1:
					i.call(this);
					break;
				case 2:
					i.call(this, arguments[1]);
					break;
				case 3:
					i.call(this, arguments[1], arguments[2]);
					break;
				default:
					r = Array.prototype.slice.call(arguments, 1), i.apply(this, r)
			} else if (n(i))
				for (r = Array.prototype.slice.call(arguments, 1), o = (h = i.slice()).length, c = 0; c < o; c++) h[c].apply(this, r);
			return !0
		}, i.prototype.addListener = function(e, t) {
			var o;
			if (!a(t)) throw TypeError("listener must be a function");
			return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, a(t.listener) ? t.listener : t), this._events[e] ? n(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, n(this._events[e]) && !this._events[e].warned && (o = s(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners) && o > 0 && this._events[e].length > o && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
		}, i.prototype.on = i.prototype.addListener, i.prototype.once = function(e, t) {
			if (!a(t)) throw TypeError("listener must be a function");
			var i = !1;

			function n() {
				this.removeListener(e, n), i || (i = !0, t.apply(this, arguments))
			}
			return n.listener = t, this.on(e, n), this
		}, i.prototype.removeListener = function(e, t) {
			var i, s, o, r;
			if (!a(t)) throw TypeError("listener must be a function");
			if (!this._events || !this._events[e]) return this;
			if (o = (i = this._events[e]).length, s = -1, i === t || a(i.listener) && i.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
			else if (n(i)) {
				for (r = o; r-- > 0;)
					if (i[r] === t || i[r].listener && i[r].listener === t) {
						s = r;
						break
					} if (s < 0) return this;
				1 === i.length ? (i.length = 0, delete this._events[e]) : i.splice(s, 1), this._events.removeListener && this.emit("removeListener", e, t)
			}
			return this
		}, i.prototype.removeAllListeners = function(e) {
			var t, i;
			if (!this._events) return this;
			if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
			if (0 === arguments.length) {
				for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
				return this.removeAllListeners("removeListener"), this._events = {}, this
			}
			if (a(i = this._events[e])) this.removeListener(e, i);
			else if (i)
				for (; i.length;) this.removeListener(e, i[i.length - 1]);
			return delete this._events[e], this
		}, i.prototype.listeners = function(e) {
			return this._events && this._events[e] ? a(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
		}, i.prototype.listenerCount = function(e) {
			if (this._events) {
				var t = this._events[e];
				if (a(t)) return 1;
				if (t) return t.length
			}
			return 0
		}, i.listenerCount = function(e, t) {
			return e.listenerCount(t)
		}
	}, {}],
	AboutLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "f70f1fDpypPC6h0qTfzGdh5", "AboutLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			onLoad: function() {
				RES_M.getIsChinese() || (this._textTitle.$Label.string = RES_M.getText("title5")), this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale
			},
			onDestroy: function() {
				RES_M.releasePrefabByName("AboutLayer")
			},
			show: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow"), ADS_M.showIns()
			},
			_onBtnCloseTouchEnd: function() {
				this.node.active = !1, SOUND_M.playEffect(AppConstant.SOUND_PANEL)
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	ActionLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "5f554pf/uNPlo2wUK2YbMnl", "ActionLayer"), cc.Class({
			extends: cc.Component,
			properties: {
				goodsPre: cc.Prefab
			},
			onLoad: function() {
				this.node.scale = LocalData.gameScale, this._labelTips = this.node.getChildByName("_labelTips"), this.tipsLabel = this._labelTips.getComponent(cc.Label), this.tipsAnimation = this._labelTips.getComponent(cc.Animation)
			},
			onDestroy: function() {},
			showGoodsAction: function(e, t, i, a, n) {
				var s = cc.instantiate(this.goodsPre);
				s.parent = this.node, s.getComponent("GoodsNode").showAction(t, e, i, a, n)
			},
			showTips: function(e, t) {
				this._labelTips.stopAllActions(), this._labelTips.opacity = 255, this._labelTips.y = t.y, this.tipsLabel.string = RES_M.getText("tip" + e), this._labelTips.active = !0, this.tipsAnimation.play("Shake3");
				var i = this;
				cc.tween(this._labelTips).delay(.5).to(1, {
					y: t.y + 50,
					opacity: 0
				}).call(function() {
					i._labelTips.active = !1
				}).start()
			}
		}), cc._RF.pop()
	}, {}],
	AddFirendLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "2dee7XdcNBPp7v8HCEznpXB", "AddFirendLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {
				addFirendPre: cc.Prefab
			},
			onLoad: function() {
				this.firendUids = [], this.firendNames = [], this.firendNodes = [], RES_M.getIsChinese() || (this._textTitle.$Label.string = RES_M.getText("title7"), this._textRefush.$Label.string = RES_M.getText("t43")), this.content = this._svFirend.$ScrollView.content, this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, this.isFirst = !0
			},
			onDestroy: function() {
				RES_M.releasePrefabByName("AddFirendLayer")
			},
			show: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow"), NET_M.findFriend(this)
			},
			loadNetFriendData: function(e) {
				this.isFirst && (this.isFirst = !1, this.loadFirendData()), this.refushFirend(e)
			},
			refushFirend: function(e) {
				this.firendNames.length = 0, this.firendUids.length = 0;
				for (var t = 0; t < 10; t++) {
					var i = "",
						a = -1;
					if (t < e.length ? (i = e[t].name, a = e[t].uid) : i = "Bubbler" + Math.floor(1e4 + 1e6 * Math.random()), this.firendNames.push(i), this.firendUids.push(a), t < this.firendNodes.length) {
						var n = !0;
						if (-1 != a)
							for (var s = 0; s < LocalData.firendList.length; s++)
								if (-1 != LocalData.firendList[s].id && a == LocalData.firendList[s].uid) {
									n = !1;
									break
								} this.firendNodes[t].show(a, i, n, this)
					}
				}
			},
			loadFirendData: function() {
				for (var e = 0; e < 10; e++) this.createNode(e, -1, "");
				this.content.height = 655
			},
			addFirend: function(e, t) {
				if (LocalData.firendMaxDay > 0) {
					DataManager.setFirendMaxDay();
					var i = {};
					i.name = t, i.uid = e;
					var a = DataManager.addFirend(i);
					return EVENT_M.emit(EventNames.EVENT_UPDATEFIREND, a), EVENT_M.emit(EventNames.EVENT_SHOWTIPS, 17), !0
				}
				return EVENT_M.emit(EventNames.EVENT_SHOWTIPS, 18), !1
			},
			createNode: function(e, t, i) {
				var a = cc.instantiate(this.addFirendPre);
				a.parent = this.content, a.y = -65 * e - 35;
				var n = a.getComponent("AddFirendNode");
				n.show(t, i, !0, this), this.firendNodes.push(n)
			},
			_onBtnRefushTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), NET_M.findFriend(this)
			},
			_onBtnCloseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.node.active = !1
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	AddFirendNode: [function(e, t) {
		"use strict";
		cc._RF.push(t, "0ef0eUfKDBK356LMeoU24ik", "AddFirendNode");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			onLoad: function() {
				RES_M.getIsChinese() || (this._labelAdd.$Label.string = RES_M.getText("t44"))
			},
			show: function(e, t, i, a) {
				this.name = t, this.uid = e, this.addFirendJS = a, this._labelID.$Label.string = t, i ? this._btnAdd.$Button.interactable || (this._btnAdd.$Button.interactable = !0) : this._btnAdd.$Button.interactable && (this._btnAdd.$Button.interactable = !1)
			},
			_onBtnAddTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), this.addFirendJS.addFirend(this.uid, this.name) && (this._btnAdd.$Button.interactable = !1)
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	AddHeart: [function(e, t) {
		"use strict";
		cc._RF.push(t, "d069cP1KCFHd5Kq7+xp8szs", "AddHeart");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			onLoad: function() {
				this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, RES_M.getIsChinese() || (this._textTitle.$Label.string = RES_M.getText("title8"), this._textFullNeed.$Label.string = RES_M.getText("t26"), this._textFull.$Label.string = RES_M.getText("t23"), this._textBuman.$Label.string = RES_M.getText("t25"), this._textUseProp.$Label.string = RES_M.getText("t24"), this._textBu5.$Label.string = RES_M.getText("t20"), this._textBu25.$Label.string = RES_M.getText("t19"), this._textBu10.$Label.string = RES_M.getText("t45"), this._textUse5.$Label.string = RES_M.getText("t22"), this._textUse25.$Label.string = RES_M.getText("t22"), this._textFree.$Label.string = RES_M.getText("t46"), this._textBuy5.$Label.string = RES_M.getText("t5"), this._textBuy25.$Label.string = RES_M.getText("t5")), UIManager.isMiniGame() && (this._prop2.active = !1, this._prop3.position = this._prop2.position)
			},
			onDestroy: function() {
				nativeAdsHelper.checkHideBannerAds(), RES_M.releasePrefabByName("AddHeart")
			},
			ctor: function() {
				this.isClickBuman = !1, this.needStone = 0
			},
			show: function() {
				nativeAdsHelper.checkShowBannerAds(), ADS_M.showIns(), SOUND_M.playEffect(AppConstant.SOUND_PANEL), this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow"), this.checkHeartNum(), this.updateHeartNum(), this.propId1 = 7, this.propId2 = 8, this.propNum1 = LocalData.propNums[this.propId1 - 1], this.propNum2 = LocalData.propNums[this.propId2 - 1], this.checkPropNum()
			},
			hideNode: function() {
				this.node.active = !1, nativeAdsHelper.checkHideBannerAds()
			},
			checkPropNum: function() {
				0 == this.propNum1 ? (this._btnUse5.active = !1, this._btnBuy5.active = !0, this._imgNum5.active = !1, this._labelNum5.active = !1) : (this._btnUse5.active = !0, this._btnBuy5.active = !1, this._imgNum5.active = !0, this._labelNum5.active = !0, this._labelNum5.$Label.string = this.propNum1), 0 == this.propNum2 ? (this._btnUse25.active = !1, this._btnBuy25.active = !0, this._labelNum25.active = !1, this._imgNum25.active = !1) : (this._btnUse25.active = !0, this._btnBuy25.active = !1, this._imgNum25.active = !0, this._labelNum25.active = !0, this._labelNum25.$Label.string = this.propNum2)
			},
			checkHeartNum: function() {
				LocalData.heartNumMax > LocalData.heartNum ? (this.updateFullTime(DataManager.getNextGetHeartTime()), this._textFullNeed.active = !0, this._textFull.active = !1) : (this._textFullNeed.active = !1, this._textFull.active = !0)
			},
			updateFullTime: function(e) {
				var t = e + 300 * (LocalData.heartNumMax - LocalData.heartNum - 1),
					i = "",
					a = Math.floor(t / 3600),
					n = Math.floor(t / 60 % 60),
					s = Math.floor(t % 60);
				i = a < 10 ? i + "0" + a + ":" : i + a + ":", i = n < 10 ? i + "0" + n + ":" : i + n + ":", s < 10 ? i = i + "0" + s : i += s, this._labelTime.$Label.string = i
			},
			updateHeartNum: function() {
				this._labelHeart.$Label.string = LocalData.heartNum + "/" + LocalData.heartNumMax;
				var e = LocalData.heartNumMax - LocalData.heartNum;
				e > 0 && (this._labelNeed.$Label.string = 10 * e, this.needStone = 10 * e)
			},
			_onBtnCloseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.hideNode()
			},
			_onBtnUse5TouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), this.propNum1 > 0 && (EVENT_M.emit(EventNames.EVENT_ADDITEM, this.propId1, -1), EVENT_M.emit(EventNames.EVENT_ADDHEART, 5), this.propNum1 = LocalData.propNums[this.propId1 - 1], this.checkPropNum(), this.updateHeartNum(), adjustHelper.trackEvent(EventNames.EVENT_ADJUST_ENERGY5_USE))
			},
			_onBtnUse25TouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), this.propNum2 > 0 && (EVENT_M.emit(EventNames.EVENT_ADDITEM, this.propId2, -1), EVENT_M.emit(EventNames.EVENT_ADDHEART, 25), this.propNum2 = LocalData.propNums[this.propId2 - 1], this.checkPropNum(), this.updateHeartNum(), adjustHelper.trackEvent(EventNames.EVENT_ADJUST_ENERGY25_USE))
			},
			_onBtnFreeTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), cc.pppay.NativeUtils.showVideoAds(AppConstant.ADS_SHOPHEART, EventNames.EVENT_ADS_REWARD_ADD_HEART), adjustHelper.trackEvent(EventNames.EVENT_ADJUST_ENERGY5_ADS)
			},
			_onBtnBumanTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), this.isClickBuman || (LocalData.stoneNum >= this.needStone ? (this.isClickBuman = !0, EVENT_M.emit(EventNames.EVENT_DELETESTONE, -this.needStone), EVENT_M.emit(EventNames.EVENT_ADDHEART, LocalData.heartNumMax - LocalData.heartNum), this.updateHeartNum()) : (this.hideNode(), EVENT_M.emit(EventNames.EVENT_SHOWTIPS, 5), EVENT_M.emit(EventNames.EVENT_SHOWSHOP, 2)))
			},
			_onBtnBuy5TouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), LocalData.stoneNum >= 5 ? (EVENT_M.emit(EventNames.EVENT_DELETESTONE, -5), EVENT_M.emit(EventNames.EVENT_ADDITEM, this.propId1, 1), this.propNum1 = LocalData.propNums[this.propId1 - 1], this.checkPropNum(), adjustHelper.trackEvent(EventNames.EVENT_ADJUST_ENERGY5_BUY)) : (this.hideNode(), EVENT_M.emit(EventNames.EVENT_SHOWTIPS, 5), EVENT_M.emit(EventNames.EVENT_SHOWSHOP, 2))
			},
			_onBtnBuy25TouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), LocalData.stoneNum >= 25 ? (EVENT_M.emit(EventNames.EVENT_DELETESTONE, -25), EVENT_M.emit(EventNames.EVENT_ADDITEM, this.propId2, 1), this.propNum2 = LocalData.propNums[this.propId2 - 1], this.checkPropNum(), adjustHelper.trackEvent(EventNames.EVENT_ADJUST_ENERGY25_BUY)) : (this.hideNode(), EVENT_M.emit(EventNames.EVENT_SHOWTIPS, 5), EVENT_M.emit(EventNames.EVENT_SHOWSHOP, 2))
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	AdjustManager: [function(e, t) {
		"use strict";
		cc._RF.push(t, "9a4b1WNVVdGtoCecs/QejZl", "AdjustManager");
		var i = null,
			a = {
				data: null,
				getInstance: function() {
					return null == i && (i = this), i
				},
				trackEvent: function(e) {
					if (cc.sys.platform == cc.sys.ANDROID) {
						var t = this.getEventToken(e);
						jsb.reflection.callStaticMethod("org/cocos2dx/javascript/GlobalApplication", "trackEvent", "(Ljava/lang/String;)V", t)
					}
				},
				loadConfig: function() {
					var e = this;
					cc.resources.load("jsons/adjust", function(t, i) {
						t ? console.log("\u9519\u8bef\uff1a" + t) : e.data = i.json
					})
				},
				getEventToken: function(e) {
					for (var t = 0; t < this.data.length; t++)
						if (this.data[t].EVENT_NAME === e) return console.log("----adjust trackEventName = " + e + ", EventToken = " + this.data[t].EVENT_TOKEN), this.data[t].EVENT_TOKEN;
					return console.log("----adjust trackEventName = " + e + ", EventToken = null"), ""
				}
			};
		window.adjustHelper = a.getInstance(), cc._RF.pop()
	}, {}],
	AdsManager: [function(e, t) {
		"use strict";
		cc._RF.push(t, "eb8dd7vWBNEkJ1IvDLmTjit", "AdsManager");
		var i, a = (i = e("../sdk/FBAdManager")) && i.__esModule ? i : {
				default: i
			},
			n = null,
			s = {
				_showAdsNum: cc.Integer,
				_showOverAdsNum: cc.Integer,
				insAds: null,
				videoAds: null,
				bannerAd: null,
				platform: 0,
				index: cc.Integer,
				init: function() {
					this.windowWidth = 0, this.windowHeight = 0, this.isVideoClose = !1, this.bannerAd = null, this.insAds = null, this.videoAds = null, this._showAdsNum = 0, this.index = -1, this._showOverAdsNum = 0, this.isPreload = !1, this.gridAds = null, this.iconAd = null, this.nowBottomType = 0, this.isInitLiuhai = !1, this.screenHeight = 0
				},
				getInstance: function() {
					return null == n && (n = this).init(), n
				},
				initLiuhai: function() {
					if (this.isWECHAT()) {
						if (!this.isInitLiuhai) {
							this.isInitLiuhai = !0;
							var e = wx.getMenuButtonBoundingClientRect(),
								t = wx.getSystemInfoSync();
							this.screenHeight = e.top / t.screenHeight * 1136
						}
					} else this.screenHeight = 0
				},
				getLiuhaiHeight: function() {
					return this.screenHeight
				},
				preloadAds: function() {
					this.isPreload || (this.isPreload = !0, this.isWECHAT() && (this.winSize = wx.getSystemInfoSync()), 1 == this.platform && (window.wx = window.qq), this.platform, this.preloadBanner(), this.preloadIns(), this.preloadVideo())
				},
				showIns: function() {},
				showIns_fb: function() {
					this.showInterstitial()
				},
				showOverIns: function() {},
				showVideoAds: function() {
					var e = this;
					cc.sys.isNative && cc.sys.platform == cc.sys.ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showVideoStatic", "()V"), this.isWECHAT() && null != this.videoAds && this.videoAds.load().then(function() {
						return e.videoAds.show()
					}).catch(function(e) {
						return console.log(e.errMsg)
					}), "undefined" != typeof FBInstant ? AppConstant.FB_IG_Platform_Review ? cc.pppay.NativeUtils.seeSuccess(1) : this.fb_showRewardVideo(function(e) {
						cc.log("FBInstant=== showRewardVideo back data, rcv: ", e), 0 == e.code ? (cc.log("\u89c2\u770b\u6fc0\u52b1\u89c6\u9891\u5b8c\u6bd5"), cc.pppay.NativeUtils.seeSuccess(1), cc.pppay.NativeUtils.loadADSSuccess(1)) : cc.pppay.NativeUtils.seeSuccess(-1)
					}) : this.fb_showRewardVideo(function(e) {
						cc.log("!FBInstant === showRewardVideo back data, rcv: ", e), 0 == e.code ? (cc.log("\u89c2\u770b\u6fc0\u52b1\u89c6\u9891\u5b8c\u6bd5"), cc.pppay.NativeUtils.seeSuccess(1), cc.pppay.NativeUtils.loadADSSuccess(1)) : cc.pppay.NativeUtils.seeSuccess(-1)
					})
				},
				gotoApp: function(e) {
					cc.sys.isNative && cc.sys.platform == cc.sys.ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "gotoApp", "(I)V", e)
				},
				showInterstitial: function() {
					cc.sys.isNative && cc.sys.platform == cc.sys.ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showInstlStatic", "()V"), this.isWECHAT() && null != this.insAds && this.insAds.show().catch(function() {})
				},
				showBottomAds: function() {
					this.isWECHAT() && 0 == this.nowBottomType && (this.nowBottomType = 2, this.showBanner())
				},
				hideBottomAds: function() {
					cc.sys.platform === cc.sys.WECHAT_GAME && "undefined" != typeof wx && (1 == this.nowBottomType ? (this.nowBottomType = 0, this.hideGirdAds()) : 2 == this.nowBottomType && (this.nowBottomType = 0, this.hideBanner()))
				},
				showBanner: function() {
					cc.sys.isNative && cc.sys.platform == cc.sys.ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showBannerStatic", "()V"), cc.sys.platform === cc.sys.WECHAT_GAME && "undefined" != typeof wx && null != this.bannerAd && this.bannerAd.show().catch(function(e) {
						return console.log(e)
					})
				},
				hideBanner: function() {
					this.isWECHAT() && null != this.bannerAd && this.bannerAd.hide()
				},
				showGirdAds: function() {
					this.isWECHAT() && null != this.gridAds && this.gridAds.show().catch(function(e) {
						return console.log(e)
					})
				},
				hideGirdAds: function() {
					this.isWECHAT() && null != this.gridAds && this.gridAds.hide()
				},
				preloadBanner: function() {
					if (this.isWECHAT()) {
						var e = this;
						null == this.bannerAd && (this.bannerAd = window.wx.createBannerAd({
							adUnitId: "adunit-0d9b2779ebebddda",
							adIntervals: 30,
							style: {
								left: (e.winSize.windowWidth - 300) / 2,
								top: e.winSize.windowHeight - 80,
								width: 300
							}
						}), this.bannerAd.onResize(function() {
							e.bannerAd.style.left = e.winSize.windowWidth / 2 - 150 + .1, e.bannerAd.style.top = e.winSize.windowHeight - e.bannerAd.style.realHeight + .1
						}), this.bannerAd.onLoad(function() {}), this.bannerAd.onError(function() {
							e.bannerAd = null
						}))
					}
					"undefined" != typeof FBInstant && this.fb_addBanner()
				},
				preloadIns: function() {
					cc.sys.isNative && (cc.sys.platform, cc.sys.ANDROID), this.isWECHAT() && wx.createInterstitialAd && (this.insAds = wx.createInterstitialAd({
						adUnitId: "adunit-bf3a4826a910a2e5"
					}), this.insAds.onLoad(function() {
						console.log("\u63d2\u5c4f \u5e7f\u544a\u52a0\u8f7d\u6210\u529f")
					}), this.insAds.onError(function(e) {
						console.log(e)
					})), "undefined" != typeof FBInstant && (this.fb_addInterstitial(), this.fb_initAds())
				},
				showGameIcon: function() {
					var e = this;
					this.iconAd && this.iconAd.load().then(function() {
						e.iconAd.show()
					}).catch(function(e) {
						console.error(e)
					})
				},
				hideGameIcon: function() {
					this.iconAd && this.iconAd.hide()
				},
				preGameIcon: function() {
					if (cc.sys.platform === cc.sys.WECHAT_GAME && this.isWECHAT()) {
						var e = this;
						this.iconAd = wx.createGameIcon({
							adUnitId: "PBgAAdoeyi8EPph4",
							count: 5,
							style: []
						}, {}), this.iconAd.onLoad(function() {
							e.showGameIcon()
						}), this.iconAd.onResize(function() {
							e.iconAd.icons[0].appNameHidden = !0, e.iconAd.icons[1].appNameHidden = !0, e.iconAd.icons[2].appNameHidden = !0, e.iconAd.icons[3].appNameHidden = !0, e.iconAd.icons[4].appNameHidden = !0, e.iconAd.icons[0].left = 0, e.iconAd.icons[0].top = e.winSize.windowHeight / 2 - 40, e.iconAd.icons[1].left = 0, e.iconAd.icons[1].top = e.winSize.windowHeight / 2 + 20, e.iconAd.icons[2].left = 0, e.iconAd.icons[2].top = e.winSize.windowHeight / 2 + 80, e.iconAd.icons[3].left = 0, e.iconAd.icons[3].top = e.winSize.windowHeight / 2 + 140, e.iconAd.icons[4].left = 0, e.iconAd.icons[4].top = e.winSize.windowHeight / 2 + 200
						}), this.iconAd.onError(function() {
							e.iconAd = null
						})
					}
				},
				preloadGridAds: function() {
					if (this.isWECHAT()) {
						var e = this;
						this.gridAds = wx.createGridAd({
							adUnitId: "adunit-13641e575ffb750a",
							adTheme: "white",
							gridCount: 5,
							style: {
								left: (e.winSize.windowWidth - 330) / 2,
								top: e.winSize.windowHeight - 88,
								width: 330,
								opacity: .8
							}
						}), this.gridAds.onResize(function() {
							e.gridAds.style.left = e.winSize.windowWidth / 2 - 165 + .1, e.gridAds.style.top = e.winSize.windowHeight - e.gridAds.style.realHeight + .1
						}), this.gridAds && this.gridAds.onLoad(function() {}), this.gridAds.onError(function() {
							e.gridAds = null
						})
					}
				},
				onVideoClose: function() {
					this.isVideoClose || (this.isVideoClose = !0, this.videoAds && this.videoAds.onClose(function(e) {
						(e && e.isEnded || void 0 === e) && cc.pppay.NativeUtils.seeSuccess(1)
					}))
				},
				preloadVideo: function() {
					if (cc.sys.isNative && (cc.sys.platform, cc.sys.ANDROID), this.isWECHAT()) {
						var e = this;
						null == this.videoAds && (this.videoAds = wx.createRewardedVideoAd({
							adUnitId: "adunit-7a778762786dfcd6"
						}), this.videoAds.onError(function() {}), this.videoAds.onLoad(function() {
							e.onVideoClose(), cc.pppay.NativeUtils.loadADSSuccess(1)
						}))
					} else {
						if ("undefined" == typeof FBInstant) return;
						this.fb_addRewardedVideo(), this.fb_initAds()
					}
				},
				isWECHAT: function() {
					return cc.sys.platform === cc.sys.WECHAT_GAME && "undefined" != typeof wx
				},
				fb_showVideoByPopUI: function(e) {
					var t = this;
					UIManager.showVideoPopLayer(function() {
						t.fb_showRewardVideo(e)
					})
				},
				fb_showInterstialDoThing: function(e, t) {
					for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), n = 2; n < i; n++) a[n - 2] = arguments[n];
					e[t].apply(e, a), this.fb_showInterstitial(function(e) {
						0 != e.code && cc.log("showInterstial Error!")
					})
				},
				fb_preloadAds: function() {
					this.fb_addInterstitial(), this.fb_addRewardedVideo(), this.fb_initAds()
				},
				fb_addInterstitial: function() {},
				fb_addRewardedVideo: function() {},
				fb_initAds: function() {
					var e = this;
					a.default.loadAll().then(function() {
						e.fb_isRewardVideoReady() && cc.pppay.NativeUtils.loadADSSuccess(1)
					}).catch(function(e) {
						cc.log("\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", e)
					})
				},
				fb_isInterstitialReady: function() {
					return a.default.isInterstitialAdReady()
				},
				fb_isRewardVideoReady: function() {
					return a.default.isRewardedVideoReady()
				},
				fb_showInterstitial: function(e) {
					SOUND_M.pauseMusic(), AppConstant.curPlatform != AppConstant.PLATFORM_MINIGAME && DataManager.bFirstGame ? e && e({
						code: -1,
						data: {
							msg: "first game, no ad"
						}
					}) : this.fb_comAdBack("showInterstitial", e)
				},
				fb_showRewardVideo: function(e) {
					SOUND_M.pauseMusic(), this.fb_comAdBack("showRewardedVideo", function(t) {
						0 != t.code && UIManager.showPop_onlyClose(RES_M.getText("tip33")), e && e(t), SOUND_M.resumeMusicWithLocatData()
					})
				},
				fb_addBanner: function() {},
				fb_showBanner: function(e) {
					"undefined" == typeof FBInstant || FBInstant.loadBannerAdAsync ? this.fb_comAdBack("showBanner", e) : cc.log("no api, can not show banner")
				},
				fb_hideBanner: function(e) {
					"undefined" == typeof FBInstant || FBInstant.hideBannerAdAsync ? this.fb_comAdBack("hideBanner", e) : cc.log("no api, can not hide banner")
				},
				fb_comAdBack: function(e, t) {
					AppConstant.FB_IG_TEST ? t && t({
						code: 0,
						data: {
							msg: "ok"
						}
					}) : MiniGameAds[e]().then(function(e) {
						t && (t({
							code: 0,
							data: e
						}), SOUND_M.resumeMusicWithLocatData())
					}).catch(function(e) {
						t && (t({
							code: -1,
							data: e
						}), SOUND_M.resumeMusicWithLocatData())
					})
				},
				onLevelStart: function(e) {
					MiniGameEvent.onLevelStart(e)
				},
				onLevelFinished: function(e, t, i, a) {
					MiniGameEvent.onLevelFinished(e, t, i).then(function() {
						a && a()
					}).catch(function(e) {
						console.info("on Level finish error: ", e)
					})
				}
			};
		window.ADS_M = s.getInstance(), cc._RF.pop()
	}, {
		"../sdk/FBAdManager": "FBAdManager"
	}],
	AppConstant: [function(e, t) {
		"use strict";
		cc._RF.push(t, "34f1asStTNJhr6QHMvXRiMz", "AppConstant"), window.AppConstant = {
			version: "1.0.6",
			PLATFORM_IG: "FBIG",
			PLATFORM_MINIGAME: "MINIGAME",
			PLATFORM_KOREAN: "KOREAN",
			curPlatform: "MINIGAME",
			Game_Local_Test: !1,
			FB_IG_Platform_Review: !1,
			FB_IG_TEST: !1,
			Switch_Email: !1,
			Switch_RedBag: !1,
			Switch_Gift: !1,
			zIndex_PopLayer: 1e3,
			zIndex_NetLoading: 1001,
			zIndex_Tip: 1002,
			UnlockStarNums: [0, 0, 35, 55, 70, 100, 120, 145, 185],
			Scene_Name_Loading: "Loading",
			Scene_Name_Login: "Login",
			Scene_Name_Level: "Level",
			Scene_Name_Game: "Game",
			PropIdObj: {
				PropId_9: 9,
				PropId_10: 10
			},
			WinShowStarNum: 15,
			ShowReadBubbles: 6,
			Prefabs: {
				PopLayerCustom: "PopLayerCustom"
			},
			PopLayerCustomType: {
				one: 1,
				twoWithClose: 2,
				twoNoClose: 3,
				twoHaveClose: 4,
				onlyClose: 5
			},
			FB_AD_CountMax: 3,
			FB_ADS: {
				INTERSTITIAL: "4864743603539728_5070034729677280",
				REWARDED_VIDEO: "4864743603539728_5070034119677341",
				BANNER: "4864743603539728_5082905605056859"
			},
			SDK_NAME_LEWAN: "SDK_LEWAN",
			SDK_NAME_FB_IG: "SDK_FB_IG",
			SDK_ALL: {
				SDK_LEWAN: {
					isHaveLogin: !0,
					options: {
						appid: "BR230379242115578203",
						cid: "5056",
						uniquekey: "be5808802fbc68194cb776e26c9e04d1",
						channel: "100"
					}
				},
				SDK_FB_IG: {
					isHaveLogin: !1
				}
			},
			Now_SDK_Name: "SDK_FB_IG",
			BUBBLE_TYPE_NORMAL: 12,
			BUBBLE_TYPE_BOMB: 101,
			BUBBLE_TYPE_CAIHONG: 102,
			BUBBLE_TYPE_SUPER_BOMB: 103,
			BUBBLE_TYPE_IRON: 104,
			BUBBLE_TYPE_COIN: 201,
			BUBBLE_TYPE_DEATH: 301,
			BUBBLE_TYPE_VIRUS: 302,
			BUBBLE_TYPE_STONE: 303,
			BUBBLE_TYPE_ICE1: 304,
			BUBBLE_TYPE_ICE2: 305,
			IS_HAVE_CHARGER: !1,
			MAX_LEVEL: 90,
			B_SIZE: 36,
			B_SCALE: 1,
			VALUE_SPEED_CHANGE: 25.835,
			VALUE_SHOOTBUBBLE_SIZE: .6,
			B_RADIUS: 20.5,
			B_DISY: 20.5 * Math.sqrt(3),
			B_CENTER_DIS: 25,
			B_DISX: 41,
			B_SPEED: 20,
			BUBBLE_SPEED: 1200,
			ROTATE_INIT: 20,
			ROTATE_REDUCE: 1,
			ROTATE_LIMIT: 10,
			ROTATE_SUPER: 20,
			ROTATE_LIMIT_BOTTOM: .5,
			MUSIC_MAP: "map",
			MUSIC_GAME: "game",
			MUSIC_WIN: "win",
			MUSIC_FAIL: "fail",
			SOUND_AIMSHOOT: "aimShoot",
			SOUND_BOMB: "bomb",
			SOUND_BOMBSUPER: "bombSuper",
			SOUND_BREAKGLASS: "breakGlass",
			SOUND_BTN: "button",
			SOUND_BUYSUCC: "buySucc",
			SOUND_COMBO: ["combo2", "combo3", "combo4", "combo5", "combo6", "combo7", "combo8", "combo9"],
			SOUND_DANGER: "danger",
			SOUND_DROP: "drop",
			SOUND_GETSTAR: "getStar",
			SOUND_HIT: "hit",
			SOUND_HITDEATH: "hitDeath",
			SOUND_ICE: "ice",
			SOUND_INFECT: "infect",
			SOUND_PANEL: "panel",
			SOUND_RANDOMBORN: "randomBorn",
			SOUND_REBUILD: "rebuild",
			SOUND_REMOVE: "remove",
			SOUND_SHOOT: "shoot",
			SOUND_STAR1: "star1",
			SOUND_STAR2: "star2",
			SOUND_STAR3: "star3",
			SOUND_WORDS: "words",
			ADS_REDBAG: 0,
			ADS_SPIN: 2,
			ADS_GIFTSTONE: 1,
			ADS_GIFTHEART: 3,
			ADS_SHOPSTONE: 4,
			ADS_SHOPHEART: 5,
			ADS_GAMERE: 6,
			ADS_SIGN: 7,
			POS_HOME: "home",
			POS_RESULT: "result"
		}, cc._RF.pop()
	}, {}],
	Arrow: [function(e, t) {
		"use strict";
		cc._RF.push(t, "dbe4byaipZGQZ0yg1de2xdg", "Arrow"), cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function() {
				this.pos = this.node.getPosition(), this.isVisible = !1
			},
			setMaxWidth: function(e) {
				this.maxWidth = e
			},
			setTouchPos: function(e) {
				var t = e.sub(this.pos).mag(),
					i = e.sub(this.pos).signAngle(cc.v2(0, 1)),
					a = i / Math.PI * 180;
				if (Math.abs(a) >= 90) this.setTouchState(!1);
				else {
					this.node.angle = -a;
					var n = Math.abs(this.maxWidth / Math.cos(i - .5 * Math.PI));
					this.node.height = t + 140 > n ? n : t + 140, this.setTouchState(!0)
				}
			},
			getIsVisible: function() {
				return this.isVisible
			},
			setTouchState: function(e) {
				this.isVisible != e && (this.isVisible = e, this.node.active = e)
			}
		}), cc._RF.pop()
	}, {}],
	BagLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "a1a372V2AxLYLiQsIj6s058", "BagLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {
				itemPre: cc.Prefab
			},
			ctor: function() {
				this.showItemId = 0
			},
			onDestroy: function() {
				nativeAdsHelper.checkHideBannerAds(), RES_M.releasePrefabByName("Bag")
			},
			initBag: function() {
				this.propNum = [], this.items = new Array;
				for (var e = 0; e < LocalData.propNums.length; e++) this.items.push(null);
				for (e = 0; e < LocalData.propNums.length; e++) {
					var t = LocalData.propNums[e];
					this.propNum.push(t), t > 0 && (this.items[e] = this.createItem(e + 1))
				}
				this.adjustItemPos()
			},
			createItem: function(e) {
				var t = cc.instantiate(this.itemPre);
				t.parent = this._content;
				var i = t.getComponent("ItemNode");
				return i.initItem(1, {
					id: e,
					type: 0,
					num: LocalData.propNums[e - 1]
				}), t.name = "" + e, t.on("click", this.dealItemClick, this), i
			},
			onLoad: function() {
				this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, RES_M.getIsChinese() || (this._textTitle.$Label.string = RES_M.getText("title4"), this._labelUse.$Label.string = RES_M.getText("t22"))
			},
			show: function() {
				nativeAdsHelper.checkShowBannerAds(), ADS_M.showIns(), SOUND_M.playEffect(AppConstant.SOUND_PANEL), this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow")
			},
			hideNode: function() {
				this.node.active = !1, nativeAdsHelper.checkHideBannerAds()
			},
			checkBagNum: function() {
				for (var e = !1, t = 0; t < LocalData.propNums.length; t++) {
					var i = LocalData.propNums[t];
					0 != this.propNum[t] && this.propNum[t] < i || 0 != i && this.propNum[t] > i ? this.items[t].updateNum(i) : this.propNum[t] > 0 && 0 == i ? (this.items[t].node.destroy(), this.items[t] = null, e = !0) : 0 == this.propNum[t] && i > 0 && (this.node.opacity = 0, this.node.active = !0, this.items[t] = this.createItem(t + 1), this.hideNode(), this.node.opacity = 255, e = !0), this.propNum[t] = i
				}
				e && this.adjustItemPos()
			},
			adjustItemPos: function() {
				for (var e = 0, t = 0; t < this.items.length; t++) this.items[t] && (this.items[t].node.x = e % 3 * 130 - 130, this.items[t].node.y = 150 - 150 * Math.floor(e / 3), e++)
			},
			dealItemClick: function(e) {
				SOUND_M.playEffect(AppConstant.SOUND_BTN);
				var t = parseInt(e.node.name);
				this.showDes(t, RES_M.getText("des" + t), {
					x: e.node.x,
					y: e.node.y
				})
			},
			showDes: function(e, t, i) {
				this.showItemId == e ? (this.showItemId = 0, this._imgDes.active = !1) : (this.showItemId = e, this._labelDes.$Label.string = t, this._btnUse.active = e >= 6, this._imgDes.stopAllActions(), this._imgDes.$Animation.play("Shake3"), this._imgDes.x = i.x, this._imgDes.y = i.y + 20, this._imgDes.active = !0)
			},
			_onBtnUseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), this.showItemId > 5 && (7 == this.showItemId ? EVENT_M.emit(EventNames.EVENT_ADDHEART, 5) : 8 == this.showItemId && EVENT_M.emit(EventNames.EVENT_ADDHEART, 25), this.propNum[this.showItemId - 1] -= 1, DataManager.addItemNum(this.showItemId, -1), this.propNum[this.showItemId - 1] <= 0 ? (this.items[this.showItemId - 1].node.destroy(), this.items[this.showItemId - 1] = null, this.adjustItemPos(), this.showItemId = 0, this._imgDes.active = !1) : this.items[this.showItemId - 1].updateNum(this.propNum[this.showItemId - 1]))
			},
			_onBtnCloseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.hideNode(), this._imgDes.active = !1, this.showItemId = 0
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	Bubble: [function(e, t) {
		"use strict";
		cc._RF.push(t, "9ffb6x7pTlKtIBtJ1xzmtTe", "Bubble"), cc.Class({
			extends: cc.Component,
			properties: {
				_col: -1,
				_row: -1,
				_color: -1,
				_bubbleId: -1,
				_speedX: 0,
				_speedY: 0
			},
			ctor: function() {
				this.groupType = 2, this.isCheck = !1, this.isConnect = !1, this.isDanger = !1, this.ice1 = null, this.ice2 = null, this.iceNum = 0, this.bomb = null, this.isBomb = !1, this.isFrozen = !1, this.floorNum = 0
			},
			onLoad: function() {
				this.imgSprite = this.node.getChildByName("img").getComponent(cc.Sprite), this.throwJS = this.getComponent("Throw")
			},
			initBubble: function(e, t, i) {
				this._col = e, this._row = t, this._color = i || this._color, this._bubbleId = UIUtils.getOnlyId(this._col, this._row), this.setSpriteFrameByColor(this._color), this.node.zIndex = 1, this.isFrozen = !1, this.ice1 = null, this.ice2 = null, this.iceNum = 0
			},
			setFloorNum: function(e) {
				this.floorNum = e
			},
			getFloorNum: function() {
				return this.floorNum
			},
			initReadyBubble: function(e) {
				this._color = e, this.setSpriteFrameByColor(e), this.node.angle = 0, this.node.zIndex = 1, this.isFrozen = !1, this.ice1 = null, this.ice2 = null, this.iceNum = 0
			},
			initFlyBubble: function(e, t, i) {
				this._color = i, this._speedX = e, this._speedY = t, this.node.scale = 1, this.node.angle = 0, this.setSpriteFrameByColor(i), this.node.zIndex = 4, this.isFrozen = !1, this.ice1 = null, this.ice2 = null, this.iceNum = 0
			},
			initICEBubble: function(e, t, i, a) {
				this._col = e, this._row = t, this._color = i || this._color, this._bubbleId = UIUtils.getOnlyId(this._col, this._row), this.setSpriteFrameByColor(this._color), this.node.zIndex = 1, this.isFrozen = !0, 1 == a ? (this.iceNum = 1, this.ice1 = SpriteManager.createIce1Pre(), this.ice1.parent = this.node) : 2 == a && (this.iceNum = 2, this.ice1 = SpriteManager.createIce1Pre(), this.ice1.parent = this.node, this.ice1.active = !1, this.ice2 = SpriteManager.createIce2Pre(), this.ice2.parent = this.node)
			},
			setICEOpacity: function() {
				1 == this.iceNum && this.ice1 && (this.ice1.opacity = 125), 2 == this.iceNum && this.ice1 && this.ice2 && (this.ice2.opacity = 125, this.ice1.opacity = 125)
			},
			unFrozen: function() {
				var e = this;
				2 == this.iceNum && this.ice2 ? (this.iceNum = 1, this.ice1.active = !0, this.ice2.getComponent(cc.Animation).play("IceBreak2"), cc.tween(this.ice2).delay(.4).call(function() {
					SpriteManager.deleteIce2Pre(e.ice2), e.ice2 = null
				}).start()) : 1 == this.iceNum && this.ice1 && (this.iceNum = 0, this.ice1.getComponent(cc.Animation).play("IceBreak1"), cc.tween(this.ice1).delay(.4).call(function() {
					SpriteManager.deleteIce1Pre(e.ice1), e.ice1 = null
				}).start(), this.isFrozen = !1)
			},
			setSpriteFrameByColor: function(e) {
				this.imgSprite.node.opacity = 255, this.imgSprite.spriteFrame = SpriteManager.getBubbleSpriteByColor(e)
			},
			launchBubble: function() {
				this.node.scale = 1
			},
			openRemove: function(e, t) {
				this.throwJS.open(e, t)
			},
			removeBubble: function() {
				this.isDanger && this.removeWaring(), this.ice1 && (SpriteManager.deleteIce1Pre(this.ice1), this.ice1 = null), this.ice2 && (SpriteManager.deleteIce2Pre(this.ice2), this.ice2 = null), this.bomb && (SpriteManager.deleteBomb1Pre(this.bomb), this.bomb = null)
			},
			playShake: function() {
				this.imgSprite.node.stopAllActions(), cc.tween(this.imgSprite.node).to(.08333, {
					skewX: 10
				}).to(.08333, {
					skewX: 0
				}).to(.08333, {
					skewX: -10
				}).to(.08333, {
					skewX: 5
				}).to(.08333, {
					skewX: 0
				}).to(.08333, {
					skewX: -5
				}).to(.08333, {
					skewX: 2.5
				}).to(.08333, {
					skewX: 0
				}).to(.08333, {
					skewX: -2.5
				}).to(.08333, {
					skewX: 0
				}).start()
			},
			addWaring: function() {
				this.isDanger = !0, this.waringNode = SpriteManager.createWaringPre(), this.waringNode.zIndex = -1, this.waringNode.parent = this.node
			},
			removeWaring: function() {
				this.isDanger && this.waringNode && (this.isDanger = !1, SpriteManager.deleteWaringPre(this.waringNode), this.waringNode = null)
			},
			changeToBomb: function() {
				this._color = AppConstant.BUBBLE_TYPE_BOMB, this.bomb = SpriteManager.createBomb1Pre(), this.bomb.parent = this.node, this.bomb.getComponent(cc.Animation).play("ShowBomb"), this.isBomb = !0, this.imgSprite.node.opacity = 0
			},
			changeToRainbow: function() {
				this.changeToOtherBubble(AppConstant.BUBBLE_TYPE_CAIHONG)
			},
			changeToOtherBubble: function(e) {
				this._color, AppConstant.BUBBLE_TYPE_CAIHONG, this._color != e && (this._color = e, this.setSpriteFrameByColor(this._color))
			},
			playCaiHong: function() {},
			setSpeedX: function(e) {
				this._speedX = e
			},
			setSpeedY: function(e) {
				this._speedY = e
			},
			getSpeedX: function() {
				return this._speedX
			},
			getSpeedY: function() {
				return this._speedY
			},
			getIsFrozen: function() {
				return this.isFrozen
			},
			getIsDanger: function() {
				return this.isDanger
			},
			setIsDanger: function(e) {
				this.isDanger = e
			},
			getIsConnect: function() {
				return this.isConnect
			},
			setIsConnect: function(e) {
				this.isConnect = e
			},
			getIsCheck: function() {
				return this.isCheck
			},
			setIsCheck: function(e) {
				this.isCheck = e
			},
			getColor: function() {
				return this._color
			},
			getCol: function() {
				return this._col
			},
			getRow: function() {
				return this._row
			},
			getBubbleId: function() {
				return this._bubbleId
			}
		}), cc._RF.pop()
	}, {}],
	BuyProp: [function(e, t) {
		"use strict";
		cc._RF.push(t, "0a4e8zKIKpFpp648qu8W/sJ", "BuyProp");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			onLoad: function() {
				this._bg.width = cc.winSize.width, this._bg.height = cc.winSize.height
			},
			show: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow")
			},
			_onBtnCloseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.node.active = !1
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	DataManager: [function(e, t) {
		"use strict";
		var i;
		cc._RF.push(t, "d49c6lkHvxF97NiiiMWrdnx", "DataManager");
		var a = cc.Class(((i = {
			properties: {},
			ctor: function() {
				this._netData = {}, this.bFirstGame = !1
			},
			clear: function() {
				cc.sys.localStorage.clear()
			},
			initLocalData: function() {
				this.adsType = -1, LocalData.isFirst = this.readBool("isFirst", !0), LocalData.stoneNum = this.readInt("stone", 10), LocalData.heartNum = this.readInt("heart", 25), LocalData.heartNumMax = this.readInt("heartNumMax", 25), LocalData.maxLevelId = this.readInt("maxLevelId", 1), LocalData.isMusic = this.readBool("isMusic", !0), LocalData.isSoundEff = this.readBool("isSoundEff", !0), LocalData.isNewDay = this.readBool("isNewDay", !0), LocalData.keepDay = this.readInt("keepDay", 1), LocalData.isPassProp1 = this.readBool("isPassProp1", !1), LocalData.guideStep = this.readInt("guideStep", 1), LocalData.diyGuideStep = this.readInt("diyGuideStep", 1), LocalData.realEmailNum = this.readInt("realEmailNum", 0), LocalData.openLevelNum = this.readInt("openLevelNum", 0), LocalData.openRedBagNum = this.readInt("openRedBagNum", 0), LocalData.uid = this.readInt("uid", -1), LocalData.playerName = this.read("playerName", ""), LocalData.loadAdsNum = 0, LocalData.diyLevelPass = this.readInt("diyLevelPass", 0), LocalData.preTime = this.readInt("preTime", 0), LocalData.firendMaxDay = this.readInt("firendMaxDay", 10);
				for (var e = 1; e <= 8; e++) {
					var t = 5;
					6 == e ? t = 0 : 7 == e ? t = 3 : 8 == e && (t = 2), LocalData.propNums[e - 1] = this.readInt("propnum" + e, t)
				}
				for (e = 1; e <= LocalData.maxLevelId; e++) {
					var i = JSON.parse(this.read("level" + e, '{"star":0,"score":0}'));
					LocalData.levelData.push(i), LocalData.starNum += i.star
				}
				for (LocalData.diyLevelMax = this.readInt("diyLevelMax", 5), e = 1; e <= LocalData.diyLevelMax; e++) {
					var a = JSON.parse(this.read("diy" + e, '{"id":-1}'));
					null == a.id && (a = JSON.parse('{"id":-1}')), a.id, LocalData.diyLevels.push(a)
				}
				for (LocalData.firendNum = this.readInt("firendNum", 5), e = 1; e <= LocalData.firendNum; e++) {
					var n = JSON.parse(this.read("firend" + e, '{"id":-1}'));
					null == n.id && (n = JSON.parse('{"id":-1}')), n.id, LocalData.firendList.push(n), LocalData.firendSendList.push(this.readBool("firendSend" + e, !1))
				}
				for (LocalData.emailNum = this.readInt("emailNum", 5), e = 1; e <= LocalData.emailNum; e++) {
					var s = JSON.parse(this.read("email" + e, '{"id":-1}'));
					null == s.id && (s = JSON.parse('{"id":-1}')), s.id, LocalData.emailList.push(s)
				}
				if (this.isSameDay("nowDay") || this.setIsNewDay(!0), LocalData.isNextDay = !1, !this.isSameDay("newDay")) {
					for (LocalData.isNextDay = !0, LocalData.isFirst ? (LocalData.isFirst = !1, this.write("isFirst", !1), this.sendEmail(2)) : this.sendEmail(3), this.resetSameDayData("newDay"), LocalData.firendMaxDay = 10, this.write("firendMaxDay", 10), e = 1; e <= LocalData.firendNum; e++) this.write("firendSend" + e, !1), LocalData.firendSendList[e - 1] = !1;
					for (e = 0; e < LocalData.firendList.length && e < 30; e++) - 1 != LocalData.firendList[e].id && this.sendEmail(1, LocalData.firendList[e].name)
				}
			},
			initNetData: function(e) {
				this.setNetData(e), this.initLocalData()
			},
			setNetData: function(e) {
				console.log("in DataManager setNetData"), this._netData = e, void 0 === e.isFirst && (this.bFirstGame = !0)
			},
			updateNetData: function(e) {
				for (var t in e) this._netData[t] = e[t]
			},
			setUid: function(e) {
				LocalData.uid = e, this.write("uid", e)
			},
			setPlayerName: function(e) {
				LocalData.playerName = e, this.write("playerName", e)
			},
			addOpenLevel: function() {
				return LocalData.openLevelNum++, this.write("openLevelNum", LocalData.openLevelNum), LocalData.openLevelNum > 3 && LocalData.openLevelNum % 3 == 0
			},
			switchMusicOn: function() {
				LocalData.isMusic = !LocalData.isMusic, this.write("isMusic", LocalData.isMusic)
			},
			switchSoundEffOn: function() {
				LocalData.isSoundEff = !LocalData.isSoundEff, this.write("isSoundEff", LocalData.isSoundEff)
			},
			addOpenRedBag: function() {
				LocalData.openRedBagNum++, this.write("openRedBagNum", LocalData.openRedBagNum)
			},
			addDiyLevelPass: function() {
				LocalData.diyLevelPass++, this.write("diyLevelPass", LocalData.diyLevelPass), LocalData.diyLevelPass % 10 == 0 && this.sendEmail(6, LocalData.diyLevelPass)
			},
			passGuide: function() {
				LocalData.guideStep++, this.write("guideStep", LocalData.guideStep)
			},
			passDiyGuide: function() {
				LocalData.diyGuideStep++, this.write("diyGuideStep", LocalData.diyGuideStep)
			},
			sendHeart: function(e) {
				LocalData.firendSendList[e - 1] = !0, this.write("firendSend" + e, !0)
			},
			getIsSendHeart: function(e) {
				return LocalData.firendSendList[e - 1]
			},
			sendEmail: function(e, t) {
				if (!AppConstant.FB_IG_Platform_Review && AppConstant.Switch_Email) {
					var i = {};
					switch (i.type = e, e) {
						case 1:
							i.name = t, i.award = 10, i.num = 1;
							break;
						case 2:
							i.name = "GM", i.award = 9, i.num = 300;
							break;
						case 3:
							i.name = "GM", i.award = 9, i.num = 10;
							break;
						case 4:
							i.name = t, i.award = Math.floor(5 * Math.random()) + 1, i.num = 1;
							break;
						case 5:
							i.name = t, i.award = 9, i.num = 100;
							break;
						case 6:
							i.name = t, i.award = 9, i.num = 30
					}
					this.addEmail(i)
				}
			},
			deleteDiyLevel: function(e) {
				for (var t = 0; t < LocalData.diyLevels.length; t++)
					if (e == LocalData.diyLevels[t].id) return this.write("diy" + e, '{"id":-1}'), void(LocalData.diyLevels[t].id = -1)
			},
			setFirendMaxDay: function() {
				LocalData.firendMaxDay--, this.write("firendMaxDay", LocalData.firendMaxDay)
			},
			saveDiyLevel: function(e, t) {
				t.id = e, t.netId = LocalData.diyLevels[e - 1].netId, t.des = LocalData.diyLevels[e - 1].des, t.isModify = 1, this.write("diy" + e, JSON.stringify(t)), LocalData.diyLevels[e - 1] = t
			},
			shareDiyLevel: function(e, t, i) {
				LocalData.diyLevels[e - 1].netId = t, LocalData.diyLevels[e - 1].des = i, LocalData.diyLevels[e - 1].isModify = 0, this.write("diy" + e, JSON.stringify(LocalData.diyLevels[e - 1]))
			},
			setLevelModify: function(e, t) {
				LocalData.diyLevels[e - 1].isModify = t, this.write("diy" + e, JSON.stringify(LocalData.diyLevels[e - 1]))
			},
			addDiyLevel: function(e) {
				for (var t = 1; t <= LocalData.diyLevels.length; t++)
					if (-1 == LocalData.diyLevels[t - 1].id) return e.id = t, e.netId = -1, e.isModify = 0, e.des = "This is a best level!", this.write("diy" + t, JSON.stringify(e)), LocalData.diyLevels[t - 1] = e, t;
				return LocalData.diyLevelMax++, e.id = LocalData.diyLevelMax, e.netId = -1, e.isModify = 0, e.des = "This is a best level!", this.write("diy" + LocalData.diyLevelMax, JSON.stringify(e)), LocalData.diyLevels.push(e), this.write("diyLevelMax", LocalData.diyLevelMax), LocalData.diyLevelMax
			},
			deleteFirend: function(e) {
				for (var t = 0; t < LocalData.firendList.length; t++)
					if (e == LocalData.firendList[t].id) return this.write("firend" + e, '{"id":-1}'), LocalData.firendList[t].id = -1, this.write("firendSend" + e, !1), void(LocalData.firendSendList[t] = !1)
			},
			addFirend: function(e) {
				for (var t = 1; t <= LocalData.firendList.length; t++)
					if (-1 == LocalData.firendList[t - 1].id) return e.id = t, this.write("firend" + t, JSON.stringify(e)), LocalData.firendList[t - 1] = e, t;
				return LocalData.firendNum++, e.id = LocalData.firendNum, this.write("firend" + LocalData.firendNum, JSON.stringify(e)), LocalData.firendList.push(e), this.write("firendNum", LocalData.firendNum), LocalData.firendNum
			},
			deleteEmail: function(e) {
				for (var t = 0; t < LocalData.emailList.length; t++)
					if (e == LocalData.emailList[t].id) return this.write("email" + e, '{"id":-1}'), LocalData.emailList[t].id = -1, LocalData.realEmailNum--, LocalData.realEmailNum < 0 && (LocalData.realEmailNum = 0), void this.write("realEmailNum", LocalData.realEmailNum)
			},
			addEmail: function(e) {
				LocalData.realEmailNum++, this.write("realEmailNum", LocalData.realEmailNum);
				for (var t = 1; t <= LocalData.emailList.length; t++)
					if (-1 == LocalData.emailList[t - 1].id) return e.id = t, this.write("email" + t, JSON.stringify(e)), LocalData.emailList[t - 1] = e, t;
				return LocalData.emailNum++, e.id = LocalData.emailNum, this.write("email" + LocalData.emailNum, JSON.stringify(e)), LocalData.emailList.push(e), this.write("emailNum", LocalData.emailNum), LocalData.emailNum
			},
			setKeepDay: function(e) {
				(e > 7 || e < 1) && (e = 1), LocalData.keepDay = e, this.write("keepDay", e), this.setIsNewDay(!1), this.resetSameDayData("nowDay")
			},
			setIsNewDay: function(e) {
				LocalData.isNewDay = e, this.write("isNewDay", e)
			},
			setIsPassProp1: function(e) {
				LocalData.isPassProp1 = e, this.write("isPassProp1", e)
			},
			saveOverData: function(e, t, i) {
				if (e <= 0 || e > AppConstant.MAX_LEVEL) return this.addDiyLevelPass(), !1;
				e == LocalData.maxLevelId && (e % 5 == 0 && this.sendEmail(4, e), e % 10 == 0 && this.sendEmail(5, Math.floor(e % 10) + 1), LocalData.maxLevelId++, LocalData.maxLevelId > AppConstant.MAX_LEVEL && (LocalData.maxLevelId = AppConstant.MAX_LEVEL), this.write("maxLevelId", LocalData.maxLevelId), LocalData.levelData.push(JSON.parse('{"star":0,"score":0}')));
				var a = LocalData.levelData[e - 1],
					n = !1,
					s = !1;
				if (a.star < t && (LocalData.starNum = LocalData.starNum + (t - a.star), a.star = t, n = !0), a.score < i && (a.score = i, n = !0, s = !0), n) {
					var o = '{"star":' + a.star + ',"score":' + a.score + "}";
					LocalData.levelData[e - 1] = a, this.write("level" + e, o)
				}
				return s
			},
			addStone: function(e) {
				var t = LocalData.stoneNum + e;
				t < 0 && (t = 0), LocalData.stoneNum = t, this.write("stone", t)
			},
			addHeart: function(e) {
				this.write("heart", this.addHeartNoWrite(e))
			},
			addHeartNoWrite: function(e) {
				var t = LocalData.heartNum + e;
				return t < 0 ? t = 0 : t > 500 && (t = 500), e < 0 && t < LocalData.heartNumMax && LocalData.heartNum >= LocalData.heartNumMax && this.setPreTime(this.getCurrentTime()), LocalData.heartNum = t, t
			},
			addItemNum: function(e, t) {
				var i = LocalData.propNums[e - 1] + t;
				i < 0 && (i = 0), LocalData.propNums[e - 1] = i, this.write("propnum" + e, i)
			},
			setPreTime: function(e) {
				LocalData.preTime = e, this.write("preTime", e)
			},
			getNextGetHeartTime: function() {
				var e = this.getCurrentTime();
				if (LocalData.heartNum < LocalData.heartNumMax) {
					var t = LocalData.preTime + 300 - 1;
					return t - e < 0 ? (this.setPreTime(t), this.addHeart(1), 1) : t - e > 300 ? (this.setPreTime(t), this.addHeart(1), 1) : t - e
				}
				return 0
			},
			addHeartByTime: function() {
				for (var e = 1, t = 0, i = 0; 1 == e;) {
					var a = this.getCurrentTime();
					if (LocalData.heartNum < LocalData.heartNumMax) {
						if ((i = LocalData.preTime + 300 - 1) - a < 0 || i - a > 300) {
							LocalData.preTime = i, LocalData.heartNum++, t++, e = 1;
							continue
						}
						break
					}
					e = 0
				}
				0 != t && (cc.log("heart: ", t, " preTime:", i), "undefined" != typeof FBInstant ? NetDataManager.writeManyDataNoNet({
					heart: t,
					preTime: i
				}) : (this.write("heart", t), this.write("preTime", i)))
			},
			write: function(e, t) {
				null != e && null != t && ("undefined" != typeof FBInstant ? NetDataManager.write(e, t) : cc.sys.localStorage.setItem(e, t))
			},
			read: function(e, t) {
				var i = void 0 !== this._netData[e] ? this._netData[e] : cc.sys.localStorage.getItem(e);
				return null == i || 0 == i.length ? t : i
			},
			writeObj: function(e, t, i) {
				"object" == typeof t && (t = JSON.stringify(t, i)), this.write(e, t)
			},
			readObj: function(e, t) {
				var i = this.read(e, null);
				return i ? JSON.parse(i) : t
			},
			readInt: function(e, t) {
				var i = this.read(e, "" + t);
				return parseInt(i)
			},
			readBool: function(e, t) {
				var i = this.read(e, t);
				return "false" != i && ("true" == i || 1 == i)
			},
			readFloat: function(e, t) {
				var i = this.read(e, "" + t);
				return parseFloat(i)
			},
			getYMD: function() {
				var e = new Date,
					t = "";
				t += e.getUTCFullYear();
				var i = e.getUTCMonth() + 1,
					a = e.getUTCDate();
				return (t += i < 10 ? "0" + i : i) + (a < 10 ? "0" + a : a)
			},
			isSameDay: function(e) {
				var t = this.getYMD(),
					i = this.read(e, "");
				return null != i && 0 != i.length && t == i
			},
			resetSameDayData: function(e) {
				this.isSameDay(e) || this.write(e, this.getYMD())
			},
			getLastCountOnDay: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
					i = e + "Date";
				return this.isSameDay(i) || (this.write(e, t), this.resetSameDayData(i)), this.readInt(e, t)
			},
			useLastCountOnDay: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
					i = this.readInt(e, t);
				i -= t, i = Math.max(0, i), this.write(e, i)
			},
			getAddCountOnDay: function(e) {
				return this.isSameDay("SameDay" + e) || (this.resetSameDayData("SameDay" + e), this.write(e, 0)), this.readInt(e, 0)
			},
			addCountOnDay: function(e) {
				if (this.isSameDay("SameDay" + e)) {
					var t = this.readInt(e, 0);
					return this.write(e, t + 1), t + 1
				}
				return this.resetSameDayData("SameDay" + e), this.write(e, 1), 1
			},
			getDelayTime: function(e, t, i) {
				var a = this.readInt(e, 0),
					n = Date.now(),
					s = Math.floor(n / 1e3);
				return 0 == a ? (i && (s += t || 0), this.write(e, s), i ? t : 0) : (a -= s) < 0 ? 0 : a
			},
			setDelayTime: function(e, t) {
				var i = Date.now(),
					a = Math.floor(i / 1e3);
				a += t || 0, this.write(e, a)
			},
			getCurrentTime: function() {
				var e = Date.now();
				return Math.floor(e / 1e3)
			},
			getTimer: function(e) {
				var t = this.readInt(e, 0);
				return 0 == t ? (this.write(e, this.getCurrentTime()), 0) : this.getCurrentTime() - t
			},
			resetTimer: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
				this.write(e, this.getCurrentTime() - t)
			},
			getNextDayTime: function() {
				var e = new Date,
					t = e.setDate(e.getDate() + 2),
					i = new Date(t);
				return t = i.getUTCFullYear() + "/" + (i.getUTCMonth() + 1) + "/" + i.getUTCDate() + " 00:00:00", (new Date(t).getTime() - Date.now()) / 1e3
			}
		}).getYMD = function() {
			var e = this.getDateObjByNum(Date.now()),
				t = e.year.toString();
			return (t += e.month < 10 ? "0" + e.month : e.month.toString()) + (e.day < 10 ? "0" + e.day : e.day.toString())
		}, i.getDateObjByNum = function(e) {
			var t = new Date(e);
			return {
				year: t.getFullYear(),
				month: t.getMonth() + 1,
				day: t.getDate(),
				hour: t.getHours(),
				minutes: t.getMinutes(),
				seconds: t.getSeconds()
			}
		}, i.isSameDay = function(e) {
			var t = this.getYMD(),
				i = this.read(e, "");
			return null != i && 0 != i.length && t == i
		}, i.getShowLayerData = function(e, t) {
			var i = {
					name: e,
					prefabName: "",
					jsName: "",
					type: t,
					initFunName: "",
					zIndex: -1,
					bAddToThis: !1
				},
				a = {
					shopJS: ["ShopLayer", "ShopLayer", "initShop", 2, !0],
					bagJS: ["Bag", "BagLayer", "initBag", 2, !0],
					signJS: ["SignLayer", "SignLayer", "initSign", 2, !0],
					spinJS: ["SpinLayer", "SpinLayer", "", 2, !0],
					addHeartJS: ["AddHeart", "AddHeart", "", 2, !0],
					redBagJS: ["RedBagLayer", "RedBagLayer", "", 5, !0],
					editorJS: ["EditorLayer", "EditorLayer", "", 0, !0],
					myLevelJS: ["MyLevelLayer", "MyLevelLayer", "", 0, !0],
					firendJS: ["FirendLayer", "FirendLayer", "", 0, !0],
					addFirendJS: ["AddFirendLayer", "AddFirendLayer", "", 0, !0],
					emailJS: ["EmailLayer", "EmailLayer", "", 0, !0],
					emailViewJS: ["EmailViewLayer", "EmailViewLayer", "", 0, !0],
					guideJS: ["GuideLayer", "GuideLayer", "", 6, !0],
					giftJS: ["GiftLayer", "GiftLayer", "", 0, !0],
					SetNameLayer: ["SetNameLayer", "SetNameLayer", "", 0, !1],
					UploadLayer: ["UploadLayer", "UploadLayer", "", 0, !1],
					netPreviewJS: ["NetPreviewLayer", "NetPreviewLayer", "", 0, !0]
				};
			return i.prefabName = a[e][0], i.jsName = a[e][1], i.initFunName = a[e][2], i.zIndex = a[e][3], i.bAddToThis = a[e][4], i
		}, i));
		window.DataManager = new a, cc._RF.pop()
	}, {}],
	EditorBubble: [function(e, t) {
		"use strict";
		cc._RF.push(t, "e1a1eT6qipLYqZeAv6tUDp6", "EditorBubble"), cc.Class({
			extends: cc.Component,
			properties: {
				_col: 0,
				_row: 0,
				_color: 0
			},
			ctor: function() {
				this.isCheck = !1, this.isConnect = !1
			},
			onLoad: function() {
				this.imgSprite = this.getComponent(cc.Sprite)
			},
			start: function() {},
			initBubble: function(e, t) {
				this._col = e, this._row = t, this._color = 0
			},
			setColor: function(e, t) {
				this._color = e, this.imgSprite.spriteFrame = t
			},
			getCol: function() {
				return this._col
			},
			getRow: function() {
				return this._row
			},
			getColor: function() {
				return this._color
			},
			getIsConnect: function() {
				return this.isConnect
			},
			setIsConnect: function(e) {
				this.isConnect = e
			},
			getIsCheck: function() {
				return this.isCheck
			},
			setIsCheck: function(e) {
				this.isCheck = e
			}
		}), cc._RF.pop()
	}, {}],
	EditorLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "9aa18OmG/dHUKUssMs9nX8R", "EditorLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			show: function(e) {
				if (ADS_M.showIns(), this.node.active = !0, this.clearColor(), this.isSave = !1, 2 == LocalData.diyGuideStep && (EVENT_M.emit(EventNames.EVENT_SHOWGUIDE, 22, {
						x: 50,
						y: 50
					}), (e = {}).chessboard = [
						[-7, 0, 11],
						[-7, 7, 11],
						[-6, 0, 11],
						[-6, 6, 11],
						[-5, 0, 11],
						[-5, 5, 11],
						[-4, 0, 3],
						[-4, 1, 3],
						[-4, 2, 3],
						[-4, 3, 3],
						[-4, 4, 3],
						[-3, -1, 3],
						[-3, 0, 2],
						[-3, 1, 2],
						[-3, 2, 2],
						[-3, 3, 2],
						[-3, 4, 3],
						[-2, -2, 3],
						[-2, -1, 2],
						[-2, 0, 8],
						[-2, 1, 8],
						[-2, 2, 8],
						[-2, 3, 2],
						[-2, 4, 3],
						[-1, -3, 3],
						[-1, -2, 2],
						[-1, -1, 8],
						[-1, 2, 8],
						[-1, 3, 2],
						[-1, 4, 3],
						[0, -7, 11],
						[0, -6, 11],
						[0, -5, 11],
						[0, -4, 3],
						[0, -3, 2],
						[0, -2, 8],
						[0, 2, 8],
						[0, 3, 2],
						[0, 4, 11],
						[0, 5, 11],
						[0, 6, 11],
						[0, 7, 11],
						[1, -4, 3],
						[1, -3, 2],
						[1, -2, 8],
						[1, 1, 8],
						[1, 2, 2],
						[1, 3, 3],
						[2, -4, 3],
						[2, -3, 2],
						[2, -2, 8],
						[2, -1, 8],
						[2, 0, 8],
						[2, 1, 2],
						[2, 2, 3],
						[3, -4, 3],
						[3, -3, 2],
						[3, -2, 2],
						[3, -1, 2],
						[3, 0, 2],
						[3, 1, 3],
						[4, -4, 3],
						[4, -3, 3],
						[4, -2, 3],
						[4, -1, 3],
						[4, 0, 3],
						[5, -5, 11],
						[5, 0, 11],
						[6, -6, 11],
						[6, 0, 11],
						[7, -7, 11],
						[7, 0, 11]
					], e.id = 666), e) {
					var t, i, a;
					this._textCreat.$Label.string = RES_M.getText("t38"), this.isSave = 666 != e.id, this.levelId = e.id;
					for (var n = e.chessboard.length, s = 0; s < n; s++)
						if (t = e.chessboard[s][0], i = e.chessboard[s][1], a = e.chessboard[s][2], t + 7 < 15 && t + 7 >= 0 && i + 7 < 15 && i + 7 >= 0) {
							var o = this.bubbles[t + 7][i + 7];
							null != o && o.getColor() != a && o.setColor(a, this.getBubbleSpriteFrame(a))
						}
				} else this._textCreat.$Label.string = RES_M.getText("t39")
			},
			ctor: function() {
				this.nearPoint = [{
					col: -1,
					row: 0
				}, {
					col: -1,
					row: 1
				}, {
					col: 0,
					row: -1
				}, {
					col: 0,
					row: 1
				}, {
					col: 1,
					row: -1
				}, {
					col: 1,
					row: 0
				}], this.rootPoint = [{
					col: 0,
					row: -2
				}, {
					col: 0,
					row: 2
				}, {
					col: 1,
					row: -2
				}, {
					col: 1,
					row: 1
				}, {
					col: 2,
					row: -2
				}, {
					col: 2,
					row: -1
				}, {
					col: 2,
					row: 0
				}, {
					col: -1,
					row: -1
				}, {
					col: -1,
					row: 2
				}, {
					col: -2,
					row: 0
				}, {
					col: -2,
					row: 1
				}, {
					col: -2,
					row: 2
				}]
			},
			onLoad: function() {
				RES_M.getIsChinese() || (this._textPreview.$Label.string = RES_M.getText("t40")), this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, this.selectColor = 3, this.initBubble(), this.bubbleIds = [99, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 301, 302, 303, 304, 305], this.bubbleNodes = [], this.itemNodes = [], this.icons = [], this.locks = [], this.isLocks = [];
				for (var e = 0; e < this.bubbleIds.length; e++) {
					var t = this._bubbleLayer.getChildByName("b" + this.bubbleIds[e]);
					t.name = this.bubbleIds[e] + "", t.on("click", this.dealButtonClick, this), this.bubbleNodes.push(t), 0 != this.bubbleIds[e] || RES_M.getIsChinese() || (t.getComponent(cc.Sprite).spriteFrame = this.getBubbleSpriteFrame(0))
				}
				for (e = 1; e <= 5; e++) {
					var i = this["_item" + e];
					i.name = "item" + e, i.on("click", this.dealButtonClick, this), this.itemNodes.push(i), this.icons.push(i.getChildByName("item")), this.locks.push(i.getChildByName("lock")), this.isLocks.push(!1)
				}
			},
			onDestroy: function() {
				RES_M.releasePrefabByName("EditorLayer")
			},
			initBubble: function() {
				this.bubbles = new Array(15);
				for (var e = 0; e < 15; e++) {
					this.bubbles[e] = new Array(15);
					for (var t = 0; t < 15; t++) this.bubbles[e][t] = null
				}
				for (var i = -7; i <= 7; i++)
					for (var a = -7; a <= 7; a++)
						if (!(0 == i && Math.abs(a) <= 1 || 1 == i && (-1 == a || 0 == a) || -1 == i && (0 == a || 1 == a))) {
							var n = !0;
							if (i > 0) {
								for (e = 0; e < i; e++)
									if (a == 7 - e) {
										n = !1;
										break
									}
							} else if (i < 0)
								for (e = 0; e < Math.abs(i); e++)
									if (a == -7 + e) {
										n = !1;
										break
									} if (n) {
								var s = UIUtils.getPointByColRow(i, a),
									o = LSManager.createEditorBubblePre();
								o.parent = this._rotateNode, o.x = s.x, o.y = s.y;
								var r = o.getComponent("EditorBubble");
								r.initBubble(i, a), this.bubbles[i + 7][a + 7] = r, RES_M.getIsChinese() || r.setColor(0, this.getBubbleSpriteFrame(0))
							}
						}
			},
			clearColor: function() {
				for (var e = 0; e < 15; e++)
					for (var t = 0; t < 15; t++) {
						var i = this.bubbles[e][t];
						i && null != i && 0 != i.getColor() && i.setColor(0, this.getBubbleSpriteFrame(0))
					}
			},
			dealButtonClick: function(e) {
				for (var t = e.node.name, i = 0; i < this.bubbleIds.length; i++)
					if (t == this.bubbleIds[i]) return void this.setSelectColor(this.bubbleIds[i], e.node.x, e.node.y);
				for (i = 1; i <= 5; i++)
					if (t == "item" + i) return void this.setPropLock(i)
			},
			setPropLock: function(e) {
				this.isLocks[e - 1] ? (this.isLocks[e - 1] = !1, this.icons[e - 1].active = !0, this.locks[e - 1].active = !1) : (this.isLocks[e - 1] = !0, this.icons[e - 1].active = !1, this.locks[e - 1].active = !0)
			},
			setSelectColor: function(e, t, i) {
				99 == e && (e = -1), this.selectColor = e, this._select.$Sprite.spriteFrame = this.getBubbleSpriteFrame(e), this._ok.x = t, this._ok.y = i
			},
			getBubbleSpriteFrame: function(e) {
				var t = e;
				return 0 == e ? (t = "empty", RES_M.getIsChinese() || (t = "empty_en")) : -1 == e && (t = "102"), LSManager.getBubbleSpriteByColor(t + "")
			},
			_onBtnCloseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), this.node.active = !1
			},
			_onBtnCreatTouchEnd: function() {
				for (var e = this.createBubbleMap(), t = {
						chessboard: [],
						prepareColor: [],
						randomBorn: [],
						randomColor: [],
						randomShoot: [{
							num: 6,
							step: 6
						}, {
							num: 6,
							step: 5
						}, {
							num: 6,
							step: 4
						}, {
							num: 6,
							step: 3
						}, {
							num: 6,
							step: 2
						}, {
							num: 6,
							step: 1
						}]
					}, i = 0, a = 0, n = 0, s = 0; s < e.length; s++) {
					var o = [],
						r = e[s].color;
					o.push(e[s].col), o.push(e[s].row), o.push(r), t.chessboard.push(o);
					for (var c = !1, h = 0; h < t.prepareColor.length; h++)
						if (t.prepareColor[h] == r) {
							c = !0;
							break
						} 0 == i && r == AppConstant.BUBBLE_TYPE_ICE1 ? i = 1 : 0 == a && r == AppConstant.BUBBLE_TYPE_ICE2 ? a = 1 : -1 == r && n++, c || t.prepareColor.push(r)
				}
				var l = [3, 8, 11, 2, 12, 1, 4, 5, 6, 7, 9, 10],
					d = 0;
				if (1 == i && d++, 1 == a && d++, (d > 0 || n > 0) && t.prepareColor.length - d <= 3) {
					var u = t.prepareColor.length;
					for (u -= d, d > 1 && (u -= 1), s = 0; s < 5 - u; s++)
						for (h = 0; h < 12; h++) {
							c = !1;
							for (var p = 0; p < t.prepareColor.length; p++) l[h] == t.prepareColor[p] && (c = !0);
							if (!c) {
								t.prepareColor.push(l[h]);
								break
							}
						}
				}
				t.twoStarNum = Math.floor(.5 * t.chessboard.length);
				var _ = 0;
				this.isSave ? (_ = this.levelId, DataManager.saveDiyLevel(_, t)) : _ = DataManager.addDiyLevel(t), this.node.active = !1, 3 == LocalData.diyGuideStep && EVENT_M.emit(EventNames.EVENT_PASSDIYGUIDE), this.isSave ? EVENT_M.emit(EventNames.EVENT_UPDATEDIY, _) : EVENT_M.emit(EventNames.EVENT_ADDLEVELDATA, _), EVENT_M.emit(EventNames.EVENT_SHOWPREVIEW, 2, t)
			},
			createBubbleMap: function() {
				for (var e = 0; e < 15; e++)
					for (var t = 0; t < 15; t++) this.bubbles[e][t] && (this.bubbles[e][t].setIsCheck(!1), this.bubbles[e][t].setIsConnect(!1));
				for (e = 0; e < 12; e++) this.checkUnlinkBubble(this.rootPoint[e].col, this.rootPoint[e].row);
				var i = [];
				for (e = 0; e < 15; e++)
					for (t = 0; t < 15; t++) {
						var a = this.bubbles[e][t];
						a && a.getIsConnect() && i.push({
							col: a.getCol(),
							row: a.getRow(),
							color: a.getColor()
						})
					}
				return i
			},
			checkUnlinkBubble: function(e, t) {
				if (e + 7 < 15 && e + 7 >= 0 && t + 7 < 15 && t + 7 >= 0) {
					var i = this.bubbles[e + 7][t + 7];
					if (i && 0 != i.getColor() && !i.getIsCheck() && !i.getIsConnect()) {
						i.setIsCheck(!0), i.setIsConnect(!0);
						for (var a = 0; a < 6; a++) this.checkUnlinkBubble(this.nearPoint[a].col + e, this.nearPoint[a].row + t)
					}
				}
			},
			_onBtnPreviewTouchEnd: function() {
				EVENT_M.emit(EventNames.EVENT_SHOWPREVIEW, 1, this.createBubbleMap())
			},
			_onBtnClearTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), this.clearColor()
			},
			setColor: function(e, t) {
				this._select.x = e, this._select.y = t;
				var i = UIUtils.getColRowByPoint(e, t),
					a = i.col,
					n = i.row;
				if (a + 7 < 15 && a + 7 >= 0 && n + 7 < 15 && n + 7 >= 0) {
					var s = this.bubbles[a + 7][n + 7];
					null != s && s.getColor() != this.selectColor && (s.setColor(this.selectColor, this.getBubbleSpriteFrame(this.selectColor)), 2 == LocalData.diyGuideStep && (EVENT_M.emit(EventNames.EVENT_PASSDIYGUIDE), EVENT_M.emit(EventNames.EVENT_SHOWGUIDE, 23, {
						x: this._btnCreat.x,
						y: this._btnCreat.y
					})))
				}
			},
			_onBubbleLayerTouchStart: function(e, t) {
				var i = t.getLocation().sub(cc.v2(.5 * cc.winSize.width, this._bubbleLayer.y + .5 * cc.winSize.height));
				this._select.active = !0, this.setColor(i.x, i.y)
			},
			_onBubbleLayerTouchMove: function(e, t) {
				var i = t.getLocation().sub(cc.v2(.5 * cc.winSize.width, this._bubbleLayer.y + .5 * cc.winSize.height));
				this.setColor(i.x, i.y)
			},
			_onBubbleLayerTouchEnd: function() {
				this._select.active = !1
			},
			_onBubbleLayerTouchCancel: function() {
				this._select.active = !1
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	EmailLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "c8743rj5ZVB8JjvGnuDxg9X", "EmailLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {
				emailNodePre: cc.Prefab
			},
			onLoad: function() {
				this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, this.emailNodes = [], RES_M.getIsChinese() || (this._textTitle.$Label.string = RES_M.getText("title9")), this.content = this._svEmail.$ScrollView.content, this.loadEmailData()
			},
			onDestroy: function() {
				RES_M.releasePrefabByName("EmailLayer")
			},
			show: function() {
				ADS_M.showIns(), SOUND_M.playEffect(AppConstant.SOUND_PANEL), this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow")
			},
			loadEmailData: function() {
				this.myEmailNum = 0;
				for (var e = 0; e < LocalData.emailList.length; e++) - 1 != LocalData.emailList[e].id && (this.createNode(this.myEmailNum, LocalData.emailList[e].id), this.myEmailNum++);
				this.myEmailNum > 7 && (this.content.height = 460 + 65 * (this.myEmailNum - 7))
			},
			addEmailById: function(e) {
				this.createNode(this.myEmailNum, e), this.myEmailNum++, this.adjustContentHeight()
			},
			deleteEmailById: function(e) {
				-1 != LocalData.emailList[e - 1].id && DataManager.deleteEmail(e);
				for (var t = 0; t < this.emailNodes.length; t++)
					if (this.emailNodes[t].getId() == e) return this.emailNodes[t].node.destroy(), this.emailNodes.splice(t, 1), this.adjustPos(), this.myEmailNum--, this.adjustContentHeight(), void EVENT_M.emit(EventNames.EVENT_SHOWTIPS, 7)
			},
			adjustContentHeight: function() {
				this.myEmailNum > 7 ? this.content.height = 460 + 65 * (this.myEmailNum - 7) : this.content.height = 460
			},
			createNode: function(e, t) {
				var i = cc.instantiate(this.emailNodePre);
				i.parent = this.content, i.y = -65 * e - 35;
				var a, n = i.getComponent("EmailNode");
				a = 1 == LocalData.emailList[t - 1].type ? RES_M.getText("t42") : RES_M.getText("t41"), n.show(t, a, this), this.emailNodes.push(n)
			},
			adjustPos: function() {
				for (var e = 0; e < this.emailNodes.length; e++) this.emailNodes[e].node.y = -65 * e - 35
			},
			preViewEmail: function(e) {
				EVENT_M.emit(EventNames.EVENT_SHOWEMAIL, e)
			},
			receiveEmail: function(e) {
				var t = LocalData.emailList[e - 1];
				switch (t.award) {
					case 9:
						EVENT_M.emit(EventNames.EVENT_ADDSTONE, t.num);
						break;
					case 10:
						EVENT_M.emit(EventNames.EVENT_ADDHEART, t.num);
						break;
					default:
						EVENT_M.emit(EventNames.EVENT_ADDITEM, t.award, t.num)
				}
				this.deleteEmailById(e)
			},
			_onBtnAddTouchEnd: function() {},
			_onBtnCloseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.node.active = !1
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	EmailNode: [function(e, t) {
		"use strict";
		cc._RF.push(t, "f809dyXeRpHWKxlR1uzBagG", "EmailNode");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			onLoad: function() {
				RES_M.getIsChinese() || (this._labelSee.$Label.string = RES_M.getText("t47"))
			},
			show: function(e, t, i) {
				this.emailJS = i, this.id = e, this._labelID.$Label.string = t
			},
			getId: function() {
				return this.id
			},
			_onBtnSeeTouchEnd: function() {
				this.emailJS.preViewEmail(this.id)
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	EmailViewLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "89f2deMobROcaJ0GVrUTnYh", "EmailViewLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			onLoad: function() {
				this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, RES_M.getIsChinese() || (this._textTitle.$Label.string = RES_M.getText("title10"), this._textOk.$Label.string = RES_M.getText("t6"))
			},
			onDestroy: function() {
				RES_M.releasePrefabByName("EmailViewLayer")
			},
			show: function(e) {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.id = e, this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow");
				var t = LocalData.emailList[e - 1];
				this._textDes.$Label.string = UIUtils.createWithFormat(RES_M.getText("e" + t.type), [t.name, t.num, RES_M.getText("p" + t.award)])
			},
			_onBtnCloseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.node.active = !1
			},
			_onBtnOkTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), EVENT_M.emit(EventNames.EVENT_RECEIVEEMAIL, this.id), this.node.active = !1
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	EventManager: [function(e, t) {
		"use strict";
		cc._RF.push(t, "15990BEnERI94D6rA2g6nJ7", "EventManager");
		var i = e("events").EventEmitter;
		cc.Class({
			name: "EventManager",
			properties: {
				_eventEmitter: i
			},
			ctor: function() {
				this._eventEmitter = new i, this._eventEmitter.setMaxListeners(0)
			},
			on: function(e, t) {
				this._eventEmitter.on(e, t)
			},
			once: function(e, t) {
				this._eventEmitter.once(e, t)
			},
			emit: function(e, t, i) {
				t && i ? this._eventEmitter.emit(e, t, i) : t ? this._eventEmitter.emit(e, t) : this._eventEmitter.emit(e)
			},
			removeListener: function(e, t) {
				if (t) return this._eventEmitter.removeListener(e, t);
				this._eventEmitter.removeAllListeners(e)
			}
		}), cc._RF.pop()
	}, {
		events: 1
	}],
	EventNames: [function(e, t) {
		"use strict";
		cc._RF.push(t, "3e07cXW7ppAQKDWgEktAcj1", "EventNames"), window.EventNames = {
			EVENT_SHOWTIPS: "showTips",
			EVENT_SHOWGIFT: "showGift",
			EVENT_ADDITEM: "addItem",
			EVENT_DELETESTONE: "deleteStone",
			EVENT_DELETEHEART: "deleteHeart",
			EVENT_ADDSTONE: "addeStone",
			EVENT_ADDHEART: "addeHeart",
			EVENT_SHOWSETNAME: "showSetName",
			EVENT_UPDATEADDHEART: "updateAddHeartNum",
			EVENT_SHOWSHOP: "showShop",
			EVENT_RECEIVEAWARD: "receiveGiftAward",
			EVENT_RECEIVEAWARD_CLOSE: "receiveGiftAward_close",
			EVENT_PASSDIYGUIDE: "passDiyGuide",
			EVENT_SHOWGUIDE: "showGuideLayer",
			EVENT_REMOVENET: "removeNetLayer",
			EVENT_SHOWNET: "showNetLayer",
			EVENT_UPDATEDIY: "updateDiyLevel",
			EVENT_SPIN: "spin",
			EVENT_SIGNSUCC: "signSuccess",
			EVENT_CHANGESHOP: "changeShopType",
			EVENT_UPDATEFIREND: "updateFirend",
			EVENT_CHECKSPINREDP: "checkSpinRedP",
			EVENT_CHECKSIGNREDP: "checkSignRedP",
			EVENT_OPENRED: "openRedBag",
			EVENT_SHOWUPLOAD: "showUpload",
			EVENT_SHOWEMAIL: "showEmail",
			EVENT_RECEIVEEMAIL: "receiveEmail",
			EVENT_ADDLEVELDATA: "addLevelData",
			EVENT_SHOWPREVIEW: "showPreview",
			EVENT_SHOWEXIT: "showExit",
			EVENT_SHOWEDITOR: "showEditor",
			EVENT_SHOWNETPREVIEW: "showNetPreview",
			EVENT_REMOVENETPREVIEW: "removeNetPreview",
			EVENT_SHOWADDFIREND: "showAddFirend",
			EVENT_USECLICKPROP: "useClickProp",
			EVENT_RESURRECTION: "resurrection",
			EVENT_PASSGUIDE: "passGuide",
			BEGINGAME: "beginGame",
			EVENT_POPLAYER: "popLayer",
			EVENT_ADS_GAMEWIN: "ads_game_win",
			EVENT_ADS_BAG_TAG_TOUCH: "ads_bag_touch",
			EVENT_ADS_ADD_SHOP_TOUCH: "ads_shop_touch",
			EVENT_ADS_ADD_SIGN_TOUCH: "ads_sign_touch",
			EVENT_ADS_ADD_SPIN_TOUCH: "ads_spin_touch",
			EVENT_ADS_ADD_HEART_TOUCH: "ads_add_heart_touch",
			EVENT_ADS_ADD_STONE_TOUCH: "ads_add_stone_touch",
			EVENT_ADS_CHECK_HEART_IN_EXITLAYER: "check_heart_in_exitLayer",
			EVENT_ADS_CHECK_HEART_IN_FAILLAYER: "check_heart_in_failLayer",
			EVENT_ADS_CHECK_HEART_IN_WINLAYER: "check_heart_in_winLayer",
			EVENT_ADS_SIGN: "check_heart_SIGN",
			EVENT_ADS_REWARD_SPIN: "reward_spin",
			EVENT_ADS_REWARD_BAG: "reward_bag",
			EVENT_ADS_REWARD_GAMERE: "reward_gamere",
			EVENT_ADS_REWARD_GIFT_PACKAGE: "reward_gift_package",
			EVENT_ADS_REWARD_ADD_HEART: "reward_add_heart",
			EVENT_ADS_REWARD_ADD_STONE: "reward_add_stone",
			EVENT_ADS_WINNER_DOUBLE_AWARD: "winner_double_award",
			EVENT_ADJUST_ENERGY5_USE: "Energy5_use",
			EVENT_ADJUST_ENERGY5_BUY: "Energy5_buy",
			EVENT_ADJUST_ENERGY25_USE: "Energy25_use",
			EVENT_ADJUST_ENERGY25_BUY: "Energy25_buy",
			EVENT_ADJUST_ENERGY5_ADS: "Energy_ads",
			EVENT_ADJUST_DIAMOND10_ADS: "Diamond10_ads",
			EVENT_ADJUST_FREEDIAMOND20_ADS: "Freediamond20_ads",
			EVENT_ADJUST_LOTTERY_ADS: "Lottery_ads",
			EVENT_ADJUST_RAINBOW_USE: "Rainbow_use",
			EVENT_ADJUST_RAINBOW_BUY: "Rainbow_buy",
			EVENT_ADJUST_AIM_USE: "Aim_use",
			EVENT_ADJUST_AIM_BUY: "Aim_buy",
			EVENT_ADJUST_BOMB_USE: "Bomb_use",
			EVENT_ADJUST_BOMB_BUY: "Bomb_buy",
			EVENT_ADJUST_CONTINUE_CLICK: "Continue_click",
			EVENT_ADJUST_SWITCH_BUY: "Rolling_buy",
			EVENT_ADJUST_PERSPECTIVE_USE: "Perspective_use",
			EVENT_ADJUST_PERSPECTIVE_BUY: "Perspective_buy",
			EVENT_ADJUST_CONTINUE_ADS: "Continue_ads",
			EVENT_ADJUST_AGAIN_CLICK: "Again_click"
		}, cc._RF.pop()
	}, {}],
	ExitLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "c590bZG7BNE3oNaQgWNYyVw", "ExitLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			onLoad: function() {
				this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, RES_M.getIsChinese() || (this._textTitle.$Label.string = RES_M.getText("title6"), this._textExit.$Label.string = RES_M.getText("t12")), EVENT_M.on(EventNames.EVENT_ADS_CHECK_HEART_IN_EXITLAYER, this.loadScene.bind(this))
			},
			onDestroy: function() {
				EVENT_M.removeListener(EventNames.EVENT_ADS_CHECK_HEART_IN_EXITLAYER), RES_M.releasePrefabByName("ExitLayer")
			},
			show: function() {
				ADS_M.showIns(), SOUND_M.playEffect(AppConstant.SOUND_PANEL), this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow")
			},
			checkHeart: function() {
				if (cc.log("now LocalData.heartNum: ", LocalData.heartNum), LocalData.heartNum >= 5) DataManager.addHeart(-5), UIManager.enterGame();
				else {
					if (cc.sys.platform == cc.sys.ANDROID) return void nativeAdsHelper.showRewardedVideo(AppConstant.EVENT_ADS_CHECK_HEART_IN_EXITLAYER);
					"undefined" != typeof FBInstant ? UIManager.isNeedSecondLevelPop() ? ADS_M.fb_showVideoByPopUI(function(e) {
						0 == e.code && UIManager.enterGame()
					}) : ADS_M.fb_showRewardVideo(function(e) {
						0 === e.code ? UIManager.enterGame() : console.error("\u89c6\u9891\u64ad\u653e\u5931\u8d25:", e)
					}) : cc.log("\u7ea2\u5fc3\u4e0d\u8db3")
				}
			},
			loadScene: function() {
				UIManager.enterGame()
			},
			_onBtnCloseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.node.active = !1
			},
			_onBtnReplayTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), this.checkHeart()
			},
			_onBtnExitTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), cc.director.loadScene("Level")
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	FBAdManager: [function(e, t, i) {
		"use strict";

		function a(e, t) {
			e.prototype = Object.create(t.prototype), e.prototype.constructor = e, n(e, t)
		}

		function n(e, t) {
			return (n = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}
		cc._RF.push(t, "9ab08Jo3kxDcJx4h7hByHEi", "FBAdManager"), i.__esModule = !0, i.default = void 0;
		var s, o, r = function(e, t, i, a) {
			return new(i || (i = Promise))(function(n, s) {
				function o(e) {
					try {
						c(a.next(e))
					} catch (t) {
						s(t)
					}
				}

				function r(e) {
					try {
						c(a.throw(e))
					} catch (t) {
						s(t)
					}
				}

				function c(e) {
					var t;
					e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
						e(t)
					})).then(o, r)
				}
				c((a = a.apply(e, t || [])).next())
			})
		};

		function c(e) {
			var t = "NONE";
			switch (e) {
				case o.NEW:
					t = "NEW";
					break;
				case o.LOADING:
					t = "LOADING";
					break;
				case o.LOADED:
					t = "LOADED";
					break;
				case o.PLAYING:
					t = "PLAYING"
			}
			return t
		}

		function h(e, t) {
			return r(this, void 0, void 0, regeneratorRuntime.mark(function i() {
				return regeneratorRuntime.wrap(function(i) {
					for (;;) switch (i.prev = i.next) {
						case 0:
							return i.abrupt("return", new Promise(function(i) {
								setTimeout(function() {
									t && t(), i()
								}, 1e3 * e)
							}));
						case 1:
						case "end":
							return i.stop()
					}
				}, i)
			}))
		}(function(e) {
			e[e.INTERSTITIAL = 0] = "INTERSTITIAL", e[e.REWARDED_VIDEO = 1] = "REWARDED_VIDEO", e[e.BANNER = 2] = "BANNER"
		})(s || (s = {})),
		function(e) {
			e[e.NONE = 0] = "NONE", e[e.NEW = 1] = "NEW", e[e.LOADING = 2] = "LOADING", e[e.LOADED = 3] = "LOADED", e[e.PLAYING = 4] = "PLAYING"
		}(o || (o = {}));
		var l = {
				code: "EXCEED_MAX_AD_INSTANCE",
				message: "\u5e7f\u544a\u5bf9\u8c61\u4e0d\u5141\u8bb8\u8d85\u8fc7 3"
			},
			d = {
				code: "NO_READY_AD_INSTANCE",
				message: "\u6ca1\u6709\u52a0\u8f7d\u5b8c\u6bd5\u7684\u5e7f\u544a\uff0c\u6216\u8005\u5e7f\u544a\u64ad\u653e\u592a\u9891\u7e41"
			},
			u = {
				code: "NOT_READY_FOR_LOAD",
				message: "\u5f53\u524d\u72b6\u6001\u4e0d\u5141\u8bb8\u518d\u6b21\u52a0\u8f7d"
			},
			p = {
				code: "AD_IS_LOADING",
				message: "\u5e7f\u544a\u6b63\u5728\u52a0\u8f7d"
			},
			_ = {
				code: "NOT_READY_FOR_PLAYING",
				message: "\u6ca1\u6709\u53ef\u4ee5\u64ad\u653e\u7684\u5e7f\u544a"
			},
			E = {
				code: "AD_IS_PLAYING",
				message: "\u5e7f\u544a\u6b63\u5728\u64ad\u653e"
			},
			m = {
				code: "NO_BANNER_AD",
				message: "\u6ca1\u6709\u6dfb\u52a0Banner\u5e7f\u544a"
			},
			f = {
				code: "API_NOT_SUPPORT",
				message: "\u5e7f\u544a\u63a5\u53e3\u4e0d\u652f\u6301"
			},
			g = {
				code: "TOO_FAST_SHOW",
				message: "\u5e7f\u544a\u64ad\u653e\u592a\u9891\u7e41"
			},
			N = {
				code: "NOT_PLAYING",
				message: "\u5e7f\u544a\u6ca1\u6709\u64ad\u653e"
			},
			S = {
				code: "TOO_MANY_ERRORS",
				message: "\u592a\u591a\u9519\u8bef, \u505c\u6b62\u64cd\u4f5c"
			};

		function b(e, t, i) {
			return e && void 0 !== e[t] ? e[t] : i
		}
		var v = function() {
				function e(e, t) {
					this._lastShowTime = 0, this._refreshInterval = 0, this._refreshInterval = e > 0 ? e : 0, this._lastShowTime = 0, t > 0 && (this._lastShowTime = Date.now() + 1e3 * t - 1e3 * this._refreshInterval)
				}
				var t = e.prototype;
				return t.isReadyToRefresh = function() {
					return this.getNextRefreshInterval() <= 0
				}, t.getNextRefreshInterval = function() {
					var e = 0;
					if (this._refreshInterval > 0 && this._lastShowTime > 0) {
						var t = Date.now();
						e = this._refreshInterval - (t - this._lastShowTime) / 1e3
					}
					return e
				}, t.updateLastShowTime = function() {
					this._lastShowTime = Date.now()
				}, e
			}(),
			y = function() {
				function e(e, t, i, a) {
					this._maxLoadError = 0, this._errorCounter = 0, this._fatalError = !1, this._sharedTimer = null, this._adId = e, this._state = o.NONE, this._type = t, this._sharedTimer = i, this._fatalError = !1, console.assert(!!i, "sharedTimer is invalid", i), this._maxLoadError = b(a, "maxLoadError", 0)
				}
				var t = e.prototype;
				return t.getStateName = function() {
					return c(this._state)
				}, t.getAdTypeName = function() {
					return this._type == s.INTERSTITIAL ? "\u63d2\u5c4f\u5e7f\u544a" : this._type == s.REWARDED_VIDEO ? "\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a" : this._type == s.BANNER ? "Banner" : "UNKNOWN"
				}, t.getInfo = function() {
					return "[" + this.getAdTypeName() + ":" + this._adId + ":" + this.getStateName() + "]"
				}, t.isReadyToRefresh = function() {
					return this._sharedTimer.isReadyToRefresh()
				}, t.getNextRefreshInterval = function() {
					return this._sharedTimer.getNextRefreshInterval()
				}, t.updateLastShowTime = function() {
					this._sharedTimer.updateLastShowTime()
				}, t.increaseErrorCounter = function() {
					this._errorCounter++
				}, t.resetErrorCounter = function() {
					this._errorCounter = 0
				}, t.setFatalError = function() {
					this._fatalError = !0
				}, t.isErrorTooMany = function() {
					return this._fatalError || this._maxLoadError > 0 && this._errorCounter >= this._maxLoadError
				}, e
			}(),
			L = function(e) {
				function t(t, i, a, n) {
					var s;
					return (s = e.call(this, t, i, a, n) || this)._adInstance = null, s._autoLoadOnPlay = b(n, "autoLoadOnPlay", !1), s
				}
				a(t, e);
				var i = t.prototype;
				return i.loadAsync = function() {
					return r(this, void 0, void 0, regeneratorRuntime.mark(function e() {
						var t;
						return regeneratorRuntime.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									if (null != this._adInstance) {
										e.next = 14;
										break
									}
									if (this._state != o.NONE) {
										e.next = 10;
										break
									}
									return this._state = o.NEW, console.log("\u83b7\u53d6\u5e7f\u544a\u5bf9\u8c61: " + this.getInfo()), e.next = 6, this.createAdInstanceAsync(this._adId);
								case 6:
									this._adInstance = e.sent, console.log("this._adInstance :>> ", this._adInstance), e.next = 12;
									break;
								case 10:
									return console.log("\u5f53\u524d\u72b6\u6001\u672a\u6ee1\u8db3\u52a0\u8f7d\u6761\u4ef6, \u6b63\u5728\u83b7\u53d6\u5e7f\u544a\u5bf9\u8c61: " + this.getInfo()), e.abrupt("return", !1);
								case 12:
									e.next = 14;
									break;
								case 14:
									if (this._state == o.NEW) {
										e.next = 22;
										break
									}
									if (console.log("\u5f53\u524d\u72b6\u6001\u672a\u6ee1\u8db3\u52a0\u8f7d\u6761\u4ef6: " + this.getInfo()), this._state != o.LOADING) {
										e.next = 21;
										break
									}
									throw console.log("\u5e7f\u544a\u6b63\u5728\u52a0\u8f7d\u4e2d\uff0c\u4e0d\u8981\u91cd\u590d\u52a0\u8f7d" + this.getInfo()), p;
								case 21:
									throw u;
								case 22:
									if (!this.isErrorTooMany()) {
										e.next = 25;
										break
									}
									throw console.log("\u592a\u591a\u9519\u8bef\uff0c\u505c\u6b62\u52a0\u8f7d: " + this.getInfo()), S;
								case 25:
									return e.prev = 25, this._state = o.LOADING, console.log("\u5f00\u59cb\u52a0\u8f7d\u5e7f\u544a: " + this.getInfo()), e.next = 30, this._adInstance.loadAsync();
								case 30:
									return this._state = o.LOADED, this.resetErrorCounter(), console.log("\u5e7f\u544a\u52a0\u8f7d\u6210\u529f: " + this.getInfo()), e.abrupt("return", !0);
								case 36:
									throw e.prev = 36, e.t0 = e.catch(25), console.error("\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25: " + this.getInfo(), e.t0), "ADS_NO_FILL" == e.t0.code ? (console.error("\u5e7f\u544a\u65e0\u6cd5\u586b\u5145\uff0c\u4e0d\u518d\u7ee7\u7eed\u8bf7\u6c42: " + this.getInfo()), this.setFatalError()) : (this.increaseErrorCounter(), this._state = o.NEW, t = 10 * this._errorCounter + 1, console.log("\u5ef6\u8fdf" + t + "\u79d2\u540e, \u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d: " + this.getInfo()), h(t, this.loadAsync.bind(this))), e.t0;
								case 41:
								case "end":
									return e.stop()
							}
						}, e, this, [
							[25, 36]
						])
					}))
				}, i.isReady = function() {
					return console.log("isReady _adInstance :>>  this._state:>>", this._adInstance, this._state), null != this._adInstance && this._state == o.LOADED
				}, i.showAsync = function() {
					return r(this, void 0, void 0, regeneratorRuntime.mark(function e() {
						return regeneratorRuntime.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									if (console.log("showAsync this :>> ", this), this.isReady()) {
										e.next = 8;
										break
									}
									if (console.log("\u5f53\u524d\u72b6\u6001\u672a\u6ee1\u8db3\u64ad\u653e\u6761\u4ef6: " + this.getInfo()), this._state != o.PLAYING) {
										e.next = 7;
										break
									}
									throw E;
								case 7:
									throw _;
								case 8:
									if (this.isReadyToRefresh()) {
										e.next = 11;
										break
									}
									throw console.log("\u64ad\u653e\u592a\u9891\u7e41\uff0c\u8fd8\u9700\u95f4\u9694" + this.getNextRefreshInterval() + " \u79d2: " + this.getInfo()), g;
								case 11:
									return e.prev = 11, this._state = o.PLAYING, console.log("\u5f00\u59cb\u64ad\u653e\u5e7f\u544a: " + this.getInfo()), e.next = 16, this._adInstance.showAsync();
								case 16:
									return console.log("\u64ad\u653e\u5e7f\u544a\u5b8c\u6bd5: " + this.getInfo()), this._adInstance = null, this._state = o.NONE, this.updateLastShowTime(), this._autoLoadOnPlay && (console.log("\u5ef6\u8fdf1\u79d2\u540e, \u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d: " + this.getInfo()), h(1, this.loadAsync.bind(this))), e.abrupt("return", !0);
								case 24:
									throw e.prev = 24, e.t0 = e.catch(11), console.log("\u64ad\u653e\u5e7f\u544a\u5931\u8d25: " + this.getInfo(), e.t0), "RATE_LIMITED" == e.t0.code ? this._state = o.LOADED : (this._adInstance = null, this._state = o.NONE, this._autoLoadOnPlay && (console.log("\u5ef6\u8fdf1\u79d2\u540e, \u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d: " + this.getInfo()), h(1, this.loadAsync.bind(this)))), e.t0;
								case 29:
								case "end":
									return e.stop()
							}
						}, e, this, [
							[11, 24]
						])
					}))
				}, t
			}(y),
			D = function(e) {
				function t(t, i, a) {
					return e.call(this, t, s.INTERSTITIAL, i, a) || this
				}
				return a(t, e), t.prototype.createAdInstanceAsync = function() {
					return r(this, void 0, void 0, regeneratorRuntime.mark(function e() {
						return regeneratorRuntime.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, FBInstant.getInterstitialAdAsync(this._adId);
								case 2:
									return e.abrupt("return", e.sent);
								case 3:
								case "end":
									return e.stop()
							}
						}, e, this)
					}))
				}, t
			}(L),
			T = function(e) {
				function t(t, i, a) {
					return e.call(this, t, s.REWARDED_VIDEO, i, a) || this
				}
				return a(t, e), t.prototype.createAdInstanceAsync = function() {
					return r(this, void 0, void 0, regeneratorRuntime.mark(function e() {
						return regeneratorRuntime.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, FBInstant.getRewardedVideoAsync(this._adId);
								case 2:
									return e.abrupt("return", e.sent);
								case 3:
								case "end":
									return e.stop()
							}
						}, e, this)
					}))
				}, t
			}(L),
			A = function(e) {
				function t(t, i, a) {
					return e.call(this, t, s.BANNER, i, a) || this
				}
				a(t, e);
				var i = t.prototype;
				return i.showAsync = function() {
					return r(this, void 0, void 0, regeneratorRuntime.mark(function e() {
						return regeneratorRuntime.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									if (this.isReadyToRefresh()) {
										e.next = 3;
										break
									}
									throw console.log("\u64ad\u653e\u592a\u9891\u7e41\uff0c\u8fd8\u9700\u95f4\u9694" + this.getNextRefreshInterval() + " \u79d2: " + this.getInfo()), g;
								case 3:
									if (!this.isErrorTooMany()) {
										e.next = 6;
										break
									}
									throw console.log("\u592a\u591a\u9519\u8bef\uff0c\u505c\u6b62\u52a0\u8f7d: " + this.getInfo()), S;
								case 6:
									return e.prev = 6, this._state = o.PLAYING, console.log("\u5f00\u59cb\u663e\u793a\u5e7f\u544a: " + this.getInfo()), e.next = 11, FBInstant.loadBannerAdAsync(this._adId);
								case 11:
									console.log("\u663e\u793a\u5e7f\u544a\u6210\u529f: " + this.getInfo()), this.updateLastShowTime(), this.resetErrorCounter(), e.next = 21;
									break;
								case 16:
									throw e.prev = 16, e.t0 = e.catch(6), console.error("\u663e\u793a\u5e7f\u544a\u5931\u8d25: " + this.getInfo(), e.t0), "RATE_LIMITED" == e.t0.code || ("ADS_NO_FILL" == e.t0.code ? (console.error("\u5e7f\u544a\u65e0\u6cd5\u586b\u5145\uff0c\u4e0d\u518d\u7ee7\u7eed\u8bf7\u6c42: " + this.getInfo()), this.setFatalError()) : this.increaseErrorCounter()), e.t0;
								case 21:
								case "end":
									return e.stop()
							}
						}, e, this, [
							[6, 16]
						])
					}))
				}, i.hideAsync = function() {
					return r(this, void 0, void 0, regeneratorRuntime.mark(function e() {
						return regeneratorRuntime.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									if (this._state == o.PLAYING) {
										e.next = 3;
										break
									}
									throw console.log("\u5e7f\u544a\u6ca1\u6709\u5728\u64ad\u653e\u4e2d: " + this.getInfo()), N;
								case 3:
									return e.prev = 3, console.log("\u9690\u85cf\u5e7f\u544a: " + this.getInfo()), e.next = 7, FBInstant.hideBannerAdAsync();
								case 7:
									this._state = o.NONE, e.next = 14;
									break;
								case 10:
									throw e.prev = 10, e.t0 = e.catch(3), console.error("\u9690\u85cf\u5e7f\u544a\u5931\u8d25: " + this.getInfo(), e.t0), e.t0;
								case 14:
								case "end":
									return e.stop()
							}
						}, e, this, [
							[3, 10]
						])
					}))
				}, t
			}(y),
			w = function() {
				function e() {}
				return e.getVersion = function() {
					return "1.0.2"
				}, e.addInterstitial = function(e, t) {
					void 0 === t && (t = 3), null == this._interstitialTimer && (this._interstitialTimer = new v(this.defaultInterstitialTimerOption.refreshInterval, this.defaultInterstitialTimerOption.delayForFirstAd));
					for (var i = 0; i < t; i++) {
						if (this._interstitialAds.length >= 3) throw console.log("\u6dfb\u52a0\u63d2\u5c4f\u5e7f\u544a\u5931\u8d25, \u8d85\u51fa\u9650\u5236: " + this._interstitialAds.length, e), l;
						var a = new D(e, this._interstitialTimer, this.defaultInterstitialOption);
						this._interstitialAds.push(a), console.log("\u6dfb\u52a0\u63d2\u5c4f\u5e7f\u544a: " + e, "count: " + this._interstitialAds.length)
					}
					return this._interstitialAds.length
				}, e.addRewardedVideo = function(e, t) {
					void 0 === t && (t = 3), null == this._rewardedVideoTimer && (this._rewardedVideoTimer = new v(this.defaultRewardedVideoTimerOption.refreshInterval, this.defaultRewardedVideoTimerOption.delayForFirstAd));
					for (var i = 0; i < t; i++) {
						if (this._rewardedVideos.length >= 3) throw console.log("\u6dfb\u52a0\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u5931\u8d25, \u8d85\u51fa\u9650\u5236: " + this._rewardedVideos.length, e), l;
						var a = new T(e, this._rewardedVideoTimer, this.defaultRewardedVideoOption);
						this._rewardedVideos.push(a), console.log("\u6dfb\u52a0\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a: " + e, "count: " + this._rewardedVideos.length)
					}
					return this._rewardedVideos.length
				}, e.addBanner = function(e) {
					null == this._bannerTimer && (this._bannerTimer = new v(this.defaultBannerTimerOption.refreshInterval, this.defaultBannerTimerOption.delayForFirstAd));
					var t = new A(e, this._bannerTimer, this.defaultBannerOption);
					return this._banners.push(t), console.log("\u6dfb\u52a0Banner\u5e7f\u544a: " + e, "count: " + this._banners.length), t
				}, e.loadAll = function() {
					return r(this, void 0, void 0, regeneratorRuntime.mark(function e() {
						return regeneratorRuntime.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return console.log("\u521d\u59cb\u5316\u5e7f\u544a\u961f\u5217"), e.next = 3, this.loadAllAsync();
								case 3:
									return e.abrupt("return", e.sent);
								case 4:
								case "end":
									return e.stop()
							}
						}, e, this)
					}))
				}, e.loadAllAsync = function() {
					return r(this, void 0, void 0, regeneratorRuntime.mark(function e() {
						var t, i, a, n;
						return regeneratorRuntime.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									console.log("FBAdManager Version: " + this.getVersion()), console.log("\u521d\u59cb\u5316\u5e7f\u544a\u961f\u5217"), t = 0;
								case 3:
									if (!(t < this._rewardedVideos.length)) {
										e.next = 18;
										break
									}
									if (i = this._rewardedVideos[t], !(t > 0)) {
										e.next = 8;
										break
									}
									return e.next = 8, h(.1);
								case 8:
									return e.prev = 8, e.next = 11, i.loadAsync();
								case 11:
									e.next = 15;
									break;
								case 13:
									e.prev = 13, e.t0 = e.catch(8);
								case 15:
									t++, e.next = 3;
									break;
								case 18:
									a = 0;
								case 19:
									if (!(a < this._interstitialAds.length)) {
										e.next = 34;
										break
									}
									if (n = this._interstitialAds[a], !(a > 0)) {
										e.next = 24;
										break
									}
									return e.next = 24, h(.1);
								case 24:
									return e.prev = 24, e.next = 27, n.loadAsync();
								case 27:
									e.next = 31;
									break;
								case 29:
									e.prev = 29, e.t1 = e.catch(24);
								case 31:
									a++, e.next = 19;
									break;
								case 34:
								case "end":
									return e.stop()
							}
						}, e, this, [
							[8, 13],
							[24, 29]
						])
					}))
				}, e._isAdReady = function(e) {
					for (var t = e == s.INTERSTITIAL ? this._interstitialAds : this._rewardedVideos, i = !1, a = 0; a < t.length; a++) {
						var n = t[a];
						if (n.isReady() && n.isReadyToRefresh()) {
							i = !0;
							break
						}
					}
					return i
				}, e._showAsync = function(e) {
					for (var t = e == s.INTERSTITIAL ? this._interstitialAds : this._rewardedVideos, i = null, a = 0; a < t.length; a++) {
						var n = t[a];
						if (n.isReady() && n.isReadyToRefresh()) {
							i = n;
							break
						}
					}
					if (console.log("readyUnit :>> ", i), null != i) return i.showAsync();
					throw d
				}, e._getAdTimer = function(e) {
					return e == s.INTERSTITIAL ? this._interstitialTimer : e == s.REWARDED_VIDEO ? this._rewardedVideoTimer : this._bannerTimer
				}, e.isInterstitialAdReady = function() {
					return this._isAdReady(s.INTERSTITIAL)
				}, e.showInterstitialAd = function() {
					return r(this, void 0, void 0, regeneratorRuntime.mark(function e() {
						return regeneratorRuntime.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, this._showAsync(s.INTERSTITIAL);
								case 2:
									return e.abrupt("return", e.sent);
								case 3:
								case "end":
									return e.stop()
							}
						}, e, this)
					}))
				}, e.isRewardedVideoReady = function() {
					return this._isAdReady(s.REWARDED_VIDEO)
				}, e.showRewardedVideo = function() {
					return r(this, void 0, void 0, regeneratorRuntime.mark(function e() {
						return regeneratorRuntime.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, this._showAsync(s.REWARDED_VIDEO);
								case 2:
									return e.abrupt("return", e.sent);
								case 3:
								case "end":
									return e.stop()
							}
						}, e, this)
					}))
				}, e.checkApiSupport = function(e) {
					return FBInstant.getSupportedAPIs().indexOf(e) >= 0
				}, e.isBannerSupport = function() {
					return void 0 === this._bannerSupport && (this._bannerSupport = this.checkApiSupport("loadBannerAdAsync")), this._bannerSupport
				}, e.isBannerReady = function() {
					if (this._banners.length <= 0) throw m;
					return this._banners[0].isReadyToRefresh()
				}, e.showBannerAsync = function() {
					return r(this, void 0, void 0, regeneratorRuntime.mark(function e() {
						var t;
						return regeneratorRuntime.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									if (this.isBannerSupport()) {
										e.next = 2;
										break
									}
									throw f;
								case 2:
									if (!(this._banners.length <= 0)) {
										e.next = 4;
										break
									}
									throw m;
								case 4:
									return t = this._banners[0], e.next = 7, t.showAsync();
								case 7:
									return e.abrupt("return", e.sent);
								case 8:
								case "end":
									return e.stop()
							}
						}, e, this)
					}))
				}, e.hideBannerAsync = function() {
					return r(this, void 0, void 0, regeneratorRuntime.mark(function e() {
						var t;
						return regeneratorRuntime.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									if (this.isBannerSupport()) {
										e.next = 2;
										break
									}
									throw f;
								case 2:
									if (!(this._banners.length <= 0)) {
										e.next = 4;
										break
									}
									throw m;
								case 4:
									return t = this._banners[0], e.next = 7, t.hideAsync();
								case 7:
									return e.abrupt("return", e.sent);
								case 8:
								case "end":
									return e.stop()
							}
						}, e, this)
					}))
				}, e
			}();
		i.default = w, w._interstitialAds = [], w._rewardedVideos = [], w._banners = [], w._interstitialTimer = null, w._rewardedVideoTimer = null, w._bannerTimer = null, w._bannerSupport = void 0, w.defaultInterstitialOption = {
			autoLoadOnPlay: !0,
			maxLoadError: 3
		}, w.defaultRewardedVideoOption = {
			autoLoadOnPlay: !0,
			maxLoadError: 3
		}, w.defaultBannerOption = {
			autoLoadOnPlay: !0,
			maxLoadError: 1
		}, w.defaultInterstitialTimerOption = {
			refreshInterval: 40,
			delayForFirstAd: 30
		}, w.defaultRewardedVideoTimerOption = {
			refreshInterval: 0,
			delayForFirstAd: 0
		}, w.defaultBannerTimerOption = {
			refreshInterval: 40,
			delayForFirstAd: 0
		}, t.exports = i.default, cc._RF.pop()
	}, {}],
	FailLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "c06a3A5ZUJAX5I+OPjFOPyo", "FailLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {
				imgTypeZh: [cc.SpriteFrame],
				imgTypeEn: [cc.SpriteFrame],
				imgTitleEn: cc.SpriteFrame
			},
			onLoad: function() {
				this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, RES_M.getIsChinese() || (this._imgTitle.$Sprite.spriteFrame = this.imgTitleEn, this._textUseProp.$Label.string = RES_M.getText("t17"), this._textContinue.$Label.string = RES_M.getText("t15"), this._textAds.$Label.string = RES_M.getText("t16")), EVENT_M.on(EventNames.EVENT_ADS_CHECK_HEART_IN_FAILLAYER, this.loadScene.bind(this))
			},
			onDestroy: function() {
				RES_M.releasePrefabByName("FailLayer"), nativeAdsHelper.hideFlowAds(AppConstant.POS_RESULT), EVENT_M.removeListener(EventNames.EVENT_ADS_CHECK_HEART_IN_FAILLAYER)
			},
			show: function(e, t) {
				SOUND_M.playMusic(AppConstant.MUSIC_FAIL, !1), SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.type = e, this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow"), ADS_M.onLevelFinished(!0, LocalData.nowLevelId, 0), RES_M.getIsChinese() ? this._imgTips.$Sprite.spriteFrame = this.imgTypeZh[e - 1] : this._imgTips.$Sprite.spriteFrame = this.imgTypeEn[e - 1], this._labelLevel.$Label.string = UIUtils.createWithFormat(RES_M.getText("t28"), [t]), 2 == e && LocalData.propNums[0] > 0 ? (this._useProp.active = !0, this._seeAds.active = !1, this.isProp = !0, this._textHave.$Label.string = UIUtils.createWithFormat(RES_M.getText("t18"), [LocalData.propNums[0]])) : (this._useProp.active = !1, this._seeAds.active = !0, this.isProp = !1)
			},
			_onBtnCloseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), cc.director.loadScene("Level"), this.node.destroy()
			},
			_onBtnReplayTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), this.checkHeart()
			},
			_onBtnContinueTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), this.isProp ? (EVENT_M.emit(EventNames.EVENT_USECLICKPROP, 1, !0), EVENT_M.emit(EventNames.EVENT_RESURRECTION, this.type), this.node.active = !1) : (cc.pppay.NativeUtils.showVideoAds(AppConstant.ADS_GAMERE, EventNames.EVENT_ADS_REWARD_GAMERE), adjustHelper.trackEvent(EventNames.EVENT_ADJUST_CONTINUE_ADS))
			},
			checkHeart: function() {
				var e = this;
				if (LocalData.heartNum >= 5) DataManager.addHeart(-5), UIManager.enterGame(), this.node && this.node.destroy(), adjustHelper.trackEvent(EventNames.EVENT_ADJUST_AGAIN_CLICK);
				else {
					if (cc.sys.platform == cc.sys.ANDROID) return void nativeAdsHelper.showRewardedVideo(EventNames.EVENT_ADS_CHECK_HEART_IN_FAILLAYER);
					"undefined" != typeof FBInstant ? UIManager.isNeedSecondLevelPop() ? ADS_M.fb_showVideoByPopUI(function(t) {
						0 == t.code && (UIManager.enterGame(), e.node && e.node.destroy())
					}) : ADS_M.fb_showRewardVideo(function(t) {
						0 === t.code ? (UIManager.enterGame(), e.node && e.node.destroy()) : console.error("\u89c6\u9891\u64ad\u653e\u5931\u8d25:", t)
					}) : (cc.log("\u7ea2\u5fc3\u4e0d\u8db3\u3002"), cc.director.loadScene("Level"))
				}
			},
			loadScene: function(e) {
				e ? (UIManager.enterGame(), this.node && this.node.destroy()) : (cc.log("\u7ea2\u5fc3\u4e0d\u8db3\u3002"), cc.director.loadScene("Level"))
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	FirendLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "545119HeYpCMobQWWk8sIt5", "FirendLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {
				firendNodePre: cc.Prefab
			},
			onLoad: function() {
				this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, this.firendNodes = [], RES_M.getIsChinese() || (this._textTitle.$Label.string = RES_M.getText("title11"), this._textAdd.$Label.string = RES_M.getText("t44")), this.content = this._svFirend.$ScrollView.content, this.loadFirendData(), this.registerEvent()
			},
			registerEvent: function() {
				EVENT_M.on(EventNames.EVENT_UPDATEFIREND, this.addFirendById.bind(this))
			},
			removeEvent: function() {
				EVENT_M.removeListener(EventNames.EVENT_UPDATEFIREND)
			},
			onDestroy: function() {
				this.removeEvent(), RES_M.releasePrefabByName("FirendLayer")
			},
			show: function() {
				ADS_M.showIns(), SOUND_M.playEffect(AppConstant.SOUND_PANEL), this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow")
			},
			loadFirendData: function() {
				this.myFirendNum = 0;
				for (var e = 0; e < LocalData.firendList.length; e++) - 1 != LocalData.firendList[e].id && (this.createNode(this.myFirendNum, LocalData.firendList[e]), this.myFirendNum++);
				this.myFirendNum > 7 && (this.content.height = 460 + 65 * (this.myFirendNum - 7))
			},
			addFirendById: function(e) {
				this.createNode(this.myFirendNum, LocalData.firendList[e - 1]), this.myFirendNum++, this.adjustContentHeight()
			},
			deleteFirendById: function(e) {
				-1 != LocalData.firendList[e - 1].id && DataManager.deleteFirend(e);
				for (var t = 0; t < this.firendNodes.length; t++)
					if (this.firendNodes[t].getId() == e) return this.firendNodes[t].node.destroy(), this.firendNodes.splice(t, 1), this.adjustPos(), this.myFirendNum--, this.adjustContentHeight(), void EVENT_M.emit(EventNames.EVENT_SHOWTIPS, 15)
			},
			sendHeart: function(e) {
				DataManager.sendHeart(e), EVENT_M.emit(EventNames.EVENT_SHOWTIPS, 19)
			},
			adjustContentHeight: function() {
				this.myFirendNum > 7 ? this.content.height = 460 + 65 * (this.myFirendNum - 7) : this.content.height = 460
			},
			createNode: function(e, t) {
				var i = cc.instantiate(this.firendNodePre);
				i.parent = this.content, i.y = -65 * e - 35;
				var a = i.getComponent("FirendNode");
				a.show(t.id, t.name, this), this.firendNodes.push(a)
			},
			adjustPos: function() {
				for (var e = 0; e < this.firendNodes.length; e++) this.firendNodes[e].node.y = -65 * e - 35
			},
			_onBtnAddTouchEnd: function() {
				EVENT_M.emit(EventNames.EVENT_SHOWADDFIREND)
			},
			_onBtnCloseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.node.active = !1
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	FirendNode: [function(e, t) {
		"use strict";
		cc._RF.push(t, "d5f73nnAodEhYOe6yDLfpHm", "FirendNode");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			onLoad: function() {
				RES_M.getIsChinese() || (this._labelDelete.$Label.string = RES_M.getText("t21"), this._labelSend.$Label.string = RES_M.getText("t48"))
			},
			show: function(e, t, i) {
				this.firendJS = i, this.id = e, this._labelID.$Label.string = t, DataManager.getIsSendHeart(e) && (this._heart.active = !1, this._btnSend.$Button.interactable = !1)
			},
			getId: function() {
				return this.id
			},
			_onBtnDeleteTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), this.firendJS.deleteFirendById(this.id)
			},
			_onBtnSendTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), this.firendJS.sendHeart(this.id), this._heart.active = !1, this._btnSend.$Button.interactable = !1
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	GameScene: [function(e, t) {
		"use strict";

		function i(e, t) {
			var i;
			if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
				if (Array.isArray(e) || (i = a(e)) || t && e && "number" == typeof e.length) {
					i && (e = i);
					var n = 0;
					return function() {
						return n >= e.length ? {
							done: !0
						} : {
							done: !1,
							value: e[n++]
						}
					}
				}
				throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}
			return (i = e[Symbol.iterator]()).next.bind(i)
		}

		function a(e, t) {
			if (e) {
				if ("string" == typeof e) return n(e, t);
				var i = Object.prototype.toString.call(e).slice(8, -1);
				return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? n(e, t) : void 0
			}
		}

		function n(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];
			return a
		}
		cc._RF.push(t, "f557aQRcHRLD6Fni58Ae5xp", "GameScene");
		var s = e("../uikiller/Thor");
		cc.Class({
			extends: s,
			properties: {
				actionLayer: cc.Node,
				propPre: cc.Prefab,
				superRotatePre: cc.Prefab,
				sightPre: cc.Prefab,
				glassPre: cc.Prefab
			},
			initData: function() {
				this.bubbleRotation = AppConstant.ROTATE_INIT, this.initRotation = !0, this.levelId = LocalData.nowLevelId, this.levelData = null, this.starNum = 1, this.awardNum = 0, this.stepIndex = -1, this.isLaunch = !1, this.isCanLaunch = !0, this.launchBubble = null, this.launchDirection = cc.v2(), this.drawTimeDelay = 0, this.lastColor = 2, this.drawPathTemp = 0, this.initReadyBubbleNum = 0, this.readyBubbleNum = 0, this.initFlyNum = 0, this.bubbleMap = new Map, this.readyBubbles = new Array, this.randomColor = new Array, this.sameBubbles = new Array, this.removeBubbles = new Array, this.flyBubbles = new Array, this.propNodes = new Array, this.bubbleInitArray = new Array, this.isOver = !1, this.glassNode = null, this.jindu = 0, this.jinduTarget = 0, this.waringBubbleNum = 0, this.score = 0, this.scoreTarget = 0, this.scoreDelay = 0, this.prePathPoint = cc.v2(0, 0), this.bubbleColorNum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.mBubbleNum = 0, this.initBubbleNum = 0, this.twoStarNum = 0, this.twoStarJinduTarget = 0, this.caromNum = 0, this.sigleScore = 0, this.levelLabel = null, this.scoreLabel = null, this.stoneLabel = null, this.isHaveFrozen = !1, this.propDesLayer = null, this.isBegin = !1, this.winLayerJS = null, this.failLayerJS = null, this.isUseZhaDan = !1, this.isUseMiaozhun = !1, this.isUseToushi = !1, this.isUseSuper = !1, this.superRotateEffect = null, this.sightNodeJS = null, this.exitLayerJS = null, this.isTouchAndUseSight = !1, this.gameTouchP = cc.v2(), this.sightPoints = new Array, this.guideJS = null, this.giftJS = null, this.guideStep = 0, this.propPos = []
			},
			initStaticData: function() {
				this.bannerHeight = 0, this.gameScale = .8, ADS_M.hideBanner(), ADS_M.hideBottomAds(), this.gameScale = this.gameScale * LocalData.gameScale, this.nearPoint = [{
					col: -1,
					row: 0
				}, {
					col: -1,
					row: 1
				}, {
					col: 0,
					row: -1
				}, {
					col: 0,
					row: 1
				}, {
					col: 1,
					row: -1
				}, {
					col: 1,
					row: 0
				}], this.rootPoint = [{
					col: 0,
					row: -2
				}, {
					col: 0,
					row: 2
				}, {
					col: 1,
					row: -2
				}, {
					col: 1,
					row: 1
				}, {
					col: 2,
					row: -2
				}, {
					col: 2,
					row: -1
				}, {
					col: 2,
					row: 0
				}, {
					col: -1,
					row: -1
				}, {
					col: -1,
					row: 2
				}, {
					col: -2,
					row: 0
				}, {
					col: -2,
					row: 1
				}, {
					col: -2,
					row: 2
				}], this.bombPoint = [{
					col: -1,
					row: 0
				}, {
					col: -1,
					row: 1
				}, {
					col: 0,
					row: -1
				}, {
					col: 0,
					row: 1
				}, {
					col: 1,
					row: -1
				}, {
					col: 1,
					row: 0
				}, {
					col: 0,
					row: -2
				}, {
					col: 0,
					row: 2
				}, {
					col: 1,
					row: -2
				}, {
					col: 1,
					row: 1
				}, {
					col: 2,
					row: -2
				}, {
					col: 2,
					row: -1
				}, {
					col: 2,
					row: 0
				}, {
					col: -1,
					row: -1
				}, {
					col: -1,
					row: 2
				}, {
					col: -2,
					row: 0
				}, {
					col: -2,
					row: 1
				}, {
					col: -2,
					row: 2
				}], this.readyPosX = [], this.readyPosX.push(0);
				for (var e = 0; e < 10; e++) {
					var t = .8 - .05 * this.readyPosX.length,
						i = this.readyPosX[this.readyPosX.length - 1] - 5 - (2 * t + .05) * AppConstant.B_RADIUS;
					this.readyPosX.push(i)
				}
				this.borderMinX = (.5 * -cc.winSize.width + AppConstant.B_RADIUS) / this.gameScale, this.borderMaxX = (.5 * cc.winSize.width - AppConstant.B_RADIUS) / this.gameScale, this.borderMinY = (.5 * -cc.winSize.height + 120 + .5 * this.bannerHeight) / this.gameScale, this.borderMaxY = (.5 * cc.winSize.height - 132 * LocalData.gameScale - .5 * this.bannerHeight) / this.gameScale, this.centerPos = cc.v2(0, 0), this.twoStarPos = [{
					x: -20,
					y: 0
				}, {
					x: 20,
					y: 0
				}], this.sanStarPos = [{
					x: 0,
					y: 10
				}, {
					x: -15,
					y: -10
				}, {
					x: 15,
					y: -10
				}], this.readyBubblePosY = (.5 * -cc.winSize.height + 120 + .5 * this.bannerHeight) / this.gameScale
			},
			onLoad: function() {
				this._timeNow = Date.now();
				var e = cc.director.getScene();
				this._nowSceneName = e.name, UIManager.curSceneName = this._nowSceneName, cc.log("onLoad scene ------ " + UIManager.curSceneName), e.exp_nameAndTimeKey = this._nowSceneName + this._timeNow, this.registerEvent(), this.adaptiveType = UIUtils.setAdaptiveScreen(), SOUND_M.playMusic(AppConstant.MUSIC_GAME, !0), this.gameJindu = this._jindu.$Sprite, window.SpriteManager = this.node.getComponent("SpriteManager"), this.actionLayer.zIndex = AppConstant.zIndex_Tip, this.actionLayerJS = this.actionLayer.getComponent("ActionLayer"), RES_M.getIsChinese() || (this._combo.$Sprite.spriteFrame = SpriteManager.comboSF), this.heartPos = {
					x: this._img_heart.parent.x + this._img_heart.x,
					y: this._img_heart.parent.y + this._img_heart.y
				}, this.stonePos = {
					x: this._btnStone.parent.x + this._btnStone.x,
					y: this._btnStone.parent.y + this._btnStone.y
				}, SpriteManager.initData(), this.initData(), this.initStaticData(), this.topHeight = ADS_M.getLiuhaiHeight(), this._topNode.$Widget.top = this.topHeight, this._bottomNode.y = .5 * -cc.winSize.height + this.bannerHeight, this._setting.$Widget.bottom = this.bannerHeight, this.borderMaxY -= this.topHeight, this._bottomNode.scale = LocalData.gameScale, this._topNode.scale = LocalData.gameScale, this._bubbleLayer.scale = this.gameScale, this._bubbleLayer.width = cc.winSize.width / this.gameScale, this._bubbleLayer.height = cc.winSize.height / this.gameScale, this._touchLayer.width = cc.winSize.width, this._touchLayer.height = cc.winSize.height, this._bubbleLayer.y = .5 * this.bannerHeight, this.initGame()
			},
			registerEvent: function() {
				EVENT_M.on(EventNames.EVENT_ADDSTONE, this.addStone.bind(this)), EVENT_M.on(EventNames.EVENT_SHOWEXIT, this.showExitLayer.bind(this)), EVENT_M.on(EventNames.EVENT_RECEIVEAWARD, this.receiveGiftAward.bind(this)), EVENT_M.on(EventNames.EVENT_USECLICKPROP, this.useClickProp.bind(this)), EVENT_M.on(EventNames.EVENT_RESURRECTION, this.resurrection.bind(this)), EVENT_M.on(EventNames.EVENT_PASSGUIDE, this.passGuide.bind(this)), EVENT_M.on(EventNames.BEGINGAME, this.beginGame.bind(this)), EVENT_M.on(EventNames.EVENT_POPLAYER, this.showPopLayer.bind(this)), EVENT_M.on(EventNames.EVENT_SHOWNET, this.showNetLayer.bind(this)), EVENT_M.on(EventNames.EVENT_REMOVENET, this.removeNetLayer.bind(this)), EVENT_M.on(EventNames.EVENT_SHOWTIPS, this.showTips.bind(this)), EVENT_M.on(EventNames.EVENT_RECEIVEAWARD_CLOSE, this.removeGiftLayerOK.bind(this)), EVENT_M.on(EventNames.EVENT_ADS_GAMEWIN, this.gameWinDo.bind(this)), EVENT_M.on(EventNames.EVENT_ADS_REWARD_GAMERE, this.resurrectionRewardVideoClosed.bind(this)), EVENT_M.on(EventNames.EVENT_ADS_REWARD_GIFT_PACKAGE, this.giftPackageRewardVideoClosed.bind(this))
			},
			removeEvent: function() {
				EVENT_M.removeListener(EventNames.EVENT_ADDSTONE), EVENT_M.removeListener(EventNames.EVENT_RECEIVEAWARD), EVENT_M.removeListener(EventNames.EVENT_SHOWEXIT), EVENT_M.removeListener(EventNames.EVENT_USECLICKPROP), EVENT_M.removeListener(EventNames.EVENT_RESURRECTION), EVENT_M.removeListener(EventNames.EVENT_PASSGUIDE), EVENT_M.removeListener(EventNames.BEGINGAME), EVENT_M.removeListener(EventNames.EVENT_POPLAYER), EVENT_M.removeListener(EventNames.EVENT_SHOWNET), EVENT_M.removeListener(EventNames.EVENT_REMOVENET), EVENT_M.removeListener(EventNames.EVENT_SHOWTIPS), EVENT_M.removeListener(EventNames.EVENT_RECEIVEAWARD_CLOSE), EVENT_M.removeListener(EventNames.EVENT_ADS_GAMEWIN), EVENT_M.removeListener(EventNames.EVENT_ADS_REWARD_GAMERE), EVENT_M.removeListener(EventNames.EVENT_ADS_REWARD_GIFT_PACKAGE)
			},
			resurrectionRewardVideoClosed: function(e) {
				e ? (cc.log("\u89c2\u770b\u590d\u6d3b\u6fc0\u52b1\u89c6\u9891\u5b8c\u6bd5"), this.rewardVideoClosed()) : cc.log("\u6ca1\u6709\u89c2\u770b\u590d\u6d3b\u6fc0\u52b1\u89c6\u9891\u5b8c\u6bd5")
			},
			giftPackageRewardVideoClosed: function(e) {
				e ? (cc.log("\u89c2\u770b\u5927\u793c\u5305\u6fc0\u52b1\u89c6\u9891\u5b8c\u6bd5"), this.rewardVideoClosed()) : cc.log("\u6ca1\u6709\u89c2\u770b\u5927\u793c\u5305\u6fc0\u52b1\u89c6\u9891\u5b8c\u6bd5")
			},
			rewardVideoClosed: function() {
				cc.pppay.NativeUtils.seeSuccess(1), cc.pppay.NativeUtils.loadADSSuccess(1)
			},
			onEnable: function() {},
			onDestroy: function() {
				nativeAdsHelper.checkHideBannerAds(), this.removeEvent(), UIManager.removeThingsByName(this.getStrHaveNameAndTime()), window.SpriteManager = null
			},
			onDisable: function() {},
			initGame: function() {
				this.levelLabel = this._labelLevel.$Label, this.scoreLabel = this._labelScore.$Label, this.stoneLabel = this._labelStone.$Label, this.levelLabel.string = this.levelId, this.scoreLabel.string = 0, this._arrowJS = this._arrow.$Arrow, this._arrowJS.setMaxWidth(.5 * cc.winSize.width / this.gameScale), this._bubbleNode.active = !1, this._star2.active = !1;
				var e = 1;
				this.levelId > 0 && this.levelId <= AppConstant.MAX_LEVEL ? (e = Math.floor((this.levelId - 1) / 10) % 3, LevelManager.loadLevelDataByLevelId(this.levelId)) : this.beginGame(LocalData.nowLevelData), this._gamebg.$Sprite.spriteFrame = SpriteManager.getBgSpriteByIndex(e), 0 == this.adaptiveType ? (this._bubbleLayer.height = cc.winSize.height, this._gamebg.height = cc.winSize.height, this._waring.height = cc.winSize.height - 132) : (this._bubbleLayer.width = cc.winSize.width, this._gamebg.width = cc.winSize.width, this._waring.width = cc.winSize.width), this._arrow.y = this.readyBubblePosY, this.updateStone()
			},
			beginGame: function(e) {
				this.levelData = e, this.isBegin = !0, this._bubbleNode.active = !0, this.initBubble(), this.initProp(), this.checkGuide()
			},
			initBubble: function() {
				this._bubbleNode.$Animation.play("ShowBubble");
				var e = 0,
					t = 0,
					i = 1,
					a = this.levelData.chessboard.length,
					n = this.levelData.randomColor.length,
					s = this.levelData.prepareColor.length;
				if (n > 0)
					for (var o = 0; o < n; o++)(i = this.levelData.randomColor[o]) <= AppConstant.BUBBLE_TYPE_NORMAL && this.randomColor.push(i);
				else if (s > 0)
					for (o = 0; o < s; o++)(i = this.levelData.prepareColor[o]) <= AppConstant.BUBBLE_TYPE_NORMAL && this.randomColor.push(i);
				var r = [];
				for (o = 0; o < this.levelData.randomBorn.length; o++) {
					var c = this.levelData.randomBorn[o];
					r.push({
						type: c.type,
						num: c.num
					})
				}
				for (o = 0; o < a; o++) e = this.levelData.chessboard[o][0], t = this.levelData.chessboard[o][1], i = this.levelData.chessboard[o][2], 0 == e && Math.abs(t) <= 1 || 1 == e && (-1 == t || 0 == t) || -1 == e && (0 == t || 1 == t) || this.bubbleInitArray.push({
					col: e,
					row: t,
					color: i
				});
				for (o = 0; o < r.length; o++)
					for (var h = 0; h < r[o].num; h++)
						for (var l = !0; l;) {
							var d = this.bubbleInitArray[Math.floor(Math.random() * this.bubbleInitArray.length)]; - 1 == d.color && (l = !1, d.color = r[o].type)
						}
				for (o = 0; o < this.bubbleInitArray.length; o++)
					if (e = this.bubbleInitArray[o].col, t = this.bubbleInitArray[o].row, -1 == (i = this.bubbleInitArray[o].color) && (i = this.getRandomColor()), -1 != i) {
						var u = i == AppConstant.BUBBLE_TYPE_ICE1 ? 1 : i == AppConstant.BUBBLE_TYPE_ICE2 ? 2 : 0;
						u > 0 && (i = this.getRandomColor(), this.isHaveFrozen = !0), this.createBubble(e, t, i, u), this.setBubbleNum(1), this.addBubbleColorNum(i)
					} this.initBubbleNum = this.mBubbleNum, this.twoStarNum = this.levelData.twoStarNum, this.twoStarJinduTarget = (this.initBubbleNum - this.twoStarNum) / this.initBubbleNum, this._star2.x = (this.initBubbleNum - this.twoStarNum) / this.initBubbleNum * 137 - 250, this._star2.active = !0, this.stepIndex = -1, this.resetReadyStep(), this.addReadyBubble(this.levelId, this.readyBubbleNum), this.launchBubble = this.readyBubbles[0]
			},
			initProp: function() {
				var e = this.isHaveFrozen ? 5 : 4,
					t = this.propNodes.length;
				if (t < e)
					for (var i = t; i < e; i++) {
						var a = cc.instantiate(this.propPre);
						a.parent = this._bottomNode, a.x = 270 - 90 * i, a.y = 45;
						var n = a.getComponent("PropNode");
						this.propNodes.push(n), n.getBtn().on("click", this.dealButtonClick, this), this.propPos.push({
							x: 270 - 90 * i + this._bottomNode.x,
							y: (45 + this._bottomNode.y) / LocalData.gameScale
						})
					} else if (t > e)
						for (i = e; i < t; i++) this.propNodes[i].active = !1;
				for (i = 0; i < this.propNodes.length; i++) i < e ? 0 == i && LocalData.isPassProp1 || 0 != i && this.levelId >= LocalData.showPropLevelIDs[i] ? this.propNodes[i].initProp(i + 1, LocalData.propNums[i], !1) : this.propNodes[i].initProp(i + 1, LocalData.propNums[i], !0) : this.propNodes[i].node.active = !1
			},
			resetReadyStep: function() {
				this.stepIndex = this.stepIndex + 1, this.stepIndex >= this.levelData.randomShoot.length && (this.stepIndex = 0), this.initReadyBubbleNum = this.readyBubbleNum = this.levelData.randomShoot[this.stepIndex].step, this.initFlyNum = this.levelData.randomShoot[this.stepIndex].num
			},
			addReadyBubble: function(e, t) {
				var i = {
					1: [2, 2, 2, 2, 2, 2],
					2: [8, 2, 3, null, null, null],
					3: [8, 2, 3, null, null, null]
				};
				if (e in i)
					for (var a = 0; a < AppConstant.ShowReadBubbles; a++) this.addOneReadyBubble(i[e][a]);
				else
					for (var n = 0; n < t; n++) this.createReadyBubble(n, null)
			},
			addOneReadyBubble: function(e) {
				return this.createReadyBubble(this.readyBubbles.length, e)
			},
			getRandomColor: function() {
				var e = this.randomColor.length;
				return e > 0 ? this.randomColor[Math.floor(e * Math.random())] : this.lastColor
			},
			createReadyBubble: function(e, t) {
				null != t && null != t || (t = this.getRandomColor());
				var i = SpriteManager.createBubblePre(),
					a = i.getComponent("Bubble");
				return i.parent = this._bubbleLayer, a.initReadyBubble(t), i.zIndex = 5, e < 10 ? (i.scale = .8 - .05 * e, i.setPosition(this.readyPosX[e], this.readyBubblePosY)) : (i.scale = 0, i.setPosition(this.readyPosX[9], this.readyBubblePosY), i.active = !1), this.readyBubbles.push(a), i
			},
			createFlyBubble: function(e, t, i, a, n) {
				null != n && null != n || (n = this.getRandomColor());
				var s = SpriteManager.createBubblePre(),
					o = s.getComponent("Bubble");
				return s.parent = this._bubbleLayer, s.x = e, s.y = t, o.initFlyBubble(i, a, n), this.flyBubbles.push(o), s
			},
			createBubble: function(e, t, i, a) {
				var n = SpriteManager.createBubblePre(),
					s = n.getComponent("Bubble");
				n.parent = this._rotateNode, a > 0 ? s.initICEBubble(e, t, i, a) : s.initBubble(e, t, i);
				var o = UIUtils.getPointByColRow(e, t);
				n.x = o.x, n.y = o.y;
				var r = this.getFloorNum(o.x, o.y);
				s.setFloorNum(r), this.bubbleMap.set(s.getBubbleId(), s)
			},
			getFloorNum: function(e, t) {
				for (var i = UIUtils.distance(e, t, this.centerPos.x, this.centerPos.y), a = 1; a <= 10; a++)
					if (i <= 2 * a * AppConstant.B_RADIUS) return a;
				return 11
			},
			updateBubbleRotate: function() {
				var e = 1;
				this.bubbleRotation < 0 && (e = -1), Math.abs(this.bubbleRotation) > .03 ? (this.bubbleRotation = this.initRotation ? .95 * this.bubbleRotation : this.bubbleRotation * AppConstant.ROTATE_REDUCE * .98, this.bubbleRotation = this.bubbleRotation * e, !this.isUseSuper && this.bubbleRotation > AppConstant.ROTATE_LIMIT ? this.bubbleRotation = AppConstant.ROTATE_LIMIT : this.isUseSuper && this.bubbleRotation > AppConstant.ROTATE_SUPER && (this.bubbleRotation = AppConstant.ROTATE_SUPER), this.bubbleRotation = this.bubbleRotation * e, this.rotateBubble(this.bubbleRotation)) : this.bubbleRotation > 0 && (this.bubbleRotation = 0, this.rotateBubble(this.bubbleRotation)), 0 == this.bubbleRotation && this.initRotation && (this.initRotation = !1)
			},
			rotateBubble: function(e) {
				this._rotateNode.angle -= e;
				var t = this;
				this.bubbleMap.forEach(function(i) {
					if (i && (i.node.angle += e, i.getIsDanger())) {
						var a = t._bubbleLayer.convertToNodeSpaceAR(i.node.parent.convertToWorldSpaceAR(cc.v2(i.node.x, i.node.y)));
						if (a.x < t.borderMinX || a.x > t.borderMaxX) return void t.gameFail(2)
					}
				}), this._light.angle += e, this.isTouchAndUseSight && this.sightNodeJS && this.sightNodeJS.node.active && (this.getSightPath(UIUtils.getPoint(this.readyPosX[0], this.readyBubblePosY), UIUtils.getPoint(this.gameTouchP.x, this.gameTouchP.y)), this.sightPoints.length >= 2 && this.sightNodeJS.setPath(this.sightPoints))
			},
			rotateByShoot: function(e, t, i) {
				var a = this._bubbleLayer.convertToNodeSpaceAR(e.node.parent.convertToWorldSpaceAR(cc.v2(e.node.x, e.node.y))),
					n = this.centerPos.sub(a).normalize(),
					s = UIUtils.getRadianTwoPoint(n, {
						x: t,
						y: i
					}),
					o = 0;
				n.x > 0 && t > 0 ? o = i > n.y ? 1 : i < n.y ? -1 : o : n.x < 0 && t < 0 ? o = i > n.y ? -1 : i < n.y ? 1 : o : n.x < 0 && t > 0 ? o = n.y > 0 ? -1 : i >= 0 ? -1 : 1 : n.x > 0 && t < 0 ? o = n.y < 0 ? i >= 0 ? 1 : -1 : 1 : 0 == n.x && (n.y > 0 ? o = t < 0 ? 1 : t > 0 ? -1 : o : n.y < 0 && (o = t < 0 ? -1 : i > 0 ? 1 : o));
				var r = 150 / (this.mBubbleNum + 1);
				r = r > 2.5 ? 2.5 : r < .5 ? .5 : r, this.bubbleRotation = this.bubbleRotation + o * Math.sin(s) * r
			},
			update: function(e) {
				this.isOver || (this.updateBubbleRotate(e), this.launchBubbleUpdate(e), this.updateFlyBubble(e), this.updateGamePrecent(e), this.updateScore(e))
			},
			updateFlyBubble: function() {
				for (var e = this.flyBubbles.length, t = 0; t < e; t++) {
					var i = this.flyBubbles[t],
						a = cc.v2(i.node.x + i.getSpeedX(), i.node.y + i.getSpeedY());
					this.checkBubbleCollider(i, a) ? (this.flyBubbles.splice(t, 1), e = this.flyBubbles.length, t--) : (i.node.x = a.x, i.node.y = a.y)
				}
			},
			addRandomBubble: function() {
				SOUND_M.playEffect(AppConstant.SOUND_RANDOMBORN);
				for (var e = 0; e < this.initFlyNum; e++) this.addFlyBubble()
			},
			addFlyBubble: function() {
				var e, t, i = this.getRandomColor(),
					a = 10 * Math.random();
				a <= 3.3 ? (e = .5 * -cc.winSize.width - 60, t = Math.random() * (cc.winSize.height - 300) + 400 - .5 * cc.winSize.height) : a <= 6.6 ? (e = .5 * cc.winSize.width + 60, t = Math.random() * (cc.winSize.height - 300) + 400 - .5 * cc.winSize.height) : (t = .5 * cc.winSize.height + 60, e = Math.random() * (cc.winSize.width + 100) - .5 * cc.winSize.width - 50);
				var n = this.centerPos.sub(cc.v2(e, t)).normalize(),
					s = n.x * AppConstant.B_SPEED,
					o = n.y * AppConstant.B_SPEED;
				this.createFlyBubble(e, t, s, o, i)
			},
			launchBubbleUpdate: function(e) {
				if (this.isLaunch && null != this.launchBubble) {
					var t = cc.v2(this.launchBubble.node.x + this.launchDirection.x * AppConstant.B_SPEED, this.launchBubble.node.y + this.launchDirection.y * AppConstant.B_SPEED);
					4 == this.checkCollideBorder(t) ? this.gameWin() : this.checkBubbleCollider(this.launchBubble, t) || (this.launchBubble.node.x = t.x, this.launchBubble.node.y = t.y, this.drawPathPoint(e, t))
				}
			},
			checkCollideBorder: function(e) {
				var t = e.y;
				if (t < this.borderMinY) {
					var i = this;
					return cc.tween(this.launchBubble.node).to(.1, {
						opacity: 0
					}).call(function() {
						i.launchBubble.node.x = 0, i.launchBubble.node.scale = .8, i.launchBubble.node.y = i.readyBubblePosY - 20, i.isCanLaunch = !0
					}).to(.2, {
						opacity: 255,
						y: this.readyBubblePosY
					}).start(), this.isLaunch = !1, 3
				}
				if (t > this.borderMaxY) return this.launchDirection.y = -this.launchDirection.y, 2;
				var a = e.x;
				return a < this.borderMinX || a > this.borderMaxX ? (this.launchDirection.x = -this.launchDirection.x, 1) : e.sub(this.centerPos).mag() < AppConstant.B_CENTER_DIS + AppConstant.B_DISX ? 4 : 0
			},
			checkBubbleCenterCollider: function(e, t) {
				if (t.sub(this.centerPos).mag() < 2 * AppConstant.B_DISX) {
					for (var i = 9999999, a = 0, n = 0, s = 0, o = 0, r = 0, c = 0, h = this.rootPoint.length; c < h; c++) s = this.rootPoint[c].col, o = this.rootPoint[c].row, this.bubbleMap.has(UIUtils.getOnlyId(s, o)) || (r = UIUtils.getDistanceByColRowAndPos(s, o, t)) < i && (i = r, a = s, n = o);
					if (0 != a || 0 != n) {
						var l = UIUtils.getPointByColRow(a, n);
						return e.node.x = t.x, e.node.y = t.y, e.node.scale = 1, e.initBubble(a, n), e.setFloorNum(this.getFloorNum(t.x, t.y)), e.node.angle = -this._rotateNode.angle, e.node.parent = this._rotateNode, this.addBubbleColorNum(e.getColor()), this.bubbleMap.set(e.getBubbleId(), e), UIUtils.distance(l.x, l.y, this.centerPos.x, this.centerPos.y) >= this.borderMaxX && (this.addWaringNum(), e.addWaring()), this.setBubbleNum(1), cc.tween(e.node).to(.1, {
							x: l.x,
							y: l.y
						}).start(), e.setSpeedX(0), e.setSpeedY(0), e.playShake(), this.setGamePrecent(), !0
					}
				}
				return !1
			},
			checkBubbleCollider: function(e, t) {
				var a = this._rotateNode.convertToNodeSpaceAR(e.node.parent.convertToWorldSpaceAR(t)),
					n = e.getColor(),
					s = !1;
				if (this.launchBubble == e) s = !0;
				else if (this.checkBubbleCenterCollider(e, a)) return !0;
				for (var o, r = i(this.bubbleMap); !(o = r()).done;) {
					var c = o.value,
						h = this.bubbleMap.get(parseInt(c));
					if (h && UIUtils.distance(a.x, a.y, h.node.x, h.node.y) <= AppConstant.B_SIZE) {
						var l = this.findNearColRow(h.getCol(), h.getRow(), a),
							d = l.col,
							u = l.row,
							p = h.getColor();
						if (0 == d && 0 == u) s ? this.gameWin() : this.removeBubble(0, e);
						else {
							if (s && UIUtils.distance(t.x, t.y, 0, this.borderMinY) <= AppConstant.B_DISX) return e.addWaring(), this.removeBubble(0, e), this.resetLaunchBubble(), this.adjustReadyBubble(!1), !0;
							var _ = UIUtils.getPointByColRow(d, u);
							if (e.node.x = a.x, e.node.y = a.y, e.node.scale = 1, e.initBubble(d, u), e.setFloorNum(this.getFloorNum(a.x, a.y)), e.node.angle = -this._rotateNode.angle, e.node.parent = this._rotateNode, n == AppConstant.BUBBLE_TYPE_BOMB) {
								SOUND_M.playEffect(AppConstant.SOUND_BOMB), this.caromNum = 1, this.removeBubbles.length = 0, this.removeBubbles.push(e), this.findBombBubble(d, u), this.rotateByShoot(e, this.launchDirection.x, this.launchDirection.y), this.resetLaunchBubble(), this.adjustReadyBubble(!0), this.checkAllUnlinkBubble();
								for (var E = this.removeBubbles.length, m = 0; m < E; m++) this.removeBubble(m, this.removeBubbles[m]);
								return this.setBubbleNum(1 - E), this.checkBubbleColorNum(), this.playBombEffect(t.x, t.y), this.setGamePrecent(), !0
							}
							if (s && p == AppConstant.BUBBLE_TYPE_DEATH) return SOUND_M.playEffect(AppConstant.SOUND_HITDEATH), this.gameFail(1), this.removeBubble(0, e), this.resetLaunchBubble(), this.adjustReadyBubble(!1), !0;
							if (s && p == AppConstant.BUBBLE_TYPE_VIRUS && (SOUND_M.playEffect(AppConstant.SOUND_INFECT), n = AppConstant.BUBBLE_TYPE_VIRUS, e.changeToOtherBubble(AppConstant.BUBBLE_TYPE_VIRUS)), n == AppConstant.BUBBLE_TYPE_CAIHONG && (n = p, e.changeToOtherBubble(n), this.playCaiHongEffect(t.x, t.y)), UIUtils.distance(_.x, _.y, this.centerPos.x, this.centerPos.y) >= this.borderMaxX && (this.addWaringNum(), e.addWaring(), !s && Math.abs(t.x) > this.borderMaxX)) return this.removeBubble(0, e), !0;
							if (this.addBubbleColorNum(n), this.bubbleMap.set(e.getBubbleId(), e), this.setBubbleNum(1), s) {
								SOUND_M.playEffect(AppConstant.SOUND_HIT), this.rotateByShoot(e, this.launchDirection.x, this.launchDirection.y), this.resetLaunchBubble();
								var f = this.findSameColorBubble(e, d, u, n);
								if (f) {
									for (SOUND_M.playEffect(AppConstant.SOUND_DROP), this.caromNum++, this.checkAllUnlinkBubble(), E = this.removeBubbles.length, this.sigleScore = this.caromNum * E, m = 0; m < E; m++) this.removeBubble(m, this.removeBubbles[m]), this.showScoreLable(this.sigleScore, cc.v2(this.removeBubbles[m].node.x, this.removeBubbles[m].node.y));
									this.setBubbleNum(-E), E > 15 ? this.showPraise(3) : E > 10 ? this.showPraise(2) : E > 6 && this.showPraise(1), this.caromNum > 1 && this.showCombo(), this.scoreTarget = this.scoreTarget + this.sigleScore * E, this.scoreDelay = Math.floor(this.sigleScore * E / 10), 0 == this.scoreDelay && (this.scoreDelay = 1), this.checkBubbleColorNum(f)
								} else this.caromNum = 0, cc.tween(e.node).to(.1, {
									x: _.x,
									y: _.y
								}).start(), e.playShake(), this.checkUnFrozen(d, u);
								this.adjustReadyBubble(f)
							} else cc.tween(e.node).to(.1, {
								x: _.x,
								y: _.y
							}).start(), e.setSpeedX(0), e.setSpeedY(0), e.playShake(), SOUND_M.playEffect(AppConstant.SOUND_HIT);
							this.setGamePrecent()
						}
						return !0
					}
				}
				return !1
			},
			showPraise: function(e) {
				SOUND_M.playEffect(AppConstant.SOUND_WORDS);
				var t = SpriteManager.createPraisePre();
				t.scale = .5, t.opacity = 255, t.y = .5 * cc.winSize.height - 300, t.parent = this.node, t.getComponent("Praise").showPraise(e), cc.tween(t).delay(.8).to(.6, {
					y: .5 * cc.winSize.height - 200,
					opacity: 0
				}).call(function(e) {
					SpriteManager.deletePraisePre(e)
				}).start()
			},
			showCombo: function() {
				var e = this.caromNum - 2;
				e < 0 ? e = 0 : e > 7 && (e = 7), SOUND_M.playEffect(AppConstant.SOUND_COMBO[e]), this.caromNum && (this._labelCombo.$Label.string = this.caromNum), this._combo.stopAllActions(), this._combo.opacity = 255, this._combo.x = .5 * cc.winSize.width + 50, this._combo.y = .5 * cc.winSize.height - 200, this._combo.active = !0, this._labelCombo.active = !1;
				var t = this;
				cc.tween(this._combo).to(.2, {
					x: .5 * cc.winSize.width - 250
				}, {
					easing: "backOut"
				}).call(function() {
					t._labelCombo.active = !0, t._comboA.$Animation.play("Shake3")
				}).delay(1).to(1, {
					opacity: 0
				}).call(function() {
					t._combo.active = !1
				}).start()
			},
			showTips: function(e, t) {
				this.actionLayerJS.showTips(e, t || UIUtils.getPoint(0, .5 * -cc.winSize.height + 50))
			},
			updateScore: function() {
				this.score != this.scoreTarget && (this.score += this.scoreDelay, this.score > this.scoreTarget && (this.score = this.scoreTarget), this.scoreLabel.string = this.score)
			},
			showScoreLable: function(e, t) {
				var i = this._bubbleLayer.convertToNodeSpaceAR(this._rotateNode.convertToWorldSpaceAR(t)),
					a = SpriteManager.createScorePre();
				a.getComponent(cc.Label).string = e, a.x = i.x, a.y = i.y, a.opacity = 255, a.parent = this._bubbleLayer, cc.tween(a).delay(.6).to(.2, {
					opacity: 0
				}).call(function(e) {
					SpriteManager.deleteScorePre(e)
				}).start()
			},
			updateStone: function() {
				this.stoneLabel.string = LocalData.stoneNum
			},
			resetLaunchBubble: function() {
				this.launchBubble = null, this.launchDirection.x = 0, this.launchDirection.y = 0;
				var e = this;
				this.isLaunch = !1, cc.tween(this.node).delay(.1).call(function() {
					e.isCanLaunch = !0
				}).start()
			},
			drawPathPoint: function(e, t) {
				if (this.drawTimeDelay += this.prePathPoint.sub(t).mag(), this.drawTimeDelay >= 1600 * e) {
					this.prePathPoint = t, this.drawTimeDelay = 0;
					var i = SpriteManager.createPathPointPre();
					0 == this.drawPathTemp ? (this.drawPathTemp = 1, i.scale = .5) : 1 == this.drawPathTemp && (this.drawPathTemp = 0, i.scale = .7), i.setPosition(t), i.zIndex = -1, i.parent = this._bubbleLayer, cc.tween(i).delay(.5).to(1, {
						opacity: 0
					}).call(function(e) {
						SpriteManager.deletePathPointPre(e)
					}).start()
				}
			},
			findNearColRow: function(e, t, i) {
				for (var a = 9999999, n = 0, s = 0, o = 0, r = 0, c = 0, h = 0; h < AppConstant.ShowReadBubbles; h++) {
					o = this.nearPoint[h].col + e, r = this.nearPoint[h].row + t;
					for (var l = !1, d = 0; d < AppConstant.ShowReadBubbles; d++)
						if (o == this.nearPoint[d].col && r == this.nearPoint[d].row) {
							l = !0;
							break
						} l || this.bubbleMap.has(UIUtils.getOnlyId(o, r)) || (c = UIUtils.getDistanceByColRowAndPos(o, r, i)) < a && (a = c, n = o, s = r)
				}
				return {
					col: n,
					row: s
				}
			},
			removeBubble: function(e, t) {
				var i = this;
				if (t) {
					t.getIsDanger() && this.delWaringNum();
					var a = .01 * e;
					a > .3 && (a = .3 + .005 * (e - 6)), cc.tween(t.node).delay(a).call(function() {
						var e = i._bubbleLayer.convertToNodeSpaceAR(t.node.parent.convertToWorldSpaceAR(cc.v2(t.node.x, t.node.y)));
						t.node.x = e.x, t.node.y = e.y, t.node.angle = 0, t.node.parent = i._bubbleLayer, t.openRemove(7 * Math.random() - 4, 10 * Math.random() + 15)
					}).start()
				}
			},
			gameWinDo: function() {
				console.log("this :>> ", this), this.score != this.scoreTarget && (this.score = this.scoreTarget, this.scoreLabel.string = this.score), this.isOver = !0;
				var e = 0;
				console.log("-------gamwWinDo---");
				for (var t, a = i(this.bubbleMap); !(t = a()).done;) {
					var n = t.value;
					(o = this.bubbleMap.get(parseInt(n))) && this.removeBubble(e++, o)
				}
				for (var s = 0; s < this.flyBubbles.length; s++) {
					var o;
					(o = this.flyBubbles[s]) && this.removeBubble(0, o)
				}
				switch (this.removeBubble(0, this.launchBubble), this._center.active = !1, this._light.active = !1, null == this.glassNode && (this.glassNode = cc.instantiate(this.glassPre), this.glassNode.parent = this._bubbleNode), SOUND_M.playEffect(AppConstant.SOUND_BREAKGLASS), this.glassNode.getComponent(cc.Animation).play("Glass"), this.awardNum = 0, this.starNum) {
					case 3:
						this.awardNum++, this._star3.stopAllActions(), this._star3.getComponent("Throw").open(7 * Math.random() - 4, 10 * Math.random() + 15, 2);
					case 2:
						this.awardNum++, this._star2.getComponent("Throw").open(7 * Math.random() - 4, 10 * Math.random() + 15, 2);
					case 1:
						this.awardNum++, this._star1.getComponent("Throw").open(7 * Math.random() - 4, 10 * Math.random() + 15, 2)
				}
				for (s = AppConstant.WinShowStarNum; s > 0; s--) {
					var r = SpriteManager.createStarPre();
					r.x = this.centerPos.x, r.y = this.centerPos.y, r.opacity = 0, r.parent = this._bubbleNode, cc.tween(r).delay(.5 + .1 * s).to(.1, {
						opacity: 255
					}).call(function(e) {
						SOUND_M.playEffect(AppConstant.SOUND_DROP), e.getComponent("Throw").open(7 * Math.random() - 4, 10 * Math.random() + 15, 2)
					}).start()
				}
				var c = this;
				cc.tween(this.node).delay(2.5).call(function() {
					null == c.winLayerJS ? RES_M.loadPrefabByName("WinLayer", function(e) {
						var t = cc.instantiate(e);
						t.parent = c.node, c.winLayerJS = t.getComponent("WinLayer"), c.winLayerJS.show(c.levelId, c.starNum, c.score, c.awardNum)
					}) : c.winLayerJS.show(c.levelId, c.starNum, c.score, c.awardNum)
				}).start()
			},
			gameWin: function() {
				var e = this;
				this.isOver = !0, cc.sys.platform != cc.sys.ANDROID ? "undefined" != typeof FBInstant ? this.gameWinDo() : AppConstant.Game_Local_Test ? ADS_M.fb_showVideoByPopUI(function() {
					ADS_M.fb_showInterstialDoThing(e, "gameWinDo")
				}) : this.gameWinDo() : nativeAdsHelper.showInterstialAds(EventNames.EVENT_ADS_GAMEWIN)
			},
			gameFail: function(e) {
				this.isOver = !0, "undefined" != typeof FBInstant && UIManager.isMiniGame() ? this.gameFailDo() : this.gameFailDo(e)
			},
			gameFailDo: function(e) {
				if (null == this.failLayerJS) {
					var t = this;
					RES_M.loadPrefabByName("FailLayer", function(i) {
						var a = cc.instantiate(i);
						a.parent = t.node, t.failLayerJS = a.getComponent("FailLayer"), t.failLayerJS.show(e, t.levelId)
					})
				} else this.failLayerJS.show(e, this.levelId)
			},
			closeFailLayer: function() {
				this.failLayerJS && this.failLayerJS.node.active && (this.failLayerJS.node.active = !1)
			},
			setGamePrecent: function() {
				this.mBubbleNum >= this.initBubbleNum ? this.jinduTarget = 0 : this.jinduTarget = (this.initBubbleNum - this.mBubbleNum) / this.initBubbleNum
			},
			setBubbleNum: function(e) {
				this.mBubbleNum += e, this.mBubbleNum < 0 && (this.mBubbleNum = 0)
			},
			updateGamePrecent: function(e) {
				this.jindu != this.jinduTarget && (this.jindu < this.jinduTarget ? (this.jindu += e, this.jindu > this.jinduTarget && (this.jindu = this.jinduTarget), 1 == this.starNum && this.jindu >= this.twoStarJinduTarget ? (this.starNum = 2, this.getStar(2)) : 2 == this.starNum && this.jindu >= 1 && (this.starNum = 3, this.getStar(3), this.jindu = 1, 2 == LocalData.guideStep && 1 == this.levelId && this.showGuideLayer(2))) : (this.jindu -= e, this.jindu < this.jinduTarget && (this.jindu = this.jinduTarget)), this.jindu > 1 && (this.jindu = 1), this._jindu.x = 130 * this.jindu - 295)
			},
			getStar: function(e) {
				if (SOUND_M.playEffect(AppConstant.SOUND_GETSTAR), 2 == e) {
					var t = this;
					cc.tween(this._star2).to(.2, {
						angle: 180,
						scale: 1
					}).then(cc.jumpTo(.5, 0, .5 * -cc.winSize.height + this.centerPos.y, 200, 1)).call(function() {
						t._star2.parent = t._bubbleNode, t._star2.x = t.centerPos.x, t._star2.y = t.centerPos.y, t._star2.getComponent(cc.Animation).play("StarRotate")
					}).to(.1, {
						x: this.twoStarPos[1].x,
						y: this.twoStarPos[1].y
					}).start(), cc.tween(this._star1).delay(.7).to(.1, {
						x: this.twoStarPos[0].x,
						y: this.twoStarPos[0].y
					}).start()
				} else {
					var i = this;
					cc.tween(this._star3).to(.2, {
						angle: 180,
						scale: 1
					}).then(cc.jumpTo(.5, 0, .5 * -cc.winSize.height + this.centerPos.y, 200, 1)).call(function() {
						i._star3.parent = i._bubbleNode, i._star3.x = i.centerPos.x, i._star3.y = i.centerPos.y, i._star3.getComponent(cc.Animation).play("StarRotate")
					}).to(.1, {
						x: this.sanStarPos[2].x,
						y: this.sanStarPos[2].y
					}).start(), cc.tween(this._star1).delay(.7).to(.1, {
						x: this.sanStarPos[0].x,
						y: this.sanStarPos[0].y
					}).start(), cc.tween(this._star2).delay(.7).to(.1, {
						x: this.sanStarPos[1].x,
						y: this.sanStarPos[1].y
					}).start()
				}
			},
			addWaringNum: function() {
				this.waringBubbleNum++, 1 == this.waringBubbleNum && (this._waring.$Animation.play("Waring"), this._waring.active = !0, SOUND_M.playEffect(AppConstant.SOUND_DANGER), LocalData.isPassProp1 || this.showGuideLayer(0))
			},
			delWaringNum: function() {
				this.waringBubbleNum--, this.waringBubbleNum <= 0 && (this.waringBubbleNum = 0, this._waring.$Animation.stop("Waring"), this._waring.active = !1)
			},
			playShake: function(e, t) {
				for (var i = 0; i < AppConstant.ShowReadBubbles; i++) {
					var a = this.bubbleMap.get(UIUtils.getOnlyId(this.nearPoint[i].col + e, this.nearPoint[i].row + t));
					a && a.playShake()
				}
			},
			checkUnFrozen: function(e, t) {
				for (var i = !1, a = 0; a < AppConstant.ShowReadBubbles; a++) {
					var n = this.bubbleMap.get(UIUtils.getOnlyId(this.nearPoint[a].col + e, this.nearPoint[a].row + t));
					n && !n.getIsCheck() && (n.setIsCheck(!0), n.getIsFrozen() && (i = !0, n.unFrozen()))
				}
				i && SOUND_M.playEffect(AppConstant.SOUND_ICE)
			},
			findBombBubble: function(e, t) {
				for (var i, a, n = !1, s = 0, o = this.bombPoint.length; s < o; s++) {
					i = this.bombPoint[s].col + e, a = this.bombPoint[s].row + t;
					var r = this.bubbleMap.get(UIUtils.getOnlyId(i, a));
					r && (r.getIsFrozen() ? (n = !0, r.unFrozen()) : (this.bubbleMap.delete(r.getBubbleId()), this.deleteBubbleColorNum(r.getColor()), this.removeBubbles.push(r)))
				}
				n && SOUND_M.playEffect(AppConstant.SOUND_ICE)
			},
			findSameColorBubble: function(e, t, i, a) {
				if (a > AppConstant.BUBBLE_TYPE_NORMAL) return !1;
				this.bubbleMap.forEach(function(e) {
					e && e.setIsCheck(!1)
				}), this.sameBubbles.length = 0, this.removeBubbles.length = 0, e.setIsCheck(!0), this.sameBubbles.push(e), this.checkSameColor(t, i, a), this.bubbleMap.forEach(function(e) {
					e && e.setIsCheck(!1)
				});
				var n = this.sameBubbles.length;
				if (n >= 3) {
					for (var s = 0; s < n; s++) {
						var o = this.sameBubbles[s];
						this.bubbleMap.delete(o.getBubbleId()), this.deleteBubbleColorNum(o.getColor()), this.removeBubbles.push(o), this.checkUnFrozen(o.getCol(), o.getRow())
					}
					return !0
				}
				return !1
			},
			checkSameColor: function(e, t, i) {
				for (var a, n, s = 0; s < AppConstant.ShowReadBubbles; s++) {
					a = this.nearPoint[s].col + e, n = this.nearPoint[s].row + t;
					var o = this.bubbleMap.get(UIUtils.getOnlyId(a, n));
					o && !o.getIsCheck() && (o.setIsCheck(!0), o.getColor() != i || o.getIsFrozen() || (this.sameBubbles.push(o), this.checkSameColor(a, n, i)))
				}
			},
			checkAllUnlinkBubble: function() {
				this.bubbleMap.forEach(function(e) {
					e && (e.setIsCheck(!1), e.setIsConnect(!1))
				});
				for (var e = 0, t = this.rootPoint.length; e < t; e++) this.checkUnlinkBubble(this.rootPoint[e].col, this.rootPoint[e].row);
				var i = this;
				this.bubbleMap.forEach(function(e) {
					e && (e.getIsConnect() || (i.bubbleMap.delete(e.getBubbleId()), i.deleteBubbleColorNum(e.getColor()), i.removeBubbles.push(e)))
				})
			},
			checkUnlinkBubble: function(e, t) {
				var i = this.bubbleMap.get(UIUtils.getOnlyId(e, t));
				if (i && !i.getIsCheck() && !i.getIsConnect()) {
					i.setIsCheck(!0), i.setIsConnect(!0);
					for (var a = 0; a < AppConstant.ShowReadBubbles; a++) this.checkUnlinkBubble(this.nearPoint[a].col + e, this.nearPoint[a].row + t)
				}
			},
			adjustReadyBubble: function(e) {
				this.readyBubbles.shift();
				var t = !0;
				if (e) this.addOneReadyBubble(null).scale = 0;
				else if (0 == this.readyBubbles.length) {
					this.resetReadyStep(), this.addRandomBubble(), this.addReadyBubble(66, this.readyBubbleNum);
					for (var i = 0; i < this.readyBubbles.length; i++) this.readyBubbles[i].node.y = this.readyBubblePosY - 20, this.readyBubbles[i].node.opacity = 0, cc.tween(this.readyBubbles[i].node).to(.2, {
						y: this.readyBubblePosY,
						opacity: 255
					}).start();
					t = !1
				}
				if (t)
					for (i = 0; i < this.readyBubbles.length; i++) i < 9 ? cc.tween(this.readyBubbles[i].node).to(.2, {
						x: this.readyPosX[i],
						scale: .8 - .05 * i
					}).start() : 9 != i || this.readyBubbles[i].node.active || (this.readyBubbles[i].node.x = this.readyPosX[i], cc.tween(this.readyBubbles[i].node).to(.2, {
						scale: .8 - .05 * i
					}).start(), this.readyBubbles[i].node.active = !0);
				var a = this;
				cc.tween(this.node).delay(.2).call(function() {
					a.readyBubbles.length > 0 && (a.launchBubble = a.readyBubbles[0])
				}).start()
			},
			addBubbleColorNum: function(e) {
				e <= AppConstant.BUBBLE_TYPE_NORMAL && this.bubbleColorNum[e - 1]++
			},
			deleteBubbleColorNum: function(e) {
				e <= AppConstant.BUBBLE_TYPE_NORMAL && this.bubbleColorNum[e - 1]--
			},
			checkBubbleColorNum: function(e) {
				e = e || !1;
				for (var t = [], i = 0; i < this.randomColor.length; i++) {
					var a = this.randomColor[i];
					this.bubbleColorNum[a - 1] <= 0 && (this.randomColor.splice(i, 1), i--, 0 == this.randomColor.length && (this.lastColor = a), t.push(a))
				}
				for (i = 0; i < t.length; i++) this.deleteBubbleColor(t[i], e)
			},
			deleteBubbleColor: function(e, t) {
				t = t || !1;
				for (var i = 0; i < this.readyBubbles.length; i++)
					if (!t || 0 != i) {
						var a = this.readyBubbles[i];
						if (a && e == a.getColor()) {
							var n = this.getRandomColor();
							a.changeToOtherBubble(n)
						}
					}
			},
			dealButtonClick: function(e) {
				if (this.isBegin && this.isCanLaunch && !this.isLaunch && this.launchBubble && !this.isOver) {
					SOUND_M.playEffect(AppConstant.SOUND_BTN);
					for (var t = e.node.name, i = 1; i <= 5; i++)
						if (t == "prop" + i) return void(2 == i && this.isUseMiaozhun ? this.showTips(13) : 5 == i && this.isUseToushi ? this.showTips(13) : this.useClickProp(i))
				}
			},
			useClickProp: function(e) {
				this.propNodes[e - 1].getIsLock() || (LocalData.propNums[e - 1] > 0 ? this.useProp(e) && (DataManager.addItemNum(e, -1), this.propNodes[e - 1].updateProp(LocalData.propNums[e - 1]), UIManager.isMiniGame() && this.usePropDo(e)) : LocalData.stoneNum >= this.propNodes[e - 1].getPrice() ? this.useProp(e) && this.deleteStone(-this.propNodes[e - 1].getPrice()) : this.showTips(5))
			},
			resurrection: function(e) {
				switch (e) {
					case 1:
						this.bubbleRotation = AppConstant.ROTATE_SUPER;
						break;
					case 2:
						this.useProp(1)
				}
				this.isOver = !1, SOUND_M.playMusic(AppConstant.MUSIC_GAME, !0), this.closeFailLayer()
			},
			usePropDo: function() {},
			useProp: function(e) {
				switch (e) {
					case 1:
						return this.useSuperRotate();
					case 2:
						return this.guideStep > 0 && this.passGuide(), this.useSight(), !0;
					case 3:
						return this.guideStep > 0 && this.passGuide(), this.changeToCaiHong();
					case 4:
						return this.guideStep > 0 && this.passGuide(), this.changeToBomb();
					case 5:
						return this.guideStep > 0 && this.passGuide(), this.isUseToushi = !0, this.propNodes[4].setUseProp(!0), this.bubbleMap.forEach(function(e) {
							e && e.getIsFrozen() && e.setICEOpacity()
						}), adjustHelper.trackEvent(EventNames.EVENT_ADJUST_PERSPECTIVE_USE), !0
				}
			},
			useSuperRotate: function() {
				LocalData.isPassProp1 || (DataManager.setIsPassProp1(!0), this.hideGuide());
				for (var e, t = new Array, a = i(this.bubbleMap); !(e = a()).done;) {
					var n = e.value,
						s = this.bubbleMap.get(parseInt(n));
					s && s.getFloorNum() >= 7 && (this.bubbleMap.delete(s.getBubbleId()), this.deleteBubbleColorNum(s.getColor()), t.push(s))
				}
				var o = t.length;
				if (o > 0) {
					SOUND_M.playEffect(AppConstant.SOUND_REBUILD);
					for (var r = 0; r < o; r++) this.removeBubble(r, t[r]);
					this.setBubbleNum(-o), this.checkBubbleColorNum(), this.bubbleRotation = AppConstant.ROTATE_SUPER, this.superRotateEffect || (this.superRotateEffect = cc.instantiate(this.superRotatePre), this.superRotateEffect.zIndex = 6, this.superRotateEffect.parent = this._bubbleLayer), this.superRotateEffect.active = !0, this.superRotateEffect.getComponent(cc.Animation).play("SuperRotate");
					var c = this;
					return cc.tween(this.superRotateEffect).delay(.5).call(function() {
						c.superRotateEffect.active = !1, c.isUseSuper = !1
					}).start(), this.isUseSuper = !0, adjustHelper.trackEvent(EventNames.EVENT_ADJUST_CONTINUE_CLICK), !0
				}
				return this.showTips(1), !1
			},
			useSight: function() {
				if (this.isUseMiaozhun = !0, this.propNodes[1].setUseProp(!0), null == this.sightNodeJS) {
					var e = cc.instantiate(this.sightPre);
					e.parent = this._bubbleLayer, e.zIndex = 3, e.active = !1, this.sightNodeJS = e.getComponent("Sight")
				}
				this._arrowJS.node.active = !1, adjustHelper.trackEvent(EventNames.EVENT_ADJUST_AIM_USE)
			},
			changeReadyBall: function(e) {
				for (var t = 0; t < this.readyBubbles.length; t++)
					if (this.readyBubbles[t].getColor() <= AppConstant.BUBBLE_TYPE_NORMAL) return AppConstant.BUBBLE_TYPE_CAIHONG == e ? (this.readyBubbles[t].changeToRainbow(), this.playCaiHongEffect(this.readyBubbles[t].node.x, this.readyBubbles[t].node.y, this.readyBubbles[t].node.scale)) : AppConstant.BUBBLE_TYPE_BOMB == e && this.readyBubbles[t].changeToBomb(), !0;
				return this.showTips(2), !1
			},
			changeToCaiHong: function() {
				return adjustHelper.trackEvent(EventNames.EVENT_ADJUST_RAINBOW_USE), this.changeReadyBall(AppConstant.BUBBLE_TYPE_CAIHONG)
			},
			changeToBomb: function() {
				return adjustHelper.trackEvent(EventNames.EVENT_ADJUST_BOMB_USE), this.changeReadyBall(AppConstant.BUBBLE_TYPE_BOMB)
			},
			_onBtnStoneTouchEnd: function() {
				this.showGiftLayer(1)
			},
			playBombEffect: function(e, t) {
				var i = SpriteManager.createBombEffectPre();
				i.getComponent(cc.ParticleSystem).resetSystem(), i.x = e, i.y = t, i.parent = this._bubbleLayer, cc.tween(i).delay(.5).call(function(e) {
					SpriteManager.deleteBombEffectPre(e)
				}).start()
			},
			playCaiHongEffect: function(e, t, i) {
				var a = SpriteManager.createCaiHongEffectPre();
				a.getComponent(cc.Animation).play("Caihong"), a.x = e, a.y = t, a.zIndex = 5, a.scale = i || 1, a.parent = this._bubbleLayer, cc.tween(a).delay(.4).call(function(e) {
					SpriteManager.deleteCaiHongEffectPre(e)
				}).start()
			},
			getSightPath: function(e, t) {
				this.sightPoints.length = 0, this.checkPathCoiller(e, t)
			},
			checkPathCoiller: function(e, t) {
				this.sightPoints.push(e);
				for (var i = [{
						bCheck: this.borderMaxX != e.x,
						data: {
							id: 0,
							posXorY: this.borderMaxX
						}
					}, {
						bCheck: this.borderMinX != e.x,
						data: {
							id: 1,
							posXorY: this.borderMinX
						}
					}, {
						bCheck: this.borderMaxY != e.y,
						data: {
							id: 2,
							posXorY: this.borderMaxY
						}
					}, {
						bCheck: this.borderMinY != e.y,
						data: {
							id: 3,
							posXorY: this.borderMinY
						}
					}], a = function(i) {
						var a = !1,
							n = i.id < 2 ? 1 : 2,
							s = this.getPointNum(e, t, n, i.posXorY);
						if (this.checkGameBox(s)) {
							var o = this.getCollierBubblePoint2(e, s);
							0 != UIUtils.distance(o.x, o.y, s.x, s.y) ? this.sightPoints.push(o) : 0 == i.id || 1 == i.id ? this.checkPathCoiller(s, UIUtils.getPoint(e.x, 2 * s.y - e.y)) : 2 == i.id ? this.checkPathCoiller(s, UIUtils.getPoint(2 * s.x - e.x, e.y)) : this.sightPoints.push(s), a = !0
						}
						return a
					}.bind(this), n = 0, s = i.length; n < s; n++)
					if (i[n].bCheck && a(i[n].data)) return
			},
			changeEndP: function(e, t, i, a) {
				var n = t,
					s = -a.x,
					o = -a.y,
					r = (n.y - i.y) / (n.x - i.x),
					c = i.y - r * i.x,
					h = UIUtils.distance(i.x, i.y, n.x, n.y),
					l = UIUtils.getPoint(-(Math.sqrt((r * r + 1) * e * e - s * s * r * r + (2 * s * o + 2 * c * s) * r - o * o - 2 * c * o - c * c) + (o + c) * r + s) / (r * r + 1), -(r * (Math.sqrt(r * r * e * e + e * e - s * s * r * r + 2 * s * o * r + 2 * c * s * r - o * o - 2 * c * o - c * c) + s) + o * r * r - c) / (r * r + 1)),
					d = UIUtils.getPoint((Math.sqrt((r * r + 1) * e * e - s * s * r * r + (2 * s * o + 2 * c * s) * r - o * o - 2 * c * o - c * c) + (-o - c) * r - s) / (r * r + 1), -(r * (s - Math.sqrt(r * r * e * e + e * e - s * s * r * r + 2 * s * o * r + 2 * c * s * r - o * o - 2 * c * o - c * c)) + o * r * r - c) / (r * r + 1)),
					u = UIUtils.distance(i.x, i.y, l.x, l.y),
					p = UIUtils.distance(i.x, i.y, d.x, d.y);
				return u <= p ? u < h && (n = l, h = u) : p < h && (n = d, h = p), [n, h]
			},
			getCollierBubblePoint2: function(e, t) {
				for (var a, n = -(t.y - e.y) / (t.x - e.x), s = t.x - e.x == 0, o = (t.y - e.y) * e.x / (t.x - e.x) - e.y, r = null, c = i(this.bubbleMap.values()); !(a = c()).done;) {
					var h = a.value;
					if (h) {
						var l = this._bubbleLayer.convertToNodeSpaceAR(h.node.parent.convertToWorldSpaceAR(h.node.getPosition())),
							d = UIUtils.getPoint(l.x, l.y),
							u = s ? Math.abs(d.x - t.x) : Math.abs(n * d.x + 1 * d.y + o) / Math.sqrt(n * n + 1);
						if (u <= AppConstant.B_RADIUS) {
							var p = this.changeEndP(AppConstant.B_RADIUS, t, e, d);
							t = p[0], r = p[1]
						} else if (u < AppConstant.B_SIZE) {
							var _ = UIUtils.getCrossPoint(e, t, d),
								E = UIUtils.distance(e.x, e.y, _.x, _.y);
							E < r && (t = _, r = E)
						}
					}
				}
				var m = this.centerPos;
				if ((s ? Math.abs(m.x - t.x) : Math.abs(n * m.x + 1 * m.y + o) / Math.sqrt(n * n + 1)) <= 4 * AppConstant.B_RADIUS) {
					var f = this.changeEndP(3 * AppConstant.B_RADIUS, t, e, m);
					t = f[0], r = f[1]
				}
				return t
			},
			getCollierBubblePoint: function(e, t) {
				for (var a, n = -(t.y - e.y) / (t.x - e.x), s = t.x - e.x == 0, o = (t.y - e.y) * e.x / (t.x - e.x) - e.y, r = i(this.bubbleMap.values()); !(a = r()).done;) {
					var c = a.value;
					if (c) {
						var h = this._bubbleLayer.convertToNodeSpaceAR(c.node.parent.convertToWorldSpaceAR(c.node.getPosition())),
							l = UIUtils.getPoint(h.x, h.y);
						if ((s ? Math.abs(l.x - t.x) : Math.abs(n * l.x + 1 * l.y + o) / Math.sqrt(n * n + 1)) <= AppConstant.B_RADIUS) {
							var d = this.changeEndP(AppConstant.B_RADIUS, t, e, l);
							t = d[0], d[1]
						}
					}
				}
				var u = this.centerPos;
				if ((s ? Math.abs(u.x - t.x) : Math.abs(n * u.x + 1 * u.y + o) / Math.sqrt(n * n + 1)) <= 4 * AppConstant.B_RADIUS) {
					var p = this.changeEndP(3 * AppConstant.B_RADIUS, t, e, u);
					t = p[0], p[1]
				}
				return t
			},
			getPointNum: function(e, t, i, a) {
				var n = null;
				return e.x == t.x ? 1 == i ? UIUtils.getPoint(99999, 99999) : 2 == i ? UIUtils.getPoint(e.x, a) : n : e.y == t.y ? 1 == i ? UIUtils.getPoint(a, e.y) : 2 == i ? UIUtils.getPoint(99999, 99999) : n : 1 == i ? UIUtils.getPoint(a, (a - e.x) * (t.y - e.y) / (t.x - e.x) + e.y) : UIUtils.getPoint((a - e.y) * (t.x - e.x) / (t.y - e.y) + e.x, a)
			},
			checkGameBox: function(e) {
				return !(e.x < this.borderMinX || e.x > this.borderMaxX || e.y < this.borderMinY || e.y > this.borderMaxY)
			},
			setTouchPos_back: function(e, t) {
				null != t && (t = this._bubbleLayer.convertToNodeSpaceAR(this._touchLayer.convertToWorldSpaceAR(t)));
				var i = cc.v2(this.launchBubble.node.x, this.launchBubble.node.y);
				if (t && (this.gameTouchP = t, this.launchDirection = t.sub(i).normalize()), this.isUseMiaozhun) {
					if (this.sightNodeJS)
						if (4 == e) this.isTouchAndUseSight = !1, this.sightNodeJS.node.active = !1;
						else {
							var a = t.sub(i).signAngle(cc.v2(0, 1)) / Math.PI * 180;
							Math.abs(a) >= 90 ? (this.isTouchAndUseSight = !1, this.sightNodeJS.node.active = !1) : 1 == e || 2 == e ? (this.sightNodeJS.node.active || (this.sightNodeJS.node.active = !0, this.isTouchAndUseSight = !0), this.getSightPath(UIUtils.getPoint(this.readyPosX[0], this.readyBubblePosY), UIUtils.getPoint(t.x, t.y)), this.sightPoints.length >= 2 && this.sightNodeJS.setPath(this.sightPoints)) : 3 == e && this.sightNodeJS.node.active && (SOUND_M.playEffect(AppConstant.SOUND_AIMSHOOT), this.isLaunch = !0, this.isCanLaunch = !1, this.launchBubble.launchBubble(), this.isTouchAndUseSight = !1, this.sightNodeJS.node.active = !1)
						}
				} else 4 == e ? this._arrowJS.setTouchState(!1) : 1 == e || 2 == e ? (1 == e && this._arrowJS.setTouchState(!0), this._arrowJS.setTouchPos(t)) : 3 == e && (this.guideStep > 0 || this._arrowJS.getIsVisible()) && (SOUND_M.playEffect(AppConstant.SOUND_SHOOT), this.isLaunch = !0, this.isCanLaunch = !1, this._arrowJS.setTouchState(!1), this.launchBubble.launchBubble())
			},
			setTouchPos: function(e, t) {
				null != t && (t = this._bubbleLayer.convertToNodeSpaceAR(this._touchLayer.convertToWorldSpaceAR(t)));
				var i = cc.v2(this.launchBubble.node.x, this.launchBubble.node.y);
				if (t && (this.gameTouchP = t, this.launchDirection = t.sub(i).normalize()), this.isUseMiaozhun) {
					if (this.sightNodeJS)
						if (4 == e) this.isTouchAndUseSight = !1, this.sightNodeJS.node.active = !1;
						else {
							var a = t.sub(i).signAngle(cc.v2(0, 1)) / Math.PI * 180;
							Math.abs(a) >= 90 ? (this.isTouchAndUseSight = !1, this.sightNodeJS.node.active = !1) : 1 == e || 2 == e ? (this.sightNodeJS.node.active || (this.sightNodeJS.node.active = !0, this.isTouchAndUseSight = !0), this.getSightPath(UIUtils.getPoint(this.readyPosX[0], this.readyBubblePosY), UIUtils.getPoint(t.x, t.y)), this.sightPoints.length >= 2 && this.sightNodeJS.setPath(this.sightPoints)) : 3 == e && this.sightNodeJS.node.active && (SOUND_M.playEffect(AppConstant.SOUND_AIMSHOOT), this.isLaunch = !0, this.isCanLaunch = !1, this.launchBubble.launchBubble(), this.isTouchAndUseSight = !1, this.sightNodeJS.node.active = !1)
						}
				} else 4 == e ? this._arrowJS.setTouchState(!1) : 1 == e || 2 == e ? (1 == e && this._arrowJS.setTouchState(!0), this._arrowJS.setTouchPos(t)) : 3 == e && (this.guideStep > 0 || this._arrowJS.getIsVisible()) && (SOUND_M.playEffect(AppConstant.SOUND_SHOOT), this.isLaunch = !0, this.isCanLaunch = !1, this._arrowJS.setTouchState(!1), this.launchBubble.launchBubble())
			},
			_onTouchLayerTouchStart: function(e, t) {
				if (!this.isBegin || !this.isCanLaunch || this.isLaunch || !this.launchBubble || this.isOver) return !1;
				var i = t.getLocation().sub(cc.v2(.5 * cc.winSize.width, .5 * cc.winSize.height));
				this.guideStep > 0 ? (this.setTouchPos(3, i), this.passGuide()) : this.setTouchPos(1, i)
			},
			_onTouchLayerTouchMove: function(e, t) {
				if (!(this.guideStep > 0) && this.isBegin && this.isCanLaunch && !this.isLaunch && this.launchBubble && !this.isOver) {
					var i = t.getLocation().sub(cc.v2(.5 * cc.winSize.width, .5 * cc.winSize.height));
					this.setTouchPos(2, i)
				}
			},
			_onTouchLayerTouchEnd: function(e, t) {
				if (!(this.guideStep > 0) && this.isBegin && this.isCanLaunch && !this.isLaunch && this.launchBubble && !this.isOver) {
					var i = t.getLocation().sub(cc.v2(.5 * cc.winSize.width, .5 * cc.winSize.height));
					this.setTouchPos(3, i)
				}
			},
			_onTouchLayerTouchCancel: function() {
				this.guideStep > 0 || !this.isBegin || !this.isCanLaunch || this.isLaunch || !this.launchBubble || this.isOver || this.setTouchPos(4, null)
			},
			deleteStone: function(e) {
				DataManager.addStone(e);
				var t = AppConstant.PropIdObj.PropId_9;
				this.actionLayerJS.showGoodsAction(SpriteManager.getItemSpriteFrameByPropId(t), 2, e, this.stonePos, {
					x: this.stonePos.x,
					y: this.stonePos.y - 50
				}), this.updateStone()
			},
			addStone: function(e) {
				console.log("addStone---" + e), e > 0 && SOUND_M.playEffect(AppConstant.SOUND_BUYSUCC), DataManager.addStone(e), this.actionLayerJS.showGoodsAction(SpriteManager.getItemSpriteFrameByPropId(9), 4, e, {
					x: 0,
					y: 0
				}, this.stonePos);
				var t = this;
				cc.tween(this.node).delay(.8).call(function() {
					t.updateStone()
				}).start(), adjustHelper.trackEvent(EventNames.EVENT_ADJUST_FREEDIAMOND20_ADS)
			},
			addHeart: function(e) {
				e > 0 && SOUND_M.playEffect(AppConstant.SOUND_BUYSUCC), DataManager.addHeart(e), this.actionLayerJS.showGoodsAction(SpriteManager.getItemSpriteFrameByPropId(10), 4, e, {
					x: 0,
					y: 0
				}, this.heartPos);
				var t = this;
				cc.tween(this.node).delay(.8).call(function() {
					t.updateHeart()
				}).start()
			},
			addItem: function(e, t) {
				t > 0 && SOUND_M.playEffect(AppConstant.SOUND_BUYSUCC), DataManager.addItemNum(e, t), this.propNodes[e - 1].updateProp(LocalData.propNums[e - 1])
			},
			showExitLayer: function() {
				if (null == this.exitLayerJS) {
					var e = this;
					RES_M.loadPrefabByName("ExitLayer", function(t) {
						var i = cc.instantiate(t);
						i.parent = e.node, e.exitLayerJS = i.getComponent("ExitLayer"), e.exitLayerJS.show()
					})
				} else this.exitLayerJS.show()
			},
			showGuideLayer: function(e) {
				this.guideStep = 0 == e ? 99 : e;
				var t = {
					pos: {
						x: 0,
						y: 0
					},
					icon: null,
					radius: 0
				};
				switch (e) {
					case 1:
						t.radius = 100, t.pos = {
							x: 0,
							y: -180 + this.bannerHeight
						};
						break;
					case 2:
						t.radius = 150, t.pos = {
							x: 0,
							y: +this.bannerHeight * this.gameScale
						};
						break;
					case 3:
						t.radius = 100, t.pos = {
							x: 80,
							y: -180 + this.bannerHeight
						};
						break;
					case 4:
						t.radius = 100, t.pos = {
							x: 220,
							y: -320 + this.bannerHeight
						};
						break;
					case 5:
					case 6:
						t.radius = 0, t.pos = {
							x: 0,
							y: 0
						};
						break;
					case 7:
						t.radius = 80, t.pos = this.propPos[1], t.icon = SpriteManager.getPropSpriteFrameByType(2);
						break;
					case 8:
						t.radius = 80, t.pos = this.propPos[2], t.icon = SpriteManager.getPropSpriteFrameByType(3);
						break;
					case 9:
						t.radius = 80, t.pos = this.propPos[3], t.icon = SpriteManager.getPropSpriteFrameByType(4);
						break;
					case 0:
						this.propNodes[0].showProp(), t.radius = 80, t.pos = this.propPos[0], t.icon = SpriteManager.getPropSpriteFrameByType(1);
						break;
					case 11:
					case 11:
						t.radius = 80, t.pos = this.propPos[4], t.icon = SpriteManager.getPropSpriteFrameByType(5)
				}
				if (null == this.guideJS) {
					var i = this;
					RES_M.loadPrefabByName("GuideLayer", function(a) {
						var n = cc.instantiate(a);
						n.parent = i.node, i.guideJS = n.getComponent("GuideLayer"), i.guideJS.show(e, t)
					})
				} else this.guideJS.show(e, t)
			},
			passGuide: function() {
				this.guideStep = 0, this.hideGuide(), DataManager.passGuide()
			},
			hideGuide: function() {
				this.guideJS && (this.guideJS.node.active = !1)
			},
			checkGuide: function() {
				if (!(LocalData.guideStep > 15)) {
					var e = !1;
					switch (this.levelId) {
						case 1:
							1 == LocalData.guideStep && (e = !0);
							break;
						case 2:
							3 == LocalData.guideStep && (e = !0);
							break;
						case 3:
							4 == LocalData.guideStep && (e = !0);
							break;
						case 4:
							5 == LocalData.guideStep && (e = !0);
							break;
						case 5:
							6 == LocalData.guideStep && (e = !0);
							break;
						case 6:
							7 == LocalData.guideStep && (e = !0);
							break;
						case 7:
							8 == LocalData.guideStep && (e = !0);
							break;
						case 8:
							9 == LocalData.guideStep && (e = !0);
							break;
						case 11:
							10 == LocalData.guideStep && (e = !0);
							break;
						case 12:
							11 == LocalData.guideStep && (e = !0);
							break;
						case 31:
							12 == LocalData.guideStep && (e = !0);
							break;
						case 41:
							13 == LocalData.guideStep && (e = !0);
							break;
						case 51:
							14 == LocalData.guideStep && (e = !0);
							break;
						case 62:
							15 == LocalData.guideStep && (e = !0)
					}
					e && this.showGuideLayer(LocalData.guideStep)
				}
			},
			showGiftLayer: function(e) {
				var t = this;
				RES_M.loadPrefabByName("GiftLayer", function(i) {
					var a = cc.instantiate(i);
					a.parent = t.node, t.giftJS = a.getComponent("GiftLayer"), t.giftJS.show(e)
				})
			},
			removeGiftLayer: function() {
				this.giftJS && (this.giftJS._onBtnCloseTouchEnd(), this.giftJS = null)
			},
			removeGiftLayerOK: function() {
				this.giftJS && (this.giftJS = null)
			},
			receiveGiftAward: function(e) {
				SOUND_M.playEffect(AppConstant.SOUND_BUYSUCC);
				for (var t = LocalData.giftAwardList[e - 1], i = 0; i < t.award.length; i++) 9 == t.award[i] ? this.addStone(t.num[i]) : 10 == t.award[i] ? this.addHeart(t.num[i]) : this.addItem(t.award[i], t.num[i]);
				this.removeGiftLayer()
			},
			_onBtnExit_NewTouchEnd: function() {
				cc.log("in GameScene onBtnExit_New"), EVENT_M.emit(EventNames.EVENT_SHOWEXIT)
			},
			showPopLayer: function() {
				UIManager.showPopLayer(this.node)
			},
			getStrHaveNameAndTime: function() {
				return this._nowSceneName + this._timeNow
			},
			showNetLayer: function() {},
			removeNetLayer: function() {
				UIManager.removeNetLoading(this.getStrHaveNameAndTime())
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	GiftLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "b7adf6yux5NrI9GZ8uT4OeH", "GiftLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {
				itemPre: cc.Prefab
			},
			onLoad: function() {
				this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, RES_M.getIsChinese() || (this._textDes.$Label.string = RES_M.getText("t49"), this._textBuy.$Label.string = RES_M.getText("t6"))
			},
			onDestroy: function() {
				nativeAdsHelper.checkHideBannerAds(), RES_M.releasePrefabByName("GiftLayer")
			},
			show: function(e) {
				if (nativeAdsHelper.checkShowBannerAds(), SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.items = [], this.giftData = {}, 1 == e && AppConstant.IS_HAVE_CHARGER) {
					this._imgAds.active = !1;
					var t = Math.floor(2 * Math.random());
					this.giftData = LocalData.giftAwardList[t], this._textTitle.$Label.string = RES_M.getText("gift2")
				} else 1 == e ? (this._imgAds.active = !0, this.giftData = LocalData.giftAwardList[0], this._textTitle.$Label.string = RES_M.getText("gift1")) : 2 == e ? (this._imgAds.active = !0, this.giftData = LocalData.giftAwardList[2], this._textTitle.$Label.string = RES_M.getText("gift3")) : 3 == e && (this._imgAds.active = !1, this.giftData = LocalData.giftAwardList[3], this._textTitle.$Label.string = RES_M.getText("gift4"));
				4 == e ? (this._imgAds.active = !1, this._textDes.active = !0) : this._textDes.active = !1;
				var i = 0,
					a = this.giftData.award.length;
				2 == a ? i = -60 : 3 == a && (i = -120);
				for (var n = 0; n < a; n++) this.createItem(this.giftData.award[n], this.giftData.num[n], i + 120 * n);
				this._textTitle.$Label.string = RES_M.getText("gift" + this.giftData.id), this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow")
			},
			hideNode: function() {
				this.node.active = !1, nativeAdsHelper.checkHideBannerAds()
			},
			createItem: function(e, t, i) {
				var a = cc.instantiate(this.itemPre);
				a.parent = this._img, a.x = i, a.y = 10;
				var n = a.getComponent("ItemNode");
				n.initItem(2, {
					id: e,
					type: 0,
					num: t
				}), this.items.push(n)
			},
			_onBtnCloseTouchEnd: function() {
				this.hideNode(), SOUND_M.playEffect(AppConstant.SOUND_PANEL);
				for (var e = 0; e < this.items.length; e++) this.items[e].node.destroy();
				this.node.destroy(), EVENT_M.emit(EventNames.EVENT_RECEIVEAWARD_CLOSE)
			},
			_onBtnBuyTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), 2 == this.giftData.id ? cc.pppay.NativeUtils.pay(2) : 4 == this.giftData.id ? EVENT_M.emit(EventNames.EVENT_RECEIVEAWARD, this.giftData.id) : (cc.pppay.NativeUtils.showVideoAds(this.giftData.id, EventNames.EVENT_ADS_REWARD_GIFT_PACKAGE), adjustHelper.trackEvent(EventNames.EVENT_ADJUST_FREEDIAMOND20_ADS))
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	GoodsNode: [function(e, t) {
		"use strict";
		cc._RF.push(t, "5e1e3z2GhxOOLoVdsL+BPR4", "GoodsNode");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			onLoad: function() {},
			start: function() {},
			showAction: function(e, t, i, a, n) {
				this._icon.$Sprite.spriteFrame = t, this._labelNum.$Label.string = i > 0 ? "+" + i : i, this.node.x = a.x, this.node.y = a.y, this._icon.$Animation.play("Shake");
				var s = this;
				switch (e) {
					case 1:
						this.node.scale = .7, cc.tween(this.node).then(cc.jumpTo(.5, n.x, n.y, 200, 1)).delay(.5).call(function() {}).start();
						break;
					case 2:
						cc.tween(this.node).to(.6, {
							y: n.y,
							opacity: 0
						}).call(function() {
							s.node.destroy()
						}).start();
						break;
					case 3:
						this.node.scale = .7, cc.tween(this.node).then(cc.jumpTo(.8, n.x, n.y, 400, 1)).to(.2, {
							scale: 0,
							opacity: 0
						}).call(function() {
							s.node.destroy()
						}).start();
						break;
					case 4:
						this.node.scale = .7, cc.tween(this.node).then(cc.jumpTo(.5, n.x + 50, a.y, 50, 2)).to(.3, {
							x: n.x,
							y: n.y
						}).to(.1, {
							scale: 0
						}).call(function() {
							s.node.destroy()
						}).start()
				}
			},
			update: function() {}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	GuideLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "91523bCQtNGDp/sfXn+yFe7", "GuideLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			onLoad: function() {
				this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, RES_M.getIsChinese() || (this._textOk.$Label.string = RES_M.getText("t6")), this.iconSF = this._icon.$Sprite.spriteFrame
			},
			onDestroy: function() {
				RES_M.releasePrefabByName("GuideLayer")
			},
			show: function(e, t) {
				if (this.node.active = !0, e < 20) {
					switch (this._textDes.$Label.string = RES_M.getText("g" + e), this._btnOk.active = !1, this._des.y = 250, e) {
						case 1:
						case 2:
						case 3:
						case 4:
							break;
						case 5:
						case 6:
						case 10:
						case 11:
						case 12:
						case 13:
						case 14:
						case 15:
							this._btnOk.active = !0, this._des.y = 0;
							break;
						case 7:
						case 8:
						case 9:
						case 0:
						case 11:
							this._des.y = t.pos.y + 200
					}
					null == t.icon ? this._icon.$Sprite.spriteFrame = this.iconSF : this._icon.$Sprite.spriteFrame = t.icon
				} else switch (this._textDes.$Label.string = RES_M.getText("l" + (e - 20)), this._btnOk.active = !1, this._des.y = 250, e) {
					case 21:
						this._des.y = 0
				}
				this.setPos(t.radius, t.pos)
			},
			setPos: function(e, t) {
				e > 0 ? this._shou.active = !0 : this._shou.active && (this._shou.active = !1), this._yuan.width = e, this._yuan.height = e, this._yuan.x = t.x, this._yuan.y = t.y, this._bg.x = -t.x, this._bg.y = -t.y, this._shou.x = t.x, this._shou.y = t.y
			},
			_onBtnOkTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), this.node.active = !1, EVENT_M.emit(EventNames.EVENT_PASSGUIDE)
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	HaopingLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "1f86cXZ1iJO9ofO89vh7SCY", "HaopingLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			onLoad: function() {
				this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, RES_M.getIsChinese() || (this._textTitle.$Label.string = RES_M.getText("title12"), this._textHaopin.$Label.string = RES_M.getText("title12"), this._textDes.$Label.string = RES_M.getText("t50"))
			},
			onDestroy: function() {
				RES_M.releasePrefabByName("HaopinLayer")
			},
			show: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow")
			},
			_onBtnCloseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.node.destroy()
			},
			_onBtnHaopinTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), cc.pppay.NativeUtils.haoPin(), this.node.destroy()
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	Init: [function(e, t) {
		"use strict";
		cc._RF.push(t, "5e3abnxTupN64YroEPzJ08i", "Init"), cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function() {},
			initCloud: function() {
				window.NET_CLOUD = null, cc.cloud ? (NET_CLOUD = cc.cloud && cc.cloud.initialize(), NET_CLOUD.auth().anonymousAuthProvider().signIn().then(function(e) {
					console.log("TCB inited : " + e)
				})) : this.printLog("\u8bf7\u5148\u5728Cocos Service\u9762\u677f\u4e2d\u542f\u7528\u4e91\u670d\u52a1")
			}
		}), cc._RF.pop()
	}, {}],
	ItemNode: [function(e, t) {
		"use strict";
		cc._RF.push(t, "5c6adrY2dFJJZDLy96qVhyV", "ItemNode");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			onLoad: function() {
				this.nameLabel = this._labelName.$Label, this.needLabel = this._labelNeed.$Label
			},
			initItem: function(e, t) {
				switch (this.itemDatas = t, e) {
					case 0:
						this._btnBuy.active = !0, this.needLabel.string = t.price, this.nameLabel.string = RES_M.getText("p" + t.id);
						break;
					case 1:
						this.nameLabel.string = "x" + t.num;
						break;
					case 2:
						this.nameLabel.string = RES_M.getText("p" + t.id), this._labelNum.active = !0, this.numLabel = this._labelNum.$Label, this.numLabel.string = "x" + t.num
				}
				parseInt(t.type) > 0 && (this._textDes.$Label.string = RES_M.getText("s" + t.type), this._des.active = !0, this._textDes.active = !0), null != LSManager ? this._itemIcon.$Sprite.spriteFrame = LSManager.getItemSpriteFrameByPropId(t.id) : null != SpriteManager && (this._itemIcon.$Sprite.spriteFrame = SpriteManager.getItemSpriteFrameByPropId(t.id))
			},
			updateNum: function(e) {
				this.nameLabel.string = "x" + e
			},
			_onBtnBuyTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), this.itemDatas.price > LocalData.stoneNum ? (EVENT_M.emit(EventNames.EVENT_CHANGESHOP, 2), EVENT_M.emit(EventNames.EVENT_SHOWTIPS, 5)) : (SOUND_M.playEffect(AppConstant.SOUND_BUYSUCC), EVENT_M.emit(EventNames.EVENT_DELETESTONE, -this.itemDatas.price), EVENT_M.emit(EventNames.EVENT_ADDITEM, this.itemDatas.id, 1), this.trackEvent(this.itemDatas.id))
			},
			trackEvent: function(e) {
				switch (e) {
					case 1:
						adjustHelper.trackEvent(EventNames.EVENT_ADJUST_SWITCH_BUY);
						break;
					case 2:
						adjustHelper.trackEvent(EventNames.EVENT_ADJUST_AIM_BUY);
						break;
					case 3:
						adjustHelper.trackEvent(EventNames.EVENT_ADJUST_RAINBOW_BUY);
						break;
					case 4:
						adjustHelper.trackEvent(EventNames.EVENT_ADJUST_BOMB_BUY);
						break;
					case 5:
						adjustHelper.trackEvent(EventNames.EVENT_ADJUST_PERSPECTIVE_BUY)
				}
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	LevelEditor: [function(e, t) {
		"use strict";
		cc._RF.push(t, "7340dPlUIVKb6sVqOwYueKw", "LevelEditor");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			show: function(e) {
				if (ADS_M.showIns(), this.node.active = !0, this.clearColor(), this.isSave = !1, 2 == LocalData.diyGuideStep && (EVENT_M.emit(EventNames.EVENT_SHOWGUIDE, 22, {
						x: 50,
						y: 50
					}), (e = {}).chessboard = [
						[-7, 0, 11],
						[-7, 7, 11],
						[-6, 0, 11],
						[-6, 6, 11],
						[-5, 0, 11],
						[-5, 5, 11],
						[-4, 0, 3],
						[-4, 1, 3],
						[-4, 2, 3],
						[-4, 3, 3],
						[-4, 4, 3],
						[-3, -1, 3],
						[-3, 0, 2],
						[-3, 1, 2],
						[-3, 2, 2],
						[-3, 3, 2],
						[-3, 4, 3],
						[-2, -2, 3],
						[-2, -1, 2],
						[-2, 0, 8],
						[-2, 1, 8],
						[-2, 2, 8],
						[-2, 3, 2],
						[-2, 4, 3],
						[-1, -3, 3],
						[-1, -2, 2],
						[-1, -1, 8],
						[-1, 2, 8],
						[-1, 3, 2],
						[-1, 4, 3],
						[0, -7, 11],
						[0, -6, 11],
						[0, -5, 11],
						[0, -4, 3],
						[0, -3, 2],
						[0, -2, 8],
						[0, 2, 8],
						[0, 3, 2],
						[0, 4, 11],
						[0, 5, 11],
						[0, 6, 11],
						[0, 7, 11],
						[1, -4, 3],
						[1, -3, 2],
						[1, -2, 8],
						[1, 1, 8],
						[1, 2, 2],
						[1, 3, 3],
						[2, -4, 3],
						[2, -3, 2],
						[2, -2, 8],
						[2, -1, 8],
						[2, 0, 8],
						[2, 1, 2],
						[2, 2, 3],
						[3, -4, 3],
						[3, -3, 2],
						[3, -2, 2],
						[3, -1, 2],
						[3, 0, 2],
						[3, 1, 3],
						[4, -4, 3],
						[4, -3, 3],
						[4, -2, 3],
						[4, -1, 3],
						[4, 0, 3],
						[5, -5, 11],
						[5, 0, 11],
						[6, -6, 11],
						[6, 0, 11],
						[7, -7, 11],
						[7, 0, 11]
					], e.id = 666), e) {
					var t, i, a;
					this._textCreat.$Label.string = RES_M.getText("t38"), this.isSave = 666 != e.id, this.levelId = e.id;
					for (var n = e.chessboard.length, s = 0; s < n; s++)
						if (t = e.chessboard[s][0], i = e.chessboard[s][1], a = e.chessboard[s][2], t + 7 < 15 && t + 7 >= 0 && i + 7 < 15 && i + 7 >= 0) {
							var o = this.bubbles[t + 7][i + 7];
							null != o && o.getColor() != a && o.setColor(a, this.getBubbleSpriteFrame(a))
						}
				} else this._textCreat.$Label.string = RES_M.getText("t39")
			},
			ctor: function() {
				this.nearPoint = [{
					col: -1,
					row: 0
				}, {
					col: -1,
					row: 1
				}, {
					col: 0,
					row: -1
				}, {
					col: 0,
					row: 1
				}, {
					col: 1,
					row: -1
				}, {
					col: 1,
					row: 0
				}], this.rootPoint = [{
					col: 0,
					row: -2
				}, {
					col: 0,
					row: 2
				}, {
					col: 1,
					row: -2
				}, {
					col: 1,
					row: 1
				}, {
					col: 2,
					row: -2
				}, {
					col: 2,
					row: -1
				}, {
					col: 2,
					row: 0
				}, {
					col: -1,
					row: -1
				}, {
					col: -1,
					row: 2
				}, {
					col: -2,
					row: 0
				}, {
					col: -2,
					row: 1
				}, {
					col: -2,
					row: 2
				}]
			},
			onLoad: function() {
				RES_M.getIsChinese() || (this._textPreview.$Label.string = RES_M.getText("t40")), this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, this.selectColor = 3, this.initBubble(), this.bubbleIds = [99, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 301, 302, 303, 304, 305], this.bubbleNodes = [], this.itemNodes = [], this.icons = [], this.locks = [], this.isLocks = [];
				for (var e = 0; e < this.bubbleIds.length; e++) {
					var t = this._bubbleLayer.getChildByName("b" + this.bubbleIds[e]);
					t.name = this.bubbleIds[e] + "", t.on("click", this.dealButtonClick, this), this.bubbleNodes.push(t), 0 != this.bubbleIds[e] || RES_M.getIsChinese() || (t.getComponent(cc.Sprite).spriteFrame = this.getBubbleSpriteFrame(0))
				}
				for (e = 1; e <= 5; e++) {
					var i = this["_item" + e];
					i.name = "item" + e, i.on("click", this.dealButtonClick, this), this.itemNodes.push(i), this.icons.push(i.getChildByName("item")), this.locks.push(i.getChildByName("lock")), this.isLocks.push(!1)
				}
			},
			onDestroy: function() {
				RES_M.releasePrefabByName("EditorLayer")
			},
			initBubble: function() {
				this.bubbles = new Array(15);
				for (var e = 0; e < 15; e++) {
					this.bubbles[e] = new Array(15);
					for (var t = 0; t < 15; t++) this.bubbles[e][t] = null
				}
				for (var i = -7; i <= 7; i++)
					for (var a = -7; a <= 7; a++)
						if (!(0 == i && Math.abs(a) <= 1 || 1 == i && (-1 == a || 0 == a) || -1 == i && (0 == a || 1 == a))) {
							var n = !0;
							if (i > 0) {
								for (e = 0; e < i; e++)
									if (a == 7 - e) {
										n = !1;
										break
									}
							} else if (i < 0)
								for (e = 0; e < Math.abs(i); e++)
									if (a == -7 + e) {
										n = !1;
										break
									} if (n) {
								var s = UIUtils.getPointByColRow(i, a),
									o = LSManager.createEditorBubblePre();
								o.parent = this._rotateNode, o.x = s.x, o.y = s.y;
								var r = o.getComponent("EditorBubble");
								r.initBubble(i, a), this.bubbles[i + 7][a + 7] = r, RES_M.getIsChinese() || r.setColor(0, this.getBubbleSpriteFrame(0))
							}
						}
			},
			clearColor: function() {
				for (var e = 0; e < 15; e++)
					for (var t = 0; t < 15; t++) {
						var i = this.bubbles[e][t];
						i && null != i && 0 != i.getColor() && i.setColor(0, this.getBubbleSpriteFrame(0))
					}
			},
			dealButtonClick: function(e) {
				for (var t = e.node.name, i = 0; i < this.bubbleIds.length; i++)
					if (t == this.bubbleIds[i]) return void this.setSelectColor(this.bubbleIds[i], e.node.x, e.node.y);
				for (i = 1; i <= 5; i++)
					if (t == "item" + i) return void this.setPropLock(i)
			},
			setPropLock: function(e) {
				this.isLocks[e - 1] ? (this.isLocks[e - 1] = !1, this.icons[e - 1].active = !0, this.locks[e - 1].active = !1) : (this.isLocks[e - 1] = !0, this.icons[e - 1].active = !1, this.locks[e - 1].active = !0)
			},
			setSelectColor: function(e, t, i) {
				99 == e && (e = -1), this.selectColor = e, this._select.$Sprite.spriteFrame = this.getBubbleSpriteFrame(e), this._ok.x = t, this._ok.y = i
			},
			getBubbleSpriteFrame: function(e) {
				var t = e;
				return 0 == e ? (t = "empty", RES_M.getIsChinese() || (t = "empty_en")) : -1 == e && (t = "102"), LSManager.getBubbleSpriteByColor(t + "")
			},
			_onBtnCloseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), this.node.active = !1
			},
			_onBtnCreatTouchEnd: function() {
				for (var e = this.createBubbleMap(), t = {
						chessboard: [],
						prepareColor: [],
						randomBorn: [],
						randomColor: [],
						randomShoot: [{
							num: 6,
							step: 6
						}, {
							num: 6,
							step: 5
						}, {
							num: 6,
							step: 4
						}, {
							num: 6,
							step: 3
						}, {
							num: 6,
							step: 2
						}, {
							num: 6,
							step: 1
						}]
					}, i = 0, a = 0, n = 0, s = 0; s < e.length; s++) {
					var o = [],
						r = e[s].color;
					o.push(e[s].col), o.push(e[s].row), o.push(r), t.chessboard.push(o);
					for (var c = !1, h = 0; h < t.prepareColor.length; h++)
						if (t.prepareColor[h] == r) {
							c = !0;
							break
						} 0 == i && r == AppConstant.BUBBLE_TYPE_ICE1 ? i = 1 : 0 == a && r == AppConstant.BUBBLE_TYPE_ICE2 ? a = 1 : -1 == r && n++, c || t.prepareColor.push(r)
				}
				var l = [3, 8, 11, 2, 12, 1, 4, 5, 6, 7, 9, 10],
					d = 0;
				if (1 == i && d++, 1 == a && d++, (d > 0 || n > 0) && t.prepareColor.length - d <= 3) {
					var u = t.prepareColor.length;
					for (u -= d, d > 1 && (u -= 1), s = 0; s < 5 - u; s++)
						for (h = 0; h < 12; h++) {
							c = !1;
							for (var p = 0; p < t.prepareColor.length; p++) l[h] == t.prepareColor[p] && (c = !0);
							if (!c) {
								t.prepareColor.push(l[h]);
								break
							}
						}
				}
				t.twoStarNum = Math.floor(.5 * t.chessboard.length);
				var _ = 0;
				this.isSave ? (_ = this.levelId, DataManager.saveDiyLevel(_, t)) : _ = DataManager.addDiyLevel(t), this.node.active = !1, 3 == LocalData.diyGuideStep && EVENT_M.emit(EventNames.EVENT_PASSDIYGUIDE), this.isSave ? EVENT_M.emit(EventNames.EVENT_UPDATEDIY, _) : EVENT_M.emit(EventNames.EVENT_ADDLEVELDATA, _), EVENT_M.emit(EventNames.EVENT_SHOWPREVIEW, 2, t)
			},
			createBubbleMap: function() {
				for (var e = 0; e < 15; e++)
					for (var t = 0; t < 15; t++) this.bubbles[e][t] && (this.bubbles[e][t].setIsCheck(!1), this.bubbles[e][t].setIsConnect(!1));
				for (e = 0; e < 12; e++) this.checkUnlinkBubble(this.rootPoint[e].col, this.rootPoint[e].row);
				var i = [];
				for (e = 0; e < 15; e++)
					for (t = 0; t < 15; t++) {
						var a = this.bubbles[e][t];
						a && a.getIsConnect() && i.push({
							col: a.getCol(),
							row: a.getRow(),
							color: a.getColor()
						})
					}
				return i
			},
			checkUnlinkBubble: function(e, t) {
				if (e + 7 < 15 && e + 7 >= 0 && t + 7 < 15 && t + 7 >= 0) {
					var i = this.bubbles[e + 7][t + 7];
					if (i && 0 != i.getColor() && !i.getIsCheck() && !i.getIsConnect()) {
						i.setIsCheck(!0), i.setIsConnect(!0);
						for (var a = 0; a < 6; a++) this.checkUnlinkBubble(this.nearPoint[a].col + e, this.nearPoint[a].row + t)
					}
				}
			},
			_onBtnPreviewTouchEnd: function() {
				EVENT_M.emit(EventNames.EVENT_SHOWPREVIEW, 1, this.createBubbleMap())
			},
			_onBtnClearTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), this.clearColor()
			},
			setColor: function(e, t) {
				this._select.x = e, this._select.y = t;
				var i = UIUtils.getColRowByPoint(e, t),
					a = i.col,
					n = i.row;
				if (a + 7 < 15 && a + 7 >= 0 && n + 7 < 15 && n + 7 >= 0) {
					var s = this.bubbles[a + 7][n + 7];
					null != s && s.getColor() != this.selectColor && (s.setColor(this.selectColor, this.getBubbleSpriteFrame(this.selectColor)), 2 == LocalData.diyGuideStep && (EVENT_M.emit(EventNames.EVENT_PASSDIYGUIDE), EVENT_M.emit(EventNames.EVENT_SHOWGUIDE, 23, {
						x: this._btnCreat.x,
						y: this._btnCreat.y
					})))
				}
			},
			_onBubbleLayerTouchStart: function(e, t) {
				var i = t.getLocation().sub(cc.v2(.5 * cc.winSize.width, this._bubbleLayer.y + .5 * cc.winSize.height));
				this._select.active = !0, this.setColor(i.x, i.y)
			},
			_onBubbleLayerTouchMove: function(e, t) {
				var i = t.getLocation().sub(cc.v2(.5 * cc.winSize.width, this._bubbleLayer.y + .5 * cc.winSize.height));
				this.setColor(i.x, i.y)
			},
			_onBubbleLayerTouchEnd: function() {
				this._select.active = !1
			},
			_onBubbleLayerTouchCancel: function() {
				this._select.active = !1
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	LevelInfo: [function(e, t) {
		"use strict";
		cc._RF.push(t, "74e0eWHcUdJVpHD1rd33gR7", "LevelInfo");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			ctor: function() {
				this.isBegin = !1, this.delayTime = 0
			},
			onLoad: function() {
				this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, RES_M.getIsChinese() || (this._textScore.$Label.string = RES_M.getText("t27"), this._textStart.$Label.string = RES_M.getText("t9")), this.heartPos = this.node.convertToNodeSpaceAR(this._imgLv.parent.convertToWorldSpaceAR(this._imgLv.getPosition()))
			},
			onDestroy: function() {
				RES_M.releasePrefabByName("LevelInfo")
			},
			show: function(e, t, i) {
				switch (ADS_M.showIns(), SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.levelId = e, this._labelLevel.$Label.string = UIUtils.createWithFormat(RES_M.getText("t28"), [e]), t) {
					case 0:
						this._star1.active = !1, this._star3.active = !1, this._star2.active = !1;
						break;
					case 1:
						this._star1.active = !0, this._star3.active = !1, this._star2.active = !1;
						break;
					case 2:
						this._star1.active = !0, this._star3.active = !1, this._star2.active = !0;
						break;
					case 3:
						this._star1.active = !0, this._star3.active = !0, this._star2.active = !0
				}
				this._labelScore.$Label.string = i, this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow")
			},
			_onBtnCloseTouchEnd: function() {
				this.isBegin || (SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.node.active = !1)
			},
			_onBtnStartTouchEnd: function() {
				this.isBegin || (SOUND_M.playEffect(AppConstant.SOUND_BTN), "undefined" != typeof FBInstant && UIManager.isMiniGame() ? ADS_M.fb_showInterstialDoThing(this, "_onBtnStartCallback") : this._onBtnStartCallback())
			},
			_onBtnStartCallback: function() {
				this.isBegin = !0, EVENT_M.emit(EventNames.EVENT_DELETEHEART, -5, this.heartPos), this.delayTime = .8, adjustHelper.trackEvent("Level" + this.levelId + "_click")
			},
			update: function(e) {
				this.isBegin && this.delayTime > 0 && (this.delayTime -= e, this.delayTime <= 0 && (LocalData.nowLevelId = this.levelId, 1 == LocalData.maxLevelId && ADS_M.showBottomAds(), this.isBegin = !1, UIManager.enterGame()))
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	LevelManager: [function(e, t) {
		"use strict";
		cc._RF.push(t, "34e40QK119IAYuGnw3UexVR", "LevelManager");
		var i = cc.Class({
			properties: {},
			ctor: function() {
				this.levelDatas = new Map
			},
			statics: {
				_instance: null,
				getInstance: function() {
					return this._instance || (this._instance = new i)
				}
			},
			loadLevelDataByLevelId: function(e) {
				return this.loadJson(e)
			},
			loadJson: function(e) {
				if (e > 0 && e <= 90)
					if (this.levelDatas.has(e)) EVENT_M.emit(EventNames.BEGINGAME, this.levelDatas.get(e));
					else {
						var t = this;
						cc.resources.load("jsons/map_" + e, function(i, a) {
							i ? console.log("\u9519\u8bef\uff1a" + i) : (t.levelDatas.set(e, a.json), EVENT_M.emit(EventNames.BEGINGAME, a.json))
						})
					}
			}
		});
		window.LevelManager = i.getInstance(), cc._RF.pop()
	}, {}],
	LevelNode: [function(e, t) {
		"use strict";
		cc._RF.push(t, "81855m/PbBOiYHQ1G7c0UaR", "LevelNode");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			onLoad: function() {},
			start: function() {},
			initLevel: function(e, t, i, a) {
				if (this.levelId = e, this.getComponent(cc.Sprite).spriteFrame = i, this._levelId.$Label.string = e, 0 == t && (this.node.getComponent(cc.Button).enabled = !1), 2 == t) {
					switch (a) {
						case 3:
							this._star3.active = !0;
						case 2:
							this._star2.active = !0;
						case 1:
							this._star1.active = !0
					}
					this._star.active = !0
				}
			},
			update: function() {}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	LevelScene: [function(e, t) {
		"use strict";
		cc._RF.push(t, "12f7aBueWNDEbJ4XtrWote/", "LevelScene");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {
				lockPre: cc.Prefab,
				levelPre: cc.Prefab,
				levelNumPre: cc.Prefab
			},
			ctor: function() {
				this.content = null, this.levelInfoJS = null, this.addHeartJS = null, this.bagJS = null, this.shopJS = null, this.signJS = null, this.spinJS = null, this.editorJS = null, this.redBagJS = null, this.guideJS = null, this.giftJS = null, this.firendJS = null, this.addFirendJS = null, this.emailJS = null, this.emailViewJS = null, this.netPreviewJS = null, this.netLayer = null, this.isUpdateTime = !1
			},
			onLoad: function() {
				adjustHelper.loadConfig(), window.LSManager = this.node.getComponent("LevelSpriteManager"), this._timeNow = Date.now();
				var e = cc.director.getScene();
				this._nowSceneName = e.name, UIManager.curSceneName = this._nowSceneName, cc.log("onLoad scene ------ " + UIManager.curSceneName), e.exp_nameAndTimeKey = this._nowSceneName + this._timeNow, this.checkDelay(), this.registerEvent(), nativeAdsHelper.showFlowAds(AppConstant.POS_HOME)
			},
			registerEvent: function() {
				EVENT_M.on(EventNames.EVENT_SHOWTIPS, this.showTips.bind(this)), EVENT_M.on(EventNames.EVENT_DELETESTONE, this.deleteStone.bind(this)), EVENT_M.on(EventNames.EVENT_DELETEHEART, this.deleteHeart.bind(this)), EVENT_M.on(EventNames.EVENT_ADDSTONE, this.addStone.bind(this)), EVENT_M.on(EventNames.EVENT_SHOWGIFT, this.showGiftLayer.bind(this)), EVENT_M.on(EventNames.EVENT_ADDITEM, this.addItem.bind(this)), EVENT_M.on(EventNames.EVENT_SHOWSETNAME, this.showSetNameLayer.bind(this)), EVENT_M.on(EventNames.EVENT_ADDHEART, this.addHeart.bind(this)), EVENT_M.on(EventNames.EVENT_SHOWSHOP, this.showShopLayer.bind(this)), EVENT_M.on(EventNames.EVENT_PASSDIYGUIDE, this.passDiyGuide.bind(this)), EVENT_M.on(EventNames.EVENT_UPDATEADDHEART, this.updateAddHeartNum.bind(this)), EVENT_M.on(EventNames.EVENT_RECEIVEAWARD, this.receiveGiftAward.bind(this)), EVENT_M.on(EventNames.EVENT_RECEIVEAWARD_CLOSE, this.removeGiftLayerOK.bind(this)), EVENT_M.on(EventNames.EVENT_SHOWGUIDE, this.showGuideLayer.bind(this)), EVENT_M.on(EventNames.EVENT_REMOVENET, this.removeNetLayer.bind(this)), EVENT_M.on(EventNames.EVENT_UPDATEDIY, this.updateDiyLevelNodeById.bind(this)), EVENT_M.on(EventNames.EVENT_CHECKSPINREDP, this.checkSpinRedP.bind(this)), EVENT_M.on(EventNames.EVENT_CHECKSIGNREDP, this.checkSignRedP.bind(this)), EVENT_M.on(EventNames.EVENT_SHOWUPLOAD, this.showUploadLayer.bind(this)), EVENT_M.on(EventNames.EVENT_SHOWEMAIL, this.showEmailViewLayer.bind(this)), EVENT_M.on(EventNames.EVENT_RECEIVEEMAIL, this.receiveEmail.bind(this)), EVENT_M.on(EventNames.EVENT_SHOWPREVIEW, this.showPreviewLayer.bind(this)), EVENT_M.on(EventNames.EVENT_SHOWEDITOR, this.showEditorLayer.bind(this)), EVENT_M.on(EventNames.EVENT_SHOWNETPREVIEW, this.showNetPreviewLayer.bind(this)), EVENT_M.on(EventNames.EVENT_REMOVENETPREVIEW, this.removeNetPreviewLayer.bind(this)), EVENT_M.on(EventNames.EVENT_SHOWNET, this.showNetLayer.bind(this)), EVENT_M.on(EventNames.EVENT_SHOWADDFIREND, this.showAddFirendLayer.bind(this)), EVENT_M.on(EventNames.EVENT_POPLAYER, this.showPopLayer.bind(this)), EVENT_M.on(EventNames.EVENT_ADS_BAG_TAG_TOUCH, this.showBagLayer.bind(this)), EVENT_M.on(EventNames.EVENT_ADS_ADD_SHOP_TOUCH, this.showShopByShopTouch.bind(this)), EVENT_M.on(EventNames.EVENT_ADS_ADD_SIGN_TOUCH, this.showSignLayer.bind(this)), EVENT_M.on(EventNames.EVENT_ADS_ADD_SPIN_TOUCH, this.showSpinLayer.bind(this)), EVENT_M.on(EventNames.EVENT_ADS_ADD_HEART_TOUCH, this.showAddHeartLayer.bind(this)), EVENT_M.on(EventNames.EVENT_ADS_ADD_STONE_TOUCH, this.showShopByStoneTouch.bind(this)), EVENT_M.on(EventNames.EVENT_ADS_SIGN, this.reardVedioSign.bind(this)), EVENT_M.on(EventNames.EVENT_ADS_REWARD_GIFT_PACKAGE, this.rewardVideoGiftPackage.bind(this)), EVENT_M.on(EventNames.EVENT_ADS_REWARD_ADD_HEART, this.rewardVideoAddHeart.bind(this)), EVENT_M.on(EventNames.EVENT_ADS_REWARD_ADD_STONE, this.rewardVideoAddStone.bind(this))
			},
			removeEvent: function() {
				EVENT_M.removeListener(EventNames.EVENT_SHOWTIPS), EVENT_M.removeListener(EventNames.EVENT_DELETESTONE), EVENT_M.removeListener(EventNames.EVENT_DELETEHEART), EVENT_M.removeListener(EventNames.EVENT_ADDSTONE), EVENT_M.removeListener(EventNames.EVENT_SHOWGIFT), EVENT_M.removeListener(EventNames.EVENT_ADDITEM), EVENT_M.removeListener(EventNames.EVENT_SHOWSETNAME), EVENT_M.removeListener(EventNames.EVENT_ADDHEART), EVENT_M.removeListener(EventNames.EVENT_SHOWSHOP), EVENT_M.removeListener(EventNames.EVENT_PASSDIYGUIDE), EVENT_M.removeListener(EventNames.EVENT_UPDATEADDHEART), EVENT_M.removeListener(EventNames.EVENT_RECEIVEAWARD), EVENT_M.removeListener(EventNames.EVENT_SHOWGUIDE), EVENT_M.removeListener(EventNames.EVENT_REMOVENET), EVENT_M.removeListener(EventNames.EVENT_UPDATEDIY), EVENT_M.removeListener(EventNames.EVENT_CHECKSPINREDP), EVENT_M.removeListener(EventNames.EVENT_CHECKSIGNREDP), EVENT_M.removeListener(EventNames.EVENT_SHOWUPLOAD), EVENT_M.removeListener(EventNames.EVENT_SHOWEMAIL), EVENT_M.removeListener(EventNames.EVENT_RECEIVEEMAIL), EVENT_M.removeListener(EventNames.EVENT_SHOWPREVIEW), EVENT_M.removeListener(EventNames.EVENT_SHOWEDITOR), EVENT_M.removeListener(EventNames.EVENT_SHOWNETPREVIEW), EVENT_M.removeListener(EventNames.EVENT_REMOVENETPREVIEW), EVENT_M.removeListener(EventNames.EVENT_SHOWNET), EVENT_M.removeListener(EventNames.EVENT_SHOWADDFIREND), EVENT_M.removeListener(EventNames.EVENT_POPLAYER), EVENT_M.removeListener(EventNames.EVENT_RECEIVEAWARD_CLOSE), EVENT_M.removeListener(EventNames.EVENT_ADS_ADD_HEART_TOUCH), EVENT_M.removeListener(EventNames.EVENT_ADS_ADD_STONE_TOUCH), EVENT_M.removeListener(EventNames.EVENT_ADS_BAG_TAG_TOUCH), EVENT_M.removeListener(EventNames.EVENT_ADS_ADD_SHOP_TOUCH), EVENT_M.removeListener(EventNames.EVENT_ADS_ADD_SIGN_TOUCH), EVENT_M.removeListener(EventNames.EVENT_ADS_ADD_SPIN_TOUCH), EVENT_M.removeListener(EventNames.EVENT_ADS_REWARD_ADD_HEART), EVENT_M.removeListener(EventNames.EVENT_ADS_REWARD_ADD_STONE)
			},
			checkDelay: function() {
				SOUND_M.playMusic(AppConstant.MUSIC_MAP, !0), RES_M.getIsChinese() || (this._btnSign.$Sprite.spriteFrame = LSManager.signSF, this._btnShop.$Sprite.spriteFrame = LSManager.shopSF, this._textRank.$Label.string = "Challenge Cup", this._textEditor.$Label.string = "Level editor"), this.adaptiveType = UIUtils.setAdaptiveScreen();
				var e = 1;
				1 == this.adaptiveType ? (e = cc.winSize.height / 1136, cc.winSize.width > 816 * e ? (this._svLevel.scale = cc.winSize.width / 816, this._svLevel.getChildByName("view").height = cc.winSize.height / (cc.winSize.width / 816)) : (this._svLevel.scale = e, this._svLevel.getChildByName("view").height = cc.winSize.height / e), LocalData.gameScale = e, this._topNode.scale = e, this._bagNode.scale = e, this._leftNode.scale = e, this._rightNode.scale = e, this._kuan.width = cc.winSize.width / e) : (LocalData.gameScale = 1, this._svLevel.height = cc.winSize.height, this._svLevel.getChildByName("view").height = cc.winSize.height), LocalData.maxLevelId > 1 && ADS_M.showBottomAds(), this.content = this._svLevel.$ScrollView.content, this._svLevel.on("scrolling", this.scrolling, this), ADS_M.isWECHAT() && (this._heartxxbg.x = -200, this._labelHeart.x = -200, this._imgTime.x = -200, this._stonexxbg.x = 35, this._labelStone.x = 35);
				var t = ADS_M.getLiuhaiHeight();
				if (this._topNode.$Widget.top = t, this.heartPos = {
						x: (this._img_heart.parent.x + this._img_heart.x) * e,
						y: this._topNode.y + t + this._kuan.y + this._img_heart.parent.y + this._img_heart.y
					}, this.stonePos = {
						x: (this._img_stone.parent.x + this._img_stone.x) * e,
						y: this._topNode.y + t + this._kuan.y + this._img_stone.parent.y + this._img_stone.y
					}, this.bagPos = {
						x: .5 * cc.winSize.width + this._btnBag.x,
						y: .5 * -cc.winSize.height + this._btnBag.y
					}, this.actionLayerJS = this.node.getChildByName("ActionLayer").getComponent("ActionLayer"), this.actionLayerJS.node.zIndex = 3, this.node.getChildByName("ActionLayer").zIndex = AppConstant.zIndex_Tip, this.initLevel(), LocalData.maxLevelId > 1 && -1 == LocalData.uid) {
					var i = this;
					RES_M.loadPrefabByName("ShouNode", function(e) {
						cc.instantiate(e).parent = i._btnEditor
					})
				}
				this.updateStone(), 1 == DataManager.getNextGetHeartTime() && DataManager.addHeartByTime(), this.checkSpinRedP(), this.checkEmailRedP(), this.checkSignRedP(), this.updateHeart(), this.checkHeartNum(), LocalData.isNewDay ? UIManager.isMiniGame() ? LocalData.maxLevelId > 5 && this.showSignLayer() : this.showSignLayer() : LocalData.isNextDay ? (LocalData.isNextDay = !1, this.showGiftLayer(3)) : DataManager.addOpenLevel() ? LocalData.loadAdsNum > 0 ? this.showRedBag(Math.floor(2 * Math.random())) : this.showRedBag(0) : LocalData.openLevelNum % 4 == 0 ? this.showGiftLayer(1 + Math.floor(2 * Math.random())) : LocalData.openLevelNum, this.scrolling()
			},
			scrolling: function() {
				this._cloundNode1.y = .18 * this.content.y - .5 * cc.winSize.height, this._cloundNode2.y = .18 * this.content.y - .5 * cc.winSize.height
			},
			onDestroy: function() {
				nativeAdsHelper.checkHideBannerAds(), this.removeEvent(), UIManager.removeThingsByName(this.getStrHaveNameAndTime()), window.LSManager = null, nativeAdsHelper.hideFlowAds(AppConstant.POS_HOME)
			},
			initLevel: function() {
				var e = this;
				this._mapTmx = this._tiledMap.$TiledMap;
				for (var t = this._mapTmx.getObjectGroup("levels").getObjects(), i = 1, a = function() {
						if (s = t[n], o = s.x + 50.5 - 408, r = s.y + 50.5 - 7395, c = s.y + 50.5 + 22.5, (h = parseInt(s.name)) % 10 == 1 && (l = Math.floor(h / 10) + 1, d = AppConstant.UnlockStarNums[l - 1], LocalData.starNum < d)) return (u = cc.instantiate(e.lockPre)).zIndex = 1, u.parent = e._tiledMap, u.getComponent("LockNode").initLock(LocalData.starNum, d, i), i = -i, u.x = o, u.y = r, "continue";
						p = cc.instantiate(e.levelPre);
						var a = cc.instantiate(e.levelNumPre);
						a.zIndex = 1, a.parent = e.content, a.x = o, a.y = c, a.getComponent(cc.Label).string = h, p.zIndex = 1, p.parent = e._tiledMap, p.x = o, p.y = r, p.name = s.name, _ = 0, E = 0, LocalData.maxLevelId == h ? (E = LocalData.levelData[h - 1].star, h == AppConstant.MAX_LEVEL && E > 0 ? _ = 2 : (e._levelMe.x = o, e._levelMe.y = r + 90, e._levelMe.zIndex = 2, e._levelMe.active = !0, _ = 1), (m = -c + .5 * cc.winSize.height) > 0 ? m = 0 : m < -(14760 - cc.winSize.height) && (m = -(14760 - cc.winSize.height)), e.content.y = m, 1 == h && RES_M.loadPrefabByName("ShouNode", function(e) {
							var t = cc.instantiate(e);
							t.scale = 3, t.y = -100, t.parent = a
						})) : LocalData.maxLevelId > h && (E = LocalData.levelData[h - 1].star, _ = 2), p.getComponent("LevelNode").initLevel(h, _, LSManager.getLevelSpriteFrameByType(_), E), p.on("click", e.dealButtonClick, e)
					}, n = 0; n < t.length; n++) {
					var s, o, r, c, h, l, d, u, p, _, E, m;
					a()
				}
			},
			updateHeart: function() {
				this._labelHeart.$Label.string = LocalData.heartNum
			},
			updateStone: function() {
				this._labelStone.$Label.string = LocalData.stoneNum
			},
			updateTime: function() {
				if (LocalData.heartNum < LocalData.heartNumMax) {
					var e = DataManager.getNextGetHeartTime();
					if (1 == e) this.updateHeart();
					else {
						var t, i = Math.floor(e / 60),
							a = Math.floor(e % 60);
						t = a > 9 ? i + ":" + a + " + 1" : i + ":0" + a + " + 1", this._labelTime.$Label.string = t, this.updateAddHeartTime(e)
					}
				} else this.isUpdateTime = !1, this.unschedule(this.updateTime), this._imgTime.active && (this._imgTime.active = !1), this.addHeartJS && this.addHeartJS.checkHeartNum()
			},
			updateAddHeartTime: function(e) {
				this.addHeartJS && this.addHeartJS.node.active && this.addHeartJS.updateFullTime(e)
			},
			updateAddHeartNum: function() {
				this.addHeartJS && this.addHeartJS.node.active && this.addHeartJS.updateHeartNum()
			},
			checkHeartNum: function() {
				this.isUpdateTime || LocalData.heartNum < LocalData.heartNumMax && (this.isUpdateTime = !0, this.updateTime(), this.schedule(this.updateTime, 1), this._imgTime.active = !0)
			},
			dealButtonClick: function(e) {
				var t = e.node.name;
				if (LocalData.heartNum >= 5) {
					var i = parseInt(t);
					if (this.levelInfoJS) this.levelInfoJS.show(i, LocalData.levelData[i - 1].star, LocalData.levelData[i - 1].score);
					else {
						var a = this;
						RES_M.loadPrefabByName("LevelInfo", function(e) {
							var t = cc.instantiate(e);
							t.zIndex = 2, t.parent = a.node, a.levelInfoJS = t.getComponent("LevelInfo"), a.levelInfoJS.show(i, LocalData.levelData[i - 1].star, LocalData.levelData[i - 1].score)
						})
					}
				} else this.showTips(9), this.showAddHeartLayer()
			},
			showShopLayer: function(e) {
				this.showCommonLayer({
					name: "shopJS",
					type: e
				})
			},
			showShopByStoneTouch: function() {
				this.showShopLayer(2)
			},
			showShopByShopTouch: function() {
				this.showShopLayer(1)
			},
			showBagLayer: function() {
				this.showCommonLayer({
					name: "bagJS"
				})
			},
			showSignLayer: function() {
				this.showCommonLayer({
					name: "signJS"
				})
			},
			showSpinLayer: function() {
				this.showCommonLayer({
					name: "spinJS"
				})
			},
			reardVedioSign: function(e) {
				e ? (cc.log("LevelScene \u89c2\u770b\u7b7e\u5230\u6fc0\u52b1\u89c6\u9891\u5b8c\u6bd5"), this.rewardVideoClosed()) : cc.log("LevelScene \u6ca1\u6709\u89c2\u770b\u7b7e\u5230\u6fc0\u52b1\u89c6\u9891\u5b8c\u6bd5")
			},
			rewardVideoGiftPackage: function(e) {
				if (e) {
					if (cc.log("LevelScene \u89c2\u770b\u5927\u793c\u5305\u6fc0\u52b1\u89c6\u9891\u5b8c\u6bd5"), this._nowSceneName !== UIManager.curSceneName) return;
					this.rewardVideoClosed()
				} else cc.log("LevelScene \u6ca1\u6709\u89c2\u770b\u5927\u793c\u5305\u6fc0\u52b1\u89c6\u9891\u5b8c\u6bd5")
			},
			rewardVideoAddHeart: function(e) {
				e ? (cc.log("LevelScene \u89c2\u770b\u7231\u5fc3\u6fc0\u52b1\u89c6\u9891\u5b8c\u6bd5"), this.rewardVideoClosed()) : cc.log("LevelScene \u6ca1\u6709\u89c2\u770b\u7231\u5fc3\u6fc0\u52b1\u89c6\u9891\u5b8c\u6bd5")
			},
			rewardVideoAddStone: function(e) {
				e ? (cc.log("LevelScene \u89c2\u770b\u94bb\u77f3\u6fc0\u52b1\u89c6\u9891\u5b8c\u6bd5"), this.rewardVideoClosed()) : cc.log("LevelScene \u6ca1\u6709\u89c2\u770b\u94bb\u77f3\u6fc0\u52b1\u89c6\u9891\u5b8c\u6bd5")
			},
			rewardVideoClosed: function() {
				cc.pppay.NativeUtils.seeSuccess(1), cc.pppay.NativeUtils.loadADSSuccess(1)
			},
			update: function() {},
			showAddHeartLayer: function(e) {
				e && this.showCommonLayer({
					name: "addHeartJS"
				})
			},
			_doShowInterstialBack: function(e) {
				for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) i[a - 1] = arguments[a];
				var n;
				"undefined" != typeof FBInstant ? (n = ADS_M).fb_showInterstialDoThing.apply(n, [this, e].concat(i)) : this[e].apply(this, i)
			},
			doNativeInterstialBack: function(e, t) {
				t > 0 ? this[e](t) : this[e]()
			},
			_onBtnAddheartTouchEnd: function() {
				cc.sys.platform != cc.sys.ANDROID ? this._doShowInterstialBack("showAddHeartLayer") : nativeAdsHelper.showInterstialAds(EventNames.EVENT_ADS_ADD_HEART_TOUCH)
			},
			_onBtnAddstoneTouchEnd: function() {
				cc.sys.platform != cc.sys.ANDROID ? this._doShowInterstialBack("showShopLayer", 2) : nativeAdsHelper.showInterstialAds(EventNames.EVENT_ADS_ADD_STONE_TOUCH)
			},
			_onBtnShopTouchEnd: function() {
				cc.sys.platform != cc.sys.ANDROID ? this._doShowInterstialBack("showShopLayer", 1) : nativeAdsHelper.showInterstialAds(EventNames.EVENT_ADS_ADD_SHOP_TOUCH)
			},
			_onBtnSpinTouchEnd: function() {
				cc.sys.platform != cc.sys.ANDROID ? this._doShowInterstialBack("showSpinLayer") : nativeAdsHelper.showInterstialAds(EventNames.EVENT_ADS_ADD_SPIN_TOUCH)
			},
			_onBtnSignTouchEnd: function() {
				cc.sys.platform != cc.sys.ANDROID ? this._doShowInterstialBack("showSignLayer") : nativeAdsHelper.showInterstialAds(EventNames.EVENT_ADS_ADD_SIGN_TOUCH)
			},
			_onBtnEmailTouchEnd: function() {
				this.showEmailLayer()
			},
			_onBtnFirendTouchEnd: function() {
				this.showFirendLayer()
			},
			_onBtnEditorTouchEnd: function() {
				-1 == LocalData.uid ? this.showSetNameLayer() : this.showMyLevelLayer()
			},
			_onBtnRankTouchEnd: function() {
				-1 == LocalData.uid ? this.showSetNameLayer() : NET_M.findMap()
			},
			_onBtnBagTouchEnd: function() {
				cc.sys.platform != cc.sys.ANDROID ? this._doShowInterstialBack("showBagLayer") : nativeAdsHelper.showInterstialAds(EventNames.EVENT_ADS_BAG_TAG_TOUCH)
			},
			deleteStone: function(e) {
				DataManager.addStone(e), this.actionLayerJS.showGoodsAction(LSManager.getItemSpriteFrameByPropId(9), 2, e, this.stonePos, {
					x: this.stonePos.x,
					y: this.stonePos.y - 50
				}), this.updateStone()
			},
			deleteHeart: function(e, t) {
				DataManager.addHeart(e), this.actionLayerJS.showGoodsAction(LSManager.getItemSpriteFrameByPropId(10), 1, e, this.heartPos, t), this.updateHeart(), this.checkHeartNum()
			},
			addStone: function(e) {
				console.log("LevelScene addStone---" + e), e > 0 && SOUND_M.playEffect(AppConstant.SOUND_BUYSUCC), DataManager.addStone(e), this.actionLayerJS.showGoodsAction(LSManager.getItemSpriteFrameByPropId(9), 4, e, {
					x: 0,
					y: 0
				}, this.stonePos);
				var t = this;
				cc.tween(this.node).delay(.8).call(function() {
					t.updateStone()
				}).start()
			},
			addHeart: function(e) {
				e > 0 && SOUND_M.playEffect(AppConstant.SOUND_BUYSUCC), DataManager.addHeart(e), this.actionLayerJS.showGoodsAction(LSManager.getItemSpriteFrameByPropId(10), 4, e, {
					x: 0,
					y: 0
				}, this.heartPos);
				var t = this;
				cc.tween(this.node).delay(.8).call(function() {
					t.updateHeart()
				}).start()
			},
			addItem: function(e, t) {
				t > 0 && SOUND_M.playEffect(AppConstant.SOUND_BUYSUCC), DataManager.addItemNum(e, t), t > 0 && this.actionLayerJS.showGoodsAction(LSManager.getItemSpriteFrameByPropId(e), 3, t, {
					x: 0,
					y: 0
				}, this.bagPos), this.bagJS && this.bagJS.checkBagNum()
			},
			showTips: function(e) {
				this.actionLayerJS.showTips(e, UIUtils.getPoint(0, 0))
			},
			showRedBag: function(e) {
				AppConstant.FB_IG_Platform_Review || AppConstant.Switch_RedBag && this.showCommonLayer({
					name: "redBagJS",
					type: e
				})
			},
			showEditorLayer: function(e) {
				this.showCommonLayer({
					name: "editorJS",
					type: e
				})
			},
			showMyLevelLayer: function() {
				this.showCommonLayer({
					name: "myLevelJS"
				})
			},
			updateDiyLevelNodeById: function(e) {
				null != this.myLevelJS && this.myLevelJS.updateDiyLevelById(e)
			},
			showPreviewLayer: function(e, t) {
				var i = this;
				RES_M.loadPrefabByName("PreviewLayer", function(a) {
					var n = cc.instantiate(a);
					n.parent = i.node, 1 == e ? n.getComponent("PreviewLayer").showByMap(t) : 2 == e && n.getComponent("PreviewLayer").showByLevelData(t)
				})
			},
			showFirendLayer: function() {
				this.showCommonLayer({
					name: "firendJS"
				})
			},
			showAddFirendLayer: function() {
				this.showCommonLayer({
					name: "addFirendJS"
				})
			},
			showEmailLayer: function() {
				this.showCommonLayer({
					name: "emailJS"
				})
			},
			receiveEmail: function(e) {
				null != this.emailJS && (this.emailJS.receiveEmail(e), this.checkEmailRedP())
			},
			showEmailViewLayer: function(e) {
				this.showCommonLayer({
					name: "emailViewJS",
					type: e
				})
			},
			checkEmailRedP: function() {
				LocalData.realEmailNum > 0 ? (this._btnEmail.$Animation.play("Dou"), this._redPEmail.active = !0) : this._redPEmail.active && (this._btnEmail.$Animation.stop("Dou"), this._btnEmail.angle = 0, this._redPEmail.active = !1)
			},
			checkSpinRedP: function() {
				LocalData.loadAdsNum > 0 ? (this._btnSpin.$Animation.play("Dou"), this._redPSpin.active = !0) : this._redPSpin.active && (this._btnSpin.$Animation.stop("Dou"), this._btnSpin.angle = 0, this._redPSpin.active = !1)
			},
			checkSignRedP: function() {
				LocalData.isNewDay ? (this._btnSign.$Animation.play("Dou"), this._redPSign.active = !0) : this._redPSign.active && (this._btnSign.$Animation.stop("Dou"), this._btnSign.angle = 0, this._redPSign.active = !1)
			},
			showGuideLayer: function(e, t) {
				var i = {};
				i.pos = t, i.icon = null, i.radius = 100, 22 == e && (i.radius = 80), this.showCommonLayer({
					name: "guideJS",
					type: e,
					guideData: i
				})
			},
			passDiyGuide: function() {
				this.guideJS && (this.guideJS.node.active = !1, DataManager.passDiyGuide())
			},
			showGiftLayer: function(e) {
				if (!AppConstant.Game_Local_Test) {
					if (AppConstant.FB_IG_Platform_Review) return;
					if (!AppConstant.Switch_Gift) return
				}
				3 != e && LocalData.loadAdsNum <= 0 || this.showCommonLayer({
					name: "giftJS",
					type: e
				})
			},
			removeGiftLayer: function() {
				this.giftJS && (this.giftJS._onBtnCloseTouchEnd(), this.giftJS = null)
			},
			removeGiftLayerOK: function() {
				this.giftJS && (this.giftJS = null)
			},
			receiveGiftAward: function(e) {
				if (this._nowSceneName === UIManager.curSceneName) {
					for (var t = LocalData.giftAwardList[e - 1], i = 0; i < t.award.length; i++) t.award[i] == AppConstant.PropIdObj.PropId_9 ? this.addStone(t.num[i]) : t.award[i] == AppConstant.PropIdObj.PropId_10 ? this.addHeart(t.num[i]) : this.addItem(t.award[i], t.num[i]);
					this.removeGiftLayer()
				}
			},
			showShareLayer: function() {},
			showSetNameLayer: function() {
				this.showCommonLayer({
					name: "SetNameLayer"
				})
			},
			getStrHaveNameAndTime: function() {
				return this._nowSceneName + this._timeNow
			},
			showNetLayer: function() {},
			removeNetLayer: function() {
				UIManager.removeNetLoading(this.getStrHaveNameAndTime())
			},
			showUploadLayer: function(e) {
				this.showCommonLayer({
					name: "UploadLayer",
					type: e
				})
			},
			showNetPreviewLayer: function(e) {
				this.showCommonLayer({
					name: "netPreviewJS",
					type: e
				})
			},
			removeNetPreviewLayer: function() {
				this.netPreviewJS.node.destroy(), this.netPreviewJS = null
			},
			showPopLayer: function() {
				UIManager.showPopLayer(this.node)
			},
			showCommonLayer: function(e) {
				var t = this,
					i = e.guideData;
				null == this[(e = DataManager.getShowLayerData(e.name, e.type)).name] ? RES_M.loadPrefabByName(e.prefabName, function(a) {
					if (!t[e.name]) {
						var n = cc.instantiate(a);
						n.parent = t.node, e.bAddToThis && (t[e.name] = n.getComponent(e.jsName));
						var s = t[e.name] || n.getComponent(e.jsName);
						0 != e.zIndex && (n.zIndex = e.zIndex), "" != e.initFunName && s[e.initFunName](), i ? s.show(e.type, i) : s.show(e.type)
					}
				}) : i ? this[e.name].show(e.type, i) : this[e.name].show(e.type)
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	LevelSpriteManager: [function(e, t) {
		"use strict";
		cc._RF.push(t, "8f47bug46lLgqE99ibBOrRe", "LevelSpriteManager"), cc.Class({
			extends: cc.Component,
			properties: {
				shopSF: cc.SpriteFrame,
				signSF: cc.SpriteFrame,
				itemFrames: cc.SpriteAtlas,
				levelSpriteFrames: [cc.SpriteFrame],
				bubbleSpriteFrames: cc.SpriteAtlas,
				editorBubblePre: cc.Prefab
			},
			getBubbleSpriteByColor: function(e) {
				return this.bubbleSpriteFrames.getSpriteFrame(e + "")
			},
			createEditorBubblePre: function() {
				return cc.instantiate(this.editorBubblePre)
			},
			getLevelSpriteFrameByType: function(e) {
				return this.levelSpriteFrames[e]
			},
			getItemSpriteFrameByPropId: function(e) {
				return e <= 10 ? this.itemFrames.getSpriteFrame("item" + e) : null
			}
		}), cc._RF.pop()
	}, {}],
	LoadingScene: [function(e, t) {
		"use strict";
		cc._RF.push(t, "355a50L4QZDHqM8vev4kcAX", "LoadingScene");
		var i = e("../uikiller/Thor"),
			a = e("../sdk/FBAdManager");
		cc.Class({
			extends: i,
			properties: {
				ExitLayer: cc.Node
			},
			ctor: function() {
				this.isLoaded = !1, this.loadNum = 0, this.totalNum = 0, this.isGotNetData = !1
			},
			onLoad: function() {
				window.lewan && cc.log("\u5df2\u52a0\u8f7d lewan SDK"), cc.debug.setDisplayStats(!1), console.log("bubble spinner version = " + AppConstant.version), "undefined" != typeof FBInstant && (window.FBAdManager = a), this._timeNow = Date.now();
				var t = cc.director.getScene();
				this._nowSceneName = t.name, t.exp_nameAndTimeKey = this._nowSceneName + this._timeNow, ADS_M.initLiuhai(), cc.pppay = {};
				var i = e("../utils/NativeUtils");
				cc.pppay.NativeUtils = new i, ADS_M.preloadAds();
				var n = e("../managers/EventManager");
				window.EVENT_M = new n, window.LSManager = null, window.SpriteManager = null, this.loadPrecent = 0, this.loadNum = 0, this.totalNum = 1, this.getNetData();
				var s = {
					audioList: ["map", "game", "button"]
				};
				this.totalNum += s.audioList.length;
				var o = this;
				RES_M.loadAllData(s, function() {
					o.addLoadNum()
				}), cc.director.preloadScene(AppConstant.Scene_Name_Level), cc.director.preloadScene(AppConstant.Scene_Name_Game)
			},
			getStrHaveNameAndTime: function() {
				return this._nowSceneName + this._timeNow
			},
			onDestroy: function() {
				UIManager.removeThingsByName(this.getStrHaveNameAndTime())
			},
			getNetData: function() {
				var e = this;
				"undefined" != typeof FBInstant ? FBInstant.player.getDataAsync(["maxLevelId"]).then(function(e) {
					console.log("in LoadingScene getDataSync 1, data: ", e);
					for (var t = ["isFirst", "stone", "heart", "heartNumMax", "maxLevelId", "isMusic", "isSoundEff", "isNewDay", "keepDay", "isPassProp1", "guideStep", "diyGuideStep", "openLevelNum", "uid", "playerName", "preTime", "firendMaxDay", "nowDay", "newDay"], i = 1; i <= 8; i++) t.push("propnum" + i);
					for (var a = e.maxLevelId || 0, n = 1; n <= a; n++) t.push("level" + n);
					return FBInstant.player.getDataAsync(t)
				}).then(function(t) {
					console.log("in LoadingScene getDataSync 2, data: ", t), DataManager.initNetData(t), e.isGotNetData = !0, e.goGameScene()
				}).catch(function(t) {
					console.log("\u83b7\u53d6\u6570\u636e\u5931\u8d25, e: ", t), e.ExitLayer.active = !0
				}) : DataManager.initLocalData()
			},
			addLoadNum: function(e) {
				e = e || 1, this.loadNum += e, this.loadNum >= this.totalNum && !this.isLoaded && (this.isLoaded = !0, this._loading.$Label.string = "Loading...100%", this.goGameScene()), this._loading.$Label.string = "Loading..." + Math.floor(100 * this.loadNum / this.totalNum) + "%"
			},
			goGameScene: function() {
				if (this.isLoaded) {
					if ("undefined" != typeof FBInstant && !this.isGotNetData) return;
					var e = AppConstant.Scene_Name_Level,
						t = AppConstant.SDK_ALL[AppConstant.Now_SDK_Name];
					t && (e = t.isHaveLogin ? AppConstant.Scene_Name_Login : e), cc.director.loadScene(e)
				}
			},
			btnExit: function() {
				"undefined" != typeof FBInstant && FBInstant.quit()
			}
		}), cc._RF.pop()
	}, {
		"../managers/EventManager": "EventManager",
		"../sdk/FBAdManager": "FBAdManager",
		"../uikiller/Thor": "Thor",
		"../utils/NativeUtils": "NativeUtils"
	}],
	LocalData: [function(e, t) {
		"use strict";
		cc._RF.push(t, "59ca7zWHXlFUpMdzTyBvu/w", "LocalData");
		var i = {
			gameScale: 1,
			uid: -1,
			playerName: "",
			isFirst: !0,
			realEmailNum: 0,
			diyLevelPass: 0,
			openLevelNum: 0,
			openRedBagNum: 0,
			isMusic: !0,
			isSoundEff: !0,
			loadAdsNum: 0,
			stoneNum: 0,
			starNum: 0,
			heartNum: 0,
			heartNumMax: 0,
			keepDay: 1,
			isNewDay: !0,
			isNextDay: !0,
			preTime: 0,
			propNums: [0, 0, 0, 0, 0, 0, 0, 0],
			maxLevelId: 1,
			levelData: [],
			guideStep: 1,
			diyGuideStep: 1,
			isPassProp1: !1,
			showPropLevelIDs: [-1, 6, 7, 8, 12],
			diyLevelMax: 5,
			diyLevels: [],
			firendNum: 5,
			firendList: [],
			firendSendList: [],
			emailNum: 5,
			emailList: [],
			firendMaxDay: 10,
			achieveAwardList: [],
			giftAwardList: [{
				id: 1,
				type: 1,
				award: [9],
				num: [10]
			}, {
				id: 2,
				type: 1,
				award: [9],
				num: [360],
				price: 30
			}, {
				id: 3,
				type: 2,
				award: [10],
				num: [20]
			}, {
				id: 4,
				type: 3,
				award: [9, 10, 1],
				num: [5, 10, 1]
			}],
			spinAwardList: [{
				id: 1,
				num: 2
			}, {
				id: 2,
				num: 2
			}, {
				id: 3,
				num: 2
			}, {
				id: 4,
				num: 2
			}, {
				id: 5,
				num: 2
			}, {
				id: 7,
				num: 2
			}],
			signAwardList: [{
				id: 1,
				propId: 2,
				num: 2
			}, {
				id: 2,
				propId: 7,
				num: 3
			}, {
				id: 3,
				propId: 4,
				num: 3
			}, {
				id: 4,
				propId: 3,
				num: 5
			}, {
				id: 5,
				propId: 7,
				num: 5
			}, {
				id: 6,
				propId: 1,
				num: 5
			}, {
				id: 7,
				propId: 5,
				num: 5
			}],
			shopPropList: [{
				id: 1,
				price: 15,
				type: 1
			}, {
				id: 2,
				price: 15,
				type: 2
			}, {
				id: 3,
				price: 10,
				type: 3
			}, {
				id: 4,
				price: 10,
				type: 0
			}, {
				id: 5,
				price: 10,
				type: 0
			}, {
				id: 8,
				price: 20,
				type: 3
			}],
			shopStoneList: [{
				id: 0,
				num: 20,
				add: 0,
				price: 0
			}, {
				id: 1,
				num: 60,
				add: 0,
				price: 6
			}, {
				id: 2,
				num: 360,
				add: 0,
				price: 30
			}, {
				id: 3,
				num: 800,
				add: 0,
				price: 60
			}],
			shopStoneFree: [{
				id: 0,
				num: 10,
				add: 0
			}],
			nowLevelId: 0,
			nowLevelData: {},
			resetData: function() {
				i.levelData = [], i.diyLevels = [], i.firendList = [], i.firendSendList = [], i.emailList = []
			}
		};
		window.LocalData = i, cc._RF.pop()
	}, {}],
	LockNode: [function(e, t) {
		"use strict";
		cc._RF.push(t, "0d704A++KxHl5/1KgGRKk7P", "LockNode");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {
				spf_ImgLockNew_En: cc.SpriteFrame,
				spf_ImgLockText_En: cc.SpriteFrame
			},
			onLoad: function() {
				if (!RES_M.getIsChinese()) {
					var e = this._imgArrow_1.getChildByName("img_lock_new_1").getComponent(cc.Sprite),
						t = this._imgArrow_1.getChildByName("img_lock_text").getComponent(cc.Sprite),
						i = this._imgArrow_2.getChildByName("img_lock_new_1").getComponent(cc.Sprite),
						a = this._imgArrow_2.getChildByName("img_lock_text").getComponent(cc.Sprite);
					e.spriteFrame = this.spf_ImgLockNew_En, t.spriteFrame = this.spf_ImgLockText_En, i.spriteFrame = this.spf_ImgLockNew_En, a.spriteFrame = this.spf_ImgLockText_En
				}
			},
			initLock: function(e, t, i) {
				this._labelStar.$Label.string = e + "/" + t, i > 0 ? (this._imgArrow_2.active = !0, this._imgArrow_2.$Animation.play("ArrowRight")) : (this._imgArrow_1.active = !0, this._imgArrow_1.$Animation.play("ArrowLeft")), this.node.on("click", this.dealButtonClick, this)
			},
			start: function() {},
			dealButtonClick: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), EVENT_M.emit(EventNames.EVENT_SHOWTIPS, 11)
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	LoginScene: [function(e, t) {
		"use strict";
		cc._RF.push(t, "136f3cLHs9MdYralpXDJgI5", "LoginScene");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			start: function() {
				var e = this;
				this.scheduleOnce(function() {
					e.login()
				}, 1)
			},
			initLocalData: function(e) {
				for (var t = e; t < AppConstant.MAX_LEVEL; t++) cc.sys.localStorage.setItem("level" + t, '{"star":0,"score":0}');
				cc.sys.localStorage.setItem("maxLevelId", e), LocalData.resetData(), DataManager.initLocalData()
			},
			login: function() {
				var e = this;
				AppConstant.Now_SDK_Name == AppConstant.SDK_NAME_LEWAN ? lewan.initialAction(AppConstant.SDK_ALL.SDK_LEWAN.options, function(t) {
					(t = JSON.parse(t)).token || t.uid ? (console.log("lewan have logined, data: ", t), t && t.code && e.changeScene()) : (console.log("go login"), lewan.loginAction(function(t) {
						console.log("login back, recv: ", t), t && t.code && e.changeScene()
					}))
				}) : this.changeScene()
			},
			changeScene: function() {
				cc.director.loadScene(AppConstant.Scene_Name_Level)
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	MyLevelLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "d19e6NBtFlHX4J61bWZq2s9", "MyLevelLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {
				levelNodePre: cc.Prefab
			},
			onLoad: function() {
				this.levelNodes = [], this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, RES_M.getIsChinese() || (this._textTitle.$Label.string = RES_M.getText("title13"), this._textAdd.$Label.string = RES_M.getText("t44")), this.content = this._svLevel.$ScrollView.content, this.loadMyLevelData(), this.registerEvent()
			},
			registerEvent: function() {
				EVENT_M.on(EventNames.EVENT_ADDLEVELDATA, this.addLevelDataById.bind(this))
			},
			removeEvent: function() {
				EVENT_M.removeListener(EventNames.EVENT_ADDLEVELDATA)
			},
			onDestroy: function() {
				this.removeEvent(), RES_M.releasePrefabByName("MyLevelLayer")
			},
			show: function() {
				ADS_M.showIns(), SOUND_M.playEffect(AppConstant.SOUND_PANEL), this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow"), 1 == LocalData.diyGuideStep && EVENT_M.emit(EventNames.EVENT_SHOWGUIDE, 21, {
					x: this._btnAdd.x,
					y: this._btnAdd.y
				})
			},
			loadMyLevelData: function() {
				this.myLevelNum = 0;
				for (var e = 0; e < LocalData.diyLevels.length; e++) - 1 != LocalData.diyLevels[e].id && (this.createNode(this.myLevelNum, LocalData.diyLevels[e].id, LocalData.diyLevels[e].netId, LocalData.diyLevels[e].isModify), this.myLevelNum++);
				this.myLevelNum > 7 && (this.content.height = 460 + 65 * (this.myLevelNum - 7))
			},
			addLevelDataById: function(e) {
				this.createNode(this.myLevelNum, e, -1, 0), this.myLevelNum++, this.adjustContentHeight()
			},
			deleteDiyLevelById: function(e) {
				-1 != LocalData.diyLevels[e - 1].id && DataManager.deleteDiyLevel(e);
				for (var t = 0; t < this.levelNodes.length; t++)
					if (this.levelNodes[t].getId() == e) return this.levelNodes[t].node.destroy(), this.levelNodes.splice(t, 1), this.adjustPos(), this.myLevelNum--, this.adjustContentHeight(), void EVENT_M.emit(EventNames.EVENT_SHOWTIPS, 15)
			},
			updateDiyLevelById: function(e) {
				for (var t = 0; t < this.levelNodes.length; t++)
					if (this.levelNodes[t].getId() == e) return void this.levelNodes[t].updateByShare(LocalData.diyLevels[e - 1].netId, LocalData.diyLevels[e - 1].isModify)
			},
			adjustContentHeight: function() {
				this.myLevelNum > 7 ? this.content.height = 460 + 65 * (this.myLevelNum - 7) : this.content.height = 460
			},
			createNode: function(e, t, i, a) {
				var n = cc.instantiate(this.levelNodePre);
				n.parent = this.content, n.y = -65 * e - 35;
				var s = n.getComponent("MyLevelNode");
				s.show(t, i, a, this), this.levelNodes.push(s)
			},
			adjustPos: function() {
				for (var e = 0; e < this.levelNodes.length; e++) this.levelNodes[e].node.y = -65 * e - 35
			},
			showPreviewLayer: function(e) {
				-1 != LocalData.diyLevels[e - 1].id && EVENT_M.emit(EventNames.EVENT_SHOWPREVIEW, 2, LocalData.diyLevels[e - 1])
			},
			_onBtnAddTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), 1 == LocalData.diyGuideStep && DataManager.passDiyGuide(), EVENT_M.emit(EventNames.EVENT_SHOWEDITOR)
			},
			_onBtnCloseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.node.active = !1
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	MyLevelNode: [function(e, t) {
		"use strict";
		cc._RF.push(t, "8f2a7jZ/KVA7aPUBWl/6KzS", "MyLevelNode");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			onLoad: function() {
				this.shou = null, RES_M.getIsChinese() || (this._labelSee.$Label.string = RES_M.getText("t51"), this._labelDelete.$Label.string = RES_M.getText("t21"))
			},
			show: function(e, t, i, a) {
				this.id = e, this.myLevelJS = a, this.updateByShare(t, i)
			},
			updateByShare: function(e, t) {
				if (this.type = 0, -1 != e && null != e) this._labelID.$Label.string = "ID:" + e, 1 == t ? (this.type = 1, this._labelShare.$Label.string = RES_M.getText("t57")) : (this.type = 2, this._labelShare.$Label.string = RES_M.getText("t52")), null != this.shou && (this.shou.destroy(), this.shou = null);
				else if (this._labelID.$Label.string = "ID:" + this.id, this._btnShare.active = !0, this.type = 3, this._labelShare.$Label.string = RES_M.getText("t56"), null == this.shou) {
					var i = this;
					RES_M.loadPrefabByName("ShouNode", function(e) {
						var t = cc.instantiate(e);
						t.scale = 1, t.parent = i._btnShare, i.shou = t
					})
				}
			},
			getId: function() {
				return this.id
			},
			_onBtnSeeTouchEnd: function() {
				this.myLevelJS.showPreviewLayer(this.id)
			},
			_onBtnDeleteTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), this.myLevelJS.deleteDiyLevelById(this.id)
			},
			_onBtnShareTouchEnd: function() {
				switch (this.type) {
					case 1:
						NET_M.updateLevel(this.id);
						break;
					case 2:
						cc.pppay.NativeUtils.shareGame();
						break;
					case 3:
						EVENT_M.emit(EventNames.EVENT_SHOWUPLOAD, this.id)
				}
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	NativeAdsManager: [function(e, t) {
		"use strict";
		cc._RF.push(t, "c22eewvn+tI45GHTtlPeaxT", "NativeAdsManager");
		var i = null,
			a = {
				adsTypeName: ["home", "result"],
				getInstance: function() {
					return null == i && (i = this), i
				},
				showFlowAds: function(e) {
					-1 !== this.adsTypeName.indexOf(e) ? cc.sys.platform == cc.sys.ANDROID && (console.log("----call showFlowAds"), jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AdsFlowHelper", "showFlowAds", "(Ljava/lang/String;)V", e)) : console.log("----showFlowAds \u5e7f\u544a\u7c7b\u578b\u9519\u8bef")
				},
				hideFlowAds: function(e) {
					-1 !== this.adsTypeName.indexOf(e) ? cc.sys.platform == cc.sys.ANDROID && (console.log("----call hideFlowAds"), jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AdsFlowHelper", "hideFlowAds", "(Ljava/lang/String;)V", e)) : console.log("----hideFlowAds \u5e7f\u544a\u7c7b\u578b\u9519\u8bef")
				},
				showInterstialAds: function(e) {
					cc.sys.platform == cc.sys.ANDROID && (console.log("----call showInterstialAds " + e), jsb.reflection.callStaticMethod("org/cocos2dx/javascript/IronSourceHelper", "showInterstialAds", "(Ljava/lang/String;)V", e))
				},
				showRewardVideoAds: function(e) {
					console.info("showRewardVideoAds platform: " + cc.sys.platform + " Android: " + cc.sys.ANDROID), cc.sys.platform == cc.sys.ANDROID && (console.log("----call showRewardVideoAds " + e), jsb.reflection.callStaticMethod("org/cocos2dx/javascript/IronSourceHelper", "showRewardVideoAds", "(Ljava/lang/String;)V", e))
				},
				showBannerAds: function() {
					cc.log("----call showBannerAds"), jsb.reflection.callStaticMethod("org/cocos2dx/javascript/IronSourceHelper", "showBannerAds", "()V")
				},
				hideBannerAds: function() {
					console.log("----call hideBannerAds"), jsb.reflection.callStaticMethod("org/cocos2dx/javascript/IronSourceHelper", "hideBannerAds", "()V")
				},
				checkShowBannerAds: function() {
					cc.sys.platform == cc.sys.ANDROID ? this.showBannerAds() : ADS_M.fb_showBanner()
				},
				checkHideBannerAds: function() {
					cc.sys.platform == cc.sys.ANDROID ? this.hideBannerAds() : ADS_M.fb_hideBanner()
				}
			};
		window.nativeAdsHelper = a.getInstance(), cc._RF.pop()
	}, {}],
	NativeUtils: [function(e, t) {
		"use strict";
		cc._RF.push(t, "a1b85pTNMNHV71ypATXZCWU", "NativeUtils"), cc.Class({
			extends: cc.Component,
			properties: {},
			ctor: function() {
				this.isBuying = !1, this.adsType = -1
			},
			pay: function(e) {
				0 == this.isBuying && (this.isBuying = !0, cc.sys.platform == cc.sys.ANDROID ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/PayTool", "pay", "(I)V", e) : cc.sys.platform == cc.sys.WIN32 && (console.log("\u76f4\u63a5\u8c03\u7528\u8d2d\u4e70\u6210\u529f"), this.buySuccess(e)))
			},
			showVideoAds: function(e, t) {
				this.adsType = e, cc.sys.platform == cc.sys.ANDROID ? nativeAdsHelper.showRewardVideoAds(t) : UIManager.isNeedSecondLevelPop() ? UIManager.showVideoPopLayer(function() {
					LocalData.loadAdsNum--, LocalData.loadAdsNum < 0 && (LocalData.loadAdsNum = 0), EVENT_M.emit(EventNames.EVENT_CHECKSPINREDP), ADS_M.showVideoAds()
				}) : (LocalData.loadAdsNum--, LocalData.loadAdsNum < 0 && (LocalData.loadAdsNum = 0), EVENT_M.emit(EventNames.EVENT_CHECKSPINREDP), ADS_M.showVideoAds(), console.log("--------\u8df3\u8fc7\u4e8c\u7ea7\u5f39\u7a97"))
			},
			showBanner: function() {
				ADS_M.showBanner()
			},
			buySuccess: function(e) {
				EVENT_M.emit(EventNames.EVENT_ADDSTONE, LocalData.shopStoneList[e].num + LocalData.shopStoneList[e].add)
			},
			seeSuccess: function(e) {
				if (this.adsType == AppConstant.ADS_SIGN || -1 != e) 
                switch (console.log("----this.adsType ==== " + this.adsType), this.adsType) {
					case AppConstant.ADS_REDBAG:
						EVENT_M.emit(EventNames.EVENT_OPENRED);
						break;
					case AppConstant.ADS_SPIN:
						EVENT_M.emit(EventNames.EVENT_SPIN);
						break;
					case AppConstant.ADS_GIFTSTONE:
					case AppConstant.ADS_GIFTHEART:
						EVENT_M.emit(EventNames.EVENT_RECEIVEAWARD, 1);
						break;
					case AppConstant.ADS_SHOPSTONE:
						EVENT_M.emit(EventNames.EVENT_ADDSTONE, 10);
						break;
					case AppConstant.ADS_SHOPHEART:
						EVENT_M.emit(EventNames.EVENT_ADDHEART, 10), EVENT_M.emit(EventNames.EVENT_UPDATEADDHEART);
						break;
					case AppConstant.ADS_GAMERE:
						EVENT_M.emit(EventNames.EVENT_RESURRECTION, 2);
						break;
					case AppConstant.ADS_SIGN:
						var t = -1 == e ? e : 3;
						EVENT_M.emit(EventNames.EVENT_SIGNSUCC, t)
				}
			},
			loadADSSuccess: function() {
				LocalData.loadAdsNum = 1, EVENT_M.emit(EventNames.EVENT_CHECKSPINREDP)
			},
			shareGame: function() {
				cc.sys.isNative && cc.sys.platform == cc.sys.ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "shareGame", "()V"), "undefined" == typeof wx || wx.shareAppMessage({
					title: "\u8ddf\u6211\u4e00\u8d77\u6765\u6311\u6218\u5427\uff01",
					imageUrl: cc.url.raw("share.jpg")
				}), "undefined" != typeof FBInstant && FBInstant.shareAsync({
					intent: "SHARE",
					image: this.getImgBase64(),
					text: "Come on with me!!!",
					data: {
						myReplayData: "..."
					}
				}).then(function() {})
			},
			getImgBase64: function() {
				var e = cc.find("Main Camera"),
					t = cc.view.getVisibleSize(),
					i = t.width,
					a = t.height,
					n = new cc.RenderTexture,
					s = cc.game._renderContext;
				n.initWithSize(cc.visibleRect.width, cc.visibleRect.height, s.STENCIL_INDEX8), e.targetTexture = n;
				var o = document.createElement("canvas"),
					r = o.getContext("2d");
				o.width = i, o.height = a, e.render();
				var c = new Uint8Array(i * a * 4);
				n.readPixels(c);
				for (var h = 4 * i, l = 0; l < a; l++) {
					var d = a - 1 - l,
						u = new Uint8ClampedArray(c.buffer, d * i * 4, h),
						p = new ImageData(u, i, 1);
					r.putImageData(p, 0, l)
				}
				return o.toDataURL("image/png")
			},
			haoPin: function() {}
		}), cc._RF.pop()
	}, {}],
	NetDataManager: [function(e, t) {
		"use strict";
		cc._RF.push(t, "884ffWKfbxJ1oLzQbP3A5sJ", "NetDataManager");
		var i = null,
			a = {
				getInstance: function() {
					return null == i && (i = this).init(), i
				},
				init: function() {},
				write: function(e, t, i) {
					if (null != e && null != t)
						if ("undefined" != typeof FBInstant) {
							var a = {};
							a[e] = t, this.writeManyDataNoNet(a, i)
						} else i && i(void 0);
					else i && i(void 0)
				},
				read: function(e, t) {
					"undefined" != typeof FBInstant ? this.readArrDataNoNet([e], t) : t && t(void 0)
				},
				writeManyDataNoNet: function(e, t) {
					DataManager.updateNetData(e), t && t(!0), "undefined" != typeof FBInstant && FBInstant.player.setDataAsync(e).catch(function(e) {
						console.log("FBInstant setDataAsync many ERR, ", e), UIManager.showNetErrorPop()
					})
				},
				writeManyData: function(e, t) {
					"undefined" != typeof FBInstant && (NET_M.showNet(), FBInstant.player.setDataAsync(e).then(function() {
						DataManager.updateNetData(e), t && t(!0)
					}).catch(function(e) {
						t && t(!1), console.log("FBInstant setDataAsync many ERR, ", e), EVENT_M.emit(EventNames.EVENT_POPLAYER)
					}).finally(function() {
						NET_M.removeNet()
					}))
				},
				readArrDataNoNet: function(e, t) {
					"undefined" != typeof FBInstant && FBInstant.player.getDataAsync(e).then(function(e) {
						DataManager.updateNetData(e), t && t(e)
					}).catch(function(e) {
						t && t(void 0), console.log("FBInstant getDataAsync ERR: ", e), UIManager.showNetErrorPop()
					})
				},
				readArrData: function(e, t) {
					"undefined" != typeof FBInstant && (NET_M.showNet(), FBInstant.player.getDataAsync(e).then(function(e) {
						DataManager.updateNetData(e), t && t(e)
					}).catch(function(e) {
						t && t(void 0), console.log("FBInstant getDataAsync ERR: ", e), EVENT_M.emit(EventNames.EVENT_POPLAYER)
					}).finally(function() {
						NET_M.removeNet()
					}))
				}
			};
		window.NetDataManager = a.getInstance(), cc._RF.pop()
	}, {}],
	NetLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "eb5a7rPngFDdba8xtoMD60J", "NetLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			onLoad: function() {
				this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, this.anim_sp = this.node["New Sprite"].getComponent(cc.Animation)
			},
			playAnim: function() {
				this.anim_sp.play("Rotate")
			},
			stopAnim: function() {
				this.anim_sp.stop("Rotate")
			},
			onDestroy: function() {
				RES_M.releasePrefabByName("NetLayer")
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	NetManager: [function(e, t) {
		"use strict";
		cc._RF.push(t, "4bfcdIO8v1C7LqKU845GswC", "NetManager");
		var i = null,
			a = {
				init: function() {},
				getInstance: function() {
					return null == i && (i = this).init(), i
				},
				createName: function(e, t) {
					var i = this;
					this.showNet(), NET_CLOUD.callFunction({
						name: "bubble",
						data: {
							action: "createUser",
							param: {
								name: e
							}
						}
					}).then(function(i) {
						DataManager.setPlayerName(e), DataManager.setUid(i.result.data);
						var a = 0;
						0 == i.result.status ? (a = 20, t._onBtnCloseTouchEnd()) : a = 21, EVENT_M.emit(EventNames.EVENT_REMOVENET), EVENT_M.emit(EventNames.EVENT_SHOWTIPS, a)
					}).catch(function(e) {
						console.error(e)
					}).finally(function() {
						i.removeNet()
					})
				},
				reName: function(e, t) {
					var i = this;
					this.showNet(), NET_CLOUD.callFunction({
						name: "bubble",
						data: {
							action: "rename",
							param: {
								uid: LocalData.uid,
								name: e
							}
						}
					}).then(function(i) {
						DataManager.setPlayerName(e);
						var a = 0;
						0 == i.result.status ? (a = 20, t._onBtnCloseTouchEnd()) : a = 21, EVENT_M.emit(EventNames.EVENT_REMOVENET), EVENT_M.emit(EventNames.EVENT_SHOWTIPS, a)
					}).catch(function(e) {
						console.error(e)
					}).finally(function() {
						i.removeNet()
					})
				},
				shareLevel: function(e, t, i) {
					var a = this;
					this.showNet(), NET_CLOUD.callFunction({
						name: "bubble",
						data: {
							action: "createMap",
							param: {
								uid: LocalData.uid,
								des: t,
								name: LocalData.name,
								content: JSON.stringify(LocalData.diyLevels[e - 1])
							}
						}
					}).then(function(a) {
						0 == a.result.status && (DataManager.shareDiyLevel(e, a.result.data, t), i._onBtnCloseTouchEnd(), EVENT_M.emit(EventNames.EVENT_UPDATEDIY, e), EVENT_M.emit(EventNames.EVENT_SHOWTIPS, 26))
					}).catch(function(e) {
						console.error(e)
					}).finally(function() {
						a.removeNet()
					})
				},
				updateLevel: function(e) {
					var t = this;
					this.showNet(), NET_CLOUD.callFunction({
						name: "bubble",
						data: {
							action: "updateMap",
							param: {
								mid: LocalData.diyLevels[e - 1].netId,
								des: LocalData.diyLevels[e - 1].des,
								content: JSON.stringify(LocalData.diyLevels[e - 1])
							}
						}
					}).then(function(t) {
						0 == t.result.status && (DataManager.setLevelModify(e, 0), EVENT_M.emit(EventNames.EVENT_UPDATEDIY, e), EVENT_M.emit(EventNames.EVENT_SHOWTIPS, 25))
					}).catch(function(e) {
						console.error(e)
					}).finally(function() {
						t.removeNet()
					})
				},
				findFriend: function(e) {
					var t = this;
					this.showNet(), NET_CLOUD.callFunction({
						name: "bubble",
						data: {
							action: "findFriend",
							param: {}
						}
					}).then(function(t) {
						e && e.loadNetFriendData(t.result.data)
					}).catch(function(e) {
						console.error(e)
					}).finally(function() {
						t.removeNet()
					})
				},
				findMap: function() {
					var e = this;
					this.showNet(), NET_CLOUD.callFunction({
						name: "bubble",
						data: {
							action: "findMap",
							param: {}
						}
					}).then(function(e) {
						EVENT_M.emit(EventNames.EVENT_SHOWNETPREVIEW, e.result.data[0])
					}).catch(function(e) {
						console.error(e)
					}).finally(function() {
						e.removeNet()
					})
				},
				getLikeNum: function(e, t) {
					NET_CLOUD.callFunction({
						name: "bubble",
						data: {
							action: "getLike",
							param: {
								mid: e
							}
						}
					}).then(function(e) {
						t && t.updateNum(e.result.data)
					}).catch(console.error)
				},
				likeMap: function(e) {
					NET_CLOUD.callFunction({
						name: "bubble",
						data: {
							action: "likeMap",
							param: {
								mid: e
							}
						}
					}).then(function() {}).catch(console.error)
				},
				showNet: function() {
					EVENT_M.emit(EventNames.EVENT_SHOWNET)
				},
				removeNet: function() {
					EVENT_M.emit(EventNames.EVENT_REMOVENET)
				}
			};
		window.NET_M = a.getInstance(), cc._RF.pop()
	}, {}],
	NetPreviewLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "4769aD5S35HhbvhHIT3df7D", "NetPreviewLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			ctor: function() {
				this.bubbles = []
			},
			onLoad: function() {
				this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, RES_M.getIsChinese() || (this._textAuthor.$Label.string = RES_M.getText("t58"), this._labelFight.$Label.string = RES_M.getText("t53"), this._labelClose.$Label.string = RES_M.getText("t62"), this._labelRefush.$Label.string = RES_M.getText("t63"), this._labelZang.$Label.string = RES_M.getText("t61"))
			},
			onDestroy: function() {
				RES_M.releasePrefabByName("NetPreviewLayer")
			},
			show: function(e) {
				this._btnZang.$Button.interactable = !0;
				for (var t = 0; t < this.bubbles.length; t++) this.bubbles[t].destroy();
				this.bubbles.length = 0, this._textId.$Label.string = "ID:" + e.mid, this._textDes.$Label.string = e.des, this._textName.$Label.string = e.name, this._labelLike.$Label.string = e.like, this.mid = e.mid, this.likeNum = e.like, null != e.content ? this.showByLevelData(JSON.parse(e.content)) : this._onBtnCloseTouchEnd()
			},
			showByLevelData: function(e) {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow"), this.levelData = e;
				for (var t, i, a, n = !1, s = this.levelData.chessboard.length, o = 0; o < s; o++) {
					t = this.levelData.chessboard[o][0], i = this.levelData.chessboard[o][1], a = this.levelData.chessboard[o][2];
					var r = UIUtils.getPointByColRow(t, i),
						c = LSManager.createEditorBubblePre();
					c.parent = this._rotateNode, c.x = r.x, c.y = r.y, c.getComponent("EditorBubble").initBubble(t, i), c.getComponent(cc.Sprite).spriteFrame = this.getBubbleSpriteFrame(a), n || a != AppConstant.BUBBLE_TYPE_ICE1 && a != AppConstant.BUBBLE_TYPE_ICE2 || (n = !0), this.bubbles.push(c)
				}
				4 == LocalData.diyGuideStep && EVENT_M.emit(EventNames.EVENT_SHOWGUIDE, 24, {
					x: this._btnFight.x,
					y: this._btnFight.y
				})
			},
			showByMap: function(e) {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow");
				var t = !1;
				this.bubbles = [];
				for (var i = 0; i < e.length; i++) {
					var a = e[i],
						n = a.color,
						s = UIUtils.getPointByColRow(a.col, a.row),
						o = LSManager.createEditorBubblePre();
					o.parent = this._rotateNode, o.x = s.x, o.y = s.y, o.getComponent("EditorBubble").initBubble(a.col, a.row), o.getComponent(cc.Sprite).spriteFrame = this.getBubbleSpriteFrame(n), t || n != AppConstant.BUBBLE_TYPE_ICE1 && n != AppConstant.BUBBLE_TYPE_ICE2 || (t = !0), this.bubbles.push(o)
				}
			},
			getBubbleSpriteFrame: function(e) {
				var t = e;
				return 0 == e ? (t = "empty", RES_M.getIsChinese() || (t = "empty_en")) : -1 == e && (t = "102"), LSManager.getBubbleSpriteByColor(t + "")
			},
			_onBtnCloseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL);
				for (var e = 0; e < this.bubbles.length; e++) this.bubbles[e].destroy();
				EVENT_M.emit(EventNames.EVENT_REMOVENETPREVIEW)
			},
			_onBtnFightTouchEnd: function() {
				LocalData.heartNum >= 5 ? (this._onBtnCloseTouchEnd(), DataManager.addHeart(-5), LocalData.nowLevelId = 99, LocalData.nowLevelData = this.levelData, UIManager.enterGame()) : (LocalData.loadAdsNum > 0 && EVENT_M.emit(EventNames.EVENT_SHOWGIFT, 2), EVENT_M.emit(EventNames.EVENT_SHOWTIPS, 9))
			},
			_onBtnZangTouchEnd: function() {
				NET_M.likeMap(this.mid), this.likeNum++, this._labelLike.$Label.string = this.likeNum, this._btnZang.$Button.interactable = !1
			},
			_onBtnRefushTouchEnd: function() {
				NET_M.findMap()
			},
			_onBtnShareTouchEnd: function() {},
			update: function() {
				this._rotateNode.angle += -.5
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	PopLayerCustom: [function(e, t) {
		"use strict";
		cc._RF.push(t, "ef618vBYbFKUJfmhB/R0dbm", "PopLayerCustom");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			ctor: function() {},
			onLoad: function() {
				this.funcYes = null, this.funcNo = null, this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale
			},
			onDestroy: function() {},
			initLayer: function() {},
			showLayer: function(e, t) {
				this._textTitle.$Label.string = t.sTitle, this._labelDes.$Label.string = t.sContext, this.showLayerByType(e, t), this.node.active = !0
			},
			showLayerByType: function(e, t) {
				var i = [
					["_btnOne", !1],
					["_btnNo", !1],
					["_btnYes", !1],
					["_btnClose", !1]
				];
				this.funcYes = t.funcYes ? t.funcYes : null, this.funcNo = t.funcNo ? t.funcNo : null;
				var a = !1;
				switch (e) {
					case AppConstant.PopLayerCustomType.one:
						i[0][1] = !0, this._textOne.$Label.string = t.sYes ? t.sYes : RES_M.getText("btn1");
						break;
					case AppConstant.PopLayerCustomType.twoNoClose:
						i[1][1] = !0, i[2][1] = !0, a = !0;
						break;
					case AppConstant.PopLayerCustomType.twoWithClose:
						i[1][1] = !0, i[2][1] = !0, i[3][1] = !0, a = !0;
						break;
					case AppConstant.PopLayerCustomType.twoHaveClose:
						i[0][1] = !0, i[3][1] = !0, this._textOne.$Label.string = t.sYes ? t.sYes : RES_M.getText("btn1");
						break;
					case AppConstant.PopLayerCustomType.onlyClose:
						i[3][1] = !0
				}
				a && (this._textYes.$Label.string = t.sYes ? t.sYes : RES_M.getText("btn1"), this._textNo.$Label.string = t.sNo ? t.sNo : RES_M.getText("btn2"));
				for (var n = 0, s = i; n < s.length; n++) {
					var o = s[n];
					this[o[0]].active = o[1]
				}
			},
			start: function() {},
			hideLayer: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.node.active = !1
			},
			_onBtnOneTouchEnd: function() {
				this.funcYes && this.funcYes(this.node)
			},
			_onBtnYesTouchEnd: function() {
				this._onBtnOneTouchEnd()
			},
			_onBtnNoTouchEnd: function() {
				this.funcNo ? this.funcNo(this.node) : this.hideLayer()
			},
			_onBtnCloseTouchEnd: function() {
				this._onBtnNoTouchEnd()
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	PopLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "71ddbWZDg1EVZmqMrUQ7jG0", "PopLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			onLoad: function() {
				this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale
			},
			onDestroy: function() {
				RES_M.releasePrefabByName("PopLayer")
			},
			show: function() {
				this._textTitle.$Label.string = RES_M.getText("title17"), this._labelDes.$Label.string = RES_M.getText("t66"), this._textExit.$Label.string = RES_M.getText("t6"), SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.node.active = !0, this.node.$Animation.play("DialogShow")
			},
			_onBtnCloseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.node.active = !1, this.node.removeFromParent(!0)
			},
			_onBtnExitTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.node.active = !1, this.node.removeFromParent(!0), "undefined" != typeof FBInstant && FBInstant.quit()
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	Praise: [function(e, t) {
		"use strict";
		cc._RF.push(t, "e232cFqisRNFp6C2U92Ot2C", "Praise"), cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function() {
				this.img = this.node.getChildByName("img"), this.imgSprite = this.img.getComponent(cc.Sprite), this.imgAnimation = this.img.getComponent(cc.Animation)
			},
			showPraise: function(e) {
				this.imgAnimation.play("Shake3"), this.imgSprite.spriteFrame = SpriteManager.getPraiseSpriteFrame(e)
			}
		}), cc._RF.pop()
	}, {}],
	PreviewLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "6dad0D+E2FKmaWqu2lnJZHN", "PreviewLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			onLoad: function() {
				this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, RES_M.getIsChinese() || (this._textTitle.$Label.string = RES_M.getText("title14"), this._labelFight.$Label.string = RES_M.getText("t53"), this._labelEditor.$Label.string = RES_M.getText("t54"), this._labelShare.$Label.string = RES_M.getText("t52"), this._labelZang.$Label.string = RES_M.getText("t61"))
			},
			onDestroy: function() {
				RES_M.releasePrefabByName("PreviewLayer")
			},
			showByLevelData: function(e) {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow"), this.levelData = e, this._btnFight.active = !0, this._btnEditor.active = !0;
				var t, i, a, n = !1;
				this.bubbles = [];
				for (var s = this.levelData.chessboard.length, o = 0; o < s; o++) {
					t = this.levelData.chessboard[o][0], i = this.levelData.chessboard[o][1], a = this.levelData.chessboard[o][2];
					var r = UIUtils.getPointByColRow(t, i),
						c = LSManager.createEditorBubblePre();
					c.parent = this._rotateNode, c.x = r.x, c.y = r.y, c.getComponent("EditorBubble").initBubble(t, i), c.getComponent(cc.Sprite).spriteFrame = this.getBubbleSpriteFrame(a), n || a != AppConstant.BUBBLE_TYPE_ICE1 && a != AppConstant.BUBBLE_TYPE_ICE2 || (n = !0), this.bubbles.push(c)
				} - 1 != this.levelData.netId ? (NET_M.getLikeNum(this.levelData.netId, this), this._textDes.$Label.string = this.levelData.des, this._imgDes.active = !0) : this._imgDes.active = !1, 4 == LocalData.diyGuideStep && EVENT_M.emit(EventNames.EVENT_SHOWGUIDE, 24, {
					x: this._btnFight.x,
					y: this._btnFight.y
				})
			},
			updateNum: function(e) {
				this._labelLike.$Label.string = e
			},
			showByMap: function(e) {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow");
				var t = !1;
				this.bubbles = [];
				for (var i = 0; i < e.length; i++) {
					var a = e[i],
						n = a.color,
						s = UIUtils.getPointByColRow(a.col, a.row),
						o = LSManager.createEditorBubblePre();
					o.parent = this._rotateNode, o.x = s.x, o.y = s.y, o.getComponent("EditorBubble").initBubble(a.col, a.row), o.getComponent(cc.Sprite).spriteFrame = this.getBubbleSpriteFrame(n), t || n != AppConstant.BUBBLE_TYPE_ICE1 && n != AppConstant.BUBBLE_TYPE_ICE2 || (t = !0), this.bubbles.push(o)
				}
			},
			getBubbleSpriteFrame: function(e) {
				var t = e;
				return 0 == e ? (t = "empty", RES_M.getIsChinese() || (t = "empty_en")) : -1 == e && (t = "102"), LSManager.getBubbleSpriteByColor(t + "")
			},
			_onBtnCloseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL);
				for (var e = 0; e < this.bubbles.length; e++) this.bubbles[e].destroy();
				this.node.destroy()
			},
			_onBtnFightTouchEnd: function() {
				LocalData.heartNum >= 5 || 4 == LocalData.diyGuideStep ? (this._onBtnCloseTouchEnd(), DataManager.addHeart(-5), 4 == LocalData.diyGuideStep && EVENT_M.emit(EventNames.EVENT_PASSDIYGUIDE), LocalData.nowLevelId = 99, LocalData.nowLevelData = this.levelData, UIManager.enterGame()) : (LocalData.loadAdsNum > 0 && EVENT_M.emit(EventNames.EVENT_SHOWGIFT, 2), EVENT_M.emit(EventNames.EVENT_SHOWTIPS, 9))
			},
			_onBtnEditorTouchEnd: function() {
				EVENT_M.emit(EventNames.EVENT_SHOWEDITOR, this.levelData), this._onBtnCloseTouchEnd()
			},
			_onBtnShareTouchEnd: function() {},
			update: function() {
				this._rotateNode.angle += -.5
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	PropDesLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "a4bacVdaUxJf7QLiz9YMjyH", "PropDesLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			onLoad: function() {
				this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale
			},
			onDestroy: function() {
				RES_M.releasePrefabByName("PropDesLayer")
			},
			show: function(e, t, i) {
				ADS_M.showIns(), this.type = t || 0, this._textTitle.$Label.string = RES_M.getText("p" + e), 0 == this.type ? this._labelDes.$Label.string = RES_M.getText("des" + e) : 1 == t ? this._labelLevel.$Label.string = UIUtils.createWithFormat(RES_M.getText("tip" + (26 + this.type)), [i]) : this._labelDes.$Label.string = RES_M.getText("tip" + (26 + this.type)), SOUND_M.playEffect(AppConstant.SOUND_PANEL), this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow")
			},
			_onBtnCloseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.node.active = !1
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	PropNode: [function(e, t) {
		"use strict";
		cc._RF.push(t, "571c4WU+U9H2KyVuC/t5pPE", "PropNode");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			onLoad: function() {
				RES_M.getIsChinese() || (this._textUsing.$Label.string = RES_M.getText("t8"))
			},
			initProp: function(e, t, i) {
				this.propId = e, this._btnProp.name = "prop" + e, this.price = LocalData.shopPropList[this.propId - 1].price, this._icon.$Sprite.spriteFrame = SpriteManager.getPropSpriteFrameByType(e), this.updateProp(t), this.isLock = i, i ? (this._lock.active = !0, this._icon.active = !1) : (this._btnProp.getComponent(cc.Button).enabled = !0, this._lock.active = !1, this._icon.active = !0), this._textUsing.active = !1
			},
			getIsLock: function() {
				return this.isLock
			},
			showProp: function() {
				this._btnProp.getComponent(cc.Button).enabled = !0, this._lock.active = !1, this._icon.active = !0, this.isLock = !1
			},
			getPrice: function() {
				return this.price
			},
			updateProp: function(e) {
				e <= 0 ? (this._labelNum.active && (this._labelNum.active = !1), this._stone.active || (this._stone.active = !0), this._labelStone.$Label.string = this.price) : (this._labelNum.active || this._textUsing.active || (this._labelNum.active = !0), this._stone.active && (this._stone.active = !1), this._labelNum.$Label.string = "x" + e)
			},
			setUseProp: function(e) {
				this._textUsing.active = e, this._stone.active = !e, this._labelNum.active = !e, this._icon.color = e ? cc.Color.GRAY : cc.Color.WHITE
			},
			getBtn: function() {
				return this._btnProp
			},
			update: function() {}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	RedBagLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "bd76a+l6R1ESoZLDisSVhlG", "RedBagLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {
				desSF: cc.SpriteFrame,
				openSF: cc.SpriteFrame
			},
			onLoad: function() {
				this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, RES_M.getIsChinese() || (this._btnOpen.$Sprite.spriteFrame = this.openSF, this._imgRed.$Sprite.spriteFrame = this.desSF), this.registerEvent()
			},
			registerEvent: function() {
				EVENT_M.on(EventNames.EVENT_OPENRED, this.open.bind(this)), EVENT_M.on(EventNames.EVENT_ADS_REWARD_BAG, this.videoAdsClosed.bind(this))
			},
			removeEvent: function() {
				EVENT_M.removeListener(EventNames.EVENT_OPENRED), EVENT_M.removeListener(EventNames.EVENT_ADS_REWARD_BAG)
			},
			onDestroy: function() {
				this.removeEvent(), RES_M.releasePrefabByName("RedBagLayer")
			},
			ctor: function() {
				this.isClick = !1
			},
			show: function(e) {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.type = e, this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow"), this._imgAds.active = 1 == e
			},
			_onBtnCloseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.node.active = !1
			},
			_onBtnOpenTouchEnd: function() {
				this.isClick || (this.isClick = !0, DataManager.addOpenRedBag(), 0 == this.type ? this.open() : cc.pppay.NativeUtils.showVideoAds(AppConstant.ADS_REDBAG, EventNames.EVENT_ADS_REWARD_BAG))
			},
			open: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), this._btnClose.active = !1, this._btnOpen.active = !1, this._imgCoin.active = !0, this._imgCoin.$Animation.play("OpenRed");
				var e = this;
				cc.tween(this.node).delay(.35).call(function() {
					EVENT_M.emit(EventNames.EVENT_ADDSTONE, 10), e.node.destroy()
				}).start()
			},
			videoAdsClosed: function() {
				cc.log("\u89c2\u770b\u6fc0\u52b1\u89c6\u9891\u5b8c\u6bd5"), cc.pppay.NativeUtils.seeSuccess(1), cc.pppay.NativeUtils.loadADSSuccess(1)
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	ResManager: [function(e, t) {
		"use strict";
		cc._RF.push(t, "07ec3j6VHtJlaLotZU+EQIc", "ResManager");
		var i = null,
			a = {
				name: "ResManager",
				getInstance: function() {
					return null == i && (i = this, this.init()), i
				},
				init: function() {
					this.languageJson = null, this.language = "zh", this.isChinese = !0, this._prefabs = {}, this._plists = {}, this._spriteFrames = {}, this._audioClips = {}, this.isChinese = !1, this.language = cc.sys.language, this.language = "en"
				},
				getLanguage: function() {
					return this.language
				},
				getIsChinese: function() {
					return this.isChinese
				},
				loadAllData: function(e, t) {
					e.prefabList && e.prefabList.length > 0 && this.loadPrefabList(e.prefabList, t), e.plistList && e.plistList.length > 0 && this.loadPlistList(e.plistList, t), e.spriteFrameList && e.spriteFrameList.length > 0 && this.loadSpriteFrameList(e.spriteFrameList, t), e.audioList && e.audioList.length > 0 && this.loadAudioList(e.audioList, t), this.loadLanguage(t)
				},
				loadLanguage: function(e) {
					var t = this;
					cc.resources.load("jsons/" + this.language, function(i, a) {
						i ? console.log("\u9519\u8bef\uff1a" + i) : (t.languageJson = a.json, e && e())
					})
				},
				getText: function(e) {
					return this.languageJson[e]
				},
				getPlistSpriteFrame: function(e, t) {
					return void 0 === this._plists[e] || null == this._plists[e] ? null : this._plists[e].getSpriteFrame(t)
				},
				getAudioClipByName: function(e) {
					return void 0 === this._audioClips[e] || null == this._audioClips[e] ? null : this._audioClips[e]
				},
				loadAudioClipByName: function(e, t) {
					void 0 === this._audioClips[e] || null == this._audioClips[e] ? this.loadAudioClip(e, t) : t && t(this._audioClips[e])
				},
				loadPrefabByName: function(e, t) {
					void 0 === this._prefabs[e] || null == this._prefabs[e] ? this.loadPrefab(e, t) : t && t(this._prefabs[e])
				},
				getPrefabByName: function(e) {
					return void 0 === this._prefabs[e] || null == this._prefabs[e] ? null : this._prefabs[e]
				},
				getSpriteFrameByName: function(e) {
					return void 0 === this._spriteFrames[e] || null == this._spriteFrames[e] ? null : this._spriteFrames[e]
				},
				getSpriteFrameByCB: function(e, t) {
					void 0 === this._spriteFrames[e] || null == this._spriteFrames[e] ? this.loadSpriteFrame(e, t) : t && t(this._spriteFrames[e])
				},
				load: function(e, t, i, a, n) {
					cc.resources.load(t, i, function(t, i) {
						if (t) return console.log("xxxxxx : " + e), void cc.error(t.message || t);
						a[e] = i, n && n(i)
					}.bind(this))
				},
				loadAudioList: function(e, t) {
					for (var i = 0; i < e.length; i++) void 0 === this._audioClips[e[i]] || null == this._audioClips[e[i]] ? this.loadAudioClip(e[i], t) : t && t(this._audioClips[e[i]])
				},
				loadPlistList: function(e, t) {
					for (var i = 0; i < e.length; i++) void 0 === this._plists[e[i]] || null == this._plists[e[i]] ? this.loadPlists(e[i], t) : t && t(this._plists[e[i]])
				},
				loadPrefabList: function(e, t) {
					for (var i = 0; i < e.length; i++) this.loadPrefabByName(e[i], t)
				},
				loadSpriteFrameList: function(e, t) {
					for (var i = 0; i < e.length; i++) void 0 === this._spriteFrames[e[i]] || null == this._spriteFrames[e[i]] ? this.loadSpriteFrame(e[i], t) : t && t(this._spriteFrames[e[i]])
				},
				getSpriteFrameByPath: function(e, t, i) {
					void 0 === this._spriteFrames[e] || null == this._spriteFrames[e] ? this.loadSpriteFrameByPath(e, t, i) : i && i(this._spriteFrames[e])
				},
				loadPrefab: function(e, t) {
					this.load(e, "prefabs/" + e, cc.Prefab, this._prefabs, t)
				},
				loadAudioClip: function(e, t) {
					this.load(e, "sounds/" + e, cc.AudioClip, this._audioClips, t)
				},
				loadSpriteFrameByPath: function(e, t, i) {
					this.load(e, t, cc.SpriteFrame, this._spriteFrames, i)
				},
				loadSpriteFrame: function(e, t) {
					this.load(e, "imgs/" + e, cc.SpriteFrame, this._spriteFrames, t)
				},
				loadPlists: function(e, t) {
					this.load(e, "plists/" + e, cc.SpriteAtlas, this._plists, t)
				},
				releasePrefabByName: function(e) {
					this.release(this._prefabs[e]) && (this._prefabs[e] = null)
				},
				releaseSpriteFrameByName: function(e) {
					this.release(this._spriteFrames[e]) && (this._spriteFrames[e] = null)
				},
				releasePlistByName: function(e) {
					this.release(this._plists[e]) && (this._plists[e] = null)
				},
				release: function(e) {
					return void 0 !== e ? (cc.assetManager.releaseAsset(e), !0) : (console.log("\u5bf9\u8c61\u4e3a\u7a7a"), !1)
				}
			};
		window.RES_M = a.getInstance(), cc._RF.pop()
	}, {}],
	SetNameLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "a4cf3CQ+RdDU6asOBcpKR11", "SetNameLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			onLoad: function() {
				this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, this.nameHead = "\u6ce1\u6ce1\u541b", RES_M.getIsChinese() || (this.nameHead = "Bubbler", this._textTitle.$Label.string = RES_M.getText("title15"), this._textOk.$Label.string = RES_M.getText("t6"), this._editBox.$EditBox.placeholder = RES_M.getText("t64"))
			},
			onDestroy: function() {
				RES_M.releasePrefabByName("SetNameLayer")
			},
			show: function() {
				if (SOUND_M.playEffect(AppConstant.SOUND_PANEL), this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow"), -1 != LocalData.uid) this._editBox.$EditBox.string = LocalData.playerName;
				else {
					if ("undefined" == typeof FBInstant) return void(this._editBox.$EditBox.string = this.nameHead + Math.floor(1e4 + 1e6 * Math.random()));
					this._editBox.$EditBox.string = FBInstant.player.getName()
				}
			},
			_onBtnCloseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.node.destroy()
			},
			_onBtnOkTouchEnd: function() {
				"" === this._editBox.$EditBox.string ? EVENT_M.emit(EventNames.EVENT_SHOWTIPS, 22) : this._editBox.$EditBox.string == LocalData.playerName ? EVENT_M.emit(EventNames.EVENT_SHOWTIPS, 23) : -1 == LocalData.uid ? NET_M.createName(this._editBox.$EditBox.string, this) : NET_M.reName(this._editBox.$EditBox.string, this)
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	Setting: [function(e, t) {
		"use strict";
		cc._RF.push(t, "e65a83z5yJACawytHZ6xWr/", "Setting");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {
				musicOn: cc.SpriteFrame,
				musicOff: cc.SpriteFrame,
				aboutPre: cc.Prefab,
				soundEffOn: cc.SpriteFrame,
				soundEffOff: cc.SpriteFrame
			},
			onLoad: function() {
				this.aboutJS = null, this.isShow = !1, this.isMusic = !0, this._layer.width = cc.winSize.width / LocalData.gameScale, this._layer.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, this.checkMusic(), this.checkSoundEff()
			},
			start: function() {},
			checkMusic: function() {
				LocalData.isMusic ? this._btnMusic.$Sprite.spriteFrame = this.musicOn : this._btnMusic.$Sprite.spriteFrame = this.musicOff
			},
			checkSoundEff: function() {
				this._btnSoundEff.$Sprite.spriteFrame = LocalData.isSoundEff ? this.soundEffOn : this.soundEffOff
			},
			showAboutLayer: function() {
				if (null == this.aboutJS) {
					var e = cc.instantiate(this.aboutPre);
					e.parent = cc.director.getScene().getChildByName("Canvas"), e.zIndex = 2, this.aboutJS = e.getComponent("AboutLayer")
				}
				this.aboutJS.show()
			},
			exitGame: function() {
				cc.director.pause(), cc.audioEngine.stopAll(), cc.director.isPaused() && cc.game.end()
			},
			_onBtnSetTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), this.isShow ? this.node.$Animation.play("SettingHide") : this.node.$Animation.play("SettingShow"), this.isShow = !this.isShow
			},
			_onBtnAboutTouchEnd: function() {
				this.showAboutLayer()
			},
			_onBtnExitTouchEnd: function() {
				EVENT_M.emit(EventNames.EVENT_SHOWEXIT)
			},
			_onBtnMusicTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), SOUND_M.switchMusicOn(), this.checkMusic()
			},
			_onBtnSoundEffTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), SOUND_M.switchSoundEffOn(), this.checkSoundEff()
			},
			_onLayerTouchStart: function() {
				return this.isShow && this._onBtnSetTouchEnd(), !1
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	ShareLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "4ea5dxv6+ZPHLTXrVjzMmgm", "ShareLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			onLoad: function() {
				this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, RES_M.getIsChinese() || (this._textTitle.$Label.string = RES_M.getText("t52"), this._textShare.$Label.string = RES_M.getText("t52"), this._textDes.$Label.string = RES_M.getText("t55"))
			},
			onDestroy: function() {
				RES_M.releasePrefabByName("ShareLayer")
			},
			show: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow")
			},
			_onBtnCloseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.node.destroy()
			},
			_onBtnShareTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), cc.pppay.NativeUtils.shareGame(), this.node.destroy()
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	ShopLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "36322dkubRBGZuHLDkYiCX3", "ShopLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {
				stonePre: cc.Prefab,
				itemPre: cc.Prefab
			},
			ctor: function() {
				this.shopPropList = LocalData.shopPropList, AppConstant.IS_HAVE_CHARGER ? this.shopStoneList = LocalData.shopStoneList : this.shopStoneList = LocalData.shopStoneFree
			},
			onLoad: function() {
				UIManager.isMiniGame() && 6 === this.shopPropList.length && this.shopPropList.pop(), this.type = 0, this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, RES_M.getIsChinese() || (this._textTitle.$Label.string = RES_M.getText("title3"), this._textProp.$Label.string = RES_M.getText("t35"), this._textStone.$Label.string = RES_M.getText("t36")), this.propContent = this._svProp.$ScrollView.content, this.stoneContent = this._svStone.$ScrollView.content, this.registerEvent()
			},
			registerEvent: function() {
				EVENT_M.on(EventNames.EVENT_CHANGESHOP, this.changeShopType.bind(this))
			},
			removeEvent: function() {
				EVENT_M.removeListener(EventNames.EVENT_CHANGESHOP)
			},
			onDestroy: function() {
				nativeAdsHelper.checkHideBannerAds(), this.removeEvent(), RES_M.releasePrefabByName("ShopLayer")
			},
			initShop: function() {
				for (var e = 0; e < this.shopPropList.length; e++) {
					var t = this.shopPropList[e],
						i = cc.instantiate(this.itemPre);
					i.x = e % 3 * 127.5 - 127.5, i.y = -80 - 190 * Math.floor(e / 3), i.parent = this.propContent, i.getComponent("ItemNode").initItem(0, t)
				}
				for (e = 0; e < this.shopStoneList.length; e++) {
					var a = cc.instantiate(this.stonePre);
					a.x = 0, a.y = -50 - 100 * e, a.parent = this.stoneContent, a.getComponent("StoneNode").initStone(this.shopStoneList[e])
				}
			},
			show: function(e) {
				nativeAdsHelper.checkShowBannerAds(), ADS_M.showIns(), SOUND_M.playEffect(AppConstant.SOUND_PANEL), this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow"), this.changeShopType(e)
			},
			hideNode: function() {
				this.node.active = !1, nativeAdsHelper.checkHideBannerAds()
			},
			changeShopType: function(e) {
				this.type != e && (this.type = e, 1 == e ? (this._btnProp.$Button.interactable = !1, this._btnStone.$Button.interactable = !0, this._svProp.active = !0, this._svStone.active = !1) : (this._btnProp.$Button.interactable = !0, this._btnStone.$Button.interactable = !1, this._svProp.active = !1, this._svStone.active = !0))
			},
			_onBtnPropTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), this.changeShopType(1)
			},
			_onBtnStoneTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), this.changeShopType(2)
			},
			_onBtnCloseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.hideNode()
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	Sight: [function(e, t) {
		"use strict";
		cc._RF.push(t, "5a786AjcO1HlY6IZ+cicYfj", "Sight");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {
				sightBodyPre: cc.Prefab
			},
			onLoad: function() {
				this.bodys = new Array, this._head.zIndex = 2
			},
			start: function() {},
			setPath: function(e) {
				for (var t = 0, i = e.length - 1, a = 0; a < this.bodys.length; a++)
					if (o = this.bodys[a])
						if (a < i) {
							var n = e[t],
								s = e[t + 1];
							this.setBodyScale(o, n, s), o.active = !0, t++
						} else o.active = !1;
				if (i > this.bodys.length)
					for (a = 0; a < i - this.bodys.length; a++)
						if (t < e.length - 1) {
							n = e[t], s = e[t + 1], t++;
							var o = cc.instantiate(this.sightBodyPre);
							this.setBodyScale(o, n, s), o.zIndex = 1, o.parent = this.node, this.bodys.push(o)
						} this._head.x = e[t].x, this._head.y = e[t].y
			},
			setBodyScale: function(e, t, i) {
				var a = 180 / Math.PI * UIUtils.getVectorRadians(UIUtils.getPoint(1, 0), UIUtils.getPoint(i.x - t.x, i.y - t.y)),
					n = UIUtils.distance(t.x, t.y, i.x, i.y) / 19;
				e.x = t.x, e.y = t.y, e.angle = a - 90, e.height = 19 * n + 7
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	SignLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "cb3f0DXVpJKPp21uw5DgRbm", "SignLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			onLoad: function() {
				this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, RES_M.getIsChinese() || (this._textTitle.$Label.string = RES_M.getText("title1"), this._labelTips.$Label.string = RES_M.getText("t31"), this._textSpin.$Label.string = RES_M.getText("t37"), this._textSpin3.$Label.string = RES_M.getText("t65")), this.registerEvent()
			},
			registerEvent: function() {
				EVENT_M.on(EventNames.EVENT_SIGNSUCC, this.signSuccess.bind(this))
			},
			removeEvent: function() {
				EVENT_M.removeListener(EventNames.EVENT_SIGNSUCC)
			},
			onDestroy: function() {
				nativeAdsHelper.checkHideBannerAds(), this.removeEvent(), RES_M.releasePrefabByName("SignLayer")
			},
			initSign: function() {
				this.signAwardList = LocalData.signAwardList, this.imgSelects = [];
				for (var e = 1; e <= 7; e++) {
					var t = this["_award" + e],
						i = this["_labelNum" + e],
						a = this["_imgSelect" + e];
					this.imgSelects.push(a), t.$Sprite.spriteFrame = LSManager.getItemSpriteFrameByPropId(this.signAwardList[e - 1].propId), i.$Label.string = "x" + this.signAwardList[e - 1].num, LocalData.keepDay > e && (a.active = !0)
				}
			},
			show: function() {
				nativeAdsHelper.checkShowBannerAds(), ADS_M.showIns(), SOUND_M.playEffect(AppConstant.SOUND_PANEL), this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow"), 0 == LocalData.isNewDay || LocalData.keepDay > 7 ? (this._btnSign.$Button.interactable = !1, this._btnSign3.$Button.interactable = !1) : (this._btnSign.$Button.interactable = !0, this._btnSign3.$Button.interactable = !0)
			},
			hideNode: function() {
				this.node.active = !1, nativeAdsHelper.checkHideBannerAds()
			},
			_onBtnSignTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), this.signSuccess(1)
			},
			signSuccess: function(e) {
				if (-1 == e) return this._btnSign.$Button.interactable = !0, void(this._btnSign3.$Button.interactable = !0);
				if (console.log("LocalData.keepDay : " + LocalData.keepDay), !(LocalData.keepDay < 1 || LocalData.keepDay > 7)) {
					this.imgSelects[LocalData.keepDay - 1].active = !0, this.imgSelects[LocalData.keepDay - 1].getComponent(cc.Animation).play("Shake");
					var t = this.signAwardList[LocalData.keepDay - 1];
					EVENT_M.emit(EventNames.EVENT_ADDITEM, t.propId, t.num * e), DataManager.setKeepDay(LocalData.keepDay + 1), this._btnSign.$Button.interactable = !1, this._btnSign3.$Button.interactable = !1, EVENT_M.emit(EventNames.EVENT_CHECKSIGNREDP)
				}
			},
			_onBtnSign3TouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), cc.pppay.NativeUtils.showVideoAds(AppConstant.ADS_SIGN, EventNames.EVENT_ADS_SIGN)
			},
			_onBtnCloseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.hideNode()
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	SoundManager: [function(e, t) {
		"use strict";
		cc._RF.push(t, "3f215o1yCJJgYCrSzrUVXLS", "SoundManager");
		var i = null,
			a = {
				getInstance: function() {
					return null == i && (i = this).init(), i
				},
				init: function() {
					this.isPlayBg = !1, this.musicName = ""
				},
				isPlayMusic: function() {
					return this.isPlayBg
				},
				playMusic: function(e, t) {
					if (this.musicName = e, LocalData.isMusic) {
						this.isPlayBg && this.stopMusic();
						var i = RES_M.getAudioClipByName(e);
						i && (cc.audioEngine.playMusic(i, t), this.isPlayBg = !0)
					}
				},
				switchMusicOn: function() {
					DataManager.switchMusicOn(), LocalData.isMusic ? this.resumeMusic() : this.pauseMusic()
				},
				switchSoundEffOn: function() {
					DataManager.switchSoundEffOn(), LocalData.isSoundEff || this.stopAllEffect()
				},
				resumeMusicWithLocatData: function() {
					LocalData.isMusic && this.resumeMusic()
				},
				stopMusic: function() {
					this.isPlayBg && (this.isPlayBg = !1, cc.audioEngine.stopMusic())
				},
				pauseMusic: function() {
					this.isPlayBg && cc.audioEngine.pauseMusic()
				},
				resumeMusic: function() {
					this.isPlayBg ? cc.audioEngine.resumeMusic() : this.playMusic(this.musicName)
				},
				playEffect: function(e) {
					LocalData.isSoundEff && RES_M.loadAudioClipByName(e, function(e) {
						cc.audioEngine.playEffect(e, !1)
					})
				},
				stopAllEffect: function() {
					cc.audioEngine.stopAllEffects()
				},
				stopEffect: function(e) {
					-1 != e && cc.audioEngine.stopEffect(e)
				},
				pauseEffec: function(e) {
					-1 != e && cc.audioEngine.pauseEffect(e)
				}
			};
		window.SOUND_M = a.getInstance(), cc._RF.pop()
	}, {}],
	SpinLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "3cdbd+TNi1NhpeocO0P/GxK", "SpinLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			ctor: function() {
				this.awardList = LocalData.spinAwardList, this.light = [], this.nowAwardIndex = -1, this.isSpin = !1
			},
			onLoad: function() {
				this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, RES_M.getIsChinese() || (this._textTitle.$Label.string = RES_M.getText("title2"), this._textSpin.$Label.string = RES_M.getText("t33"));
				for (var e = 1; e <= 6; e++) {
					var t = this["_light" + e];
					this.light.push(t), this["_imgAward" + e].$Sprite.spriteFrame = LSManager.getItemSpriteFrameByPropId(this.awardList[e - 1].id)
				}
				this.registerEvent()
			},
			registerEvent: function() {
				EVENT_M.on(EventNames.EVENT_SPIN, this.spin.bind(this)), EVENT_M.on(EventNames.EVENT_ADS_REWARD_SPIN, this.videoAdsClosed.bind(this))
			},
			removeEvent: function() {
				EVENT_M.removeListener(EventNames.EVENT_SPIN), EVENT_M.removeListener(EventNames.EVENT_ADS_REWARD_SPIN)
			},
			onDestroy: function() {
				nativeAdsHelper.checkHideBannerAds(), this.removeEvent(), RES_M.releasePrefabByName("SpinLayer")
			},
			show: function() {
				nativeAdsHelper.checkShowBannerAds(), ADS_M.fb_isRewardVideoReady() && (cc.log("in SpinLayer show, have Ready video"), cc.pppay.NativeUtils.loadADSSuccess(1)), ADS_M.showIns(), SOUND_M.playEffect(AppConstant.SOUND_PANEL), this._rotateNode.stopAllActions(), this._rotateNode.angle = 0;
				for (var e = 1; e <= 6; e++) this.light[e - 1].active = !1;
				this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow"), this.changeSpinBtn()
			},
			hideNode: function() {
				this.node.active = !1, nativeAdsHelper.checkHideBannerAds()
			},
			changeSpinBtn: function() {
				AppConstant.FB_IG_Platform_Review ? this._btnSpin.$Button.interactable = !0 : cc.sys.platform == cc.sys.ANDROID || cc.sys.platform == cc.sys.IHPONE ? this._btnSpin.$Button.interactable = !0 : LocalData.loadAdsNum <= 0 ? this._btnSpin.$Button.interactable = !1 : this._btnSpin.$Button.interactable = !0
			},
			spin: function() {
				var e = this;
				if (!this.isSpin) {
					this.node.active || (this.node.active = !0), this._btnSpin.$Button.interactable = !1, this._btnClose.active = !1;
					var t = Math.floor(6 * Math.random());
					this.isSpin = !0, cc.tween(this._rotateNode).by(3, {
						angle: -2160 - 60 * t + 5 - 50 * Math.random()
					}, {
						easing: "sineOut"
					}).call(function() {
						cc.tween(e.light[e.nowAwardIndex]).blink(1, 3).start()
					}).delay(1).call(function() {
						var t = 5 == e.nowAwardIndex ? 7 : e.nowAwardIndex + 1;
						EVENT_M.emit(EventNames.EVENT_ADDITEM, t, e.awardList[e.nowAwardIndex].num), e.isSpin = !1, e.changeSpinBtn(), e._btnClose.active = !0
					}).start()
				}
			},
			videoAdsClosed: function() {
				cc.log("\u89c2\u770b\u6fc0\u52b1\u89c6\u9891\u5b8c\u6bd5"), cc.pppay.NativeUtils.seeSuccess(1), cc.pppay.NativeUtils.loadADSSuccess(1)
			},
			update: function() {
				if (this.isSpin) {
					var e = Math.floor(-this._rotateNode.angle);
					this.setLight(Math.floor(e % 360 / 60))
				}
			},
			setLight: function(e) {
				e == this.nowAwardIndex || e < 0 || e >= 6 || (this.nowAwardIndex >= 0 && this.nowAwardIndex < 6 && (this.light[this.nowAwardIndex].active = !1), this.light[e].active = !0, this.nowAwardIndex = e)
			},
			_onBtnSpinTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), cc.pppay.NativeUtils.showVideoAds(AppConstant.ADS_SPIN, EventNames.EVENT_ADS_REWARD_SPIN), adjustHelper.trackEvent(EventNames.EVENT_ADJUST_LOTTERY_ADS)
			},
			_onBtnCloseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this.hideNode()
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	SpriteManager: [function(e, t) {
		"use strict";
		cc._RF.push(t, "157f0TUSpNM+p7g2FhsdV+K", "SpriteManager"), cc.Class({
			extends: cc.Component,
			properties: {
				comboSF: cc.SpriteFrame,
				bubblePre: {
					default: null,
					type: cc.Prefab
				},
				waringPre: {
					default: null,
					type: cc.Prefab
				},
				ice1Pre: {
					default: null,
					type: cc.Prefab
				},
				ice2Pre: {
					default: null,
					type: cc.Prefab
				},
				bomb1Pre: {
					default: null,
					type: cc.Prefab
				},
				bomb2Pre: {
					default: null,
					type: cc.Prefab
				},
				pathPointPre: {
					default: null,
					type: cc.Prefab
				},
				starPre: {
					default: null,
					type: cc.Prefab
				},
				scorePre: {
					default: null,
					type: cc.Prefab
				},
				bombEffecPre: {
					default: null,
					type: cc.Prefab
				},
				caihongEffectPre: {
					default: null,
					type: cc.Prefab
				},
				praisePre: cc.Prefab,
				gameBg: {
					default: [],
					type: [cc.SpriteFrame]
				},
				praiseFrames: cc.SpriteAtlas,
				bubbleSpriteFrames: {
					default: null,
					type: cc.SpriteAtlas
				},
				propFrames: {
					default: null,
					type: cc.SpriteAtlas
				},
				itemFrames: cc.SpriteAtlas,
				_bubblePool: cc.NodePool,
				_pointPool: cc.NodePool,
				_waringPool: cc.NodePool,
				_starPool: cc.NodePool,
				_scorePool: cc.NodePool,
				_ice1Pool: cc.NodePool,
				_ice2Pool: cc.NodePool,
				_praisePool: cc.NodePool
			},
			initData: function() {
				this._bubblePool = new cc.NodePool, this._pointPool = new cc.NodePool, this._waringPool = new cc.NodePool, this._starPool = new cc.NodePool, this._scorePool = new cc.NodePool, this._ice1Pool = new cc.NodePool, this._ice2Pool = new cc.NodePool, this._bomb1Pool = new cc.NodePool, this._bombEffectPool = new cc.NodePool, this._caihongEffectPool = new cc.NodePool, this._praisePool = new cc.NodePool
			},
			onDestroy: function() {
				this._bubblePool.clear(), this._pointPool.clear(), this._waringPool.clear(), this._starPool.clear(), this._scorePool.clear(), this._ice1Pool.clear(), this._ice2Pool.clear(), this._bomb1Pool.clear(), this._bombEffectPool.clear(), this._caihongEffectPool.clear(), this._praisePool.clear()
			},
			getBgSpriteByIndex: function(e) {
				return this.gameBg[e]
			},
			getBubbleSpriteByColor: function(e) {
				return this.bubbleSpriteFrames.getSpriteFrame(e + "")
			},
			getPraiseSpriteFrame: function(e) {
				return RES_M.getIsChinese() ? this.praiseFrames.getSpriteFrame("praise" + e) : this.praiseFrames.getSpriteFrame("praise" + e + "_en")
			},
			getPropSpriteFrameByType: function(e) {
				return this.propFrames.getSpriteFrame("item" + e)
			},
			createPraisePre: function() {
				return this._praisePool.size() > 0 ? this._praisePool.get() : cc.instantiate(this.praisePre)
			},
			createCaiHongEffectPre: function() {
				return this._caihongEffectPool.size() > 0 ? this._caihongEffectPool.get() : cc.instantiate(this.caihongEffectPre)
			},
			createBomb1Pre: function() {
				return this._bomb1Pool.size() > 0 ? this._bomb1Pool.get() : cc.instantiate(this.bomb1Pre)
			},
			createBombEffectPre: function() {
				return this._bombEffectPool.size() > 0 ? this._bombEffectPool.get() : cc.instantiate(this.bombEffecPre)
			},
			createBubblePre: function() {
				return this._bubblePool.size() > 0 ? this._bubblePool.get() : cc.instantiate(this.bubblePre)
			},
			createPathPointPre: function() {
				return this._pointPool.size() > 0 ? this._pointPool.get() : cc.instantiate(this.pathPointPre)
			},
			createWaringPre: function() {
				return this._waringPool.size() > 0 ? this._waringPool.get() : cc.instantiate(this.waringPre)
			},
			createStarPre: function() {
				return this._starPool.size() > 0 ? this._starPool.get() : cc.instantiate(this.starPre)
			},
			createScorePre: function() {
				return this._scorePool.size() > 0 ? this._scorePool.get() : cc.instantiate(this.scorePre)
			},
			createIce1Pre: function() {
				return this._ice1Pool.size() > 0 ? this._ice1Pool.get() : cc.instantiate(this.ice1Pre)
			},
			createIce2Pre: function() {
				return this._ice2Pool.size() > 0 ? this._ice2Pool.get() : cc.instantiate(this.ice2Pre)
			},
			deletePraisePre: function(e) {
				this._praisePool.put(e)
			},
			deleteIce2Pre: function(e) {
				this._ice2Pool.put(e), e.opacity = 255
			},
			deleteIce1Pre: function(e) {
				this._ice1Pool.put(e), e.opacity = 255
			},
			deletePathPointPre: function(e) {
				this._pointPool.put(e), e.opacity = 255
			},
			deleteBubblePre: function(e) {
				this._bubblePool.put(e)
			},
			deleteWaringPre: function(e) {
				this._waringPool.put(e)
			},
			deleteStarPre: function(e) {
				this._starPool.put(e)
			},
			deleteCaiHongEffectPre: function(e) {
				this._caihongEffectPool.put(e)
			},
			deleteBomb1Pre: function(e) {
				this._bomb1Pool.put(e)
			},
			deleteBombEffectPre: function(e) {
				this._bombEffectPool.put(e)
			},
			deleteScorePre: function(e) {
				this._scorePool.put(e)
			},
			getItemSpriteFrameByPropId: function(e) {
				return e <= 10 ? this.itemFrames.getSpriteFrame("item" + e) : null
			}
		}), cc._RF.pop()
	}, {}],
	StoneNode: [function(e, t) {
		"use strict";
		cc._RF.push(t, "7fb3fpKlfNHbpFRoeCWh80R", "StoneNode");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			initStone: function(e) {
				this.data = e, this._labelNum.$Label.string = e.num, parseInt(e.add) > 0 && (this._add.active = !0, this._textAdd.$Label.string = e.add), 0 == e.id ? (this._labelBuy.$Label.string = RES_M.getText("t46"), this._imgAds.active = !0) : RES_M.getIsChinese() || (this._labelBuy.$Label.string = RES_M.getText("t5"))
			},
			_onBtnClickTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_BTN), 0 == this.data.id ? (cc.pppay.NativeUtils.showVideoAds(AppConstant.ADS_SHOPSTONE, EventNames.EVENT_ADS_REWARD_ADD_STONE), adjustHelper.trackEvent(EventNames.EVENT_ADJUST_DIAMOND10_ADS)) : cc.pppay.NativeUtils.pay(this.data.id)
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	Thor: [function(e, t) {
		"use strict";
		cc._RF.push(t, "8ba9euz75ZCwLL6ayYli063", "Thor");
		var i = e("./uikiller"),
			a = cc.Class({
				extends: cc.Component,
				editor: {
					executeInEditMode: !1
				},
				properties: {
					copyUikiller: {
						get: function() {
							return !1
						},
						set: function() {},
						displayName: "\u62f7\u8d1duikiller\u4fe1\u606f"
					},
					debug: !1,
					isPermeateUIKiller: {
						default: !1,
						displayName: "\u4e0d\u62e6\u622auikiller"
					}
				},
				__preload: function() {
					this._bindHammer = !1, this.useController = !1, this.bindHammer()
				},
				getOptions: function() {
					return {
						debug: this.debug
					}
				},
				bindHammer: function() {
					if (!this._bindHammer) {
						this._bindHammer = !0, Date.now();
						var e = this.getOptions();
						i.bindComponent(this, e), this.bindController()
					}
				},
				bindController: function() {}
			});
		window.Thor = t.exports = a, cc._RF.pop()
	}, {
		"./uikiller": "uikiller"
	}],
	Throw: [function(e, t) {
		"use strict";
		cc._RF.push(t, "57f353NVHJAz5Rtw9iiq/gb", "Throw"), cc.Class({
			extends: cc.Component,
			properties: {
				isStar: !1
			},
			ctor: function() {
				this.mSpeed = {
					x: 0,
					y: 0
				}, this.currentScale = 1, this.temp1 = 1.015, this.temp2 = 1.01, this.temp3 = 1.02, this.temp4 = 1.02, this.isThrow = !1
			},
			onLoad: function() {},
			open: function(e, t, i) {
				this.isThrow = !0, this.setSpeedX(e), this.setSpeedY(t), this.currentScale = i || 1, this.reduceSpeed = this.temp2
			},
			update: function() {
				this.isThrow && (this.node.x = this.node.x + this.mSpeed.x, this.node.y = this.node.y + this.mSpeed.y, this.isStar ? (this.currentScale = this.temp1 * this.currentScale, this.node.scale = this.currentScale, this.reduceSpeed = this.reduceSpeed * this.temp3, this.mSpeed.y = this.mSpeed.y - this.reduceSpeed, this.node.y <= .5 * -cc.winSize.height - 100 && (this.isThrow = !1, SpriteManager.deleteStarPre(this.node))) : (2 < this.currentScale || (this.currentScale = this.temp4 * this.currentScale, this.node.scale = this.currentScale), this.reduceSpeed = this.reduceSpeed * this.temp3, this.mSpeed.y = this.mSpeed.y - this.reduceSpeed, this.node.y <= .5 * -cc.winSize.height - 100 && (this.bubble || (this.bubble = this.node.getComponent("Bubble")), this.isThrow = !1, this.bubble.removeBubble(), SpriteManager.deleteBubblePre(this.node))))
			},
			setSpeedX: function(e) {
				this.mSpeed.x = e
			},
			setSpeedY: function(e) {
				this.mSpeed.y = e
			}
		}), cc._RF.pop()
	}, {}],
	UIManager: [function(e, t) {
		"use strict";
		cc._RF.push(t, "cda607n9KFPh6N2tZ6+D4/l", "UIManager");
		var i = null,
			a = {
				curSceneName: "",
				getInstance: function() {
					return null == i && (i = this).init(), i
				},
				init: function() {
					this._objNetLoading = {}, this._objWorkDoing = {}
				},
				showPopLayer: function(e) {
					RES_M.loadPrefabByName("PopLayer", function(t) {
						var i = cc.instantiate(t);
						i.parent = e, i.zIndex = AppConstant.zIndex_PopLayer, i.getComponent("PopLayer").show()
					})
				},
				showPopCustomLayer: function(e, t, i, a) {
					void 0 === a && (a = !0);
					var n = e.getChildByName(AppConstant.Prefabs.PopLayerCustom);
					n ? n.getComponent(AppConstant.Prefabs.PopLayerCustom).showLayer(t, i) : RES_M.loadPrefabByName(AppConstant.Prefabs.PopLayerCustom, function(n) {
						if (!e.getChildByName(AppConstant.Prefabs.PopLayerCustom)) {
							var s = cc.instantiate(n);
							s.parent = e, s.zIndex = AppConstant.zIndex_PopLayer, s.name = AppConstant.Prefabs.PopLayerCustom, a && (s.x = cc.winSize.width / 2, s.y = cc.winSize.height / 2), s.getComponent(AppConstant.Prefabs.PopLayerCustom).showLayer(t, i)
						}
					})
				},
				showVideoPopLayer: function(e) {
					this.showPopCustomLayer(cc.director.getScene(), AppConstant.PopLayerCustomType.twoNoClose, {
						sTitle: RES_M.getText("title18"),
						sContext: RES_M.getText("tip31"),
						sYes: RES_M.getText("btn1"),
						sNo: RES_M.getText("btn2"),
						funcYes: function(t) {
							t.active = !1, e && e()
						},
						funcNo: function(e) {
							e.active = !1
						}
					})
				},
				showNowPopLayer: function(e, t) {
					this.showPopCustomLayer(cc.director.getScene(), e, t)
				},
				showNetErrorPop: function(e) {
					a.showNowPopLayer(AppConstant.PopLayerCustomType.one, {
						sTitle: RES_M.getText("title17"),
						sContext: RES_M.getText("tip32"),
						sYes: RES_M.getText("btn3"),
						funcYes: function(t) {
							t.active = !1, e && e()
						}
					})
				},
				showPop_onlyClose: function(e, t) {
					this.showPopCustomLayer(cc.director.getScene(), AppConstant.PopLayerCustomType.onlyClose, {
						sTitle: RES_M.getText("title17"),
						sContext: e,
						funcNo: function(e) {
							t && t(), e.active = !1
						}
					})
				},
				showNetLoading: function(e, t) {
					var i = this;
					if (this._objNetLoading[t]) this.beginNet(t);
					else {
						if (this._objWorkDoing[t]) return;
						this._objWorkDoing[t] = !0, RES_M.loadPrefabByName("NetLayer", function(a) {
							i._objNetLoading[t] = cc.instantiate(a), i._objNetLoading[t].parent = e, i._objNetLoading[t].zIndex = AppConstant.zIndex_NetLoading, i.beginNet(t), i._objWorkDoing[t] = !1
						})
					}
				},
				beginNet: function(e) {
					var t = this;
					this._objNetLoading[e].stopAllActions(), this._objNetLoading[e].active = !0, this._objNetLoading[e].getComponent("NetLayer").playAnim(), cc.tween(this._objNetLoading[e]).delay(3).call(function() {
						t.removeNetLoading(e)
					}).start()
				},
				removeNetLoading: function(e) {
					this._objNetLoading[e] && this._objNetLoading[e].active && (this._objNetLoading[e].stopAllActions(), this._objNetLoading[e].active = !1)
				},
				removeThingsByName: function(e) {
					this._objNetLoading[e] && (this._objNetLoading[e].stopAllActions(), this._objNetLoading[e].removeFromParent(!0), this._objNetLoading[e] = null), this._objWorkDoing[e] = null
				},
				isMiniGame: function() {
					return cc.sys.isBrowser && AppConstant.curPlatform === AppConstant.PLATFORM_MINIGAME
				},
				isNeedSecondLevelPop: function() {
					return !1
				},
				enterGame: function() {
					cc.director.loadScene("Game"), ADS_M.onLevelStart(LocalData.nowLevelId)
				}
			};
		window.UIManager = a.getInstance(), cc._RF.pop()
	}, {}],
	UIUtils: [function(e, t) {
		"use strict";
		cc._RF.push(t, "2ed67FvkvFHUovJpDGFZI40", "UIUtils"), window.UIUtils = {
			getOnlyId: function(e, t) {
				return 100 * (e + 20) + t + 20
			},
			setAdaptiveScreen: function() {
				var e = cc.Canvas.instance,
					t = e.designResolution.height / e.designResolution.width;
				return cc.winSize.height / cc.winSize.width > t ? 0 : 1
			},
			distanceSqrt: function(e, t, i, a) {
				return (e - i) * (e - i) + (t - a) * (t - a)
			},
			distance: function(e, t, i, a) {
				return Math.sqrt((e - i) * (e - i) + (t - a) * (t - a))
			},
			getPointByColRow: function(e, t) {
				return {
					x: t * AppConstant.B_DISX + e * AppConstant.B_DISX * .5,
					y: e * AppConstant.B_DISY
				}
			},
			getColRowByPoint: function(e, t) {
				var i = Math.floor((t + .5 * AppConstant.B_DISX) / AppConstant.B_DISY);
				return {
					col: i,
					row: Math.floor((e + .5 * AppConstant.B_DISX - i * AppConstant.B_DISX * .5) / AppConstant.B_DISX)
				}
			},
			getDistanceByColRowAndPos: function(e, t, i) {
				var a = this.getPointByColRow(e, t);
				return this.distanceSqrt(a.x, a.y, i.x, i.y)
			},
			getRadianTwoPoint: function(e, t) {
				var i = e.x,
					a = e.y,
					n = t.x,
					s = t.y;
				return Math.acos((i * n + a * s) / (Math.sqrt(i * i + a * a) * Math.sqrt(n * n + s * s)))
			},
			getVectorRadians: function(e, t) {
				var i = e.x,
					a = e.y,
					n = t.x,
					s = t.y,
					o = Math.acos((i * n + a * s) / (Math.sqrt(i * i + a * a) * Math.sqrt(n * n + s * s)));
				return s < 0 && (o = 2 * Math.PI - o), o
			},
			getPoint: function(e, t) {
				return {
					x: e,
					y: t
				}
			},
			getRandomMinus: function() {
				return -1 * Math.random() + Math.random()
			},
			createWithFormat: function(e, t) {
				for (var i = e.split("#"), a = Math.max(i.length, t.length), n = "", s = 0; s < a; ++s) null != i[s] && (n += i[s]), null != t[s] && (n += t[s]);
				return n
			},
			getCrossPoint: function(e, t, i) {
				var a = (e.y - t.y) / (e.x - t.x),
					n = e.y - a * e.x,
					s = (i.x + a * i.y - a * n) / (a * a + 1),
					o = a * s + n;
				return this.getPoint(s, o)
			},
			pointLineDistance: function(e, t, i, a) {
				var n, s = i.x - t.x,
					o = i.y - t.y,
					r = s * s + o * o,
					c = ((e.x - t.x) * s + (e.y - t.y) * o) / r;
				return n = a ? r ? c < 0 ? t : c > 1 ? i : this.getPoint(t.x + c * s, t.y + c * o) : t : this.getPoint(t.x + c * s, t.y + c * o), s = e.x - n.x, o = e.y - n.y, Math.sqrt(s * s + o * o)
			}
		}, cc._RF.pop()
	}, {}],
	UploadLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "6b629ZNMX1HOonYVWv8Ht7M", "UploadLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {},
			onLoad: function() {
				RES_M.getIsChinese() || (this._textTitle.$Label.string = RES_M.getText("title16"), this._textAuthor.$Label.string = RES_M.getText("t58"), this._textRename.$Label.string = RES_M.getText("t59"), this._textOk.$Label.string = RES_M.getText("t6"), this._editBox.$EditBox.placeholder = RES_M.getText("t60")), this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale
			},
			onDestroy: function() {
				RES_M.releasePrefabByName("UploadLayer")
			},
			show: function(e) {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow"), this._textName.$Label.string = LocalData.playerName, this.id = e
			},
			_onBtnCloseTouchEnd: function() {
				this.node.destroy(), SOUND_M.playEffect(AppConstant.SOUND_PANEL)
			},
			_onBtnRenameTouchEnd: function() {
				EVENT_M.emit(EventNames.EVENT_SHOWSETNAME)
			},
			updateName: function() {
				this._textName.$Label.string = LocalData.playerName
			},
			_onBtnOkTouchEnd: function() {
				NET_M.shareLevel(this.id, this._editBox.$EditBox.string, this)
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	WinLayer: [function(e, t) {
		"use strict";
		cc._RF.push(t, "b20d96IN5tEpIZ07vzfT1wj", "WinLayer");
		var i = e("../uikiller/Thor");
		cc.Class({
			extends: i,
			properties: {
				imgTitleEn: cc.SpriteFrame,
				scoreEn: cc.SpriteFrame
			},
			onLoad: function() {
				this._bg.width = cc.winSize.width / LocalData.gameScale, this._bg.height = cc.winSize.height / LocalData.gameScale, this.node.scale = LocalData.gameScale, this._isMiniGame = cc.sys.isBrowser && AppConstant.curPlatform === AppConstant.PLATFORM_MINIGAME, this._isKorean = AppConstant.curPlatform === AppConstant.PLATFORM_KOREAN, this._starNum = 0, this._powerNum = 0, RES_M.getIsChinese() || (this._imgTitle.$Sprite.spriteFrame = this.imgTitleEn, this._newScore.$Sprite.spriteFrame = this.scoreEn, this._textScore.$Label.string = RES_M.getText("t27"), this._textAward.$Label.string = RES_M.getText("t14"), this._textNext.$Label.string = RES_M.getText("t10"), this._textAwardWy.$Label.string = RES_M.getText("t14"), this._imgAward.active = !this._isKorean, this._imgAwardWy.active = !this._isKorean), EVENT_M.on(EventNames.EVENT_ADS_CHECK_HEART_IN_WINLAYER, this.loadScene.bind(this)), EVENT_M.on(EventNames.EVENT_ADS_WINNER_DOUBLE_AWARD, this.addDoubleAward.bind(this))
			},
			onDestroy: function() {
				nativeAdsHelper.checkHideBannerAds(), RES_M.releasePrefabByName("WinLayer"), nativeAdsHelper.hideFlowAds(AppConstant.POS_RESULT), EVENT_M.removeListener(EventNames.EVENT_ADS_CHECK_HEART_IN_WINLAYER), EVENT_M.removeListener(EventNames.EVENT_ADS_WINNER_DOUBLE_AWARD)
			},
			show: function(e, t, i, a) {
				switch (nativeAdsHelper.checkShowBannerAds(), SOUND_M.playMusic(AppConstant.MUSIC_WIN, !1), SOUND_M.playEffect(AppConstant.SOUND_PANEL), this._imgBg.active = !1, this.node.active = !0, this.node.$Animation.play("DialogShow"), this._labelLevel.$Label.string = UIUtils.createWithFormat(RES_M.getText("t28"), [e]), this._labelScore.$Label.string = i, this._starNum = t, this._powerNum = a, t) {
					case 3:
						this._star3.active = !0, cc.tween(this.node).delay(.6).call(function() {
							SOUND_M.playEffect(AppConstant.SOUND_STAR3)
						}).start();
					case 2:
						cc.tween(this.node).delay(.3).call(function() {
							SOUND_M.playEffect(AppConstant.SOUND_STAR2)
						}).start(), this._star2.active = !0;
					case 1:
						this._star1.active = !0, SOUND_M.playEffect(AppConstant.SOUND_STAR1)
				}
				if (ADS_M.onLevelFinished(!0, LocalData.nowLevelId, t), this._imgStar.$Animation.play("WinStar"), this._labelAward.$Label.string = "+" + a, this._isMiniGame) {
					this._labelAwardWy.$Label.string = "+" + a;
					var n = 2 * t - 1;
					this._labelAwardStone.$Label.string = "+" + n, DataManager.addStone(n)
				}
				DataManager.saveOverData(e, t, i) ? (this._newScore.opacity = 0, this._newScore.scale = 0, this._newScore.active = !0, cc.tween(this._newScore).to(.3, {
					opacity: 255,
					scale: 1
				}).start()) : this._newScore.active = !1, DataManager.addHeart(a), e > AppConstant.MAX_LEVEL && (this._textNext.$Label.string = RES_M.getText("t12"))
			},
			hideNode: function() {
				this.node.active = !1, nativeAdsHelper.checkHideBannerAds()
			},
			addAward: function() {
				var e = 2 * this._starNum - 1;
				EVENT_M.emit(EventNames.EVENT_ADDSTONE, e), EVENT_M.emit(EventNames.EVENT_ADDHEART, this._powerNum), this._btnDoubleAward.$Button.interactable = !1
			},
			addDoubleAward: function(e) {
				e ? (cc.log("\u89c2\u770b\u53cc\u500d\u6fc0\u52b1\u89c6\u9891\u5b8c\u6bd5"), this.addAward()) : cc.log("\u89c2\u770b\u5927\u793c\u5305\u6fc0\u52b1\u89c6\u9891\u5931\u8d25")
			},
			_onBtnDoubleAwardTouchEnd: function() {
				var e = this;
				cc.sys.platform != cc.sys.ANDROID ? ADS_M.fb_showRewardVideo(function(t) {
					0 === t.code ? e.addAward() : console.error("\u89c6\u9891\u64ad\u653e\u5931\u8d25:", t)
				}) : nativeAdsHelper.showRewardVideoAds(EventNames.EVENT_ADS_WINNER_DOUBLE_AWARD)
			},
			_onBtnCloseTouchEnd: function() {
				SOUND_M.playEffect(AppConstant.SOUND_PANEL), cc.director.loadScene("Level"), this.node.destroy()
			},
			_onBtnReplayTouchEnd: function() {
				this.checkHeart(!0)
			},
			_onBtnNextTouchEnd: function() {
				if (LocalData.nowLevelId >= AppConstant.MAX_LEVEL) cc.director.loadScene("Level");
				else {
					var e = !0;
					if (LocalData.nowLevelId % 10 == 0) {
						var t = Math.floor(LocalData.nowLevelId / 10) + 1,
							i = AppConstant.UnlockStarNums[t - 1] || 0;
						LocalData.starNum < i && (e = !1, EVENT_M.emit(EventNames.EVENT_SHOWTIPS, 11, UIUtils.getPoint(0, 0)))
					}
					e && (LocalData.nowLevelId++, LocalData.nowLevelId > AppConstant.MAX_LEVEL && (LocalData.nowLevelId = AppConstant.MAX_LEVEL), this.checkHeart())
				}
			},
			checkHeart: function(e) {
				var t = this;
				if (void 0 === e && (e = !1), LocalData.heartNum >= 5) DataManager.addHeart(-5), UIManager.enterGame(), e && adjustHelper.trackEvent(EventNames.EVENT_ADJUST_AGAIN_CLICK);
				else {
					if (cc.sys.platform == cc.sys.ANDROID) return e ? void nativeAdsHelper.showRewardedVideo() : void cc.director.loadScene("Level");
					if ("undefined" != typeof FBInstant) {
						if (!e) return void cc.director.loadScene("Level");
						UIManager.isNeedSecondLevelPop() ? ADS_M.fb_showVideoByPopUI(function(e) {
							0 == e.code && (UIManager.enterGame(), t.node && t.node.destroy())
						}) : ADS_M.fb_showRewardVideo(function(e) {
							0 === e.code ? (UIManager.enterGame(), t.node && t.node.destroy()) : console.error("\u89c6\u9891\u64ad\u653e\u5931\u8d25:", e)
						})
					} else cc.log("\u7ea2\u5fc3\u4e0d\u8db3\u3002"), e || cc.director.loadScene("Level")
				}
			},
			loadScene: function(e) {
				e ? UIManager.enterGame() : (cc.log("\u7ea2\u5fc3\u4e0d\u8db3\u3002"), cc.director.loadScene("Level"))
			}
		}), cc._RF.pop()
	}, {
		"../uikiller/Thor": "Thor"
	}],
	cloud: [function(e, t) {
		"use strict";
		cc._RF.push(t, "f9929JSAYhKR7C34dP6eiBH", "cloud"), cc.cloud = {
			initialized: !1,
			initialize: function(e) {
				return null == e && (e = cc_cloud_commonConfig), "tencent" === e.platform ? this.initialized ? this.tencentApp : (cloudbase && cloudbase.useAdapters(window.adapter), this.tencentApp = cloudbase ? cloudbase.init(e.tencent) : null, this.initialized = !0, this.tencentApp) : null
			}
		}, cc._RF.pop()
	}, {}],
	uikiller: [function(e, t) {
		"use strict";
		cc._RF.push(t, "7152eByPPVFUJThhVNiRF9b", "uikiller");
		var i = ["_onTouchStart", "_onTouchMove", "_onTouchEnd", "_onTouchCancel"],
			a = {
				_prefix: "_",
				_plugins: [],
				registerPlugin: function(e) {
					var t = this;
					Array.isArray(e) || (e = [e]), e.forEach(function(e) {
						t._plugins.find(function(t) {
							return t.name === e.name || t === e
						}) || (t._plugins.push(e), e.onRegister && e.onRegister())
					})
				},
				_getComponentName: function(e) {
					return e.name.match(/<.*>$/)[0].slice(1, -1)
				},
				bindComponent: function(e, t) {
					var a = this;
					e.$options = t || {};
					var n = e.node;
					n._components.forEach(function(e) {
						var t = a._getComponentName(e);
						n[t = "$" + t] = e
					}), this._bindTouchEvent(n, e, i), this._bindNode(e.node, e)
				},
				bindNode: function(e, t, i) {
					var a = this;
					if (t.$options = i || {}, t.$collector) {
						if (t.$collector.node === e) return;
						delete t.$collector.node, Object.keys(t.$collector).forEach(function(e) {
							delete t[e]
						})
					}
					t.$collector = {
						node: e
					}, e._components.forEach(function(e) {
						var i = a._getComponentName(e);
						t[i = "$" + i] = e, t.$collector[i] = e
					}), this._bindStartByPlugins(e, t), this._bindNode(e, t), this._bindEndByPlugins(e, t)
				},
				_bindStartByPlugins: function(e, t) {
					this._plugins.forEach(function(i) {
						i.onBindStart && i.onBindStart(e, t)
					})
				},
				_bindEndByPlugins: function(e, t) {
					this._plugins.forEach(function(i) {
						i.onBindEnd && i.onBindEnd(e, t)
					})
				},
				_bindNode: function(e, t) {
					var i = this,
						n = e,
						s = !1;
					n.name[0] === this._prefix && n._components.forEach(function(e) {
						var o = i._getComponentName(e);
						n[o = "$" + o] && t.$options.debug ? cc.warn(o + " property is already exists") : (n[o] = e, a.isFunction(e.onBind) && e.onBind(t), e instanceof Thor && !e.isPermeateUIKiller && (s || e === t || (s = !0), n.active || e.bindHammer()))
					}), this._checkNodeByPlugins(n, t) && !s && n.children.forEach(function(e) {
						var a = e.name;
						if (a[0] === i._prefix) {
							var s = a.indexOf("$");
							if (-1 !== s && (e.$eventName = a.substr(0, s), e.$ = a.substr(s + 1), a = e.$eventName + e.$[0].toUpperCase() + e.$.substr(1), e.name = a), t[a] && t.$options.debug) return void cc.warn(t.name + "." + a + " property is already exists");
							i._bindTouchEvent(e, t), t[a] = e, t.$collector && (t.$collector[a] = e)
						} else n[a] || (n[a] = e);
						i._bindNode(e, t)
					})
				},
				_getTouchEventName: function(e, t) {
					var i = e.$eventName || e.name;
					return i && (i = i[this._prefix.length].toUpperCase() + i.slice(this._prefix.length + 1)), t ? "_on" + i + t : ["_on" + i + "TouchStart", "_on" + i + "TouchMove", "_on" + i + "TouchEnd", "_on" + i + "TouchCancel"]
				},
				_bindTouchEvent: function(e, t, i) {
					var a = this;
					if (!e.getComponent(cc.EditBox)) {
						var n = i || this._getTouchEventName(e),
							s = [cc.Node.EventType.TOUCH_START, cc.Node.EventType.TOUCH_MOVE, cc.Node.EventType.TOUCH_END, cc.Node.EventType.TOUCH_CANCEL];
						n.forEach(function(i, n) {
							(t[i] || e.getComponent(cc.Button)) && e.on(s[n], function(n) {
								var s = n.currentTarget;
								if (!1 !== s.interactable && !1 !== s.active) {
									var o = s.getComponent(cc.Button);
									if (!o || !1 !== o.interactable) {
										var r = t[i];
										if (o && r) {
											t.exp_ObjClickTime || (t.exp_ObjClickTime = {});
											var c = Date.now();
											if (t.exp_ObjClickTime[i]) {
												if (c - t.exp_ObjClickTime[i] < 300) return;
												t.exp_ObjClickTime[i] = c
											} else t.exp_ObjClickTime[i] = c
										}
										var h, l = r || o && o.clickEvents.length;
										l && a._beforeHandleEventByPlugins(s, n, !!r), r && (h = r.call(t, s, n), n.type === cc.Node.EventType.TOUCH_START && !1 === h ? s._touchListener.setSwallowTouches(!1) : (e._touchListener.setSwallowTouches(!0), n.stopPropagation())), l && a._afterHandleEventByPlugins(s, n, !!r, h)
									}
								}
							})
						}), this._bindTouchLongEvent(e, t)
					}
				},
				_bindTouchLongEvent: function(e, t) {
					var i = e,
						n = this._getTouchEventName(i, "TouchLong"),
						s = t[n];
					a.isFunction(s) && (i._touchLongTimer = null, i.on(cc.Node.EventType.TOUCH_END, function() {
						i._touchLongTimer && (clearTimeout(i._touchLongTimer), i._touchLongTimer = 0, delete i.interactable)
					}), i.on(cc.Node.EventType.TOUCH_START, function(e) {
						i._touchLongTimer = setTimeout(function() {
							i.interactable = !!s.call(t, i, e), i._touchLongTimer = 0
						}, i.touchLongTime || 1e3)
					}))
				},
				_checkNodeByPlugins: function(e, t) {
					return !this._plugins.find(function(i) {
						return i.onCheckNode ? !1 === i.onCheckNode(e, t) : null
					})
				},
				_beforeHandleEventByPlugins: function(e, t, i) {
					this._plugins.forEach(function(a) {
						a.onBeforeHandleEvent && a.onBeforeHandleEvent(e, t, i)
					})
				},
				_afterHandleEventByPlugins: function(e, t, i, a) {
					this._plugins.forEach(function(n) {
						n.onAfterHandleEvent && n.onAfterHandleEvent(e, t, i, a)
					})
				},
				isFunction: function(e) {
					return "function" == typeof e
				}
			};
		window.uikiller = t.exports = a, cc._RF.pop()
	}, {}]
}, {}, ["cloud", "AppConstant", "EventNames", "LocalData", "AdjustManager", "AdsManager", "DataManager", "EventManager", "LevelManager", "LevelSpriteManager", "NativeAdsManager", "NetDataManager", "NetManager", "ResManager", "SoundManager", "SpriteManager", "UIManager", "Init", "Arrow", "Bubble", "EditorBubble", "Praise", "Sight", "Throw", "AboutLayer", "ActionLayer", "AddFirendLayer", "AddFirendNode", "AddHeart", "BagLayer", "BuyProp", "EditorLayer", "EmailLayer", "EmailNode", "EmailViewLayer", "ExitLayer", "FailLayer", "FirendLayer", "FirendNode", "GameScene", "GiftLayer", "GoodsNode", "GuideLayer", "HaopingLayer", "ItemNode", "LevelEditor", "LevelInfo", "LevelNode", "LevelScene", "LoadingScene", "LockNode", "LoginScene", "MyLevelLayer", "MyLevelNode", "NetLayer", "NetPreviewLayer", "PopLayer", "PopLayerCustom", "PreviewLayer", "PropDesLayer", "PropNode", "RedBagLayer", "SetNameLayer", "Setting", "ShareLayer", "ShopLayer", "SignLayer", "SpinLayer", "StoneNode", "UploadLayer", "WinLayer", "FBAdManager", "Thor", "uikiller", "NativeUtils", "UIUtils"]);
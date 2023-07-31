! function() {
    "use strict";
    class t {
        constructor() {}
        static init() {
            Laya.ClassUtils.regClass
        }
    }
    t.width = 750, t.height = 1334, t.scaleMode = "fixedwidth", t.screenMode = "none", t.alignV = "top", t.alignH = "left", t.startScene = "", t.sceneRoot = "", t.debug = !1, t.stat = !1, t.physicsDebug = !1, t.exportSceneToJson = !1,t.init();    class e {}
    e.isUseRigidbody = !1, e.PLAYER_SPEED_FORWARD = .15, e.PLAYER_SPEED_JUMP_1 = .4, e.PLAYER_SPEED_JUMP_2 = .4, e.PLAYER_SPPED_POPFLY = .4, e.PLAYER_SPPED_STICK_JUMP_2 = .4, e.PLAYER_SPPED_STICK_JUMP_2_FACTOR = 1.5, e.PLAYER_SPEED_UP_FACTOR = 2, e.PLAYER_SPEED_SLIDE_FACTOR = 1.5, e.PLAYER_SPEED_UP_TIME = .8, e.PLAYER_JUMP_HIGH_GROUND = .04, e.PLAYER_POP_HIGH_GROUND = .04, e.GAME_GRAVITY = -1, e.GAME_ASPEED_FORWARD = 1, e.REVIVE_TIME_WAIT = 1e3, e.REVIVE_OFFSET_Z = .25, e.DEAD_PLANE_Y = .4, e.IS_OPNE_ROBOT = !0, e.DISTANCE_MAX_AI_PLAYER = 1, e.IS_OPEN_SHADOW = !0, e.MAX_LIFE_IN_GAME = 3, e.MAX_KEY_IN_GAME = 3, e.STEP_SKIN_UNLOCK_PERCENT = 20, e.IS_LONG_SCREEN = !1, e.LONG_SCREEN_TOP_OFFSET = 60, e.GUIDE_LEVEL_ID = 0, e.SKIN_TRY_LEVEL_ID = 2, e.IS_USE_WX_PACK_UNZIP = !0, e.WX_PACK_VERSION = 1, e.DATA_TEST = {
        blocks_front: ["start"],
        blocks_behind: ["end1"],
        levelId: 10
    }, e.MODEL_BLOCK_DIR = "model/LayaScene_block/Conventional/", e.MODEL_URL = {
        StickPhysic: "model/LayaScene_item/Conventional/StickPhysic.lh",
        CharacterMeat: "model/LayaScene_item/Conventional/CharacterMeat.lh",
        BombEffect: "model/LayaScene_item/Conventional/Bomb_eff.lh",
        RingEffect: "model/LayaScene_item/Conventional/Ring_eff.lh"
    }, e.STICK_JUMP_PATH = [{
        x: 0,
        y: 0,
        z: 0
    }, {
        x: 0,
        y: .010497696697711945,
        z: .002578249666839838
    }, {
        x: 0,
        y: .02038821578025818,
        z: .006940244231373072
    }, {
        x: 0,
        y: .029371026903390884,
        z: .01295343553647399
    }, {
        x: 0,
        y: .03717318922281265,
        z: .02043512975797057
    }, {
        x: 0,
        y: .04355768486857414,
        z: .02915795659646392
    }, {
        x: 0,
        y: .04833037033677101,
        z: .038856962230056524
    }], e.PLAYER_SKIN_COLOR = ["#66FCFB", "#FF90F4", "#B56FF4", "#FF5452", "#69FF48"], e.REMOTE_SERVER_URL = "", e.RES_URL_BASE = "", e.CAMERA_INIT_POSITION = new Laya.Vector3(-.25699999928474426, .09200000017881393, .08900000154972076), e.CAMERA_INIT_ROTATION = new Laya.Vector3(0, -68.86297739240918, 0), e.CAMERA_STORE_POSITION = new Laya.Vector3(0, .07999999821186066, -9.790800094604492), e.CAMERA_STORE_ROTATION = new Laya.Vector3(-39.943605570789266, -.5752116470425352, .36931225554330005), e.PRICE_STICK_RAND_UNLOCK = 500, e.PRICE_STICK_UNLOCK_ADD_ARR = [100, 300, 600, 1e3, 1500, 2100, 2800, 3600], e.ENV_ID_ROCK = 0, e.ENV_ID_TOWN = 1, e.ENV_ID_TREE = 2, e.SCENE_COLOR_1 = {
        Block: "C37628",
        Frog: "14AC9A",
        EnvId: e.ENV_ID_TREE
    }, e.SCENE_COLOR_2 = {
        Block: "6136E6",
        Frog: "1F59A9",
        EnvId: e.ENV_ID_TREE
    }, e.SCENE_COLOR_3 = {
        Block: "D65DBC",
        Frog: "75C7D8",
        EnvId: e.ENV_ID_TOWN
    }, e.SCENE_COLOR_5 = {
        Block: "494294",
        Frog: "6992B4",
        EnvId: e.ENV_ID_ROCK,
        EnvColor: "532C70"
    }, e.SCENE_COLOR_ARRAY = [e.SCENE_COLOR_1, e.SCENE_COLOR_2, e.SCENE_COLOR_3, e.SCENE_COLOR_5], e.AUDIO_BGM = "res/audio/bgm.mp3", e.AUDIO_BOX_3 = "res/audio/Box_3.2.mp3", e.AUDIO_BOX_OPEN = "res/audio/Box_Open_9.mp3", e.AUDIO_MONEY = "res/audio/Coin_mini_1.2.mp3", e.AUDIO_BUTTON = "res/audio/Default.button.click_1.2.mp3", e.AUDIO_BOX_OPEN_NOT = "res/audio/ESM_Bow.mp3", e.AUDIO_ESM_COIN = "res/audio/ESM_Coin.mp3", e.AUDIO_ESM_PERFECT = "res/audio/ESM_Perfect.mp3", e.AUDIO_ESM_VICTORY = "res/audio/ESM_Victory_Achievement_FX_13.mp3", e.AUDIO_GAME_BLOOD = "res/audio/Game_Blood_Hit_2.mp3", e.AUDIO_JUMP = "res/audio/Gift_Slide_out_1.1.mp3", e.AUDIO_KEY = "res/audio/Key_1.1.mp3", e.AUDIO_HIT_GELLY_SMALL = "res/audio/Obstacle.hit.gelly_3.5.mp3", e.AUDIO_HIT_GELLY_BIG = "res/audio/Obstacle.hit.gelly_3.6.mp3", e.AUDIO_PLANK = "res/audio/Plank_negative_reation.mp3", e.AUDIO_POP_FLY = "res/audio/Player.jump.mp3", e.AUDIO_PUNCH_HIT = "res/audio/Punch_hit_2.mp3", e.AUDIO_SPARKS = "res/audio/Sparks.texture_1.1.mp3", e.AUDIO_STICK = "res/audio/Stick.bending.mp3", e.AUDIO_STICK_JUMP = "res/audio/Stick.jump.mp3", e.AUDIO_FINISH_1 = "res/audio/finish_01.mp3", e.AUDIO_FINISH_2 = "res/audio/finish_02.mp3", e.AUDIO_SPEED_UP = "res/audio/speed.mp3", e.AUDIO_RUN = "res/audio/run.mp3", e.AUDIO_START_PLAY = "res/audio/start_play.mp3", e.AUDIO_STICK_HIT_GROUND = "res/audio/stick.hit.ground_1.1.mp3";
    class i {
        static parseFile(t, e, i, s) {
            Laya.loader.load(e, Laya.Handler.create(this, this.onFileLoad.bind(this), [t, e, i, s]), null, Laya.Loader.JSON)
        }
        static onFileLoad(t, e, i, s) {
            s(t, e, this.parseJsonData(Laya.loader.getRes(e), i))
        }
        static parseTypeValue(t, e) {
            switch (t) {
                case "B":
                    return "TRUE" == e;
                case "I":
                    return Number(e);
                case "S":
                    return e;
                case "T":
                    return "" == e ? null : JSON.parse(e);
                default:
                    return e
            }
        }
        static putItemInData(t, e, i, s) {
            switch (i) {
                default:
                    case "m":
                    var n = t[s[0]];
                return e[n] && console.log("putItemInData[m] Error: duplicate key", n),
                void(e[n] = t);
                case "mm":
                        var a = t[s[0]],
                        o = t[s[1]],
                        r = e[a];
                    return null == r && (r = {}, e[a] = r),
                    r[o] && console.log("putItemInData[mm] Error: duplicate key", a, o),
                    void(r[o] = t)
            }
        }
        static parseJsonData(t, e) {
            for (var i = t.types, s = t.fields, n = t.values, a = {}, o = 0; o < n.length; o++) {
                for (var r = n[o], h = {}, l = 0; l < i.length; l++) {
                    var d = i[l],
                        c = s[l],
                        _ = r[l];
                    h[c] = this.parseTypeValue(d, _)
                }
                this.putItemInData(h, a, e, s)
            }
            return a
        }
        static parseJsonString(t, e) {
            return this.parseJsonData(JSON.parse(t), e)
        }
    }
    class s {
        constructor() {}
        static init() {
            fgui.UIConfig.packageFileExtension = "xml"
        }
    }
    s.max_frame_time = .016, s.max_frame_time_1000 = 1e3 * s.max_frame_time, s.MSG_RACE_BEGIN = "MSG_RACE_BEGIN", s.MSG_RACE_END = "MSG_RACE_END", s.MSG_RACE_RESTART = "MSG_RACE_RESTART", s.MSG_SHOW_NATIVEAD_RESPONSE = "MSG_SHOW_NATIVEAD_RESPONSE", s.MSG_RACE_RESTART_BLOCK = "MSG_RACE_RESTART_BLOCK", s.MSG_RACE_RESTART_BLOCK_ALL = "MSG_RACE_RESTART_BLOCK_ALL", s.MSG_SHOW_MSG = "MSG_SHOW_MSG", s.MSG_MAIN_PLAYER_PASS = "MSG_MAIN_PLAYER_PASS", s.MSG_MAIN_PLAYER_PASS_NOT = "MSG_MAIN_PLAYER_PASS_NOT", s.MSG_MAIN_PLAYER_CHANGE_TICK = "MSG_MAIN_PLAYER_CHANGE_TICK", s.MSG_MAIN_PLAYER_CHANGE_SKIN = "MSG_MAIN_PLAYER_CHANGE_SKIN", s.MSG_UI_ENTER_STORE = "MSG_UI_ENTER_STORE", s.MSG_UI_ENTER_MAIN = "MSG_UI_ENTER_MAIN", s.MSG_PLAYER_REVIVE = "MSG_PLAYER_REVIVE", s.MSG_MAIN_PLAYER_JUMP = "MSG_MAIN_PLAYER_JUMP", s.MSG_LOAD_PROGRESS = "MSG_LOAD_PROGRESS", s.MSG_LOAD_PROGRESS_COMPLETE = "MSG_LOAD_PROGRESS_COMPLETE", s.MSG_COIN_UPDATE = "MSG_COIN_UPDATE", s.MSG_KEY_UPDATE = "MSG_KEY_UPDATE", s.MSG_GAME_PROGRESS_UPDATE = "MSG_GAME_PROGRESS_UPDATE", s.MSG_AD_BANNER_LOAD = "MSG_AD_BANNER_LOAD", s.MSG_COLLISION_NONE = "MSG_COLLISION_NONE", s.MSG_COLLISION_POP_FLY = "MSG_COLLISION_POP_FLY", s.MSG_COLLISION_SPEED_UP = "MSG_COLLISION_SPEED_UP", s.MSG_COLLISION_DEAD = "MSG_COLLISION_DEAD", s.MSG_COLLISION_PICK_STICK = "MSG_COLLISION_PICK_STICK", s.MSG_COLLISION_STAYBAR_PASS = "MSG_COLLISION_STAYBAR_PASS", s.MSG_COLLISION_STAYBAR_PASS_NOT = "MSG_COLLISION_STAYBAR_PASS_NOT", s.MSG_COLLISION_PICK_COIN = "MSG_COLLISION_PICK_COIN", s.MSG_COLLISION_TRAP = "MSG_COLLISION_TRAP", s.MSG_COLLISION_BOMB = "MSG_COLLISION_BOMB", s.MSG_COLLISION_GLOVE = "MSG_COLLISION_GLOVE", s.MSG_COLLISION_AI_JUMP = "MSG_COLLISION_AI_JUMP", s.MSG_COLLISION_SLIDE = "MSG_COLLISION_SLIDE", s.MSG_COLLISION_GAMEOVER = "MSG_COLLISION_GAMEOVER", s.MSG_COLLISION_PICK_KEY = "MSG_COLLISION_PICK_KEY", s.MSG_COLLISION_GUIDE = "MSG_COLLISION_GUIDE", s.MSG_COLLISION_SLIDE_EXIT = "MSG_COLLISION_SLIDE_EXIT", s.MSG_PAUSE_GAME = "MSG_PAUSE_GAME", s.MSG_RESUME_GAME = "MSG_RESUME_GAME", s.CompentCollisionMsg = [s.MSG_COLLISION_NONE, s.MSG_COLLISION_POP_FLY, s.MSG_COLLISION_SPEED_UP, s.MSG_COLLISION_DEAD, s.MSG_COLLISION_PICK_STICK, s.MSG_COLLISION_STAYBAR_PASS, s.MSG_COLLISION_STAYBAR_PASS_NOT, s.MSG_COLLISION_PICK_COIN, s.MSG_COLLISION_TRAP, s.MSG_COLLISION_BOMB, s.MSG_COLLISION_GLOVE, s.MSG_COLLISION_AI_JUMP, s.MSG_COLLISION_SLIDE, s.MSG_COLLISION_GAMEOVER, s.MSG_COLLISION_PICK_KEY, s.MSG_COLLISION_GUIDE], s.CompentCollisionMsgExit = {
        [s.MSG_COLLISION_SLIDE]: s.MSG_COLLISION_SLIDE_EXIT
    }, s.PLAYER_STATE_IDLE = 1, s.PLAYER_STATE_RUN = 2, s.PLAYER_STATE_RUN_STICK = 3, s.PLAYER_STATE_JUMP_1 = 4, s.PLAYER_STATE_JUMP_2 = 5, s.PLAYER_STATE_SLIDE = 6, s.PLAYER_STATE_STICK_JUMP1 = 7, s.PLAYER_STATE_FALL = 8, s.PLAYER_STATE_SPEEDUP = 9, s.PLAYER_STATE_DEAD = 10, s.PLAYER_STATE_POPFLY = 11, s.PLAYER_STATE_STICK_JUMP2 = 12, s.PLAYER_STATE_BEAT_BACK = 13, s.PLAYER_STATE_RUN_FALL = 14, s.PLAYER_STATE_STORE = 15, s.STICK_SKIN_1 = 1, s.STICK_SKIN_2 = 2, s.STICK_SKIN_3 = 3, s.STICK_SKIN_4 = 4, s.STICK_SKIN_5 = 5, s.STICK_SKIN_6 = 6, s.STICK_SKIN_7 = 7, s.STICK_SKIN_8 = 8, s.STICK_SKIN_9 = 9, s.PLAYER_SKIN_Default = 0, s.PLAYER_SKIN_Atlethman_0 = 1, s.PLAYER_SKIN_Fireman_0 = 2, s.PLAYER_SKIN_Pirate_0 = 3, s.PLAYER_SKIN_Policeman_0 = 4, s.PLAYER_SKIN_Spartanman_0 = 5, s.PLAYER_SKIN_Wrestlerman_0 = 6, s.PLAYER_SKIN_Clown_0 = 7, s.PLAYER_SKIN_Cookman_0 = 8, s.STICK_SKIN_ARRAY = [s.STICK_SKIN_1, s.STICK_SKIN_2, s.STICK_SKIN_3, s.STICK_SKIN_4, s.STICK_SKIN_5, s.STICK_SKIN_6, s.STICK_SKIN_7, s.STICK_SKIN_8, s.STICK_SKIN_9], s.ROLE_SKIN_ARRAY = [s.PLAYER_SKIN_Default, s.PLAYER_SKIN_Atlethman_0, s.PLAYER_SKIN_Fireman_0, s.PLAYER_SKIN_Pirate_0, s.PLAYER_SKIN_Policeman_0, s.PLAYER_SKIN_Spartanman_0, s.PLAYER_SKIN_Wrestlerman_0, s.PLAYER_SKIN_Clown_0, s.PLAYER_SKIN_Cookman_0], s.ROLE_SKIN_ARRAY_TRY = [s.PLAYER_SKIN_Fireman_0, s.PLAYER_SKIN_Policeman_0], s.init();
    class n {
        static Clamp(t, e, i) {
            return Math.max(Math.min(t, Math.max(e, i)), Math.min(e, i))
        }
        static getV3_ZERO() {
            var t = Laya.Vector3.ZERO;
            return null == t && (t = Laya.Vector3._ZERO), t
        }
        static getV3_UP() {
            var t = Laya.Vector3.Up;
            return null == t && (t = Laya.Vector3._Up), t
        }
        static getTransformForward(t) {
            var e = t.forward;
            return null == e && (e = new Laya.Vector3, t.getForward(e)), e
        }
        static getTransformRight(t) {
            var e = t.right;
            return null == e && (e = new Laya.Vector3, t.getRight(e)), e
        }
        static getTransformUp(t) {
            var e = t.up;
            return null == e && (e = new Laya.Vector3, t.getUp(e)), e
        }
        static findNodeByPath(t, e, i) {
            for (var s = e.split("/"), n = 0; n < s.length; n++) {
                if (null == (t = t.getChildByName(s[n]))) return console.log("findNodeByPath: Not found", s[n]), null;
                i && console.log("--\x3e", s[n])
            }
            return t
        }
        static findNodeByPathNoRoot(t, e) {
            for (var i = e.split("/"), s = 1; s < i.length; s++)
                if (null == (t = t.getChildByName(i[s]))) return console.log("findNodeByPathNoRoot: Not found", e), null;
            return t
        }
        static findNodeByPathIndexNoRoot(t, e) {
            for (var i = e.split("/"), s = 1; s < i.length; s++)
                if (null == (t = t.getChildAt(Number(i[s])))) return console.log("findNodeByPathIndexNoRoot: Not found", e), null;
            return t
        }
        static applyShader(t, e) {
            if (t instanceof Laya.MeshSprite3D) {
                let i = t.meshRenderer.sharedMaterial,
                    s = new e;
                s.albedoTexture = i.albedoTexture, s.albedoColorA = i.albedoColorA, s.albedoColorR = i.albedoColorR, s.albedoColorG = i.albedoColorG, s.albedoColorB = i.albedoColorB, t.meshRenderer.sharedMaterial = s
            }
            let i = t.numChildren;
            for (let s = 0; s < i; s++) n.applyShader(t.getChildAt(s), e)
        }
        static hex2rgb(t) {
            var e = new Laya.Vector3;
            return t = t.replace("#", ""), e.x = parseInt(t.substr(0, 2), 16) / 255, e.y = parseInt(t.substr(2, 2), 16) / 255, e.z = parseInt(t.substr(4, 2), 16) / 255, e
        }
        static hex2rgba(t) {
            var e = new Laya.Vector4;
            return t = t.replace("#", ""), e.x = parseInt(t.substr(0, 2), 16) / 255, e.y = parseInt(t.substr(2, 2), 16) / 255, e.z = parseInt(t.substr(4, 2), 16) / 255, t.length > 6 ? e.w = parseInt(t.substr(6, 2), 16) / 255 : e.w = 1, e
        }
        static fogOpen(t, e, i) {
            t.enableFog = !0, t.fogStart = e, t.fogRange = i
        }
        static fogColor(t, e, i) {
            t.fogColor = n.hex2rgb(i), e.clearColor = n.hex2rgba(i + "FF")
        }
        static setComponentValue(t, e, i, s) {
            let a = t.getComponent(e);
            a instanceof e && (a[i] = s);
            let o = t.numChildren;
            for (let a = 0; a < o; a++) n.setComponentValue(t.getChildAt(a), e, i, s)
        }
        static openCastShadow(t) {
            t instanceof Laya.SkinnedMeshSprite3D ? t.skinnedMeshRenderer.castShadow = !0 : t instanceof Laya.MeshSprite3D && (t.meshRenderer.castShadow = !0);
            let e = t.numChildren;
            for (let i = 0; i < e; i++) n.openCastShadow(t.getChildAt(i))
        }
        static openReceiveShadow(t, e) {
            t instanceof Laya.MeshSprite3D && (e ? t.name.indexOf(e) >= 0 && (t.meshRenderer.receiveShadow = !0) : (t.meshRenderer.receiveShadow = !0, console.log("openReceiveShadow", t.name)));
            let i = t.numChildren;
            for (let s = 0; s < i; s++) n.openReceiveShadow(t.getChildAt(s), e)
        }
        static buildStickJumpPath(t) {
            t.transform.position;
            let e, i = [];
            for (let s = 0; s < t.numChildren; s++) {
                let n = t.getChildAt(s).getChildByName("Point");
                if (n) {
                    let t = n.transform.position;
                    s > 0 ? (t.x = 0, t.y -= e.y, t.z -= e.z) : (e = n.transform.position, t = new Laya.Vector3(0, 0, 0)), i.push(t)
                }
            }
            return i
        }
        static printTransform(t, e) {
            e.transform.position.clone(), e.transform.rotationEuler.clone(), console.log(t, "position", e.transform.position.clone()), console.log(t, "rotation", e.transform.rotation.clone()), console.log(t, "rotationEuler", e.transform.rotationEuler.clone())
        }
        static setSpriteColor(t, e) {
            let i, s = n.hex2rgb(e);
            t instanceof Laya.MeshSprite3D ? i = t.meshRenderer.sharedMaterial : t instanceof Laya.SkinnedMeshSprite3D && (i = t.skinnedMeshRenderer.sharedMaterial), i instanceof Laya.BlinnPhongMaterial ? (i.albedoColorR = s.x, i.albedoColorG = s.y, i.albedoColorB = s.z) : i instanceof Laya.UnlitMaterial && (i.albedoColorR = s.x, i.albedoColorG = s.y, i.albedoColorB = s.z)
        }
        static setSpriteColorAll(t, e, i) {
            t instanceof Laya.MeshSprite3D && (i ? t.name.indexOf(i) >= 0 && n.setSpriteColor(t, e) : n.setSpriteColor(t, e));
            let s = t.numChildren;
            for (let a = 0; a < s; a++) n.setSpriteColorAll(t.getChildAt(a), e, i)
        }
        static setSpriteTilingOffset(t, e, i) {
            let s = t.meshRenderer.sharedMaterial;
            s instanceof Laya.BlinnPhongMaterial ? (s.tilingOffsetX = e, i && (s.tilingOffsetY = i)) : s instanceof Laya.UnlitMaterial && (s.tilingOffsetX = e, i && (s.tilingOffsetY = i))
        }
        static getScreenPos(t, e, i) {
            return null == i && (i = new Laya.Vector3), t.viewport.project(e, t.projectionViewMatrix, i), i.x = i.x / Laya.stage.clientScaleX, i.y = i.y / Laya.stage.clientScaleY, i
        }
        static numberFormat(t, e) {
            const i = [{
                value: 1,
                symbol: ""
            }, {
                value: 1e3,
                symbol: "K"
            }, {
                value: 1e6,
                symbol: "M"
            }, {
                value: 1e9,
                symbol: "G"
            }, {
                value: 1e12,
                symbol: "T"
            }, {
                value: 1e15,
                symbol: "P"
            }, {
                value: 1e18,
                symbol: "E"
            }];
            let s;
            for (s = i.length - 1; s > 0 && !(t >= i[s].value); s--);
            return (t / i[s].value).toFixed(e).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + i[s].symbol
        }
        static getTime() {
            return Date.now()
        }
        static getNodePathName(t) {
            return t.parent ? this.getNodePathName(t.parent) + "." + t.name : t.name
        }
    }
    n.format = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var i = void 0;
        if (t.length > 0) {
            i = t[0];
            for (var s = 1; s < t.length; s++)
                if (null != t[s]) {
                    var n = new RegExp("({)" + s + "(})", "g");
                    i = i.replace(n, t[s])
                }
        }
        return i
    }, n.random = function(t, e) {
        return Math.round(Math.random() * (e - t) + t)
    }, n.randomItem = function(t) {
        return t && t.length > 0 ? t[n.random(0, t.length - 1)] : null
    };
    class a {
        static loadAllCfg(t) {
            this._allcfgLoadCallback = t, this.loadCfg("block_db", "res/cfg/block_db.json", "m"), this.loadCfg("block_group", "res/cfg/block_group.json", "m"), this.loadCfg("level_db", "res/cfg/level_db.json", "m"), this.loadCfgJson("ai_names", "res/cfg/ai_names.json"), this.loadCfgJson("block_compent", "res/model_comp/block.compent.json"), this.loadStaticVar()
        }
        static loadStaticVar() {
            this.stickId2Icon[s.STICK_SKIN_1] = "ui://ui_race/icon_4", this.stickId2Icon[s.STICK_SKIN_2] = "ui://ui_race/icon_1", this.stickId2Icon[s.STICK_SKIN_3] = "ui://ui_race/icon_2", this.stickId2Icon[s.STICK_SKIN_4] = "ui://ui_race/icon_3", this.stickId2Icon[s.STICK_SKIN_5] = "ui://ui_race/icon_5", this.stickId2Icon[s.STICK_SKIN_6] = "ui://ui_race/icon_6", this.stickId2Icon[s.STICK_SKIN_7] = "ui://ui_race/icon_7", this.stickId2Icon[s.STICK_SKIN_8] = "ui://ui_race/icon_8", this.stickId2Icon[s.STICK_SKIN_9] = "ui://ui_race/icon_9", this.skinId2Icon[s.PLAYER_SKIN_Default] = "ui://ui_race/role_1", this.skinId2Icon[s.PLAYER_SKIN_Atlethman_0] = "ui://ui_race/role_2", this.skinId2Icon[s.PLAYER_SKIN_Fireman_0] = "ui://ui_race/role_3", this.skinId2Icon[s.PLAYER_SKIN_Pirate_0] = "ui://ui_race/role_4", this.skinId2Icon[s.PLAYER_SKIN_Policeman_0] = "ui://ui_race/role_5", this.skinId2Icon[s.PLAYER_SKIN_Spartanman_0] = "ui://ui_race/role_6", this.skinId2Icon[s.PLAYER_SKIN_Wrestlerman_0] = "ui://ui_race/role_7", this.skinId2Icon[s.PLAYER_SKIN_Clown_0] = "ui://ui_race/role_8", this.skinId2Icon[s.PLAYER_SKIN_Cookman_0] = "ui://ui_race/role_9", this.skinId2ProgressBg[s.PLAYER_SKIN_Atlethman_0] = "res_native/skin/yinying_2.png", this.skinId2ProgressBg[s.PLAYER_SKIN_Fireman_0] = "res_native/skin/yinying_5.png", this.skinId2ProgressBg[s.PLAYER_SKIN_Pirate_0] = "res_native/skin/yinying_6.png", this.skinId2ProgressBg[s.PLAYER_SKIN_Policeman_0] = "res_native/skin/yinying_7.png", this.skinId2ProgressBg[s.PLAYER_SKIN_Spartanman_0] = "res_native/skin/yinying_8.png", this.skinId2ProgressBg[s.PLAYER_SKIN_Wrestlerman_0] = "res_native/skin/yinying_9.png", this.skinId2ProgressBg[s.PLAYER_SKIN_Clown_0] = "res_native/skin/yinying_3.png", this.skinId2ProgressBg[s.PLAYER_SKIN_Cookman_0] = "res_native/skin/yinying_4.png", this.skinId2ProgressBar[s.PLAYER_SKIN_Atlethman_0] = "res_native/skin/jiesuo_2.png", this.skinId2ProgressBar[s.PLAYER_SKIN_Fireman_0] = "res_native/skin/jiesuo_5.png", this.skinId2ProgressBar[s.PLAYER_SKIN_Pirate_0] = "res_native/skin/jiesuo_6.png", this.skinId2ProgressBar[s.PLAYER_SKIN_Policeman_0] = "res_native/skin/jiesuo_7.png", this.skinId2ProgressBar[s.PLAYER_SKIN_Spartanman_0] = "res_native/skin/jiesuo_8.png", this.skinId2ProgressBar[s.PLAYER_SKIN_Wrestlerman_0] = "res_native/skin/jiesuo_9.png", this.skinId2ProgressBar[s.PLAYER_SKIN_Clown_0] = "res_native/skin/jiesuo_3.png", this.skinId2ProgressBar[s.PLAYER_SKIN_Cookman_0] = "res_native/skin/jiesuo_4.png", this.skinId2ImgUnlock[s.PLAYER_SKIN_Atlethman_0] = "res_native/skin/renwu_2.png", this.skinId2ImgUnlock[s.PLAYER_SKIN_Fireman_0] = "res_native/skin/renwu_5.png", this.skinId2ImgUnlock[s.PLAYER_SKIN_Pirate_0] = "res_native/skin/renwu_6.png", this.skinId2ImgUnlock[s.PLAYER_SKIN_Policeman_0] = "res_native/skin/renwu_7.png", this.skinId2ImgUnlock[s.PLAYER_SKIN_Spartanman_0] = "res_native/skin/renwu_8.png", this.skinId2ImgUnlock[s.PLAYER_SKIN_Wrestlerman_0] = "res_native/skin/renwu_9.png", this.skinId2ImgUnlock[s.PLAYER_SKIN_Clown_0] = "res_native/skin/renwu_3.png", this.skinId2ImgUnlock[s.PLAYER_SKIN_Cookman_0] = "res_native/skin/renwu_4.png"
        }
        static getRandAIName() {
            let t = this.getCfgByName("ai_names");
            return t ? n.randomItem(t) : "九号人物"
        }
        static loadCfg(t, s, n) {
            this._loadTaskCount++, i.parseFile(t, e.RES_URL_BASE + s, n, this.onCfgLoad.bind(this))
        }
        static loadCfgJson(t, i) {
            i = e.RES_URL_BASE + i, this._loadTaskCount++, Laya.loader.load(i, Laya.Handler.create(this, this.onCfgJson.bind(this), [t, i]), null, Laya.Loader.JSON)
        }
        static onCfgJson(t, e) {
            this.onCfgLoad(t, e, Laya.loader.getRes(e))
        }
        static getCfgJson(t) {
            return this._allcfg[t]
        }
        static getLevelCfg(t) {
            let e = this.getCfgByName("level_db"),
                i = null;
            for (let s in e)
                if (t >= (i = e[s]).lvMin && t <= i.lvMin) return i;
            return i
        }
        static getCfgByName(t, e, i) {
            if (null != e) {
                var s = this._allcfg[t];
                if (null != s) {
                    var n = s[e];
                    return null != n && null != i ? n[i] : n
                }
                return s
            }
            return this._allcfg[t]
        }
        static onCfgLoad(t, e, i) {
            this._loadTaskCount--, this._allcfg[t] = i, this._loadTaskCount <= 0 && this._allcfgLoadCallback && this._allcfgLoadCallback(), console.log("onCfgLoad", t, e, this._loadTaskCount)
        }
        static loadModelWithScript(t, e, i, s) {
            Laya.loader.create(t, Laya.Handler.create(this, function() {
                if (i) {
                    let n = Laya.loader.getRes(t);
                    n && i(n.addComponent(e), s)
                }
            }))
        }
        static loadModel(t, e, i) {
            Laya.loader.create(t, Laya.Handler.create(this, function() {
                e && e(Laya.loader.getRes(t), i)
            }))
        }
        static createSprite3D(t) {
            return Laya.Sprite3D.instantiate(Laya.loader.getRes(e.RES_URL_BASE + t))
        }
        static createSprite3DWithLoad(t, i) {
            t = e.RES_URL_BASE + t;
            let s = Laya.loader.getRes(t);
            s ? i.runWith(Laya.Sprite3D.instantiate(s)) : Laya.loader.create(t, Laya.Handler.create(this, this.loadResLoad, [t, i]))
        }
        static loadResLoad(t, e) {
            e.runWith(Laya.Sprite3D.instantiate(Laya.loader.getRes(t)))
        }
        static preloadLevelById(t, e) {
            let i = this.getCfgByName("level_db", e);
            if (i) {
                let e = i.blocks.split(".");
                for (let i = 0; i < e.length; i++) this.preloadBlockById(t, e[i])
            }
        }
        static preloadBlockById(t, i) {
            let s = this.getCfgByName("block_db", i);
            if (s) {
                let i = e.MODEL_BLOCK_DIR + s.key + ".lh";
                t.push({
                    url: e.RES_URL_BASE + i
                })
            }
        }
    }
    a._allcfg = {}, a._loadTaskCount = 0, a.stickId2Icon = {}, a.skinId2Icon = {}, a.skinId2ProgressBg = {}, a.skinId2ProgressBar = {}, a.skinId2ImgUnlock = {};
    class o extends Laya.Script3D {
        constructor() {
            super(), this.stateCurt = 0, this.stateNext = 0, this.state2func = {}, this.state2name = {}, this.funcEnter = {}, this.funcExecute = {}, this.funcExit = {}, this.state2relation = {}, this.state2nextstate = {}, this.substates = []
        }
        update(t) {
            this.updateLogic(t), this.udpateSubState(t)
        }
        addSubState(t, e) {
            this.substates[t] = e, this.callFunc(this.funcEnter[t])
        }
        delSubState(t) {
            this.substates[t] = 0
        }
        udpateSubState(t) {
            for (let e in this.substates) {
                let i = this.substates[e];
                i > 0 && (this.callFunc(this.funcExecute[e], t), (i -= t) <= 0 && (i = 0, this.callFunc(this.funcExit[e])), this.substates[e] = i)
            }
        }
        updateLogic(t) {
            this.callFunc(this.funcExecute[this.stateCurt], t), this.stateNext && (this.callFunc(this.funcExit[this.stateCurt], t), this.stateLast = this.stateCurt, this.stateCurt = this.stateNext, this.callFunc(this.funcEnter[this.stateNext], t), this.stateNext = 0)
        }
        registerState(t, e, i, s, n) {
            this.state2name[t] = e, this.funcEnter[t] = i || this["enter" + e], this.funcExecute[t] = s || this["exec" + e], this.funcExit[t] = n || this["exit" + e]
        }
        registerRelation(t, e, i) {
            var s = this.state2relation[t];
            s || (s = {});
            for (var n = e.length, a = 0; a < n; a++) s[e[a]] = i;
            this.state2relation[t] = s
        }
        resetMachine() {
            this.stateCurt = 0, this.stateNext = 0, this.substates = []
        }
        setCurrentState(t) {
            this.callFunc(this.funcExit[this.stateCurt]), this.callFunc(this.funcEnter[t]), this.stateCurt = t, this.stateNext = 0
        }
        exitState() {
            var t = this.state2nextstate[this.stateCurt];
            t ? this.setNextState(t, !0) : this.setNextState(this.stateLast, !0)
        }
        setNextStateByName(t) {
            this.setNextState(this.name2state[t], !1)
        }
        setState(t, e) {
            let i = this.setNextState(t, e);
            i || console.log("setState", this.state2name[this.stateCurt], "->", this.state2name[t], i)
        }
        getState() {
            return this.stateCurt
        }
        checkRelation(t, e) {
            var i = this.state2relation[t];
            if (i) {
                if (!i[e]) return !1
            }
            return !0
        }
        setNextState(t, e) {
            if (this.stateNext) {
                if (!this.checkRelation(this.stateNext, t)) return !1
            } else if (this.stateCurt && !e && !this.checkRelation(this.stateCurt, t)) return !1;
            return this.stateNext = t, !0
        }
        callFunc(t, e) {
            t && t.call(this, e)
        }
    }
    class r extends Laya.Script3D {
        constructor() {
            super(), this.gravity = -1, this.graveSpeedY = 0, this.gravestoneTargetY = 0, this.bounceTime = 0, this.bounceSpeed1 = .3, this.bounceSpeed2 = .15
        }
        setScene(t, e) {
            this.scene = t, this.scene.timerOnce(2e3, this, this.onDisppear), this.calcGroundPoint(e)
        }
        onAwake() {
            this.onMeatModelLoad()
        }
        onMeatModelLoad() {
            let t = this.owner;
            n.setComponentValue(t, Laya.Rigidbody3D, "collisionGroup", Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2), this.gravestone = t.getChildByName("gravestone"), this.gravestoneTransform = this.gravestone.transform
        }
        calcGroundPoint(t) {
            t.y += .02;
            let e = new Laya.Ray(t, new Laya.Vector3(0, -1, 0)),
                i = new Laya.HitResult;
            if (this.scene.physicsSimulation.rayCast(e, i, 10, Laya.Physics3DUtils.COLLISIONFILTERGROUP_DEFAULTFILTER, Laya.Physics3DUtils.COLLISIONFILTERGROUP_DEFAULTFILTER), i.succeeded) {
                let t = i.point.y - this.gravestoneTransform.position.y;
                this.gravestoneTargetY = this.gravestoneTransform.localPositionY + t, this.graveSpeedY = this.bounceSpeed1
            }
        }
        onDisppear() {
            this.owner.destroy()
        }
        onLateUpdate() {
            var t = .001 * Laya.timer.delta;
            t > s.max_frame_time && (t = s.max_frame_time), this.update(t)
        }
        update(t) {
            if (this.bounceTime >= 2) return;
            let e = 0;
            this.graveSpeedY += this.gravity * t, e = this.graveSpeedY * t;
            let i = this.gravestoneTransform.localPositionY + e;
            i < this.gravestoneTargetY && (i = this.gravestoneTargetY, this.bounceTime++, this.graveSpeedY = this.bounceSpeed2), this.gravestoneTransform.localPositionY = i
        }
    }
    class h {
        constructor() {
            this.dispatcher = new Laya.EventDispatcher
        }
        static getInstance() {
            return null == h._instance && (h._instance = new h), h._instance
        }
        Emit(t, e) {
            this.dispatcher.event(t, e)
        }
        AddMsgListener(t, e, i, s) {
            this.dispatcher.on(t, e, i, null == s ? null : [s])
        }
        RemoveMsgListener(t, e, i, s) {
            this.dispatcher.off(t, e, i)
        }
    }
    class l {
        static Clamp(t, e, i) {
            return Math.max(Math.min(t, Math.max(e, i)), Math.min(e, i))
        }
    }
    class d {
        constructor(t) {
            this.skinArray = [];
            let i = a.createSprite3D(e.MODEL_URL.StickPhysic);
            this.animator = i.getComponent(Laya.Animator), this.node = i, e.IS_OPEN_SHADOW && n.openCastShadow(i), this.parseStick(), this.showId(t)
        }
        parseStick() {
            let t = this.node.getChildByName("Stick");
            for (let e = 0; e < t.numChildren; e++) this.skinArray.push(t.getChildAt(e))
        }
        showId(t) {
            let e = t - 1;
            for (let t = 0; t < this.skinArray.length; t++) this.skinArray[t].active = e == t
        }
        playAnimIdle() {
            this.animator.play("idle", 0, .14)
        }
        playAnimJump() {
            this.animator.play("chenggan", 0, .14)
        }
        playAnimDown() {
            this.animator.play("dnow", 0, .14)
        }
    }
    class c extends Laya.Script3D {
        constructor() {
            super()
        }
        onAwake() {}
        onEnable() {}
        onStart() {
            let t = this.owner.getChildByName("Left"),
                e = this.owner.getChildByName("Right");
            t && (t.transform.localRotationEulerX -= 45), e && (e.transform.localRotationEulerX += 45)
        }
        onLateUpdate() {}
        update(t) {}
    }
    class _ {
        constructor(t, e, i) {
            this.length = t, this.hitDirection = i, this.hitOffset = e, this.hitRay = new Laya.Ray(new Laya.Vector3, i), this.hitResult = new Laya.HitResult
        }
        getHitPoint(t, e, i, s, n) {
            let a = e.transform.position;
            return i ? (this.hitRay.origin.x = a.x + this.hitOffset.x + i.x, this.hitRay.origin.y = a.y + this.hitOffset.y + i.y, this.hitRay.origin.z = a.z + this.hitOffset.z + i.z) : (this.hitRay.origin.x = a.x + this.hitOffset.x, this.hitRay.origin.y = a.y + this.hitOffset.y, this.hitRay.origin.z = a.z + this.hitOffset.z), s || (s = Laya.Physics3DUtils.COLLISIONFILTERGROUP_DEFAULTFILTER), n || (n = Laya.Physics3DUtils.COLLISIONFILTERGROUP_DEFAULTFILTER), t.physicsSimulation.rayCast(this.hitRay, this.hitResult, this.length, s, n), this.hitResult.succeeded ? this.hitResult.point : null
        }
        getHitResult() {
            return this.hitResult
        }
    }
    class S extends Laya.Script3D {
        constructor() {
            super(), this.timeDelay = 1e3
        }
        setTimeDelay(t) {
            this.timeDelay = t
        }
        onAwake() {}
        onEnable() {}
        onStart() {
            this.owner.timerOnce(this.timeDelay, this, this.onTimeEnd)
        }
        onTimeEnd() {
            this.owner.destroy()
        }
    }
    class I extends o {
        constructor() {
            super(), this.stickId = 1, this.isMovingForward = !0, this.sceneRace = null, this.rigidBody = null, this.speedForward = 0, this.speedDown = 0, this.speedForwardMax = 0, this.aspeedForward = 0, this.gravity = 0, this.debugObject1 = null, this.debugObject2 = null, this.isEquipStick = !1, this.rayDownLength = .02, this.rayFrontLenth = .015, this.rayUpLength = .015, this.isRaceBegan = !1, this.isRaceEnd = !1, this.stateGround = s.PLAYER_STATE_RUN, this.levelId = 0, this.skinsArray = [], this.init()
        }
        setLevelId(t) {}
        setStateGround(t) {
            this.stateGround = t
        }
        init() {
            this.stateTimeTotal = 0, this.gravity = e.GAME_GRAVITY, this.aspeedForward = e.GAME_ASPEED_FORWARD, this.speedForwardMax = e.PLAYER_SPEED_FORWARD, this.isPause = !1, this.rayFront = new _(this.rayFrontLenth, new Laya.Vector3(0, .02, 0), new Laya.Vector3(0, 0, 1)), this.rayDown = new _(this.rayDownLength, new Laya.Vector3(0, .015, 0), new Laya.Vector3(0, -1, 0)), this.rayUp = new _(this.rayUpLength, new Laya.Vector3(0, .015, 0), new Laya.Vector3(0, 1, 0)), this.rayRevive = new Laya.Ray(new Laya.Vector3, new Laya.Vector3(0, -1, 0))
        }
        onAwake() {
            console.log("Player onAwake"), this.node = this.owner, this.nodeTransform = this.node.transform, this.positionInit = this.nodeTransform.position.clone(), this.rotationInit = this.nodeTransform.rotationEuler.clone(), this.StickSpawnerParent = this.node.getChildByName("StickSpawner"), this.StickSpawner = this.StickSpawnerParent.getChildByName("StickRoot"), this.nodeRunEffect = this.node.getChildByName("RunParticle"), this.spriteSkin = this.node.getChildByName("Skin"), this.spriteCrown = this.node.getChildByName("Crown"), this.animator = this.spriteSkin.getComponent(Laya.Animator), this.initState(), this.setCurrentState(s.PLAYER_STATE_IDLE), this.initDebugLine(3), this.initEvent(), this.loadStick(), this.leftTail = n.findNodeByPath(this.spriteSkin, "Dummy001/Bip001/Bip001 Pelvis/Bip001 Spine/Bip001 Neck/Bip001 L Clavicle/Bip001 L UpperArm/Bip001 L Forearm/Bip001 L Hand/HandTrail"), this.rightTail = n.findNodeByPath(this.spriteSkin, "Dummy001/Bip001/Bip001 Pelvis/Bip001 Spine/Bip001 Neck/Bip001 R Clavicle/Bip001 R UpperArm/Bip001 R Forearm/Bip001 R Hand/HandTrail"), this.leftTailParent = this.leftTail.parent, this.rightTailParent = this.rightTail.parent, this.stopRunEffect(), e.IS_OPEN_SHADOW && n.openCastShadow(this.spriteSkin), this.hideCrown(), this.physicBody = this.node.getComponent(Laya.Rigidbody3D), this.physicBody && (this.physicBody.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER3, this.physicBody.canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1 | Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2), this.rotateClown(), this.parseSkins()
        }
        parseSkins() {
            let t = this.spriteSkin.getChildByName("Character"),
                e = t.numChildren;
            for (let i = 0; i < e; i++) this.skinsArray.push(t.getChildAt(i))
        }
        showSkinByIndex(t) {
            for (let e = 0; e < this.skinsArray.length; e++) this.skinsArray[e].active = e == t
        }
        rotateClown() {
            Laya.Tween.to(this.spriteCrown.transform, {
                localRotationEulerY: 360
            }, 3e3).repeat = 0
        }
        reset() {
            this.physicBody.enabled = !0, this.owner.clearTimer(this, this.onReviveTimeEnd), this.resetStick(), this.showSkin(), this.stopRunEffect(), this.stopTail(), this.hideCrown(), this.resetMachine(), this.setCurrentState(s.PLAYER_STATE_IDLE), this.setInitPosition(), this.animator.speed = 1, this.speedForwardMax = e.PLAYER_SPEED_FORWARD, this.speedDown = 0, this.isRaceBegan = !1, this.isRaceEnd = !1
        }
        setInitPosition() {
            this.nodeTransform.position = this.positionInit, this.nodeTransform.rotationEuler = this.rotationInit
        }
        initDebugLine(t) {
            this.debugLine = new Laya.PixelLineSprite3D, this.debugLine.maxLineCount = t, this.node.addChild(this.debugLine), this.drawDebugLine(this.rayFront.hitOffset, new Laya.Vector3(this.rayFront.hitOffset.x, this.rayFront.hitOffset.y, this.rayFront.hitOffset.z + this.rayFront.length)), this.drawDebugLine(this.rayDown.hitOffset, new Laya.Vector3(this.rayDown.hitOffset.x, this.rayDown.hitOffset.y - this.rayDown.length, this.rayDown.hitOffset.z)), this.drawDebugLine(this.rayUp.hitOffset, new Laya.Vector3(this.rayUp.hitOffset.x, this.rayUp.hitOffset.y + this.rayUp.length, this.rayUp.hitOffset.z))
        }
        initEvent() {
            h.getInstance().AddMsgListener(s.MSG_RACE_BEGIN, this, this.onMsgRaceBegin), h.getInstance().AddMsgListener(s.MSG_RACE_END, this, this.onMsgRaceEnd), h.getInstance().AddMsgListener(s.MSG_COLLISION_POP_FLY, this, this.onCollisionPopFly), h.getInstance().AddMsgListener(s.MSG_COLLISION_DEAD, this, this.onCollisionDead), h.getInstance().AddMsgListener(s.MSG_COLLISION_SPEED_UP, this, this.onCollisionSpeedUp), h.getInstance().AddMsgListener(s.MSG_COLLISION_PICK_STICK, this, this.onCollisionPickStick), h.getInstance().AddMsgListener(s.MSG_COLLISION_TRAP, this, this.onCollisionTrap), h.getInstance().AddMsgListener(s.MSG_COLLISION_BOMB, this, this.onCollisionBomb), h.getInstance().AddMsgListener(s.MSG_COLLISION_GLOVE, this, this.onCollisionGlove), h.getInstance().AddMsgListener(s.MSG_COLLISION_SLIDE, this, this.onCollisionSlide), h.getInstance().AddMsgListener(s.MSG_COLLISION_GAMEOVER, this, this.onCollisionGameOver), h.getInstance().AddMsgListener(s.MSG_COLLISION_SLIDE_EXIT, this, this.onCollisionSlideExit)
        }
        showSkin() {
            this.spriteSkin.active = !0
        }
        hideSkin() {
            this.spriteSkin.active = !1, this.hideCrown(), this.stopRunEffect(), this.stopTail()
        }
        setSkinColor(t) {}
        showCrown() {
            this.isDead() ? this.spriteCrown.active = !1 : this.spriteCrown.active = !0
        }
        hideCrown() {
            this.spriteCrown.active = !1
        }
        getDistance() {
            return this.nodeTransform.localPositionZ
        }
        isDead() {
            return this.getState() == s.PLAYER_STATE_DEAD
        }
        initState() {
            this.registerState(s.PLAYER_STATE_IDLE, "Idle"), this.registerState(s.PLAYER_STATE_RUN, "Run"), this.registerState(s.PLAYER_STATE_RUN_STICK, "RunStick"), this.registerState(s.PLAYER_STATE_JUMP_1, "Jump1"), this.registerState(s.PLAYER_STATE_JUMP_2, "Jump2"), this.registerState(s.PLAYER_STATE_STICK_JUMP1, "StickJump1"), this.registerState(s.PLAYER_STATE_STICK_JUMP2, "StickJump2"), this.registerState(s.PLAYER_STATE_FALL, "Fall"), this.registerState(s.PLAYER_STATE_DEAD, "Dead"), this.registerState(s.PLAYER_STATE_POPFLY, "PopFly"), this.registerState(s.PLAYER_STATE_SPEEDUP, "SpeedUp"), this.registerState(s.PLAYER_STATE_BEAT_BACK, "BeatBack"), this.registerState(s.PLAYER_STATE_SLIDE, "Slide"), this.registerState(s.PLAYER_STATE_RUN_FALL, "RunFall"), this.registerState(s.PLAYER_STATE_STORE, "Store"), this.registerRelation(s.PLAYER_STATE_IDLE, [s.PLAYER_STATE_RUN, s.PLAYER_STATE_RUN_STICK], !0), this.registerRelation(s.PLAYER_STATE_RUN, [s.PLAYER_STATE_SLIDE, s.PLAYER_STATE_RUN_STICK, s.PLAYER_STATE_JUMP_1, s.PLAYER_STATE_RUN_FALL, s.PLAYER_STATE_DEAD, s.PLAYER_STATE_POPFLY], !0), this.registerRelation(s.PLAYER_STATE_JUMP_1, [s.PLAYER_STATE_SLIDE, s.PLAYER_STATE_RUN, s.PLAYER_STATE_RUN_STICK, s.PLAYER_STATE_POPFLY, s.PLAYER_STATE_JUMP_2, s.PLAYER_STATE_FALL, s.PLAYER_STATE_DEAD], !0), this.registerRelation(s.PLAYER_STATE_JUMP_2, [s.PLAYER_STATE_SLIDE, s.PLAYER_STATE_RUN, s.PLAYER_STATE_RUN_STICK, s.PLAYER_STATE_POPFLY, s.PLAYER_STATE_FALL, s.PLAYER_STATE_DEAD], !0), this.registerRelation(s.PLAYER_STATE_RUN_STICK, [s.PLAYER_STATE_RUN, s.PLAYER_STATE_STICK_JUMP1], !0), this.registerRelation(s.PLAYER_STATE_STICK_JUMP1, [s.PLAYER_STATE_RUN, s.PLAYER_STATE_STICK_JUMP2, s.PLAYER_STATE_FALL], !0), this.registerRelation(s.PLAYER_STATE_STICK_JUMP2, [s.PLAYER_STATE_RUN, s.PLAYER_STATE_RUN_STICK, s.PLAYER_STATE_FALL], !0), this.registerRelation(s.PLAYER_STATE_POPFLY, [s.PLAYER_STATE_POPFLY, s.PLAYER_STATE_SLIDE, s.PLAYER_STATE_RUN, s.PLAYER_STATE_FALL, s.PLAYER_STATE_JUMP_2, s.PLAYER_STATE_DEAD], !0), this.registerRelation(s.PLAYER_STATE_SLIDE, [s.PLAYER_STATE_JUMP_1, s.PLAYER_STATE_RUN_FALL, s.PLAYER_STATE_POPFLY], !0), this.registerRelation(s.PLAYER_STATE_DEAD, [], !0)
        }
        enterIdle() {
            this.animator.play("Idle_1")
        }
        enterRun() {
            this.animator.play("Run_2"), this.stopTail(), this.playRunEffect(), this.playLoopSound(e.AUDIO_RUN)
        }
        execRun(t) {
            this.isRaceEnd && (this.stateTimeTotal += t, this.stateTimeTotal >= 1 && (this.setState(s.PLAYER_STATE_IDLE, !0), this.stateTimeTotal = 0)), this.updatePhysicGround(t)
        }
        exitRun() {
            this.stopLoopSound(e.AUDIO_RUN)
        }
        enterRunStick() {
            this.animator.play("Run"), this.stopTail(), this.playRunEffect(), this.playStickEquip(), this.playLoopSound(e.AUDIO_RUN)
        }
        execRunStick(t) {
            this.updatePhysicGround(t)
        }
        exitRunStick() {
            this.stopLoopSound(e.AUDIO_RUN)
        }
        enterJump1() {
            this.playSound(e.AUDIO_JUMP), this.animator.play("Fly"), this.speedDown = e.PLAYER_SPEED_JUMP_1, this.nodeTransform.localPositionY += e.PLAYER_JUMP_HIGH_GROUND, this.playTail(), this.stopRunEffect()
        }
        execJump1(t) {
            this.updatePhysic(t)
        }
        enterJump2() {
            this.playSound(e.AUDIO_JUMP), this.animator.play("Flip"), this.animator.speed = 3, this.speedDown = e.PLAYER_SPEED_JUMP_2
        }
        execJump2(t) {
            this.updatePhysic(t), this.isAnimatorFinish() && this.setState(s.PLAYER_STATE_FALL)
        }
        exitJump2() {
            this.animator.speed = 1
        }
        enterStickJump1() {
            this.playSound(e.AUDIO_STICK), this.playSound(e.AUDIO_STICK_HIT_GROUND), this.isEquipStick = !1, this.animator.play("Vault"), this.stateTimeTotal = 0, this.stickJumpIndex = 0, this.stickJumpPointInit = this.nodeTransform.position.clone(), this.playTail(), this.stopRunEffect(), this.playStickJumpAnim()
        }
        execStickJump1(t) {
            this.stateTimeTotal += t;
            let e = this.stickJumpPath.length;
            this.stateTimeTotal > .05 && (this.stateTimeTotal -= .05, this.stickJumpIndex++);
            let i = this.stateTimeTotal / .05;
            if (this.stickJumpIndex < e - 1) {
                let t = new Laya.Vector3;
                Laya.Vector3.lerp(this.stickJumpPath[this.stickJumpIndex], this.stickJumpPath[this.stickJumpIndex + 1], l.Clamp(i, 0, 1), t);
                let e = new Laya.Vector3;
                Laya.Vector3.add(this.stickJumpPointInit, t, e), this.nodeTransform.position = e
            } else this.setState(s.PLAYER_STATE_STICK_JUMP2)
        }
        enterStickJump2() {
            this.playSound(e.AUDIO_JUMP), this.animator.play("Fly"), this.speedDown = e.PLAYER_SPPED_STICK_JUMP_2, this.speedForwardMax = e.PLAYER_SPEED_FORWARD * e.PLAYER_SPPED_STICK_JUMP_2_FACTOR
        }
        execStickJump2(t) {
            this.updatePhysic(t)
        }
        exitStickJump2() {
            this.speedForwardMax = e.PLAYER_SPEED_FORWARD
        }
        enterFall() {
            this.animator.play("Fly", 0, .9)
        }
        execFall(t) {
            this.updatePhysic(t)
        }
        enterRunFall() {
            this.animator.play("Fly", 0, .9)
        }
        execRunFall(t) {
            this.updatePhysic(t)
        }
        enterDead() {
            this.physicBody.enabled = !1, this.hideSkin(), this.speedDown = 0, this.onDead()
        }
        createPlayerMeat() {
            let t = a.createSprite3D(e.MODEL_URL.CharacterMeat);
            this.sceneRace.addChild(t), t.transform.position = this.nodeTransform.position, t.addComponent(r).setScene(this.sceneRace, this.nodeTransform.position.clone())
        }
        onDead() {
            this.playSound(e.AUDIO_GAME_BLOOD), this.node.timerOnce(e.REVIVE_TIME_WAIT, this, this.onReviveTimeEnd)
        }
        enterPopFly() {
            this.playSound(e.AUDIO_POP_FLY), this.animator.play("Flip"), this.speedDown = e.PLAYER_SPPED_POPFLY, this.nodeTransform.localPositionY += e.PLAYER_POP_HIGH_GROUND, this.animator.speed = 3, this.playTail(), this.stopRunEffect()
        }
        execPopFly(t) {
            this.updatePhysic(t), this.animator.getCurrentAnimatorPlayState().normalizedTime >= 1 && this.setState(s.PLAYER_STATE_FALL)
        }
        exitPopFly() {
            this.animator.speed = 1
        }
        enterSpeedUp() {
            this.playSound(e.AUDIO_SPEED_UP), this.stateTimeTotal = 0, this.animator.speed = 2, this.speedForwardMax = e.PLAYER_SPEED_FORWARD * e.PLAYER_SPEED_UP_FACTOR
        }
        execSpeedUp(t) {}
        exitSpeedUp() {
            this.speedForwardMax = e.PLAYER_SPEED_FORWARD, this.getState() != s.PLAYER_STATE_JUMP_2 && this.getState() != s.PLAYER_STATE_POPFLY && (this.animator.speed = 1)
        }
        enterBeatBack() {
            this.speedForward = -2.2 * e.PLAYER_SPEED_FORWARD, this.nodeTransform.localPositionZ -= .01, this.playSound(e.AUDIO_HIT_GELLY_BIG)
        }
        execBeatBack(t) {}
        exitBeatBack() {
            this.speedForwardMax = e.PLAYER_SPEED_FORWARD
        }
        enterSlide() {
            this.animator.play("Slide"), this.speedForwardMax = e.PLAYER_SPEED_FORWARD * e.PLAYER_SPEED_SLIDE_FACTOR, this.playLoopSound(e.AUDIO_RUN)
        }
        execSlide(t) {
            this.updatePhysicSlide(t)
        }
        exitSlide() {
            this.speedForwardMax = e.PLAYER_SPEED_FORWARD, this.stopLoopSound(e.AUDIO_RUN)
        }
        enterStore() {
            this.animator.play("Run"), this.stopTail(), this.stopRunEffect(), this.playStickEquip()
        }
        playRunEffect() {
            this.nodeRunEffect.active = !0
        }
        stopRunEffect() {
            this.nodeRunEffect.active = !1
        }
        playTail() {
            this.leftTail.removeSelf(), this.rightTail.removeSelf(), this.leftTailParent.addChild(this.leftTail), this.rightTailParent.addChild(this.rightTail)
        }
        stopTail() {
            this.leftTail.removeSelf(), this.rightTail.removeSelf(), this.sceneRace.addChild(this.leftTail), this.sceneRace.addChild(this.rightTail)
        }
        loadStick() {
            this.onLoadStick(new d(this.stickId))
        }
        onLoadStick(t) {
            this.stick = t, this.StickSpawner.addChild(t.node), this.StickSpawner.active = !1
        }
        playStickEquip() {
            this.StickSpawner.active = !0, this.StickSpawner.removeSelf(), this.StickSpawnerParent.addChild(this.StickSpawner), this.StickSpawner.transform.localPositionX = .004, this.StickSpawner.transform.localPositionY = -.0073, this.StickSpawner.transform.localPositionZ = .062, this.stick.playAnimIdle()
        }
        playStickJumpAnim() {
            this.StickSpawner.removeSelf(), this.sceneRace.addChild(this.StickSpawner), this.StickSpawner.transform.position = this.nodeTransform.position, this.StickSpawner.transform.localPositionZ += .05, this.stick.playAnimJump()
        }
        dropDownStick() {
            this.isEquipStick = !1, this.getState() == s.PLAYER_STATE_RUN_STICK && (this.run(), this.playStickDownAnim())
        }
        resetStick() {
            this.StickSpawner.active = !1
        }
        playStickDownAnim() {
            this.StickSpawner.removeSelf(), this.sceneRace.addChild(this.StickSpawner), this.StickSpawner.transform.position = this.nodeTransform.position, this.StickSpawner.transform.localPositionZ += .05, this.stick.playAnimDown()
        }
        onMsgRaceBegin(t) {
            this.isRaceBegan = !0, this.getState() == s.PLAYER_STATE_IDLE && this.setState(this.stateGround)
        }
        onMsgRaceEnd(t) {
           
        }

        onCollisionPopFly(t) {
            t.other.owner == this.owner && this.setState(s.PLAYER_STATE_POPFLY)
        }
        onCollisionDead(t) {
            t.other.owner == this.owner && this.setState(s.PLAYER_STATE_DEAD)
        }
        onCollisionSpeedUp(t) {
            if (t.other.owner == this.owner) {
                if ("Mesh" == t.self.name) {
                    let i = a.createSprite3D(e.MODEL_URL.RingEffect);
                    i.addComponent(S), this.sceneRace.addChild(i), i.transform.position = t.self.transform.position
                }
                this.addSubState(s.PLAYER_STATE_SPEEDUP, e.PLAYER_SPEED_UP_TIME)
            }
        }
        onCollisionPickStick(t) {
            t.other.owner == this.owner && (this.isEquipStick = !0, this.run(), t.self.active = !1)
        }
        onPickCoin() {}
        playSound(t) {}
        playLoopSound(t) {}
        stopLoopSound(t) {}
        onCoinFollowComplete(t) {
            t.destroy(), this.onPickCoin()
        }
        onCollisionTrap(t) {
            if (t.other.owner == this.owner) {
                let e = t.self.getComponent(Laya.PhysicsCollider);
                e && e.destroy();
                t.self.addComponent(c);
                this.setState(s.PLAYER_STATE_DEAD)
            }
        }
        onCollisionBomb(t) {
            if (t.other.owner == this.owner) {
                let i = a.createSprite3D(e.MODEL_URL.BombEffect);
                i.addComponent(S), this.sceneRace.addChild(i), i.transform.position = t.self.transform.position, t.self.destroy(), this.setState(s.PLAYER_STATE_DEAD)
            }
        }
        onCollisionGlove(t) {
            t.other.owner == this.owner && (this.addSubState(s.PLAYER_STATE_BEAT_BACK, .2), this.playSound(e.AUDIO_PUNCH_HIT))
        }
        onCollisionSlide(t) {
            t.other.owner == this.owner && this.setState(s.PLAYER_STATE_SLIDE)
        }
        onCollisionGameOver(t) {
            t.other.owner == this.owner && (this.isRaceEnd = !0)
        }
        onCollisionSlideExit(t) {
            t.other.owner == this.owner && this.getState() == s.PLAYER_STATE_SLIDE && this.setState(s.PLAYER_STATE_RUN, !0)
        }
        drawDebugLine(t, e) {
            this.debugLine.addLine(t, e, Laya.Color.RED, Laya.Color.RED)
        }
        isAnimatorFinish() {
            return this.animator.getCurrentAnimatorPlayState().normalizedTime >= 1
        }
        onReviveTimeEnd() {
            if (!this.isRaceBegan) return;
            new Laya.HitResult;
            let t = this.nodeTransform.position.clone();
            t.y += 10, t.z -= e.REVIVE_OFFSET_Z, this.reviveWithRay(t), this.setState(s.PLAYER_STATE_RUN, !0)
        }
        reviveWithRay(t) {
            let i = new Laya.HitResult;
            if (this.rayRevive.origin = t, this.sceneRace.physicsSimulation.rayCast(this.rayRevive, i, 100, Laya.Physics3DUtils.COLLISIONFILTERGROUP_DEFAULTFILTER, Laya.Physics3DUtils.COLLISIONFILTERGROUP_DEFAULTFILTER), this.showSkin(), i.succeeded) {
                let t = i.point.clone();
                t.y += .05, this.nodeTransform.localPositionZ = t.z, this.nodeTransform.localPositionY = t.y
            } else this.nodeTransform.localPositionZ -= e.REVIVE_OFFSET_Z, this.nodeTransform.localPositionY += .05;
            this.onRevive(), this.setState(s.PLAYER_STATE_RUN, !0)
        }
        onRevive() {
            this.physicBody.enabled = !0
        }
        onStart() {
            this.initPhysic()
        }
        initPhysic() {
            e.isUseRigidbody && this.addRigidbody()
        }
        updateInitPosition() {
            this.setInitPosition()
        }
        onLateUpdate() {
            if (!this.isPause)
                if (this.isRaceBegan) {
                    var t = .001 * Laya.timer.delta;
                    t > s.max_frame_time && (t = s.max_frame_time), this.update(t)
                } else this.updateInitPosition()
        }
        setSceneRace(t) {
            this.sceneRace = t
        }
        setMeat(t) {
            this.objMeat = t
        }
        setDebugObject1(t) {
            this.debugObject1 = t
        }
        setDebugObject2(t) {
            this.debugObject2 = t
        }
        setStickJumpPath(t) {
            this.stickJumpPath = t
        }
        updatePhysicSlide(t) {
            let e = 0,
                i = 0;
            this.isMovingForward ? e = this.moveForward(t) : this.isMovingBack && (e = this.moveBack(t)), i = this.calcGravity(t);
            let n = new Laya.Vector3(0, i, e),
                a = this.rayFront.getHitPoint(this.sceneRace, this.node, n),
                o = this.rayDown.getHitPoint(this.sceneRace, this.node, n);
            a && this.onHitForwardWall(), o ? (this.speedDown = 0, i = o.y - this.nodeTransform.localPositionY - .001, n.y = i) : this.setState(s.PLAYER_STATE_RUN_FALL), this.nodeTransform.translate(n)
        }
        updatePhysicGround(t) {
            let e = 0,
                i = 0;
            this.isMovingForward ? e = this.moveForward(t) : this.isMovingBack && (e = this.moveBack(t));
            let n = new Laya.Vector3(0, i, e),
                a = this.rayFront.getHitPoint(this.sceneRace, this.node, n),
                o = this.rayDown.getHitPoint(this.sceneRace, this.node, n);
            a && this.onHitForwardWall(), o ? (this.speedDown = 0, i = o.y - this.nodeTransform.localPositionY - .001, n.y = i) : this.setState(s.PLAYER_STATE_RUN_FALL), this.nodeTransform.translate(n)
        }
        updatePhysic(t) {
            let i = 0,
                n = 0;
            this.isMovingForward ? i = this.moveForward(t) : this.isMovingBack && (i = this.moveBack(t)), n = this.calcGravity(t);
            let a = new Laya.Vector3(0, n, i),
                o = this.rayFront.getHitPoint(this.sceneRace, this.node, a),
                r = this.rayDown.getHitPoint(this.sceneRace, this.node, a),
                h = this.rayUp.getHitPoint(this.sceneRace, this.node, a);
            o && this.onHitForwardWall(), r ? (this.speedDown = 0, this.onTheGround()) : h && (this.speedDown = -Math.abs(this.speedDown) / 2, a.y = 0), r && h && (n = .01 * t), this.nodeTransform.translate(a), this.nodeTransform.localPositionY <= e.DEAD_PLANE_Y && this.setState(s.PLAYER_STATE_DEAD)
        }
        addRigidbody() {
            var t = this.node.getComponent(Laya.PhysicsCollider);
            console.log(">>>", this.node, t);
            var e = this.node.addComponent(Laya.Rigidbody3D);
            e.colliderShape = t.colliderShape.clone(), e.mass = 100, e.linearFactor = new Laya.Vector3(0, 1, 1), e.linearVelocity = new Laya.Vector3(0, 0, 0), e.gravity = new Laya.Vector3(0, -1, 0), e.friction = 0, e.angularFactor = new Laya.Vector3(0, 0, 0), this.rigidBody = e
        }
        jump() {
            switch (console.log("log---------jump---------------------this.getState()=:", this.getState()), this.getState()) {
                case s.PLAYER_STATE_IDLE:
                    break;
                case s.PLAYER_STATE_RUN:
                case s.PLAYER_STATE_RUN_FALL:
                case s.PLAYER_STATE_SLIDE:
                    this.setState(s.PLAYER_STATE_JUMP_1);
                    break;
                case s.PLAYER_STATE_JUMP_1:
                case s.PLAYER_STATE_POPFLY:
                    this.setState(s.PLAYER_STATE_JUMP_2);
                    break;
                case s.PLAYER_STATE_RUN_STICK:
                    this.setState(s.PLAYER_STATE_STICK_JUMP1)
            }
        }
        run() {
            this.isEquipStick ? this.setState(s.PLAYER_STATE_RUN_STICK) : this.setState(this.stateGround)
        }
        onHitForwardWall() {
            this.addSubState(s.PLAYER_STATE_BEAT_BACK, .2)
        }
        onTheGround() {
            this.run(), this.speedDown = 0
        }
        calcGravity(t) {
            let e = this.gravity * t;
            this.speedDown += e;
            let i = t * this.speedDown;
            return i < -this.rayDownLength && (i = -this.rayDownLength), i
        }
        moveForward(t) {
            if (this.isRaceEnd) {
                if (this.speedForward > 0) {
                    let e = .3 * t;
                    this.speedForward -= e
                }
                this.speedForward < 0 && (this.speedForward = 0)
            } else if (this.speedForward < this.speedForwardMax) {
                let e = this.aspeedForward * t;
                this.speedForward += e, this.speedForward > this.speedForwardMax && (this.speedForward = this.speedForwardMax)
            } else if (this.speedForward > this.speedForwardMax) {
                let e = this.aspeedForward * t;
                this.speedForward -= e, this.speedForward < this.speedForwardMax && (this.speedForward = this.speedForwardMax)
            }
            return t * this.speedForward
        }
        moveBack(t) {
            return -(t * this.speedForward)
        }
    }
    class g {
        constructor() {
            this.onADViewComplete = null, this._isBannerShowing = !1
        }
        init() {}
        createBanner() {}
        showBanner() {
            this._isBannerShowing = !0
        }
        hideBanner() {
            this._isBannerShowing = !1
        }
        isBannerShow() {
            return this._isBannerShowing
        }
        showADView(t, e, i) {
            this.onADViewComplete = Laya.Handler.create(t, e, i);
            let s = x.getInstance().showView("adview");
            s && s.setCompleteCallback(this.onADViewComplete)
        }
    }
    class u extends g {
        constructor() {
            super(...arguments), this.bannerId = "adunit-c1fb84ba51a2e4f2", this.videoId = "adunit-b277858bf137b356", this._bannerWidth = 240, this._isShowing = !1, this._isReady = !1, this._closeCallback = null, this._shareContent = [{
                title: "小样，你能追上我吗？",
                imageUrl: ""
            }, {
                title: "这游戏第三关太难了，求大神带我飞！",
                imageUrl: ""
            }, {
                title: "我就是这条道上最靓的仔，不服来战！",
                imageUrl: ""
            }, {
                title: "撑杆赛跑，速度要快，姿势要帅，赶紧来和我一起玩！",
                imageUrl: ""
            }]
        }
        init() {
            this.wx = Laya.Browser.window.wx, this.wx.login({
                success: t => {
                    console.log("O_O ADWeiXin.init", t);
                    var e = {
                        gameId: "wxf7d890534b758f7a",
                        code: t.code
                    };
                    this.onLoginSuccess(e)
                },
                fail: function(t) {}
            })
        }
        onLoginSuccess(t) {
            this.wx.showShareMenu({
                withShareTicket: !0
            }), this.wx.onShareAppMessage(() => n.randomItem(this._shareContent)), this.loadRewardedVideo(), this.createBanner()
        }
        showBanner() {
            super.showBanner(), this.banner && this.banner.show()
        }
        hideBanner() {
            super.hideBanner(), this.banner && this.banner.hide()
        }
        createBanner() {
            if (this.wx) {
                var t = this;
                console.log("***********banner 广告刷新************", this._bannerWidth);
                var e = this.wx.getSystemInfoSync();
                this.banner && this.banner.destroy(), this.banner = this.wx.createBannerAd({
                    adUnitId: this.bannerId,
                    style: {
                        left: 0,
                        top: 0,
                        width: this._bannerWidth
                    }
                }), this.banner.onResize(function(i) {
                    t.banner && (t.banner.style.top = e.windowHeight - t.banner.style.realHeight, t.banner.style.left = (e.windowWidth - t.banner.style.realWidth) / 2, -1 != e.model.search("iPhone X") && (t.banner.style.top = e.windowHeight - t.banner.style.realHeight - 65))
                }), this.banner.onLoad(function(t) {
                    console.log("banner load:" + t), h.getInstance().Emit(s.MSG_AD_BANNER_LOAD)
                }), this.banner.onError(function(t) {
                    console.log("广告错误:" + t.errMsg + "," + t.errCode)
                }), this.banner && this.banner.hide()
            }
        }
        showADView(t, e, i) {
            if (!this._isShowing && this._isReady) {
                this.onADViewComplete = Laya.Handler.create(t, e, i), console.log("showADView", this._videoAd);
                var s = this;
                this._videoAd && (this._videoAd.show().then(function() {
                    console.log("O_O video show"), s._isShowing = !0
                }).catch(function(t) {
                    console.log("O_O video show err:", t), s._videoAd.load().then(function() {
                        s._videoAd.show()
                    }).catch(function(t) {
                        s._isReady = !1
                    })
                }), this._closeCallback && this._videoAd.offClose(this._closeCallback), this._closeCallback = function(t) {
                    console.log("O_O click close", t), t && t.isEnded || void 0 === t ? s.onADViewComplete.runWith(!0) : s.onADViewComplete.runWith(!1), s._isShowing = !1
                }, this._videoAd.onClose(this._closeCallback))
            }
        }
        loadRewardedVideo() {
            console.log("loadRewardedVideo");
            var t = this;
            this.wx && (this._videoAd = this.wx.createRewardedVideoAd({
                adUnitId: this.videoId
            }), this._videoAd.onLoad(function() {
                console.log("*******视频加载成功**********"), t._isReady = !0
            }), this._videoAd.onError(function(e) {
                t._isReady = !1, console.log("*******视频加载错误**********")
            }))
        }
    }
    class L {
        constructor() {
            this.onADViewComplete = null
        }
        static getInstance() {
            return null == L._instance && (Laya.Browser.onMiniGame ? L._instance = new u : L._instance = new g), L._instance
        }
    }
    class m {
        constructor() {
            this.isShowBanner = !1
        }
        loadUIComponent(t, i, s) {
            if (this.uiRoot = fgui.UIPackage.createObject(t, i).asCom, null != s ? fgui.GRoot.inst.addChildAt(this.uiRoot, s) : fgui.GRoot.inst.addChild(this.uiRoot), this.fullScreen(), this.parseUI(), this.onShow(), e.IS_LONG_SCREEN) {
                let t = this.uiRoot.getChild("top");
                t instanceof fgui.GGroup && (t.y += e.LONG_SCREEN_TOP_OFFSET)
            }
        }
        remove() {
            this.uiRoot && fgui.GRoot.inst.removeChild(this.uiRoot), this.onRemove(), this.isShowBanner && h.getInstance().RemoveMsgListener(s.MSG_AD_BANNER_LOAD, this, this.onMsgAdBannerLoad)
        }
        onRemove() {}
        loadUI() {}
        parseUI() {}
        fullScreen() {
            this.uiRoot && this.uiRoot.makeFullScreen()
        }
        show() {
            this.uiRoot && (this.uiRoot.visible = !0), this.onShow()
        }
        hide() {
            this.uiRoot && (this.uiRoot.visible = !1), this.onHide()
        }
        onShow() {}
        onHide() {}
        showBanner() {
            this.isShowBanner = !0, L.getInstance().showBanner(), h.getInstance().AddMsgListener(s.MSG_AD_BANNER_LOAD, this, this.onMsgAdBannerLoad)
        }
        onMsgAdBannerLoad() {
            this.isShowBanner && L.getInstance().showBanner()
        }
        getUIManager() {
            return x.getInstance()
        }
        stopTouchEvent(t) {
            t._stoped = !0
        }
    }
    class p {
        static show(t, e = NaN, i = NaN) {
            if (!p.tipsView) {
                var s = fgui.UIPackage.createObjectFromURL(p.URL);
                s && (p.tipsView = s, p.tipsView.touchable = !1, p.tipsView.displayObject.zOrder = 99999)
            }
            p.tipsView && (p.tipsView.getChild("title").text = t, fgui.GRoot.inst.addChild(p.tipsView), p.tipsView.center(), isNaN(i) || (p.tipsView.y = i), isNaN(e) || (p.tipsView.x = e), p.tipsView.getTransition("show").stop(), p.tipsView.getTransition("show").play(Laya.Handler.create(this, () => {
                p.tipsView.removeFromParent()
            })), console.log("tip: " + t), Laya.timer.once(2e3, fgui.GRoot.inst, fgui.GRoot.inst.removeChild, [p.tipsView]))
        }
    }
    p.URL = "ui://65a5yhhln1y7a7s";
    class E extends m {
        constructor() {
            super(), this.init4399Ad(), this.initEvent()
        }
        init4399Ad() {
            window.adsMgr = {
                showVideoAd(t) {
                    // window.h5api.canPlayAd(function (e) {
                    //     e.canPlayAd ? window.h5api.playAd(function (e) {
                    //         1e4 === e.code ? (console.log("开始播放"), Laya.SoundManager.setMusicVolume(0), Laya.SoundManager.setSoundVolume(0)) : 10001 === e.code ? (console.log("播放结束"), Laya.SoundManager.setMusicVolume(1), Laya.SoundManager.setSoundVolume(1), t && t(1), t = t = null) : (t && t(0), Laya.SoundManager.setMusicVolume(1), Laya.SoundManager.setSoundVolume(1), console.log("广告异常"), t = t = null)
                    //     }) : (t && t(0), t = t = null, p.show("广告次数已用完，明天再来"))
                    // })

                    //激励视频！！！！
                    // return t&&t(true);
                    showRewardVideoAd(t,function(){
                        p.show("No RewardViewAd");
                    });
                    // } else {
                    //     PreloadRewarded();
                    // }
                }
            }
        }
        initEvent() {
            h.getInstance().AddMsgListener(s.MSG_LOAD_PROGRESS, this, this.onMsgLoadProgress)
        }
        onRemove() {
            h.getInstance().RemoveMsgListener(s.MSG_LOAD_PROGRESS, this, this.onMsgLoadProgress)
        }
        onMsgLoadProgress(t) {
            this.setGameProgress(t)
        }
        onMsgLoadComplete() {
            this.remove()
        }
        loadUI() {
            this.loadUIComponent("loading", "loading")
        }
        parseUI() {
            this.progressGame = this.uiRoot.getChild("progressLoad"), this.textProgress = this.uiRoot.getChild("progressTip")
        }
        setGameProgress(t) {
            this.progressGame && (this.progressGame.value = t), this.textProgress && (this.textProgress.text = t.toString() + "%")
        }
    }
    class C {}
    class R {
        constructor() {
            this.soundId = 0, this.wxBgm = null, this.wx = Laya.Browser.window.qg, this.soundList = []
        }
        init() {
            this.soundId = 0, this.loopMap = new Map, Laya.Browser.window.qg && (this.wx = Laya.Browser.window.qg)
        }
        getSoundId() {
            return this.soundId++, this.soundId
        }
        packPath(t) {
            return e.RES_URL_BASE + t
        }
        setMusicVolume(t) {
            Laya.SoundManager.musicVolume = t
        }
        setSoundVolume(t) {
            Laya.SoundManager.soundVolume = t
        }
        playBgm(t, e) {
            if (B.getInstance().isMusicOn)
                if (e || (e = 1), t = this.packPath(t), null == this.wx) this.bgm = Laya.SoundManager.playMusic(t, 0), this.bgm && (this.bgm.volume = e);
                else {
                    var i = Laya.URL.basePath + t,
                        s = this.wxBgm;
                    null == s && (s = this.wx.createInnerAudioContext(), this.wxBgm = s), s.stop(), s.src = i, s.loop = !0, s.volume = e, s.play()
                }
        }
        stopBgm() {
            null == this.wx ? this.bgm && this.bgm.stop() : this.wxBgm && this.wxBgm.stop()
        }
        pauseBgm() {
            B.getInstance().isMusicOn && (null == this.wx ? this.bgm && this.bgm.pause() : this.wxBgm && this.wxBgm.pause())
        }
        resumeBgm() {
            B.getInstance().isMusicOn && (null == this.wx ? this.bgm && this.bgm.resume() : this.wxBgm && this.wxBgm.play())
        }
        getSoundByPath(t) {
            t = this.packPath(t);
            for (var e = 0; e < this.soundList.length; e++) {
                var i = this.soundList[e];
                if (i.path == t && 0 == i.state) return i
            }
            return null
        }
        playSound2(t) {
            t = this.packPath(t);
            var e = this.getSoundByPath(t);
            if (null == e) {
                (e = new C).id = this.soundList.length, this.soundList[e.id] = e;
                var i = Laya.SoundManager.playSound(t, 1, new Laya.Handler(this, this.onComplete, [e.id]));
                return e.ss = i, e.path = t, e.state = 1, console.log("new sound " + e.id), i
            }
            return e.ss.completeHandler = new Laya.Handler(this, this.onComplete, [e.id]), e.ss.stop(), e.ss.play(), e.state = 1, e.ss
        }
        playSound(t) {
            if (t = this.packPath(t), !B.getInstance().isSoundOn) return null;
            if (null == this.wx) Laya.SoundManager.playSound(t, 1, null);
            else {
                var e = Laya.URL.basePath + t,
                    i = Laya.Pool.getItem(t);
                null == i ? ((i = this.wx.createInnerAudioContext()).src = e, i.play(), i.onEnded(function() {
                    Laya.Pool.recover(t, i)
                })) : i.play(), i.volume = 1
            }
            return null
        }
        playLoopSound(t) {
            if (B.getInstance().isSoundOn) {
                t = this.packPath(t);
                var e = new C;
                if (e.path = t, e.id = this.getSoundId(), null == this.wx) {
                    var i = Laya.SoundManager.playSound(t, 0);
                    e.ss = i
                } else {
                    var s = Laya.URL.basePath + t,
                        n = Laya.Pool.getItem(t);
                    null == n ? ((n = this.wx.createInnerAudioContext()).src = s, n.loop = !0, n.play(), n.onEnded(function() {})) : n.play(), e.wxsound = n
                }
                return this.loopMap.set(t, e), e.id
            }
        }
        stopLoopSound(t) {
            if (B.getInstance().isSoundOn) {
                t = this.packPath(t);
                var e = this.loopMap.get(t);
                e && (this.loopMap.delete(t), null == this.wx ? e.ss && e.ss.stop() : e.wxsound && (e.wxsound.stop(), Laya.Pool.recover(e.path, e.wxsound)))
            }
        }
        setLoopSoundVolume(t, e) {
            var i = this.loopMap.get(t);
            i && (null == this.wx ? i.ss && (i.ss.volume = e) : i.wxsound && (i.wxsound.volume = e))
        }
        onComplete(t) {
            t = this.packPath(t);
            var e = this.soundList[t];
            e && (e.state = 0, console.log("onComplete : " + e.path))
        }
        clearSound() {
            Laya.SoundManager.stopAllSound()
        }
        static getInstance() {
            return null == R._instance && (R._instance = new R, R._instance.init()), R._instance
        }
        playButtonSound() {
            this.playSound(e.AUDIO_BUTTON)
        }
    }
    R._instance = null;
    class A extends m {
        constructor() {
            super(), this.isOpenSet = !1
        }
        loadUI() {
            this.loadUIComponent("ui_race", "main")
        }
        parseUI() {
            this.textTip = this.uiRoot.getChild("tip"), this.btnSkin = this.uiRoot.getChild("btnSkin"), this.btnSett = this.uiRoot.getChild("btnSet"), this.textLevelName = this.uiRoot.getChild("levelTitle").asCom.getChild("levelName"), this.textCoin = this.uiRoot.getChild("panelCoin").asCom.getChild("textCoin"), this.transitionCoin = this.uiRoot.getChild("panelCoin").asCom.getTransition("t0"), this.btnSkin.onClick(this, this.onClickSkin), this.btnSett.onClick(this, this.onClickSett), this.uiRoot.onClick(this, this.onClickPanel), this.tSet = this.uiRoot.getTransition("tSet");
            let t = this.uiRoot.getChild("btnMusic").asButton,
                e = this.uiRoot.getChild("btnSound").asButton;
            t.onClick(this, this.onClickMusic), e.onClick(this, this.onClickSound), this.btnMusicLine = t.getChild("line").asImage, this.btnSoundLine = e.getChild("line").asImage, this.uiRoot.getChild("bg_set").onClick(this, this.stopTouchEvent), this.uiRoot.getChild("adMask").onClick(this, t => {
                t._stoped = !0, console.log("------------------adMask:")
            }), this.refreshAudioLine()
        }
        onClickOpen(t) {
            t._stoped = !0
        }
        onClickClose(t) {
            t._stoped = !0
        }
        onClickDebug(t) {
            t._stoped = !0, this.getUIManager().openDebug()
        }
        refreshAudioLine() {
            this.btnMusicLine.visible = !B.getInstance().isMusicOn, this.btnSoundLine.visible = !B.getInstance().isSoundOn
        }
        onClickMusic(t) {
            t._stoped = !0, B.getInstance().isMusicOn = !B.getInstance().isMusicOn, this.refreshAudioLine(), B.getInstance().saveMusicOn()
        }
        onClickSound(t) {
            t._stoped = !0, B.getInstance().isSoundOn = !B.getInstance().isSoundOn, this.refreshAudioLine(), B.getInstance().saveSoundOn()
        }
        onShow() {
            this.refreshCoin(), this.showLevelName(), this.uiRoot.getChild("tip").asCom.getTransition("t0").play(null, -1, 0), B.getInstance().enterMain()
        }
        showLevelName() {
            this.textLevelName && (this.textLevelName.text = "" + B.getInstance().getLevelId())
        }
        refreshCoin() {
            this.textCoin && (this.textCoin.text = B.getInstance().getCoin())
        }
        playCoinEffect() {
            this.transitionCoin && this.transitionCoin.play()
        }
        onClickPanel(t) {
            t._stoped = !0, B.getInstance().getLevelId() == e.SKIN_TRY_LEVEL_ID ? this.getUIManager().showMainView("skintry") : B.getInstance().beginGameRace()
        }
        onClickSkin(t) {
            t._stoped = !0, this.getUIManager().showMainView("shop"), R.getInstance().playButtonSound()
        }
        onClickSett(t) {
            t._stoped = !0, console.log("O_O onClickSett"), R.getInstance().playButtonSound(), this.isOpenSet = !this.isOpenSet, this.isOpenSet ? this.tSet.play() : this.tSet.playReverse()
        }
        showMessage(t) {
            this.textTip && (this.textTip.text = t)
        }
        onRemove() {}
    }
    class y extends m {
        constructor() {
            super(), this.rank2img = [], this.keyArray = [], this.lastRank = -1, this.initEvent()
        }
        initEvent() {
            h.getInstance().AddMsgListener(s.MSG_COIN_UPDATE, this, this.onMsgCoinUpdate), h.getInstance().AddMsgListener(s.MSG_GAME_PROGRESS_UPDATE, this, this.onMsgGameProgressUpdate), h.getInstance().AddMsgListener(s.MSG_RACE_RESTART, this, this.showLevelName)
        }
        onRemove() {
            h.getInstance().RemoveMsgListener(s.MSG_COIN_UPDATE, this, this.onMsgCoinUpdate), h.getInstance().RemoveMsgListener(s.MSG_GAME_PROGRESS_UPDATE, this, this.onMsgGameProgressUpdate), h.getInstance().RemoveMsgListener(s.MSG_RACE_RESTART, this, this.showLevelName)
        }
        onMsgKeyUpdate() {
            this.refreshKey()
        }
        onMsgCoinUpdate(t) {
            this.refreshCoin(), this.playCoinEffect()
        }
        onMsgGameProgressUpdate(t) {
            this.setGameProgress(t), this.showRank(B.getInstance()._playerRank)
        }
        loadUI() {
            this.loadUIComponent("ui_race", "game")
        }
        parseUI() {
            let t = this.uiRoot.getChild("imgRank1"),
                e = this.uiRoot.getChild("imgRank2"),
                i = this.uiRoot.getChild("imgRank3");
            this.rank2img.push(t), this.rank2img.push(e), this.rank2img.push(i), this.progressGame = this.uiRoot.getChild("progressGame"), this.textCoin = this.uiRoot.getChild("panelCoin").asCom.getChild("textCoin"), this.transitionCoin = this.uiRoot.getChild("panelCoin").asCom.getTransition("t0"), this.textLevelName = this.uiRoot.getChild("n9"), this.refreshCoin(), this.showRank(0, !0), this.showLevelName(), this.refreshKey()
        }
        refreshKey() {}
        showLevelName() {
            this.textLevelName && (this.textLevelName.text = "" + B.getInstance().getLevelId())
        }
        showRank(t, e) {
            if (e || t != this.lastRank) {
                this.lastRank = t;
                for (let e = 0; e < this.rank2img.length; e++) this.rank2img[e].visible = t == e
            }
        }
        refreshCoin() {
            this.textCoin && (this.textCoin.text = B.getInstance().getCoin())
        }
        playCoinEffect() {
            this.transitionCoin && this.transitionCoin.play()
        }
        setGameProgress(t) {
            this.progressGame && (this.progressGame.value = t)
        }
    }
    class P {
        constructor() {
            this.xhr = null, this.cancel_ = null
        }
        static get Ins() {
            return P._ins || (P._ins = new P), P._ins
        }
        call(t) {
            this.xhr = new XMLHttpRequest, t.method = t.method ? t.method : "GET", t.sus = t.sus ? t.sus : function() {};
            var e = "";
            for (var i in t.data) "" != e && (e += "&"), e += i + "=" + encodeURIComponent(t.data[i]);
            var s = t.url;
            "GET" == t.method && "" != e && (-1 == s.indexOf("?") && (s += "?"), s += e), this.xhr.onreadystatechange = function() {
                if (4 == this.xhr.readyState && !this.cancel_) {
                    if (this.xhr.status >= 200 && this.xhr.status <= 207) {
                        var e = this.xhr.responseText,
                            i = e.indexOf("<html");
                        console.log("log--------------response----------------posIndex=:", i), -1 != i && (e = e.String.substrBySplit(e, "{", "}", !0));
                        try {
                            var s = JSON.parse(e);
                            t.sus(s)
                        } catch (t) {
                            console.error(t)
                        }
                    } else t.error && t.error(this.xhr.status);
                    this.finished()
                }
            }.bind(this), this.xhr.open(t.method, s, !0), this.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), "GET" == t.method ? this.xhr.send() : this.xhr.send(e)
        }
        cancel() {
            this.cancel_ = !0
        }
        finished() {}
        send(t) {
            (t = t || {}).data = t.data ? t.data : {}, this.call(t)
        }
    }
    P._ins = null;
    class T {
        constructor() {}
        static init(t) {
            console.log("log-----------------platformMgr------"), window.qq || window.tt || Laya.Browser.onWeiXin || Laya.Browser.onVVMiniGame || Laya.Browser.onQGMiniGame || (this._Ins = null, console.log("**********平台  分析失败**********")), T.isNativeErr = !0, T.aNewDay(), T.getADJson()
        }
        static getARdShareInfo() {
            return {
                title: this.shareTitles[Math.floor(this.shareTitles.length * Math.random())],
                image: this.shareImgs[Math.floor(this.shareImgs.length * Math.random())]
            }
        }
        static getLocalData(t) {
            let e = null;
            return t = this.gameName + "_" + t, Laya.LocalStorage.getItem(t) && (e = JSON.parse(Laya.LocalStorage.getItem(t))), console.log("获取数据----------：", t, "：", e), e
        }
        static setLocalData(t, e) {
            console.log("存取数据----------：", t, "：", e), e && (t = this.gameName + "_" + t, Laya.LocalStorage.setItem(t, JSON.stringify(e)))
        }
        static initVideoAd() {
            console.log("初始化视频广告----------"), this._Ins && this._Ins.initVideoAd && this._Ins.initVideoAd()
        }
        static initNativeAd() {
            console.log("初始化原生广告----------"), this._Ins && this._Ins.initNativeAd && this._Ins.initNativeAd()
        }
        static showBnAd() {
            console.log("显示banner广告"), this._Ins && this._Ins.showBnAd && this._Ins.showBnAd()
        }
        static hideBnAd() {
            this._Ins && this._Ins.hideBnAd && this._Ins.hideBnAd()
        }
        static showAVideoAd(t) {
            return t(1)
        }
        static initNativeAdView(t, e) {
            t && (this._Ins ? this._Ins.showNativeAd && (e || (e = !1), this._Ins.showNativeAd(t, e)) : t.visible = !1)
        }
        static showIntertialAd() {
            this._Ins && this._Ins.showIntertialAd && this._Ins.showIntertialAd()
        }
        static showOpenAds() {
            this._Ins && this._Ins.showOpenAds && this._Ins.showOpenAds()
        }
        static showFullVideoAds(t) {}
        static showBtmGameBox() {}
        static hideBtmGameBox() {}
        static showHGWeb() {}
        static preLoadVideoAd() {}
        static preLoadFullVideoAd() {}
        static upScore(t) {}
        static showRankFoFriends(t) {}
        static requestHttp(t, e, i) {
            var s = "";
            if (e) {
                s = "?";
                var n = [];
                for (var a in e) n.push(a + "=" + e[a]);
                s += n.join("&")
            }
            var o = new Laya.HttpRequest;
            o.http.timeout = 1e4, o.once(Laya.Event.COMPLETE, null, function(t) {
                i && i(JSON.parse(t), null)
            }), o.once(Laya.Event.ERROR, null, function(t) {
                i && i(null, t)
            }), o.on(Laya.Event.PROGRESS, null, function(t) {}), o.send(t + s, "", "get", "text")
        }
        static getADJson() {
            console.log("获取json配置------1111-------"), this._Ins && this._Ins.getAdJson && (console.log("获取json配置------2222-------"), this._Ins.getAdJson())
        }
        static getLocation() {
            console.log("get  get  Location.......");
            let t = this;
            P.Ins.send({
                url: "",
                sus: e => {
                    console.log("log---------地理位置信息-----", e), t.userLocation = e.loc[1]
                }
            })
        }
        static wxShare() {}
        static wxShake() {}
        static onNativeBtn() {
            console.log("原生广告点击"), this._Ins && this._Ins.reportAdClick && this._Ins.reportAdClick()
        }
        static NativeErrorCB() {
            if (this._Ins) {
                let t = this._Ins.offcitys;
                if (t) {
                    let e = T.userLocation;
                    if (t && "" != e)
                        for (let i = 0; i < t.length; i++) {
                            if (t[i] == e) return console.log("此区域禁止骚操作：", e, "list：", t), !1
                        }
                }
                if (this._Ins.isNativeErrorC && this._Ins.isNativeErrorC() && T.isNativeErr) return T.isNativeErr = !1, setTimeout(() => {
                    T.isNativeErr = !0
                }, 3e4), console.log("小游戏误点几率触发：----------------------"), T.onNativeBtn(), !0
            }
            return !1
        }
        static isLiuHaiScreen() {
            return Laya.stage.height / Laya.stage.width >= 2 || Laya.stage.height / Laya.stage.width <= .5
        }
        static aNewDay() {
            let t = new Date,
                e = T.getLocalData("date");
            e && e == t.getDate() || (console.log("这是新的一天------", e, "------"), e = t.getDate(), T.setLocalData("date", e), this._Ins && this._Ins.aNewDay && this._Ins.aNewDay())
        }
        static startRecorder() {
            console.log("录屏开始----=-头条"), this._Ins && this._Ins.recorderStart && this._Ins.recorderStart()
        }
        static stopRecorder() {
            console.log("录屏停止----=-头条");
            let t = this;
            Laya.timer.once(1e3, null, function() {
                t._Ins && t._Ins.recorderStop && t._Ins.recorderStop()
            })
        }
        static shareRecorder(t) {
            if (this._Ins)
                if (this._Ins.recordShare) {
                    let e = 0;
                    this._Ins.recordShare(i => {
                        if (i) {
                            let t = this.getLocalData("xtsc_fisrt_shareRecorder");
                            t ? e = 500 + Math.floor(500 * Math.random()) : (e = 666, t = !0, this.setLocalData("xtsc_fisrt_shareRecorder", t))
                        }
                        t(i)
                    })
                } else console.log("视频分享----recordShare()----Function  is  not def")
        }
        static shareToFrend() {
            this._Ins && this._Ins.shareToFr && this._Ins.shareToFr()
        }
        static getAppList() {
            return console.log("原生广告点击"), this._Ins ? this._Ins.AppList && this._Ins.AppList.length > 0 ? this._Ins.AppList : void 0 : null
        }
    }
    T.shareTitles = ["好玩的游戏，值得你来挑战！"], T.shareImgs = [""], T.gameName = "lineCared", T.isAddVIVOIcon = !1, T.userLocation = "";
    class f extends m {
        constructor() {
            super(), this.listRank = [], this.initEvent()
        }
        initEvent() {
            h.getInstance().AddMsgListener(s.MSG_RACE_RESTART, this, this.showLevelName)
        }
        onRemove() {
            h.getInstance().RemoveMsgListener(s.MSG_RACE_RESTART, this, this.showLevelName)
        }
        loadUI() {
            this.loadUIComponent("ui_race", "end_box")
        }
        parseUI() {
            this.btnContinue = this.uiRoot.getChild("btnContinue"), this.btnOpenBox = this.uiRoot.getChild("btnOpenBox"), this.box = this.uiRoot.getChild("box").asCom, this.rewardCoin = this.uiRoot.getChild("n24").asTextField, this.rewardCoin.text = "150", this.textLevelName = this.uiRoot.getChild("n0").asCom.getChild("levelName"), this.lbGold = this.uiRoot.getChild("panelCoin").asCom.getChild("textCoin"), this.btnContinue.onClick(this, this.onClickContinue), this.btnOpenBox.onClick(this, this.onClickOpenBox), this.showLevelName(), this.showRankList(), this.lbGold.text = B.getInstance().getCoin()
        }
        parseItem(t) {
            this.listRank.push({
                name: t.getChild("name").asTextField,
                coin: t.getChild("coin").asTextField,
                bg: t.getChild("bg").asLoader
            })
        }
        showRankList() {
            let t = B.getInstance().getStage().buildPlayerRankData();
            for (let e = 0; e < this.listRank.length; e++) {
                let i = t[e],
                    s = this.listRank[e],
                    n = e + 1;
                i && s && (s.name.text = n + "." + i.name, s.coin.text = i.coin, i.isMain && (s.bg.url = "ui://ui_race/bg_paimingdiban1", s.name.color = "#ffffff", s.coin.color = "#ffffff"))
            }
        }
        showLevelName() {
            this.textLevelName && (this.textLevelName.text = "" + (B.getInstance().getLevelId() - 1))
        }
        onClickContinue(t) {
            t._stoped = !0, T.hideBnAd(), B.getInstance().restartGame(), R.getInstance().playButtonSound()
        }
        onClickOpenBox(t) {
            var i = this;
            t._stoped = !0, T.hideBnAd(), B.getAudioManager().playSound(e.AUDIO_BOX_3), window.adsMgr && window.adsMgr.showVideoAd(function(t) {
                i.onADViewComplete(t)
            })
        }
        onADViewComplete(t) {
            if (!t) return;
            var e = this;
            T.hideBnAd(), this.btnOpenBox.visible = !1, this.box.visible = !1, this.uiRoot.getController("c1").selectedIndex = 1;
            B.getInstance().gainCoin(150), setTimeout(function() {
                e.lbGold.text = B.getInstance().getCoin()
            }, 3e3)
        }
    }
    class k extends m {
        constructor() {
            super(), this.progressParentHight = 0, this.progressInitY = 0, this.listRank = [], this.hadNativeRes = !1, this.timePass = 0, this.timeTotal = .5, this.percent = 0, this.hadVideoGetCoin = !1, this.initEvent()
        }
        initEvent() {
            h.getInstance().AddMsgListener(s.MSG_RACE_RESTART, this, this.showLevelName), h.getInstance().AddMsgListener(s.MSG_SHOW_NATIVEAD_RESPONSE, this, this.showNativeResponse)
        }
        onRemove() {
            h.getInstance().RemoveMsgListener(s.MSG_RACE_RESTART, this, this.showLevelName), this.clearTimer()
        }
        clearTimer() {
            Laya.timer.clearAll(this)
        }
        loadUI() {
            this.loadUIComponent("ui_race", "end_skin")
        }
        parseUI() {
            console.log("log--------this.uiRoot=:", this.uiRoot), this.hadVideoGetCoin = !1, this.btnContinue = this.uiRoot.getChild("btnContinue"), this.btnContinueSkin = this.uiRoot.getChild("btnContinueSkin"), this.btnUnlockSkin = this.uiRoot.getChild("btnUnlockSkin"), this.btnVideoGetGoin = this.uiRoot.getChild("btnVideoGetGoin"), this.boxNode = this.uiRoot.getChild("box"), this.textLevelName = this.uiRoot.getChild("n0").asCom.getChild("levelName"), this.textTip = this.uiRoot.getChild("box").asCom.getChild("tip").asTextField, this.progressBg = this.uiRoot.getChild("box").asCom.getChild("progress_bg").asLoader, this.progressParent = this.uiRoot.getChild("box").asCom.getChild("progress").asCom, this.progress = this.progressParent.getChild("progress").asLoader, this.lbGold = this.uiRoot.getChild("panelCoin").asCom.getChild("textCoin"), this.lbVideoReward = this.uiRoot.getChild("n33"), this.progressParent.height = this.progress.height, this.progressInitY = this.progress.y, this.progressParentHight = this.progressParent.height, this.btnContinue.onClick(this, this.onClickContinue), this.btnUnlockSkin.onClick(this, this.bonClickUnlock), this.btnVideoGetGoin.onClick(this, this.onBtnVideoGetCoin), this.btnContinueSkin.onClick(this, this.onClickContinueSkin), this.showLevelName(), this.showRankList(), this.refreshSkinUnlock(), this.addScaleAction(this.btnVideoGetGoin), this.lbGold.text = B.getInstance().getCoin()
        }
        addScaleAction(t) {
            let e = Laya.TimeLine.to(t, {
                scaleX: 1.1,
                scaleY: 1.1
            }, 500);
            e.to(t, {
                scaleX: 1,
                scaleY: 1
            }, 500), e.play(0, !0)
        }
        setSkinProgressPercent(t) {
            let e = this.progressParentHight * (1 - t / 100);
            this.progressParent.height = this.progressParentHight - e, this.progress.y = this.progressInitY - e, t >= 100 ? this.textTip.visible = !1 : (this.textTip.visible = !0, this.textTip.text = t + "%")
        }
        refreshSkinUnlock() {
            let t = B.getInstance().getSkinId2Unlock();
            if (t < 0) return;
            let i = B.getInstance().getSkinPercent2Unlock();
            this.percent = i, this.setSkinProgressPercent(i - e.STEP_SKIN_UNLOCK_PERCENT), this.progressBg.url = a.skinId2ProgressBg[t], i >= 100 ? (this.btnUnlockSkin.visible = !0, this.progress.url = a.skinId2ImgUnlock[t]) : (this.btnUnlockSkin.visible = !1, this.progress.url = a.skinId2ProgressBar[t])
        }
        playSkinProgressPercent() {
            Laya.timer.frameLoop(.1, this, this.onFrameLoop)
        }
        onFrameLoop() {
            var t = .001 * Laya.timer.delta;
            this.timePass += t;
            let i = this.timePass / this.timeTotal,
                s = B.getInstance().getSkinPercent2Unlock() - e.STEP_SKIN_UNLOCK_PERCENT,
                n = Math.floor(s + e.STEP_SKIN_UNLOCK_PERCENT * i);
            this.setSkinProgressPercent(n), this.timePass >= this.timeTotal && (this.timePass = 0, this.clearTimer())
        }
        parseItem(t) {
            this.listRank.push({
                name: t.getChild("name").asTextField,
                coin: t.getChild("coin").asTextField,
                bg: t.getChild("bg").asLoader
            })
        }
        showRankList() {
            let t = B.getInstance().getStage().buildPlayerRankData();
            for (let e = 0; e < t.length; e++) {
                let i = t[e];
                i && i.isMain && (console.log("data.coin", i.coin), this.lbVideoReward.text = i.coin + "")
            }
        }
        showLevelName() {
            this.textLevelName && (this.textLevelName.text = "" + (B.getInstance().getLevelId() - 1))
        }
        onClickContinue(t) {
            this.uiRoot.getController("c1").selectedIndex = 1, Laya.timer.once(1e3, this, this.playSkinProgressPercent)
        }
        onClickContinueSkin(t) {
            t._stoped = !0, T.hideBnAd(), R.getInstance().playButtonSound(), this.percent >= 100 ? x.getInstance().showMainView("unlockSkin") : B.getInstance().restartGame()
        }
        bonClickUnlock(t) {
            let i = this;
            t._stoped = !0, T.hideBnAd(), B.getAudioManager().playSound(e.AUDIO_BOX_3), window.adsMgr && window.adsMgr.showVideoAd(function(t) {
                console.log("立即解锁成功"), i.onADViewComplete(t)
            })
        }
        onADViewComplete(t) {
            t && (B.getInstance().unlockSkinId2Unlock(), B.getInstance().restartGame())
        }
        onBtnVideoGetCoin(t) {
            var e = this;
            t._stoped = !0, T.hideBnAd(), e.hadVideoGetCoin || window.adsMgr && window.adsMgr.showVideoAd(function(t) {
                if (!t) return;
                let i = B.getInstance().getLevelCoin();
                B.getInstance().gainCoin(3 * i), setTimeout(function() {
                    e.lbGold.text = B.getInstance().getCoin()
                }, 3e3), B.getInstance().saveTotalCoin(), e.uiRoot.getController("c1").selectedIndex = 1, e.lbVideoReward.text = 3 * i + "", e.hadVideoGetCoin = !0
            })
        }
        onShow() {
            this.hadNativeRes = !1, B.getInstance().setNativeAdResponse(!1)
        }
        showNativeResponse() {
            console.log("log--------------showNativeResponse-------------"), this.hadNativeRes || (this.hadNativeRes = !0)
        }
    }
    class O extends m {
        constructor() {
            super()
        }
        loadUI() {
            this.loadUIComponent("ui_race", "unlockSkin")
        }
        parseUI() {
            console.log("log---------this.uiRoot=:", this.uiRoot), this.btnSkip = this.uiRoot.getChild("btnSkip"), this.btnVideoGetSkin = this.uiRoot.getChild("btnVideoGetSkin"), this.skin = this.uiRoot.getChild("skin"), this.btnSkip.onClick(this, this.onBtnSkp), this.btnVideoGetSkin.onClick(this, this.onBtnVideoGetSkin)
        }
        onBtnSkp(t) {
            t._stop = !0, T.hideBnAd(), B.getInstance().restartGame()
        }
        onBtnVideoGetSkin(t) {
            var e = this;
            t._stop = !0, window.adsMgr && window.adsMgr.showVideoAd(function(t) {
                e.onADViewComplete(t), T.hideBnAd()
            })
        }
        onADViewComplete(t) {
            t && (B.getInstance().unlockSkinId2Unlock(), B.getInstance().restartGame())
        }
        onShow() {
            console.log("log-----------unlockSkin-------onShow");
            let t = B.getInstance().getSkinId2Unlock();
            this.skin.url = a.skinId2ImgUnlock[t]
        }
    }
    class M extends m {
        constructor() {
            super(), this.lastSelectItem = null, this.stickId2Item = {}, this.skinId2Item = {}, this.actionStep = 0, this.initEvent()
        }
        initEvent() {
            h.getInstance().AddMsgListener(s.MSG_COIN_UPDATE, this, this.onMsgCoinUpdate)
        }
        onRemove() {
            h.getInstance().RemoveMsgListener(s.MSG_COIN_UPDATE, this, this.onMsgCoinUpdate)
        }
        onMsgCoinUpdate(t) {
            this.refreshCoin(), this.playCoinEffect()
        }
        refreshCoin() {
            this.textCoin && (this.textCoin.text = B.getInstance().getCoin())
        }
        playCoinEffect() {
            this.transitionCoin && this.transitionCoin.play()
        }
        loadUI() {
            this.loadUIComponent("ui_race", "shop")
        }
        parseUI() {
            this.textCoin = this.uiRoot.getChild("panelCoin").asCom.getChild("textCoin"), this.transitionCoin = this.uiRoot.getChild("panelCoin").asCom.getTransition("t0"), this.btnBack = this.uiRoot.getChild("btnBack"), this.btnUnlock = this.uiRoot.getChild("btnUnlock"), this.btnUnlockAd = this.uiRoot.getChild("btnUnlockAd"), this.listSkin = this.uiRoot.getChild("list"), this.textPrice = this.btnUnlock.getChild("price").asTextField, this.btnBack.onClick(this, this.onClickBack), this.btnUnlock.onClick(this, this.onClickUnlock), this.btnUnlockAd.onClick(this, this.onClickUnlockAd);
            let t = this.getLockStickNum();
            this.textPrice.text = (e.PRICE_STICK_RAND_UNLOCK + e.PRICE_STICK_UNLOCK_ADD_ARR[8 - t]).toString(), this.refreshCoin(), this.parseList(), this.refreshButton()
        }
        refreshButton() {
            0 == this.getLockStickNum() ? (this.btnUnlock.visible = !1, this.btnUnlockAd.visible = !1) : (this.btnUnlock.visible = !0, this.btnUnlockAd.visible = !0)
        }
        onShow() {
            B.getInstance().enterStore()
        }
        parseList() {
            this.listSkin.on(fgui.Events.CLICK_ITEM, this, this.onClickItem), this.listSkin.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, !1), this.listSkin.setVirtual(), this.listSkin.numItems = 18
        }
        renderListItem(t, e) {
            let i = e.data;
            null == i && ((i = {}).bg2 = e.asCom.getChild("bg2"), i.bg1 = e.asCom.getChild("bg1"), i.icon = e.asCom.getChild("icon").asLoader, e.data = i), i.index = t, t >= 9 ? this.renderRoleSkin(t - 9, i) : this.renderStickSkin(t, i)
        }
        renderStickSkin(t, e) {
            let i = s.STICK_SKIN_ARRAY[t];
            i == B.getInstance().getStickId() ? this.selectItem(e) : (e.bg2.visible = !1, e.bg1.visible = !0), this.stickId2Item[i] = e;
            let n = B.getInstance().checkStickId(i);
            e.icon.url = n ? a.stickId2Icon[i] : "ui://ui_race/bg_wenhao"
        }
        renderRoleSkin(t, e) {
            let i = s.ROLE_SKIN_ARRAY[t];
            i == B.getInstance().getSkinId() ? this.selectItem(e) : (e.bg2.visible = !1, e.bg1.visible = !0), this.skinId2Item[i] = e;
            let n = B.getInstance().checkSkinId(i);
            e.icon.url = n ? a.skinId2Icon[i] : "ui://ui_race/bg_wenhao"
        }
        onClickItem(t) {
            R.getInstance().playButtonSound();
            let e = t.data,
                i = e.index;
            i >= 9 ? this.onClickSkinItem(i - 9, e) : this.onClickStickItem(i, e)
        }
        selectItem(t) {
            this.lastSelectItem && (this.lastSelectItem.bg2.visible = !1, this.lastSelectItem.bg1.visible = !0), t.bg2.visible = !0, t.bg1.visible = !1, this.lastSelectItem = t
        }
        playAction(t) {
            t ? this.actionStep = t : this.actionStep--;
            let e = this.getRandomLockStickId();
            this.actionStep <= 0 || null == e ? e && (B.getInstance().unlockStickId(e), B.getInstance().changeStickId(e), this.listSkin.refreshVirtualList(), this.refreshButton()) : (R.getInstance().playButtonSound(), this.selectItem(this.stickId2Item[e]), Laya.timer.once(200, this, this.onActionEnd))
        }
        onActionEnd() {
            this.playAction();
            let t = this.getLockStickNum();
            this.textPrice.text = (e.PRICE_STICK_RAND_UNLOCK + e.PRICE_STICK_UNLOCK_ADD_ARR[8 - t]).toString()
        }
        gotoMain() {
            this.getUIManager().showMainView("main")
        }
        onClickStickItem(t, e) {
            let i = s.STICK_SKIN_ARRAY[t];
            e != this.lastSelectItem || i != B.getInstance().getStickId() ? B.getInstance().checkStickId(i) && (this.selectItem(e), B.getInstance().changeStickId(i)) : this.gotoMain()
        }
        onClickSkinItem(t, e) {
            let i = s.ROLE_SKIN_ARRAY[t];
            e != this.lastSelectItem || i != B.getInstance().getSkinId() ? B.getInstance().checkSkinId(i) && (this.selectItem(e), B.getInstance().changeSkinId(i)) : this.gotoMain()
        }
        onClickBack() {
            R.getInstance().playButtonSound(), this.getUIManager().showMainView("main")
        }
        getRandomLockStickId() {
            let t = [];
            for (let e of s.STICK_SKIN_ARRAY) B.getInstance().checkStickId(e) || t.push(e);
            return n.randomItem(t)
        }
        getLockStickNum() {
            let t = 0;
            for (let e of s.STICK_SKIN_ARRAY) B.getInstance().checkStickId(e) || t++;
            return t
        }
        onClickUnlock() {
            R.getInstance().playButtonSound();
            let t = this.getLockStickNum();
            this.actionStep > 0 || 0 == t || B.getInstance().costCoin(e.PRICE_STICK_RAND_UNLOCK + e.PRICE_STICK_UNLOCK_ADD_ARR[8 - t]) && this.playAction(t)
        }
        onClickUnlockAd() {
            var t = this;
            R.getInstance().playButtonSound(), window.adsMgr && window.adsMgr.showVideoAd(function(e) {
                t.onAdViewComplete(e)
            })
        }
        onAdViewComplete(t) {
            if (!t) return;
            let e = this.getLockStickNum();
            this.actionStep > 0 || 0 == e || this.playAction(e)
        }
    }
    class N extends m {
        constructor() {
            super(), this.leftTime = 5, this.initEvent()
        }
        initEvent() {}
        onRemove() {
            Laya.timer.clear(this, this.updateLeftTime)
        }
        onMsgLoadProgress(t) {}
        loadUI() {
            this.loadUIComponent("ui_race", "game_revive")
        }
        parseUI() {
            this.btnRevie = this.uiRoot.getChild("n27").asButton, this.btnSkip = this.uiRoot.getChild("btnSkip").asButton, this.textLeftTime = this.uiRoot.getChild("leftTime").asTextField, this.textLeftTime.text = this.leftTime + "", this.textLevelName = this.uiRoot.getChild("level").asCom.getChild("levelName").asTextField, this.btnRevie.onClick(this, this.onClickRevive), this.btnSkip.onClick(this, this.onBtnSkip), this.btnSkip.visible = !1, Laya.timer.loop(1e3, this, this.updateLeftTime), this.showLevelName()
        }
        showLevelName() {
            this.textLevelName && (this.textLevelName.text = "" + B.getInstance().getLevelId())
        }
        updateLeftTime() {
            this.leftTime -= 1, this.leftTime <= 0 && this.onTimeEnd(), 4 == this.leftTime && (this.btnSkip.visible = !0), this.textLeftTime.text = this.leftTime.toString()
        }
        onBtnSkip() {
            this.onTimeEnd()
        }
        onTimeEnd() {
            this.getUIManager().showMainView("gameover"), Laya.timer.clear(this, this.updateLeftTime)
        }
        onClickRevive(t) {
            var e = this;
            R.getInstance().playButtonSound(), window.adsMgr && window.adsMgr.showVideoAd(function(t) {
                e.onAdViewComplete(t)
            })
        }
        onAdViewComplete(t) {
            t && (T.hideBnAd(), this.getUIManager().showMainView("game"), B.getInstance().resetLifeInGame(), h.getInstance().Emit(s.MSG_PLAYER_REVIVE))
        }
    }
    class w extends m {
        constructor() {
            super(), this.initEvent()
        }
        initEvent() {}
        onRemove() {}
        loadUI() {
            this.loadUIComponent("ui_race", "game_over")
        }
        parseUI() {
            this.btnHome = this.uiRoot.getChild("btnHome").asButton, this.textLevelName = this.uiRoot.getChild("level").asCom.getChild("levelName").asTextField, this.btnHome.onClick(this, this.onClickHome), this.showLevelName(), R.getInstance().stopBgm()
        }
        showLevelName() {
            this.textLevelName && (this.textLevelName.text = "" + B.getInstance().getLevelId()), T.showIntertialAd()
        }
        onClickHome() {
            R.getInstance().playButtonSound(), T.hideBnAd(), B.getInstance().restartGame()
        }
    }
    class D extends m {
        constructor() {
            super(), this.initEvent(), this.keyArray = []
        }
        initEvent() {
            h.getInstance().AddMsgListener(s.MSG_COIN_UPDATE, this, this.onMsgCoinUpdate), h.getInstance().AddMsgListener(s.MSG_KEY_UPDATE, this, this.onMsgKeyUpdate)
        }
        onRemove() {
            h.getInstance().RemoveMsgListener(s.MSG_COIN_UPDATE, this, this.onMsgCoinUpdate), h.getInstance().RemoveMsgListener(s.MSG_KEY_UPDATE, this, this.onMsgKeyUpdate)
        }
        onMsgCoinUpdate() {
            this.refreshCoin(), this.playCoinEffect()
        }
        refreshCoin() {
            this.textCoin && (this.textCoin.text = B.getInstance().getCoin())
        }
        playCoinEffect() {
            this.transitionCoin && this.transitionCoin.play()
        }
        onMsgKeyUpdate() {
            this.refreshKey()
        }
        loadUI() {
            this.loadUIComponent("ui_race", "open_box")
        }
        parseUI() {
            this.btnContinue = this.uiRoot.getChild("btnContiniue").asButton, this.listBox = this.uiRoot.getChild("boxList").asCom.getChild("listBox").asList, this.textCoin = this.uiRoot.getChild("panelCoin").asCom.getChild("textCoin"), this.transitionCoin = this.uiRoot.getChild("panelCoin").asCom.getTransition("t0"), this.btnContinue.onClick(this, this.onClickContinue);
            let t = this.uiRoot.getChild("keys").asCom,
                e = t.getChild("k1").asCom.getChild("key").asImage,
                i = t.getChild("k2").asCom.getChild("key").asImage,
                s = t.getChild("k3").asCom.getChild("key").asImage;
            this.keyArray.push(e), this.keyArray.push(i), this.keyArray.push(s), this.parseList(), this.refreshCoin(), this.refreshKey()
        }
        refreshKey() {
            let t = B.getInstance().getKey();
            for (let e = 0; e < this.keyArray.length; e++) this.keyArray[e].visible = e < t
        }
        parseList() {
            this.listBox.on(fgui.Events.CLICK_ITEM, this, this.onClickItem), this.listBox.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, !1), this.listBox.numItems = 9
        }
        renderListItem(t, e) {
            let i = e.data;
            null == i && ((i = {}).index = t, i.coin = e.getChild("coin").asGroup, i.box = e.getChild("box").asGroup, i.price = e.getChild("price").asTextField, e.data = i, i.coin.visible = !1)
        }
        onClickItem(t) {
            let i = t.data;
            if (i.isOpen) return void B.getAudioManager().playSound(e.AUDIO_BOX_OPEN_NOT);
            let s = B.getInstance().openKeyBox();
            s > 0 ? (i.price.text = s.toString(), i.coin.visible = !0, i.box.visible = !1, i.isOpen = !0, B.getAudioManager().playSound(e.AUDIO_BOX_OPEN)) : B.getAudioManager().playSound(e.AUDIO_BOX_OPEN_NOT)
        }
        onClickContinue() {
            R.getInstance().playButtonSound(), B.getInstance().showEndUI()
        }
    }
    class v extends m {
        constructor() {
            super()
        }
        loadUI() {
            this.loadUIComponent("ui_race", "game_guide", 0)
        }
        parseUI() {
            this.uiRoot.onClick(this, this.onClickBg), B.getInstance().pauseGame()
        }
        onShowLater() {}
        onClickBg() {
            B.getInstance().resumeGame(), this.exit()
        }
        exit() {
            this.remove()
        }
    }
    class U extends m {
        constructor() {
            super()
        }
        loadUI() {
            this.loadUIComponent("ui_race", "ad_view")
        }
        parseUI() {
            this.uiRoot.getChild("close").onClick(this, this.onClickClose)
        }
        setCompleteCallback(t) {
            this.callbackComplete = t
        }
        onClickClose() {
            this.callbackComplete && this.callbackComplete.runWith(!0), this.remove()
        }
    }
    class b extends m {
        constructor() {
            super()
        }
        loadUI() {
            this.loadUIComponent("ui_race", "debug")
        }
        parseUI() {
            this.list = this.uiRoot.getChild("list").asList, this.list.setVirtual(), this.list.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, !1), this.list.on(fgui.Events.CLICK_ITEM, this, this.onClickItem), this.uiRoot.getChild("close").onClick(this, this.onClickClose)
        }
        showData(t, e) {
            this.onClickListItem = e, this.listData = t, this.list.numItems = t.length
        }
        renderListItem(t, e) {
            let i = this.listData[t];
            i && (e.asCom.getChild("text").asTextField.text = i.name), e.data = t
        }
        onClickItem(t) {
            let e = t.data,
                i = this.listData[e];
            i && i.callback && i.callback(this, i), this.onClickListItem && this.onClickListItem(this, i)
        }
        onClickClose() {
            this.remove()
        }
    }
    class G extends m {
        constructor() {
            super(), this.initEvent()
        }
        initEvent() {}
        onRemove() {}
        loadUI() {
            this.loadUIComponent("ui_race", "skin_try")
        }
        parseUI() {
            this.btnTryRandom = this.uiRoot.getChild("btnTryRandom").asButton, this.btnSkip = this.uiRoot.getChild("btnSkip").asButton, this.btnTryRandom.onClick(this, this.onclickTryRandom), this.btnSkip.onClick(this, this.onClickSkip);

            if (this.btnTryRandom._children[2]) {
                this.btnTryRandom._children[2].text = this.btnTryRandom._children[2]._text == "随机试用" ? "RANDOM" : this.btnTryRandom._children[2]._text;

                this.btnTryRandom._children[2].visible = true;
            }

            let t = this.uiRoot.getChild("list").asList;
            t.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, !1), t.numItems = s.ROLE_SKIN_ARRAY_TRY.length
        }
        renderListItem(t, e) {
            let i = s.ROLE_SKIN_ARRAY_TRY[t];
            e.asCom.getChild("skin").asLoader.url = a.skinId2ImgUnlock[i], e.asCom.getChild("btnTry").asButton.onClick(this, this.onClickItem, [i])
        }
        onClickItem(t) {
            var e = this;
            this._skinId = t, R.getInstance().playButtonSound(), window.adsMgr && window.adsMgr.showVideoAd(function(t) {
                e.onAdViewComplete(t)
            })
        }
        onAdViewComplete(t) {
            t && (T.hideBnAd(), B.getInstance().trySkin(this._skinId), B.getInstance().beginGameRace())
        }
        onclickTryRandom() {
            var t = this;
            R.getInstance().playButtonSound(), this._skinId = n.randomItem(s.ROLE_SKIN_ARRAY_TRY), window.adsMgr && window.adsMgr.showVideoAd(function(e) {
                t.onAdViewComplete(e)
            })
        }
        onClickSkip() {
            T.hideBnAd(), R.getInstance().playButtonSound(), B.getInstance().beginGameRace()
        }
    }
    class x {
        constructor() {
            this.initData()
        }
        static getInstance() {
            return null == x._instance && (x._instance = new x), x._instance
        }
        initData() {
            this.uiMap = {}, this.uiClas = {
                load: E,
                main: A,
                game: y,
                endbox: f,
                shop: M,
                revive: N,
                gameover: w,
                openbox: D,
                guide: v,
                endskin: k,
                adview: U,
                debug: b,
                skintry: G,
                unlockSkin: O
            }, this.uiBanner = {
                endbox: !0,
                revive: !0,
                gameover: !0,
                skintry: !0
            }, this.curtMainView = null
        }
        loadNativePackage(t, e, i) {
            fgui.UIPackage.loadPackage(t, Laya.Handler.create(e, i))
        }
        loadPackage(t, i, s) {
            fgui.UIPackage.loadPackage(e.RES_URL_BASE + t, Laya.Handler.create(i, s))
        }
        createView(t) {
            var e = new(0, this.uiClas[t]);
            return this.uiBanner[t], e
        }
        getView(t) {
            return this.uiMap[t]
        }
        showView(t) {
            console.log("showView", t);
            var e = this.createView(t);
            return e && e.loadUI(), e
        }
        openDebug() {
            let e = [{
                name: "全体block",
                callback: t => {
                    h.getInstance().Emit(s.MSG_RACE_RESTART_BLOCK_ALL), t.remove()
                }
            }, {
                name: "选择block",
                callback: t => {
                    let e = a.getCfgByName("block_db"),
                        i = [];
                    for (let t in e) {
                        let s = e[t];
                        i.push({
                            name: s.key,
                            id: t
                        })
                    }
                    this.showDebugList(i, (t, e) => {
                        t.remove(), h.getInstance().Emit(s.MSG_RACE_RESTART_BLOCK, e.id)
                    }), t.remove()
                }
            }, {
                name: "选择关卡",
                callback: t => {
                    let e = a.getCfgByName("level_db"),
                        i = [];
                    for (let t in e) i.push({
                        name: t,
                        lvMin: e[t].lvMin,
                        lvMax: e[t].lvMax
                    });
                    this.showDebugList(i, (t, e) => {
                        t.remove(), B.getInstance()._levelId = n.random(e.lvMin, e.lvMax), h.getInstance().Emit(s.MSG_RACE_RESTART)
                    }), t.remove()
                }
            }, {
                name: "FPS面板",
                callback: e => {
                    t.stat = !t.stat, t.stat ? Laya.Stat.show() : Laya.Stat.hide()
                }
            }, {
                name: "UI测试",
                callback: t => {
                    this.showDebugList([{
                        name: "皮肤试用",
                        callback: t => {
                            this.showMainView("skintry")
                        }
                    }, {
                        name: "复活",
                        callback: t => {
                            this.showMainView("revive")
                        }
                    }, {
                        name: "结算宝箱",
                        callback: t => {
                            this.showMainView("endbox")
                        }
                    }, {
                        name: "结算皮肤",
                        callback: t => {
                            this.showMainView("endskin")
                        }
                    }], (t, e) => {})
                }
            }];
            this.showDebugList(e)
        }
        showDebugList(t, e) {
            let i = this.showView("debug");
            i && i.showData(t, e)
        }
        showMainView(t) {
            if (t.indexOf("main") >= 0) {
                showBanner();
                PreloadRewarded();
                PreloadInterstitial();
            }

            console.log("showMainView", t), this.curtMainView && (this.curtMainView.remove(), this.curtMainView = null);
            var e = this.createView(t);
            return e && (e.loadUI(), this.curtMainView = e), e
        }
        hideMain() {
            this.curtMainView && this.curtMainView.hide()
        }
        showMain() {
            this.curtMainView && this.curtMainView.show()
        }
    }
    class B {
        constructor() {
            this.isGameRuning = !1, this._levelCoin = 0, this._totalCoin = 0, this._totalKeyNum = 0, this._levelId = 0, this._stickId = 1, this._skinId = s.PLAYER_SKIN_Default, this._skinId2Unlock = s.PLAYER_SKIN_Atlethman_0, this._skinPercent2Unlock = 0, this._stickUnlock = {}, this._skinUnlock = {}, this._playerRank = 0, this._lifeInGame = 0, this._colorBlock = "", this.mainPlayerZ = 0, this.isStoreMode = !1, this.isMusicOn = !0, this.isSoundOn = !0, this._nativeAdResponse = !1, this._packVersion = 0, this._stage = null, this._isPauseGame = !1
        }
        static getInstance() {
            return null == B._instance && (B._instance = new B, B._instance.init()), B._instance
        }
        init() {
            this.initEvent(), this.initData()
        }
        initData() {
            this.resetLifeInGame(), this.loadGameData()
        }
        isPauseGame() {
            return this._isPauseGame
        }
        pauseGame() {
            h.getInstance().Emit(s.MSG_PAUSE_GAME), this._isPauseGame = !0
        }
        resumeGame() {
            this._isPauseGame = !1, h.getInstance().Emit(s.MSG_RESUME_GAME)
        }
        unlockSkinId2Unlock() {
            let t = this.getSkinId2Unlock();
            if (t < 0) return console.log("not skinid");
            this._skinPercent2Unlock >= 100 && (this.unlockSkinId(t), this.changeSkinId(t))
        }
        makeSkinId2Unlock() {
            this._skinId2Unlock = this.getRandomLockSkinId(), this.saveData("SKIN_ID_2_UNLOCK", this._skinId2Unlock)
        }
        updateSkinUnlockStep() {
            this.getSkinId2Unlock() < 0 || (this._skinPercent2Unlock += e.STEP_SKIN_UNLOCK_PERCENT, this._skinPercent2Unlock > 100 && (this._skinPercent2Unlock = e.STEP_SKIN_UNLOCK_PERCENT, this.makeSkinId2Unlock()), this.saveData("SKIN_PERCENT_2_UNLOCK", this._skinPercent2Unlock))
        }
        getSkinPercent2Unlock() {
            return this._skinPercent2Unlock
        }
        getSkinId2Unlock() {
            return this._skinId2Unlock
        }
        getRandomLockSkinId() {
            let t = [];
            for (let e of s.ROLE_SKIN_ARRAY) this.checkSkinId(e) || t.push(e);
            return 0 == t.length ? -1 : n.randomItem(t)
        }
        setBlockColor(t) {
            this._colorBlock = t
        }
        getBlockColor() {
            return this._colorBlock
        }
        resetLifeInGame() {
            this._lifeInGame = e.MAX_LIFE_IN_GAME
        }
        loadGameData() {
            let t = s.STICK_SKIN_1,
                e = s.PLAYER_SKIN_Default,
                i = {};
            i[t] = !0;
            let n = {};
            n[e] = !0, this._totalCoin = this.loadData("GAME_COIN", 0), this._totalKeyNum = this.loadData("GAME_KEY_NUM", 0), this._levelId = this.loadData("GAME_LEVEL_ID", this._levelId), this._stickId = this.loadData("GAME_STICK_ID", t), this._stickUnlock = this.loadData("STICK_UNLOCK", i), this._skinId = this.loadData("GAME_SKIN_ID", e), this._skinUnlock = this.loadData("SKIN_UNLOCK", n), this._skinId2Unlock = this.loadData("SKIN_ID_2_UNLOCK", 0), this._skinPercent2Unlock = this.loadData("SKIN_PERCENT_2_UNLOCK", 0), this.isMusicOn = "TRUE" == this.loadData("MUSIC_ON", "TRUE"), this.isSoundOn = "TRUE" == this.loadData("SOUND_ON", "TRUE"), this._packVersion = this.loadData("PACK_VERSION", 0), 0 == this._skinId2Unlock && this.makeSkinId2Unlock()
        }
        isPackLoad() {
            return this._packVersion == e.WX_PACK_VERSION
        }
        markPackLoad() {
            this.saveData("PACK_VERSION", e.WX_PACK_VERSION)
        }
        saveMusicOn() {
            this.isMusicOn ? this.saveData("MUSIC_ON", "TRUE") : (this.saveData("MUSIC_ON", "FALSE"), R.getInstance().stopBgm())
        }
        saveSoundOn() {
            this.isSoundOn ? this.saveData("SOUND_ON", "TRUE") : this.saveData("SOUND_ON", "FALSE")
        }
        saveGameData() {
            this.saveData("GAME_COIN", this._totalCoin), this.saveData("GAME_KEY_NUM", this._totalKeyNum), this.saveData("GAME_LEVEL_ID", this._levelId)
        }
        saveTotalCoin() {
            this.saveData("GAME_COIN", this._totalCoin)
        }
        changeStickId(t) {
            this.checkStickId(t) && (this._stickId = t, this.saveData("GAME_STICK_ID", this._stickId)), h.getInstance().Emit(s.MSG_MAIN_PLAYER_CHANGE_TICK)
        }
        checkStickId(t) {
            return this._stickUnlock[t]
        }
        unlockStickId(t) {
            this._stickUnlock[t] = !0, this.saveData("STICK_UNLOCK", this._stickUnlock)
        }
        changeSkinId(t) {
            this.checkSkinId(t) && (this._skinId = t, this.saveData("GAME_SKIN_ID", this._skinId)), h.getInstance().Emit(s.MSG_MAIN_PLAYER_CHANGE_SKIN, this.getSkinId())
        }
        checkSkinId(t) {
            return this._skinUnlock[t]
        }
        unlockSkinId(t) {
            this._skinUnlock[t] = !0, this.saveData("SKIN_UNLOCK", this._skinUnlock)
        }
        getSkinId() {
            return this._skinId
        }
        saveData(t, e) {
            "object" == typeof e ? Laya.LocalStorage.setJSON(t, e) : Laya.LocalStorage.setItem(t, e.toString()), console.log("saveData:", t, e)
        }
        loadData(t, e) {
            let i = typeof e,
                s = null;
            return "object" == i ? "object" != typeof(s = Laya.LocalStorage.getJSON(t)) && (s = e) : null != (s = Laya.LocalStorage.getItem(t)) && "number" == i && (s = Number(s)), s || (s = e), console.log("loadData:", t, s), s
        }
        initEvent() {
            h.getInstance().AddMsgListener(s.MSG_RACE_END, this, this.onMsgRaceEnd)
        }
        onMsgRaceEnd() {
            this.levelCompelete(), R.getInstance().stopBgm(), R.getInstance().playSound(e.AUDIO_FINISH_1), R.getInstance().playSound(e.AUDIO_FINISH_2)
        }
        trySkin(t) {
            h.getInstance().Emit(s.MSG_MAIN_PLAYER_CHANGE_SKIN, t)
        }
        reset() {
            this.isGameRuning = !1
        }
        static getAudioManager() {
            return R.getInstance()
        }
        beginGameRace() {
            R.getInstance().playSound(e.AUDIO_START_PLAY), this.isGameRuning || (this.isGameRuning = !0, h.getInstance().Emit(s.MSG_RACE_BEGIN), R.getInstance().playBgm(e.AUDIO_BGM)), this._levelCoin = 0
        }
        getCoin() {
            return n.numberFormat(this._totalCoin, 1)
        }
        getLevelCoin() {
            return this._levelCoin
        }
        gainCoin(t) {
            t > 0 && (this._levelCoin += t, this._totalCoin += t, h.getInstance().Emit(s.MSG_COIN_UPDATE, this._totalCoin))
        }
        checkCoin(t) {
            return t > 0 && this._totalCoin >= t
        }
        costCoin(t) {
            return !!this.checkCoin(t) && (this._totalCoin -= t, this.saveData("GAME_COIN", this._totalCoin), h.getInstance().Emit(s.MSG_COIN_UPDATE, this._totalCoin), !0)
        }
        gainKey(t) {
            R.getInstance().playSound(e.AUDIO_KEY), t > 0 && this._totalKeyNum < e.MAX_KEY_IN_GAME && (this._totalKeyNum += t, this._totalKeyNum > e.MAX_KEY_IN_GAME && (this._totalKeyNum = e.MAX_KEY_IN_GAME), h.getInstance().Emit(s.MSG_KEY_UPDATE, this._totalKeyNum))
        }
        checkKey(t) {
            return t > 0 && this._totalKeyNum >= t
        }
        costKey(t) {
            return !!this.checkKey(t) && (this._totalKeyNum -= t, this.saveData("GAME_KEY_NUM", this._totalKeyNum), h.getInstance().Emit(s.MSG_KEY_UPDATE, this._totalKeyNum), !0)
        }
        getKey() {
            return this._totalKeyNum
        }
        getLevelId() {
            return this._levelId
        }
        getStickId() {
            return this._stickId
        }
        openKeyBox() {
            if (this.costKey(1)) {
                let t = n.random(50, 300);
                return this.gainCoin(t), t
            }
            return 0
        }
        beginLevel() {}
        setStage(t) {
            this._stage = t
        }
        getStage() {
            return this._stage
        }
        levelCompelete() {
            this._levelId += 1, this.saveGameData(), this.getKey() >= 3 ? x.getInstance().showMainView("openbox") : this.showEndUI()
        }
        showEndUI() {
            let t = 0,
                e = B.getInstance().getSkinId2Unlock();
            console.log("log-------skinId=:", e), (t = e < 0 ? 100 : n.random(0, 99)) < 90 ? (this.updateSkinUnlockStep(), x.getInstance().showMainView("endskin")) : x.getInstance().showMainView("endbox")
        }
        onPlayerDead() {
            return this._lifeInGame > 0 ? (this._lifeInGame -= 1, !0) : (x.getInstance().showMainView("revive"), !1)
        }
        restartGame() {
            h.getInstance().Emit(s.MSG_RACE_RESTART)
        }
        enterStore() {
            this.isStoreMode = !0, h.getInstance().Emit(s.MSG_UI_ENTER_STORE)
        }
        enterMain() {
            this.isStoreMode = !1, h.getInstance().Emit(s.MSG_UI_ENTER_MAIN)
        }
        setNativeAdResponse(t) {
            this._nativeAdResponse = t
        }
        getNativeAdResponse() {
            return this._nativeAdResponse
        }
    }
    class Y extends Laya.Script3D {
        constructor() {
            super(), this.timePass = 0, this.timeToFollow = 0, this.o1 = new Laya.Vector3, this.o2 = new Laya.Vector3
        }
        onAwake() {
            this.node = this.owner
        }
        onEnable() {}
        onStart() {}
        followTarget(t, e, i, s) {
            this.target = t, this.timeToFollow = e, this.funcComplete = i, this.offset = s
        }
        onLateUpdate() {
            var t = .001 * Laya.timer.delta;
            t > s.max_frame_time && (t = s.max_frame_time), this.update(t)
        }
        update(t) {
            if (this.timeToFollow <= 0) return;
            this.timePass += t;
            let e = this.timePass / this.timeToFollow;
            this.offset ? (Laya.Vector3.add(this.target.transform.position, this.offset, this.o2), Laya.Vector3.lerp(this.node.transform.position, this.o2, e, this.o1)) : Laya.Vector3.lerp(this.node.transform.position, this.target.transform.position, e, this.o1), this.node.transform.position = this.o1, Laya.Vector3.distance(this.target.transform.position, this.node.transform.position) <= .02 && (this.timeToFollow = 0, this.funcComplete && this.funcComplete.runWith(this.owner), this.destroy())
        }
    }
    class F extends I {
        constructor() {
            super(), this.timePlankPassValid = 0
        }
        init() {
            super.init(), this.stickId = B.getInstance().getStickId()
        }
        onAwake() {
            super.onAwake(), this.showSkinByIndex(B.getInstance().getSkinId())
        }
        initEvent() {
            super.initEvent(), Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown), Laya.stage.on(Laya.Event.KEY_UP, this, this.onKeyUp), Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseD), h.getInstance().AddMsgListener(s.MSG_COLLISION_STAYBAR_PASS_NOT, this, this.onCollisionStayBarPassNot), h.getInstance().AddMsgListener(s.MSG_COLLISION_STAYBAR_PASS, this, this.onCollisionStayBarPass), h.getInstance().AddMsgListener(s.MSG_MAIN_PLAYER_CHANGE_TICK, this, this.onChangeStick), h.getInstance().AddMsgListener(s.MSG_MAIN_PLAYER_CHANGE_SKIN, this, this.onChangeSkin), h.getInstance().AddMsgListener(s.MSG_UI_ENTER_MAIN, this, this.onUIEnterMain), h.getInstance().AddMsgListener(s.MSG_UI_ENTER_STORE, this, this.onUIEnterStore), h.getInstance().AddMsgListener(s.MSG_PLAYER_REVIVE, this, this.onPlayerRevive), h.getInstance().AddMsgListener(s.MSG_COLLISION_PICK_COIN, this, this.onCollisionPickCoin), h.getInstance().AddMsgListener(s.MSG_COLLISION_PICK_KEY, this, this.onCollisionPickKey), h.getInstance().AddMsgListener(s.MSG_COLLISION_GUIDE, this, this.onCollisionGuide), h.getInstance().AddMsgListener(s.MSG_MAIN_PLAYER_JUMP, this, this.onMsgMainPlayerJump), h.getInstance().AddMsgListener(s.MSG_PAUSE_GAME, this, this.onPauseGame), h.getInstance().AddMsgListener(s.MSG_RESUME_GAME, this, this.onResumeGame)
        }
        onPauseGame() {
            this.onUIEnterMain()
        }
        onResumeGame() {
            this.setCurrentState(s.PLAYER_STATE_RUN), h.getInstance().Emit(s.MSG_MAIN_PLAYER_JUMP)
        }
        jump() {
            (this.levelId != e.GUIDE_LEVEL_ID || B.getInstance().isPauseGame()) && super.jump()
        }
        onMsgMainPlayerJump() {
            super.jump()
        }
        setLevelId(t) {
            this.levelId = t, t == e.GUIDE_LEVEL_ID ? this.setStateGround(s.PLAYER_STATE_RUN_STICK) : this.setStateGround(s.PLAYER_STATE_RUN)
        }
        onCollisionGuide(t) {
            if (t.other.owner == this.owner) {
                let i = t.self.getComponent(Laya.PhysicsCollider);
                i && i.destroy(), this.levelId == e.GUIDE_LEVEL_ID && setTimeout(function() {
                    x.getInstance().showView("guide")
                }, 200)
            }
        }
        onCollisionPickCoin(t) {
            if (t.other.owner == this.owner) {
                let i = t.self.getComponent(Laya.PhysicsCollider);
                i && i.destroy(), t.self.addComponent(Y).followTarget(this.node, .2, Laya.Handler.create(this, this.onCoinFollowComplete), new Laya.Vector3(0, .01, 0)), R.getInstance().playSound(e.AUDIO_MONEY)
            }
        }
        onCollisionPickKey(t) {
            t.other.owner == this.owner && (t.self.active = !1, B.getInstance().gainKey(1))
        }
        onUIEnterMain() {
            console.log("log-----------------------------------onUIEnterMain-------------------"), this.playTail(), this.resetStick(), this.setCurrentState(s.PLAYER_STATE_IDLE), this.showSkinByIndex(B.getInstance().getSkinId())
        }
        onUIEnterStore() {
            this.stopTail(), this.setCurrentState(s.PLAYER_STATE_STORE)
        }
        onPlayerRevive() {
            this.onReviveTimeEnd()
        }
        initDebugLine(t) {}
        updateInitPosition() {
            B.getInstance().isStoreMode ? this.setStorePosition() : this.setInitPosition()
        }
        update(t) {
            super.update(t), B.getInstance().mainPlayerZ = this.nodeTransform.position.z
        }
        setStorePosition() {
            this.nodeTransform.position = this.positionStore, this.nodeTransform.rotationEuler = this.rotationStore
        }
        onPickCoin() {
            B.getInstance().gainCoin(1)
        }
        onChangeStick() {
            this.playStickEquip(), this.stick.showId(B.getInstance().getStickId())
        }
        onChangeSkin(t) {
            this.showSkinByIndex(t)
        }
        onCollisionStayBarPassNot(t) {
            t.other.owner == this.owner && (this.timePlankPassValid = n.getTime() + 1e3, this.owner.timerOnce(1e3, this, this.dropDownStick), h.getInstance().Emit(s.MSG_MAIN_PLAYER_PASS_NOT, t))
        }
        onCollisionStayBarPass(t) {
            t.other.owner == this.owner && n.getTime() > this.timePlankPassValid && (B.getInstance().gainCoin(55), h.getInstance().Emit(s.MSG_MAIN_PLAYER_PASS, t))
        }
        onCollisionGameOver(t) {
            super.onCollisionGameOver(t), t.other.owner == this.owner && (console.log("游戏结束"), h.getInstance().Emit(s.MSG_RACE_END))
        }
        onMsgRaceBegin(t) {
            super.onMsgRaceBegin(t), this.stick.showId(B.getInstance().getStickId())
        }
        playSound(t) {
            R.getInstance().playSound(t)
        }
        playLoopSound(t) {
            this.stopLoopSound(t), R.getInstance().playLoopSound(t)
        }
        stopLoopSound(t) {
            R.getInstance().stopLoopSound(t)
        }
        onDead() {
            B.getInstance().onPlayerDead() && super.onDead()
        }
        onMouseD(t) {
            this.isRaceBegan && !this.isRaceEnd && this.jump()
        }
        onKeyDown(t) {
            switch (t.keyCode) {
                case Laya.Keyboard.SPACE:
                    this.jump();
                    break;
                case Laya.Keyboard.L:
                    this.isPause = !this.isPause;
                    break;
                case Laya.Keyboard.UP:
                    // this.node.transform.localPositionY += .01;
                    break;
                case Laya.Keyboard.DOWN:
                    // this.node.transform.localPositionY -= .01;
                    break;
                case Laya.Keyboard.LEFT:
                    // case Laya.Keyboard.S:
                    this.moveLeft();
                    break;
                case Laya.Keyboard.RIGHT:
                    // case Laya.Keyboard.W:
                    this.moveRight();
                    break;
                case Laya.Keyboard.H:
                    // this.setState(s.PLAYER_STATE_DEAD, !0);
                    break;
                case Laya.Keyboard.M:
                    // console.log("PlayerMain:", this.getState());
                    break;
                case Laya.Keyboard.F:
                    // console.log("down collider", n.getNodePathName(this.rayDown.getHitResult().collider.owner))
            }
        }
        onKeyUp(t) {
            switch (t.keyCode) {
                case Laya.Keyboard.RIGHT:
                    // case Laya.Keyboard.W:
                    break;
                case Laya.Keyboard.LEFT:
                    // case Laya.Keyboard.S:
                    this.isMovingBack = !1, this.isMovingForward = !1;
                    break;
                case Laya.Keyboard.SPACE:
            }
        }
        moveRight() {
            this.isMovingForward = !0, this.isMovingBack = !1, e.isUseRigidbody && this.rigidBody && (this.rigidBody.linearVelocity = new Laya.Vector3(0, 0, -.1))
        }
        moveLeft() {
            this.isMovingBack = !0, this.isMovingForward = !1, e.isUseRigidbody && this.rigidBody && (this.rigidBody.linearVelocity = new Laya.Vector3(0, 0, .1))
        }
    }
    class K extends I {
        constructor() {
            super(), this.AIIsExeing = !1, this.isPauseMove = !1, this.skinColorIndex1 = 0, this.skinColorIndex2 = 0, this.isShowNameUI = !0
        }
        init() {
            super.init(), this.rayJumplen = .1, this.playerNameUIPosIn = new Laya.Vector3, this.playerNameUIPosOut = new Laya.Vector3, this.rayJump = new _(this.rayJumplen, new Laya.Vector3(0, .02, 0), new Laya.Vector3(0, 0, 1))
        }
        initDebugLine(t) {}
        onAwake() {
            super.onAwake(), this.showSkinByIndex(s.PLAYER_SKIN_Default);
            let t = this.skinsArray[s.PLAYER_SKIN_Default].skinnedMeshRenderer.sharedMaterial.clone();
            t instanceof Laya.BlinnPhongMaterial && (t.tilingOffsetZ = .1), this.skinsArray[s.PLAYER_SKIN_Default].skinnedMeshRenderer.sharedMaterial = t
        }
        setSkinColor(t) {
            this.playerNameHead && (this.playerNameHead.color = t), n.setSpriteColor(this.skinsArray[s.PLAYER_SKIN_Default], t)
        }
        initEvent() {
            super.initEvent(), h.getInstance().AddMsgListener(s.MSG_COLLISION_STAYBAR_PASS_NOT, this, this.onCollisionStayBarPassNot), h.getInstance().AddMsgListener(s.MSG_COLLISION_STAYBAR_PASS, this, this.onCollisionStayBarPass), h.getInstance().AddMsgListener(s.MSG_COLLISION_AI_JUMP, this, this.onCollisionAIJump)
        }
        createPlayerNameUI(t) {
            this.camera = t, this.playerNameUI = fgui.UIPackage.createObject("ui_race", "PlayerName").asCom, this.playerNameHead = this.playerNameUI.getChild("head").asGraph, this.playerNameText = this.playerNameUI.getChild("name").asTextField, fgui.GRoot.inst.addChild(this.playerNameUI), this.updatePlayerNameUI()
        }
        setPlayerName(t) {
            this.playerNameText && (this.playerNameText.text = t)
        }
        getPlayerName() {
            return this.playerNameText ? this.playerNameText.text : "玩家"
        }
        updatePlayerNameUI() {
            if (!this.isShowNameUI) return;
            if (this.spriteCrown.active) return void(this.playerNameUI.visible = !1);
            this.playerNameUI.visible = !0;
            let t = this.nodeTransform.position;
            this.playerNameUIPosIn.x = t.x, this.playerNameUIPosIn.y = t.y + .035, this.playerNameUIPosIn.z = t.z, n.getScreenPos(this.camera, this.playerNameUIPosIn, this.playerNameUIPosOut), this.playerNameUI.x = this.playerNameUIPosOut.x, this.playerNameUI.y = this.playerNameUIPosOut.y;
            let e = 1 - Math.abs(this.playerNameUIPosOut.z);
            if (e <= .02) this.playerNameUI.visible = !1;
            else {
                this.playerNameUI.visible = !0;
                let t = 10 * e;
                this.playerNameUI.scaleX = t, this.playerNameUI.scaleY = t
            }
        }
        showSkin() {
            super.showSkin(), this.showNameUI()
        }
        hideSkin() {
            super.hideSkin(), this.hideNameUI()
        }
        showNameUI() {
            this.isShowNameUI = !0, this.updatePlayerNameUI()
        }
        hideNameUI() {
            this.isShowNameUI = !1, this.playerNameUI.visible = !1
        }
        setLevelId(t) {
            this.levelId = t, t == e.GUIDE_LEVEL_ID && (this.hideSkin(), this.hideCrown())
        }
        onMsgRaceBegin(t) {
            this.levelId != e.GUIDE_LEVEL_ID && (super.onMsgRaceBegin(t), this.stickId = n.random(1, 9), this.stick.showId(this.stickId), this.setPlayerName(a.getRandAIName()))
        }
        onCollisionStayBarPassNot(t) {
            t.other.owner == this.owner && this.owner.timerOnce(1e3, this, this.dropDownStick)
        }
        onCollisionStayBarPass(t) {}
        onCollisionAIJump() {
            this.jump()
        }
        update(t) {
            this.isPauseMove || super.update(t), this.updateAI(t), this.updatePlayerNameUI()
        }
        setRandomSkinColorIndex(t, e) {
            this.skinColorIndex1 = t, this.skinColorIndex2 = e
        }
        randomSkinColor() {
            this.setSkinColor(e.PLAYER_SKIN_COLOR[n.random(this.skinColorIndex1, this.skinColorIndex2)])
        }
        setTargetPlayer(t) {
            this.targetPlayer = t
        }
        reset() {
            super.reset(), this.AIIsExeing = !1, this.randomSkinColor(), this.updatePlayerNameUI()
        }
        updateAI(t) {
            if (this.targetPlayer.nodeTransform.localPositionZ - this.nodeTransform.localPositionZ <= -e.DISTANCE_MAX_AI_PLAYER ? this.isPauseMove = !0 : this.isPauseMove = !1, this.AIIsExeing) {
                if (this.AITimePass += t, this.AITimePass < this.AITimeDelay) return;
                this.AIIsExeing = !1, this.jump()
            }
            this.rayJump.getHitPoint(this.sceneRace, this.node, null, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER3, Laya.Physics3DUtils.COLLISIONFILTERGROUP_DEFAULTFILTER | Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1) && (this.AITimeDelay = 1 * Math.random(), this.AITimePass = 0, this.AIIsExeing = !0)
        }
        setState(t, e) {
            this.setNextState(t, e)
        }
        onReviveTimeEnd() {
            if (!this.isRaceBegan) return;
            if (this.targetPlayer.nodeTransform.localPositionZ - this.nodeTransform.localPositionZ >= e.DISTANCE_MAX_AI_PLAYER) {
                new Laya.HitResult;
                let t = this.nodeTransform.position.clone();
                t.y = 5, t.z = this.targetPlayer.nodeTransform.localPositionZ - 2 * e.REVIVE_OFFSET_Z, this.reviveWithRay(t)
            } else super.onReviveTimeEnd()
        }
    }
    class V extends Laya.Script3D {
        constructor() {
            super(), this.target = null, this.positionSub = new Laya.Vector3, this.isRaceBegin = !1
        }
        setTransformTo(t, e) {
            this.positionTo = t, this.rotationTo = e
        }
        onAwake() {
            this.camera = this.owner.getChildByName("Main_Camera"), this.camera.enableHDR = !1, this.positionTo = this.camera.transform.position.clone(), this.rotationTo = this.camera.transform.rotationEuler.clone();
            let t = this.owner.getChildByName("Init_Camera");
            this.positionInit = t.transform.position.clone(), this.rotationInit = t.transform.rotationEuler.clone(), this.node = this.owner, this.nodePoisitionInit = this.node.transform.position.clone();
            let e = this.owner.getChildByName("Store_Camera");
            this.positionStore = e.transform.position.clone(), this.rotationStore = e.transform.rotationEuler.clone(), this.updateCameraMode(), t.destroy(), e.destroy(), this.initEvent()
        }
        updateCameraMode() {
            B.getInstance().isStoreMode ? this.setCameraStore() : this.setCameraInit()
        }
        setCameraStore() {
            this.camera.transform.position = this.positionStore, this.camera.transform.rotationEuler = this.rotationStore, this.node.transform.position = this.nodePoisitionInit
        }
        setCameraInit() {
            this.camera.transform.position = this.positionInit, this.camera.transform.rotationEuler = this.rotationInit, this.node.transform.position = this.nodePoisitionInit
        }
        reset() {
            this.isRaceBegin = !1, this.setCameraInit()
        }
        initEvent() {
            h.getInstance().AddMsgListener(s.MSG_RACE_BEGIN, this, this.onMsgRaceBegin)
        }
        onMsgRaceBegin() {
            this.isRaceBegin = !0, this.play()
        }
        play() {
            Laya.Tween.to(this.camera.transform, {
                localPositionX: this.positionTo.x,
                localPositionY: this.positionTo.y,
                localPositionZ: this.positionTo.z,
                localRotationEulerX: this.rotationTo.x,
                localRotationEulerY: this.rotationTo.y,
                localRotationEulerZ: this.rotationTo.z
            }, 1e3, Laya.Ease.linearIn, Laya.Handler.create(this, this.onCameraReady))
        }
        onCameraReady() {}
        onStart() {
            this.Start()
        }
        onUpdate() {}
        onLateUpdate() {
            this.isRaceBegin ? this.LateUpdate(0) : this.updateCameraMode()
        }
        Start() {}
        setTarget(t) {
            this.target = t, Laya.Vector3.subtract(this.node.transform.position, t.transform.position, this.positionSub)
        }
        moveForward() {
            var t = new Laya.Vector3;
            Laya.Vector3.add(this.target.transform.position, this.positionSub, t), this.node.transform.position = t
        }
        LateUpdate(t) {
            this.target && this.moveForward()
        }
    }
    class H extends Laya.Script3D {
        constructor() {
            super(), this._node = null, this._tweenData = null
        }
        getNode() {
            return null == this._node && this.owner && (this._node = this.owner), this._node
        }
        setCompentData(t) {
            this._compentData = t
        }
        getCompentData() {
            return this._compentData
        }
        checkCollision() {
            let t = this.getNode().getComponent(Laya.PhysicsCollider);
            t && this.getCompentData().collisionGroup && (t.isTrigger = !0, t.collisionGroup = H.CollisionGroup[this.getCompentData().collisionGroup], t.canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER3)
        }
        getCollisionMsg(t) {
            return s.CompentCollisionMsg[t]
        }
        getCollisionMsgExit(t) {
            return s.CompentCollisionMsgExit[this.getCollisionMsg(t)]
        }
        onLateUpdate() {
            this.update(Laya.timer.delta)
        }
        update(t) {
            t > s.max_frame_time_1000 && (t = s.max_frame_time_1000);
            let e = this._tweenData;
            if (null == e) return;
            if (!e._isAction) return;
            e._timePass += t;
            let i = e._timePass;
            if (!(e._timeDelay > i)) {
                if ((i -= e._timeDelay) > e._timeTotal && (i = e._timeTotal), e._funcEase) e._target[e._propertyName] = e._funcEase(i, e._propertyInit, e._propertyAddd, e._timeTotal);
                else {
                    let t = i / e._timeTotal;
                    e._target[e._propertyName] = l.Clamp(t, e._propertyInit, e._propertyInit + e._propertyAddd)
                }
                i >= e._timeTotal && (e._loop ? e._timePass = 0 : (e._isAction = !1, e._funcCompelete && e._funcCompelete.run()))
            }
        }
        resetTween() {
            null == this._tweenData && (this._tweenData = {}), this._tweenData._timeDelay = 0, this._tweenData._timePass = 0, this._tweenData._timeTotal = 0, this._tweenData._propertyInit = 0, this._tweenData._propertyAddd = 0, this._tweenData._isAction = !1, this._tweenData._target = null, this._tweenData._repeat = 1
        }
        tweenTo(t, e, i, s, n, a, o, r) {
            this.resetTween(), this._tweenData._isAction = !0, this._tweenData._target = t, this._tweenData._timePass = 0, this._tweenData._timeTotal = s, this._tweenData._funcEase = n, this._tweenData._funcCompelete = a, this._tweenData._timeDelay = o, this._tweenData._propertyName = e;
            let h = t[e];
            this._tweenData._propertyInit = h, this._tweenData._propertyAddd = i - h, this._tweenData._loop = r
        }
    }
    H.PropertyName = ["localPositionX", "localPositionY", "localPositionZ", "localRotationEulerX", "localRotationEulerY", "localRotationEulerZ", "localScaleX", "localScaleY", "localScaleZ"], H.TweenType = ["linearNone", "linearIn", "linearInOut", "linearOut", "bounceIn", "bounceInOut", "bounceOut", "backIn", "backInOut", "backOut", "elasticIn", "elasticInOut", "elasticOut", "strongIn", "strongInOut", "strongOut", "sineInOut", "sineIn", "sineOut", "quintIn", "quintInOut", "quintOut", "quartIn", "quartInOut", "quartOut", "cubicIn", "cubicInOut", "cubicOut", "quadIn", "quadInOut", "quadOut", "expoIn", "expoInOut", "expoOut", "circIn", "circInOut", "circOut"], H.CollisionGroup = [Laya.Physics3DUtils.COLLISIONFILTERGROUP_DEFAULTFILTER, Laya.Physics3DUtils.COLLISIONFILTERGROUP_STATICFILTER, Laya.Physics3DUtils.COLLISIONFILTERGROUP_KINEMATICFILTER, Laya.Physics3DUtils.COLLISIONFILTERGROUP_DEBRISFILTER, Laya.Physics3DUtils.COLLISIONFILTERGROUP_SENSORTRIGGER, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CHARACTERFILTER, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER3, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER4, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER5, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER6, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER7, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER8, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER9, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER10, Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER];
    class J extends H {
        constructor() {
            super(), this._isDisabled = !1
        }
        onAwake() {}
        onEnable() {}
        onStart() {
            this.checkCollision();
            let t = this.getCompentData(),
                e = H.PropertyName[t.property],
                i = this.getNode().transform[e];
            this._tweenPropertyName = e, this._tweenPropertyFrom = i, t.add ? this._tweenPropertyTo = t.valueTo + i : this._tweenPropertyTo = t.valueTo, t.playOnTrigger || this.execute()
        }
        execute() {
            this.getCompentData().delay > 0 ? (new Laya.Timer).once(1e3 * this.getCompentData().delay, this, this.play) : this.play()
        }
        onTriggerEnter(t) {
            this.getCompentData().playOnTrigger && this.execute(), h.getInstance().Emit(this.getCollisionMsg(this.getCompentData().collisionMsg), {
                self: this.getNode(),
                other: t
            })
        }
        play() {
            this.action1()
        }
        onDisable() {
            this._isDisabled = !0
        }
        clearTween() {
            this._tween && (this._tween.recover(), this._tween = null)
        }
        action1() {
            if (this.clearTween(), this._isDisabled) return;
            let t = this.getCompentData();
            this.tweenTo(this.getNode().transform, this._tweenPropertyName, this._tweenPropertyTo, 1e3 * t.goTime, Laya.Ease[H.TweenType[t.goTweenType]], Laya.Handler.create(this, this.action2), 1e3 * t.goTimeWait)
        }
        action2() {
            if (this.clearTween(), this._isDisabled) return;
            let t = this.getCompentData();
            t.loop ? this.tweenTo(this.getNode().transform, this._tweenPropertyName, this._tweenPropertyFrom, 1e3 * t.backTime, Laya.Ease[H.TweenType[t.backTweenType]], Laya.Handler.create(this, this.action1), 1e3 * t.backTimeWait) : this.tweenTo(this.getNode().transform, this._tweenPropertyName, this._tweenPropertyFrom, 1e3 * t.backTime, Laya.Ease[H.TweenType[t.backTweenType]], null, 1e3 * t.backTimeWait)
        }
    }
    class W extends H {
        constructor() {
            super()
        }
        onAwake() {}
        onEnable() {}
        onStart() {
            this.checkCollision();
            let t = this.getCompentData(),
                e = H.PropertyName[t.property],
                i = this.getNode().transform[e];
            this.tweenTo(this.getNode().transform, e, i + t.valueAdd, 1e3 * t.time, Laya.Ease[H.TweenType[t.tweenType]], null, 0, !0)
        }
        onTriggerEnter(t) {
            h.getInstance().Emit(this.getCollisionMsg(this.getCompentData().collisionMsg), {
                self: this.getNode(),
                other: t
            })
        }
        clearTween() {
            this._tween && (this._tween.clear(), this._tween = null)
        }
        onDisable() {
            this.clearTween()
        }
    }
    class j extends H {
        constructor() {
            super()
        }
        onAwake() {}
        onEnable() {}
        onStart() {
            this.checkCollision()
        }
        onTriggerEnter(t) {
            h.getInstance().Emit(this.getCollisionMsg(this.getCompentData().collisionMsg), {
                self: this.getNode(),
                other: t
            })
        }
        onTriggerExit(t) {
            let e = this.getCollisionMsgExit(this.getCompentData().collisionMsg);
            e && h.getInstance().Emit(e, {
                self: this.getNode(),
                other: t
            })
        }
    }
    class X extends H {
        constructor() {
            super()
        }
        onAwake() {}
        onEnable() {}
        onStart() {
            let t = this.owner.getComponent(Laya.Rigidbody3D);
            t && (t.collisionGroup = H.CollisionGroup[this.getCompentData().collisionGroup], t.friction = 10, t.linearDamping = 1), this.rigidBody = t
        }
        onLateUpdate() {}
    }
    class Z extends H {
        constructor() {
            super(), this.soundRange = .2, this.audioId = 0, this.isSoundPlaying = !1, this.isSoundPlaying = !1
        }
        onAwake() {
            this.nodeTransfrom = this.owner.transform, this.gameIns = B.getInstance()
        }
        onEnable() {}
        onStart() {
            this.soundUrl = e.RES_URL_BASE + this.getCompentData().source, this.soundRange = this.getCompentData().range
        }
        onLateUpdate() {
            var t = .001 * Laya.timer.delta;
            t > s.max_frame_time && (t = s.max_frame_time), this.update(t)
        }
        playSound() {
            this.audioId = R.getInstance().playLoopSound(this.soundUrl)
        }
        stopSound() {
            R.getInstance().stopLoopSound(this.soundUrl)
        }
        updateVolume(t) {
            this.audioId && !Laya.Browser.onMiniGame && R.getInstance().setLoopSoundVolume(this.audioId, t)
        }
        update(t) {
            let e = Math.abs(this.nodeTransfrom.position.z - this.gameIns.mainPlayerZ),
                i = e < this.soundRange;
            !this.isSoundPlaying && i && this.playSound(), i && this.updateVolume(1 - e / this.soundRange), this.isSoundPlaying && !i && this.stopSound(), this.isSoundPlaying = i
        }
    }
    class z {
        static init() {
            this._name2Compent.ActionGoBack = J, this._name2Compent.ActionRepeat = W, this._name2Compent.CollisionGroup = j, this._name2Compent.PhysicBody = X, this._name2Compent.ItemSound = Z
        }
        static addCompentToNode(t, e, i, s, a) {
            if (t) {
                var o = n.findNodeByPathIndexNoRoot(t, e);
                if (null == o) return;
                if ("ItemConfig" == i)
                    if (s.difficulty > a) o.destroy();
                    else {
                        let t = this.ItemType[s.itemType];
                        if (t) return o.addComponent(t)
                    }
                else {
                    let t = this._name2Compent[i];
                    if (t) {
                        var r = o.addComponent(t);
                        return r.setCompentData(s), r
                    }
                }
            }
            return null
        }
    }
    z.ItemType = [null, class extends Laya.Script3D {
        constructor() {
            super()
        }
        onAwake() {
            this.node = this.owner
        }
        onEnable() {}
        onStart() {
            this.initEvent(), this.high_jump_bar = n.findNodeByPath(this.node, "hight_jump_snap/high_jump_bar"), this.rating_board_1 = this.owner.getChildByName("rating_board_1"), this.rating_board_2 = this.owner.getChildByName("rating_board_2"), this.rating_board_3 = this.owner.getChildByName("rating_board_3"), this.plank_arrow_1 = this.owner.getChildByName("plank_arrow_1"), this.plank_arrow_2 = this.owner.getChildByName("plank_arrow_2"), this.plank_arrow_3 = this.owner.getChildByName("plank_arrow_3");
            let t = this.plank_arrow_1.meshRenderer.sharedMaterial.clone();
            this.plank_arrow_1.meshRenderer.sharedMaterial = t, this.plank_arrow_2.meshRenderer.sharedMaterial = t, this.plank_arrow_3.meshRenderer.sharedMaterial = t, this.JumpPassNot = this.owner.getChildByName("JumpPassNot"), this.JumpPass = this.owner.getChildByName("JumpPass"), n.setSpriteTilingOffset(this.plank_arrow_1, .8), this.initBoardAll(), this.high_jump_bar.meshRenderer.sharedMaterial = this.high_jump_bar.meshRenderer.sharedMaterial.clone(), n.setSpriteColor(this.high_jump_bar, "44F7FF")
        }
        onDisable() {
            this.removeEventr()
        }
        initEvent() {
            h.getInstance().AddMsgListener(s.MSG_MAIN_PLAYER_PASS_NOT, this, this.onMainPlayerPassNot), h.getInstance().AddMsgListener(s.MSG_MAIN_PLAYER_PASS, this, this.onMainPlayerPass)
        }
        removeEventr() {
            h.getInstance().RemoveMsgListener(s.MSG_MAIN_PLAYER_PASS_NOT, this, this.onMainPlayerPassNot), h.getInstance().RemoveMsgListener(s.MSG_MAIN_PLAYER_PASS, this, this.onMainPlayerPass)
        }
        onMainPlayerPassNot(t) {
            t.self == this.JumpPassNot && (this.rating_board_2.meshFilter.sharedMesh = this.rating_board_1.meshFilter.sharedMesh, this.rating_board_3.meshFilter.sharedMesh = this.rating_board_1.meshFilter.sharedMesh, n.setSpriteTilingOffset(this.plank_arrow_1, .05), this.rotateBoardAll())
        }
        onMainPlayerPass(t) {
            t.self == this.JumpPass && (this.rating_board_1.meshFilter.sharedMesh = this.rating_board_2.meshFilter.sharedMesh, n.setSpriteTilingOffset(this.plank_arrow_1, 1), this.rotateBoardAll())
        }
        initBoardAll() {
            this.initBoard(this.rating_board_1), this.initBoard(this.rating_board_2), this.initBoard(this.rating_board_3)
        }
        rotateBoardAll() {
            this.rotateBoard(this.rating_board_1, 0), this.rotateBoard(this.rating_board_2, 100), this.rotateBoard(this.rating_board_3, 200)
        }
        initBoard(t) {
            t.transform.localRotationEulerY = -90, t.transform.localRotationEulerX = -180
        }
        rotateBoard(t, e) {
            Laya.Tween.to(t.transform, {
                localRotationEulerX: 0
            }, 500, Laya.Ease.bounceInOut, Laya.Handler.create(this, this.onRotateBoardEnd), e)
        }
        onRotateBoardEnd() {
            R.getInstance().playSound(e.AUDIO_PLANK)
        }
        onLateUpdate() {}
        update(t) {}
    }, class extends Laya.Script3D {
        constructor() {
            super(), this.pathIndex = 0, this.pathPoint = [], this.pathTime = [0, .5, 1, .2], this.pathGravity = [!0, !0, !1, !1], this.moveTime = .5, this.waitTime = 1, this.gravity = -1, this.isUseGravity = !0, this.passTime = 0
        }
        onAwake() {
            this.spriteBallTranform = this.owner.getChildByName("CannonBall").transform, this.pathPoint.push(this.owner.getChildByName("P1")), this.pathPoint.push(this.owner.getChildByName("P2")), this.pathPoint.push(this.owner.getChildByName("P3")), this.pathPoint.push(this.owner.getChildByName("P4")), this.effectSmoke = this.owner.getChildByName("Canon_smoke1")
        }
        onEnable() {}
        onStart() {
            this.calcBallSpeed()
        }
        onDisable() {}
        onLateUpdate() {
            var t = .001 * Laya.timer.delta;
            this.update(t)
        }
        update(t) {
            if (this.passTime += t, this.passTime < this.waitTime) return;
            let e = this.passTime - this.waitTime,
                i = 0,
                s = 0;
            this.isUseGravity && (this.ballSpeedY += this.gravity * t), i = this.ballSpeedY * t, s = this.ballSpeedZ * t, e >= this.moveTime ? (this.spriteBallTranform.localPositionY = this.pathPoint[this.pathIndex].transform.localPositionY, this.spriteBallTranform.localPositionZ = this.pathPoint[this.pathIndex].transform.localPositionZ, this.pathIndex++, this.pathIndex >= this.pathPoint.length ? (this.passTime = 0, this.pathIndex = 0, this.spriteBallTranform.localPositionY = this.pathPoint[0].transform.localPositionY, this.spriteBallTranform.localPositionZ = this.pathPoint[0].transform.localPositionZ) : this.passTime = this.waitTime, this.calcBallSpeed()) : (this.spriteBallTranform.localPositionY += i, this.spriteBallTranform.localPositionZ += s)
        }
        onFire() {
            this.effectSmoke.particleSystem.play()
        }
        calcBallSpeed() {
            let t = this.pathIndex;
            if (1 == t && this.onFire(), t > 0 && t < this.pathPoint.length) {
                let e = this.pathPoint[t - 1],
                    i = this.pathPoint[t];
                this.isUseGravity = this.pathGravity[t];
                let s = this.pathTime[t],
                    n = this.gravity;
                this.moveTime = s, this.isUseGravity ? this.ballSpeedY = (i.transform.localPositionY - e.transform.localPositionY - n * s * s / 2) / s : this.ballSpeedY = (i.transform.localPositionY - e.transform.localPositionY) / s, this.ballSpeedZ = (i.transform.localPositionZ - e.transform.localPositionZ) / s
            } else this.ballSpeedY = 0, this.ballSpeedZ = 0
        }
    }], z._name2Compent = {}, z.init();
    class q extends Laya.Script3D {
        constructor() {
            super(), this.offsetTotal = 0, this.offsetCurrentZ = 0, this.offsetCurrentY = 0, this.offsetLastTotal = 0, this.progressMax = 0, this.blockDatas = [], this.blockVisibleMax = 4, this.blockCacheMax = 3, this.blockIndexVisibleMin = 0, this.blockIndexVisibleMax = 0, this.blockIndexPlayer = -1, this.blockIndexPlayerOffset = 0, this.index2Object = {}, this.levelId = 1, this.difficulty = 0, this.playerSortList = [], this.isLoadingBlock = !1
        }
        initData() {
            this.blockIndexVisibleMin = 0, this.blockIndexVisibleMax = 0, this.offsetTotal = 0, this.offsetCurrentZ = 0, this.offsetCurrentY = 0, this.offsetLastTotal = 0, this.progressMax = 0, this.blockDatas = [], this.blockIndexPlayer = -1, this.blockIndexPlayerOffset = 0
        }
        onAwake() {}
        onEnable() {}
        onStart() {
            h.getInstance().AddMsgListener("MSG_PRINT_BLOCK_DATA", this, this.onMsgBlockData)
        }
        onUpdate() {}
        onLateUpdate() {
            this.update()
        }
        onMouseD(t) {}
        setPlayerLevelId(t) {
            for (let e = 0; e < this.playerSortList.length; e++) this.playerSortList[e].setLevelId(t)
        }
        loadLevel(t) {
            this.initData(), this.deleteBlockAll(), this.blockIndexVisibleMax = this.blockVisibleMax;
            let i = e.DATA_TEST.blocks_front;
            i && i.forEach(function(t) {
                this.addBlockId(t)
            }.bind(this)), this.setLevelId(t), (i = e.DATA_TEST.blocks_behind) && i.forEach(function(t) {
                this.addBlockId(t)
            }.bind(this)), this.setPlayerLevelId(t)
        }
        loadBlock(t) {
            this.initData(), this.deleteBlockAll(), this.blockIndexVisibleMax = this.blockVisibleMax;
            let i = e.DATA_TEST.blocks_front;
            i && i.forEach(function(t) {
                this.addBlockId(t)
            }.bind(this)), this.addBlockId(t), (i = e.DATA_TEST.blocks_behind) && i.forEach(function(t) {
                this.addBlockId(t)
            }.bind(this)), this.setPlayerLevelId(1)
        }
        loadBlockAll() {
            this.initData(), this.deleteBlockAll(), this.blockIndexVisibleMax = this.blockVisibleMax;
            let t = e.DATA_TEST.blocks_front;
            t && t.forEach(function(t) {
                this.addBlockId(t)
            }.bind(this));
            let i = a.getCfgByName("block_db");
            for (let t in i) "start" != t && "end1" != t && this.addBlockId(t);
            (t = e.DATA_TEST.blocks_behind) && t.forEach(function(t) {
                this.addBlockId(t)
            }.bind(this)), this.setPlayerLevelId(1)
        }
        onMsgBlockData() {
            this.printCurrentBlockData()
        }
        getProgress() {
            let t = this.playerTransform.localPositionZ / this.offsetLastTotal * 100;
            return t > this.progressMax && (this.progressMax = t), this.progressMax
        }
        update() {
            h.getInstance().Emit(s.MSG_GAME_PROGRESS_UPDATE, this.getProgress()), this.calcPlayerInBlockIndex(this.playerTransform.localPositionZ), this.update4LoadBlock(), this.update4PlayerRank()
        }
        update4LoadBlock() {
            this.blockIndexVisibleMin < this.blockIndexVisibleMax && this.blockIndexVisibleMin < this.blockDatas.length && (this.isLoadingBlock || (this.loadBlockByIndex(this.blockIndexVisibleMin), this.blockIndexVisibleMin++))
        }
        buildPlayerRankData() {
            let t = this.playerSortList.sort(this.sortPlayer),
                e = [];
            for (let i = 0; i < t.length; i++) {
                let s = t[i];
                s instanceof F ? e.push({
                    name: "你",
                    coin: B.getInstance()._levelCoin,
                    isMain: !0
                }) : s instanceof K && e.push({
                    name: s.getPlayerName(),
                    coin: n.random(1, 100),
                    isMain: !1
                })
            }
            return e
        }
        sortPlayer(t, e) {
            return e.getDistance() - t.getDistance()
        }
        update4PlayerRank() {
            if (!e.IS_OPNE_ROBOT) return;
            let t = null,
                i = 0,
                s = this.playerSortList[0],
                n = this.playerSortList[1],
                a = this.playerSortList[2];
            s.hideCrown(), n.hideCrown(), a.hideCrown(), t = s, s.getDistance() < n.getDistance() && (t = n, i++), t.getDistance() < a.getDistance() && (t = a), s.getDistance() < a.getDistance() && i++, t.showCrown(), B.getInstance()._playerRank = i
        }
        calcPlayerInBlockIndex(t) {
            let e = this.blockDatas.length;
            if (this.blockIndexPlayer < 0) {
                let i = 0;
                for (let s = 0; s < e; s++) {
                    if (t < (i += this.blockDatas[s].offset)) return this.blockIndexPlayer = s, void(this.blockIndexPlayerOffset = i)
                }
            } else t > this.blockIndexPlayerOffset && this.blockIndexPlayer < e - 1 && (this.blockIndexPlayer++, this.blockIndexPlayerOffset += this.blockDatas[this.blockIndexPlayer].offset, this.onPlayerBlockWalkOver())
        }
        onPlayerBlockWalkOver() {
            this.blockIndexVisibleMax++;
            let t = this.blockIndexVisibleMax - this.blockVisibleMax - this.blockCacheMax;
            t >= 0 && this.deleteBlockByIndex(t)
        }
        setLevelId(t) {
            console.log("Stage.setLevelId", t), this.levelId = t;
            let e = a.getLevelCfg(t);
            if (e) {
                var i = null;
                i = "" != e.blocks_spec4 && t % 4 == 0 ? e.blocks_spec4.trim().split(".") : e.blocks.trim().split(".");
                for (var s = 0; s < i.length; s++) this.addBlockId(i[s]);
                this.difficulty = e.difficulty
            }
        }
        addBlockId(t) {
            let e = a.getCfgByName("block_db", t);
            if (null == e) {
                let i = a.getCfgByName("block_group", t);
                if (i) {
                    let s = i.blocks.trim().split(".");
                    s && (t = n.randomItem(s), e = a.getCfgByName("block_db", t))
                } else console.error("block_group not found:", t)
            }
            e ? (this.offsetLastTotal = this.offsetTotal, this.offsetTotal += e.offset, this.blockDatas.push(e)) : console.error("Stage.addBlockId not found", t)
        }
        setPlayer(t) {
            this.playerTransform = t.nodeTransform
        }
        addSortPlayer(t) {
            this.playerSortList.push(t)
        }
        deleteBlockByIndex(t) {
            console.log("deleteBlockByIndex", t);
            let e = this.index2Object[t];
            e && e.destroy(), this.index2Object[t] = null
        }
        deleteBlockAll() {
            for (let t in this.index2Object) {
                let e = this.index2Object[t];
                e && e.destroy()
            }
            this.index2Object = {}
        }
        loadBlockByIndex(t) {
            this.isLoadingBlock = !0;
            let i = this.blockDatas[t].id;
            var s = a.getCfgByName("block_db", i);
            if (s) {
                console.log("loadBlockByIndex", t, s.key);
                let i = e.MODEL_BLOCK_DIR + s.key + ".lh";
                a.createSprite3DWithLoad(i, Laya.Handler.create(this, this.onSprite3DLoad, [s, t]))
            }
        }
        onSprite3DLoad(t, e, i) {
            this.isLoadingBlock = !1, this.onLoadBlock(i, t, e)
        }
        onLoadBlock(t, i, s) {
            e.IS_OPEN_SHADOW && n.openReceiveShadow(t, "platform"), 0 == s && n.setSpriteColorAll(t, B.getInstance().getBlockColor(), "platform");
            let o = t.getChildByName("cusorLeft"),
                r = t.getChildByName("cusorRight");
            null != o && null != r || console.log("error: block not put cusor", i.key), this.index2Object[s] = t, this.owner.addChild(t);
            let h = o.transform.localPositionY,
                l = this.offsetCurrentY - h;
            t.transform.position = new Laya.Vector3(0, l, this.offsetCurrentZ), this.offsetCurrentZ += r.transform.localPositionZ, this.offsetCurrentY += r.transform.localPositionY - h;
            var d = a.getCfgByName("block_compent", i.key);
            if (d)
                for (var c in d) {
                    var _ = d[c];
                    for (var S in _) z.addCompentToNode(t, S, c, _[S], this.difficulty)
                }
        }
        reset() {
            for (let t = 0; t < this.playerSortList.length; t++) {
                this.playerSortList[t].reset()
            }
        }
        printCurrentBlockData() {
            let t = this.blockDatas[this.blockIndexPlayer];
            t && console.log("blockData:", t)
        }
    }
    class $ extends Laya.BlinnPhongMaterial {
        constructor() {
            super(), $.initShader(), this.setShaderName($.tag)
        }
        static initShader() {
            if (!$.tag) {
                $.tag = "HeightFog";
                var t = {
                        a_Position: Laya.VertexMesh.MESH_POSITION0,
                        a_Color: Laya.VertexMesh.MESH_COLOR0,
                        a_Normal: Laya.VertexMesh.MESH_NORMAL0,
                        a_Texcoord0: Laya.VertexMesh.MESH_TEXTURECOORDINATE0,
                        a_Texcoord1: Laya.VertexMesh.MESH_TEXTURECOORDINATE1,
                        a_BoneWeights: Laya.VertexMesh.MESH_BLENDWEIGHT0,
                        a_BoneIndices: Laya.VertexMesh.MESH_BLENDINDICES0,
                        a_Tangent0: Laya.VertexMesh.MESH_TANGENT0,
                        a_MvpMatrix: Laya.VertexMesh.MESH_MVPMATRIX_ROW0,
                        a_WorldMat: Laya.VertexMesh.MESH_WORLDMATRIX_ROW0
                    },
                    e = {
                        u_Bones: Laya.Shader3D.PERIOD_CUSTOM,
                        u_DiffuseTexture: Laya.Shader3D.PERIOD_MATERIAL,
                        u_SpecularTexture: Laya.Shader3D.PERIOD_MATERIAL,
                        u_NormalTexture: Laya.Shader3D.PERIOD_MATERIAL,
                        u_AlphaTestValue: Laya.Shader3D.PERIOD_MATERIAL,
                        u_DiffuseColor: Laya.Shader3D.PERIOD_MATERIAL,
                        u_MaterialSpecular: Laya.Shader3D.PERIOD_MATERIAL,
                        u_Shininess: Laya.Shader3D.PERIOD_MATERIAL,
                        u_TilingOffset: Laya.Shader3D.PERIOD_MATERIAL,
                        u_WorldMat: Laya.Shader3D.PERIOD_SPRITE,
                        u_MvpMatrix: Laya.Shader3D.PERIOD_SPRITE,
                        u_LightmapScaleOffset: Laya.Shader3D.PERIOD_SPRITE,
                        u_LightMap: Laya.Shader3D.PERIOD_SPRITE,
                        u_CameraPos: Laya.Shader3D.PERIOD_CAMERA,
                        u_ReflectTexture: Laya.Shader3D.PERIOD_SCENE,
                        u_ReflectIntensity: Laya.Shader3D.PERIOD_SCENE,
                        u_FogStart: Laya.Shader3D.PERIOD_SCENE,
                        u_FogRange: Laya.Shader3D.PERIOD_SCENE,
                        u_FogColor: Laya.Shader3D.PERIOD_SCENE,
                        "u_DirectionLight.Color": Laya.Shader3D.PERIOD_SCENE,
                        "u_DirectionLight.Direction": Laya.Shader3D.PERIOD_SCENE,
                        "u_PointLight.Position": Laya.Shader3D.PERIOD_SCENE,
                        "u_PointLight.Range": Laya.Shader3D.PERIOD_SCENE,
                        "u_PointLight.Color": Laya.Shader3D.PERIOD_SCENE,
                        "u_SpotLight.Position": Laya.Shader3D.PERIOD_SCENE,
                        "u_SpotLight.Direction": Laya.Shader3D.PERIOD_SCENE,
                        "u_SpotLight.Range": Laya.Shader3D.PERIOD_SCENE,
                        "u_SpotLight.Spot": Laya.Shader3D.PERIOD_SCENE,
                        "u_SpotLight.Color": Laya.Shader3D.PERIOD_SCENE,
                        u_AmbientColor: Laya.Shader3D.PERIOD_SCENE,
                        u_shadowMap1: Laya.Shader3D.PERIOD_SCENE,
                        u_shadowMap2: Laya.Shader3D.PERIOD_SCENE,
                        u_shadowMap3: Laya.Shader3D.PERIOD_SCENE,
                        u_shadowPSSMDistance: Laya.Shader3D.PERIOD_SCENE,
                        u_lightShadowVP: Laya.Shader3D.PERIOD_SCENE,
                        u_shadowPCFoffset: Laya.Shader3D.PERIOD_SCENE
                    },
                    i = {
                        s_Cull: Laya.Shader3D.RENDER_STATE_CULL,
                        s_Blend: Laya.Shader3D.RENDER_STATE_BLEND,
                        s_BlendSrc: Laya.Shader3D.RENDER_STATE_BLEND_SRC,
                        s_BlendDst: Laya.Shader3D.RENDER_STATE_BLEND_DST,
                        s_DepthTest: Laya.Shader3D.RENDER_STATE_DEPTH_TEST,
                        s_DepthWrite: Laya.Shader3D.RENDER_STATE_DEPTH_WRITE
                    },
                    s = Laya.Shader3D.add($.tag, null, null, !0),
                    n = new Laya.SubShader(t, e, Laya.SkinnedMeshSprite3D.shaderDefines, Laya.BlinnPhongMaterial.shaderDefines);
                s.addSubShader(n), n.addShaderPass(Q, tt, i)
            }
        }
    }
    var Q = '#include "Lighting.glsl";\n\n    attribute vec4 a_Position;\n    \n    #ifdef GPU_INSTANCE\n        attribute mat4 a_MvpMatrix;\n    #else\n        uniform mat4 u_MvpMatrix;\n    #endif\n    \n    #if defined(DIFFUSEMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))||(defined(LIGHTMAP)&&defined(UV))\n        attribute vec2 a_Texcoord0;\n        varying vec2 v_Texcoord0;\n    #endif\n    \n    #ifdef COLOR\n        attribute vec4 a_Color;\n        varying vec4 v_Color;\n    #endif\n    \n    #if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\n        attribute vec3 a_Normal;\n        varying vec3 v_Normal; \n        uniform vec3 u_CameraPos;\n        varying vec3 v_ViewDir; \n    #endif\n    \n    #if (defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&defined(NORMALMAP)\n        attribute vec4 a_Tangent0;\n        varying vec3 v_Tangent;\n        varying vec3 v_Binormal;\n    #endif\n    \n    #if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(RECEIVESHADOW)\n        #ifdef GPU_INSTANCE\n            attribute mat4 a_WorldMat;\n        #else\n            uniform mat4 u_WorldMat;\n        #endif\n    #endif\n    varying vec3 v_PositionWorld;\n    \n    varying float v_posViewZ;\n    #ifdef RECEIVESHADOW\n      #ifdef SHADOWMAP_PSSM1 \n        varying vec4 v_lightMVPPos;\n      uniform mat4 u_lightShadowVP[4];\n      #endif\n    #endif\n    \n    #ifdef TILINGOFFSET\n        uniform vec4 u_TilingOffset;\n    #endif\n    \n    void main_castShadow()\n    {\n      #ifdef GPU_INSTANCE\n        gl_Position = a_MvpMatrix * a_Position;\n      #else\n        gl_Position = u_MvpMatrix * a_Position;\n      #endif\n      \n      //TODO没考虑UV动画呢\n      #if defined(DIFFUSEMAP)&&defined(ALPHATEST)\n        v_Texcoord0=a_Texcoord0;\n      #endif\n      v_posViewZ = gl_Position.z;\n    }\n    \n    varying float v_heightFogRatio;\n    \n    void main_normal()\n    {\n      #ifdef GPU_INSTANCE\n        gl_Position = a_MvpMatrix * a_Position;\n      #else\n        gl_Position = u_MvpMatrix * a_Position;\n      #endif\n      \n      #if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(RECEIVESHADOW)\n        mat4 worldMat;\n        #ifdef GPU_INSTANCE\n          worldMat = a_WorldMat;\n        #else\n          worldMat = u_WorldMat;\n        #endif\n      #endif\t    \n    \n        #if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\n            mat3 worldInvMat=inverse(mat3(worldMat));\n            v_Normal=a_Normal*worldInvMat;\n            #if (defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&defined(NORMALMAP)\n                v_Tangent=a_Tangent0.xyz*worldInvMat;\n                v_Binormal=cross(v_Normal,v_Tangent)*a_Tangent0.w;\n            #endif\n        #endif\n    \n        v_PositionWorld=(worldMat*a_Position).xyz;\n        v_heightFogRatio = 1.0 - clamp((v_PositionWorld.y - (-2.0)) / (-0.5 - (-2.0)), 0.0, 1.0);\n        \n        #if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\n            v_ViewDir=u_CameraPos-v_PositionWorld;\n        #endif\n    \n        #if defined(DIFFUSEMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))\n            #ifdef TILINGOFFSET\n                v_Texcoord0=TransformUV(a_Texcoord0,u_TilingOffset);\n            #else\n                v_Texcoord0=a_Texcoord0;\n            #endif\n        #endif\n    \n        #if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\n            v_Color=a_Color;\n        #endif\n    \n        #ifdef RECEIVESHADOW\n            v_posViewZ = gl_Position.w;\n            #ifdef SHADOWMAP_PSSM1 \n                v_lightMVPPos = u_lightShadowVP[0] * vec4(v_PositionWorld,1.0);\n            #endif\n        #endif\n        gl_Position=remapGLPositionZ(gl_Position);\n    }\n    \n    void main()\n    {\n      #ifdef CASTSHADOW\n        main_castShadow();\n      #else\n        main_normal();\n      #endif\n    }',
        tt = '#ifdef HIGHPRECISION\n  precision highp float;\n#else\n  precision mediump float;\n#endif\n\n#include "Lighting.glsl";\n\nuniform vec4 u_DiffuseColor;\n\n#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\n  varying vec4 v_Color;\n#endif\n\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\n  varying vec3 v_ViewDir; \n#endif\n\n#ifdef ALPHATEST\n  uniform float u_AlphaTestValue;\n#endif\n\n#ifdef DIFFUSEMAP\n  uniform sampler2D u_DiffuseTexture;\n#endif\n\n#if defined(DIFFUSEMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))\n  varying vec2 v_Texcoord0;\n#endif\n\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\n  uniform vec3 u_MaterialSpecular;\n  uniform float u_Shininess;\n  #ifdef SPECULARMAP \n      uniform sampler2D u_SpecularTexture;\n  #endif\n#endif\n\n#ifdef FOG\n  uniform float u_FogStart;\n  uniform float u_FogRange;\n  uniform vec3 u_FogColor;\n#endif\n\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\n  varying vec3 v_Normal;\n#endif\n\n#if (defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&defined(NORMALMAP)\n  uniform sampler2D u_NormalTexture;\n  varying vec3 v_Tangent;\n  varying vec3 v_Binormal;\n#endif\n\n#ifdef DIRECTIONLIGHT\n  uniform DirectionLight u_DirectionLight;\n#endif\n\n#ifdef POINTLIGHT\n  uniform PointLight u_PointLight;\n#endif\n\n#ifdef SPOTLIGHT\n  uniform SpotLight u_SpotLight;\n#endif\n\nuniform vec3 u_AmbientColor;\n\n#if defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(RECEIVESHADOW)\n  varying vec3 v_PositionWorld;\n#endif\n\n#include "ShadowHelper.glsl"\nvarying float v_posViewZ;\n#ifdef RECEIVESHADOW\n  #if defined(SHADOWMAP_PSSM2)||defined(SHADOWMAP_PSSM3)\n      uniform mat4 u_lightShadowVP[4];\n  #endif\n  #ifdef SHADOWMAP_PSSM1 \n      varying vec4 v_lightMVPPos;\n  #endif\n#endif\n\nvoid main_castShadow()\n{\n//gl_FragColor=vec4(v_posViewZ,0.0,0.0,1.0);\ngl_FragColor=packDepth(v_posViewZ);\n#if defined(DIFFUSEMAP)&&defined(ALPHATEST)\n  float alpha = texture2D(u_DiffuseTexture,v_Texcoord0).w;\n  if( alpha < u_AlphaTestValue )\n  {\n    discard;\n  }\n#endif\n}\n\nvarying float v_heightFogRatio;\n\nvoid main_normal()\n{\nvec3 globalDiffuse=u_AmbientColor;\n\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\n  vec3 normal;\n  #if (defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&defined(NORMALMAP)\n    vec3 normalMapSample = texture2D(u_NormalTexture, v_Texcoord0).rgb;\n    normal = normalize(NormalSampleToWorldSpace(normalMapSample, v_Normal, v_Tangent,v_Binormal));\n  #else\n    normal = normalize(v_Normal);\n  #endif\n  vec3 viewDir= normalize(v_ViewDir);\n#endif\n\nvec4 mainColor=u_DiffuseColor;\n\n#ifdef DIFFUSEMAP\n  vec4 difTexColor=texture2D(u_DiffuseTexture, v_Texcoord0);\n  mainColor=mainColor*difTexColor;\n#endif \n#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\n  mainColor=mainColor*v_Color;\n#endif \n\n#ifdef ALPHATEST\n  if(mainColor.a<u_AlphaTestValue)\n    discard;\n#endif\n    \nvec3 diffuse = vec3(0.0);\nvec3 specular= vec3(0.0);\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\n  vec3 dif,spe;\n  #ifdef SPECULARMAP\n    vec3 gloss=texture2D(u_SpecularTexture, v_Texcoord0).rgb;\n  #else\n    #ifdef DIFFUSEMAP\n      vec3 gloss=vec3(difTexColor.a);\n    #else\n      vec3 gloss=vec3(1.0);\n    #endif\n  #endif\n#endif\n\ngl_FragColor = mainColor;\n\nfloat weight =clamp((1.0/gl_FragCoord.w-u_FogStart)/u_FogRange,0.0,1.0); \n\nfloat lerpFact=v_heightFogRatio;\n\ngl_FragColor.rgb=mix(gl_FragColor.rgb,u_FogColor,weight);\n\ngl_FragColor.rgb=mix(gl_FragColor.rgb,u_FogColor,lerpFact);\n}\n\nvoid main()\n{\n#ifdef CASTSHADOW        \n  main_castShadow();\n#else\n  main_normal();\n#endif  \n}';
    class et {
        static wxLoadSubpackAndUnzip(t, e, i, s, n) {
            console.log("O_O 微信下载分包 开始");
            let a = Laya.Browser.window.wx;
            const o = a.loadSubpackage({
                name: t,
                success: function(t) {
                    a.getFileSystemManager().unzip({
                        zipFilePath: e,
                        targetPath: a.env.USER_DATA_PATH,
                        success: function(t) {
                            console.log("解压成功"), s && s()
                        },
                        fail: function(t) {
                            console.log("解压失败"), n && n()
                        }
                    })
                },
                fail: function(t) {
                    n && n()
                }
            });
            o && o.onProgressUpdate(t => {
                console.log("下载进度", t.progress), i && i(t.progress / 100)
            })
        }
    }
    class it {
        constructor() {
            this.percentLoad = 0, console.log("O_O SceneRace constructor"), this.init()
        }
        onAwake() {
            console.log("O_O SceneRace onAwake")
        }
        onEnable() {
            console.log("O_O SceneRace onEnable")
        }
        onDisable() {
            console.log("O_O SceneRace onDisable")
        }
        onStart() {
            console.log("O_O SceneRace onStart")
        }
        onGameResume() {
            console.log("O_O onGameResume")
        }
        onUpdate() {}
        onUpdateLate() {
            console.log("O_O onUpdateLate")
        }
        init() {
            this.envList = [], console.log("O_O init"), Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown), Laya.stage.on(Laya.Event.KEY_UP, this, this.onKeyUp), h.getInstance().AddMsgListener(s.MSG_SHOW_MSG, this, this.onMsgShowMsg), h.getInstance().AddMsgListener(s.MSG_RACE_BEGIN, this, this.onMsgRaceBegin), h.getInstance().AddMsgListener(s.MSG_RACE_END, this, this.onMsgRaceEnd), h.getInstance().AddMsgListener(s.MSG_RACE_RESTART, this, this.onMsgRaceRestart), h.getInstance().AddMsgListener(s.MSG_RACE_RESTART_BLOCK, this, this.onMsgRaceRestarBlock), h.getInstance().AddMsgListener(s.MSG_RACE_RESTART_BLOCK_ALL, this, this.onMsgRaceRestarBlockALL), this.loadUILoading()
        }
        preloadData() {
            console.log("preloadData");
            var t = [{
                url: e.RES_URL_BASE + "model/LayaScene_game/Conventional/game.ls"
            }, {
                url: e.RES_URL_BASE + e.MODEL_URL.CharacterMeat
            }, {
                url: e.RES_URL_BASE + e.MODEL_URL.StickPhysic
            }, {
                url: e.RES_URL_BASE + e.MODEL_URL.BombEffect
            }, {
                url: e.RES_URL_BASE + e.MODEL_URL.RingEffect
            }];
            let i = e.DATA_TEST.blocks_front;
            i && i.forEach(function(e) {
                a.preloadBlockById(t, e)
            }), (i = e.DATA_TEST.blocks_behind) && i.forEach(function(e) {
                a.preloadBlockById(t, e)
            }), Laya.loader.create(t, Laya.Handler.create(this, this.onComplete), Laya.Handler.create(this, this.onProgress, null, !1), null, null, null, 1, !0)
        }
        onMsgShowMsg(t) {
            this.showMessage(t)
        }
        onMsgRaceBegin() {
            x.getInstance().showMainView("game")
        }
        onMsgRaceEnd() {
            if(B.getInstance()._levelId > 1){
                ShowInterstitial();
            }
        }
        onMsgRaceRestart() {
            this.restartGame()
        }
        onMsgRaceRestarBlock(t) {
            this.randomSceneColor(), x.getInstance().showMainView("main"), this.gameStage.reset(), this.gameCamera.reset(), this.gameStage.loadBlock(t), B.getInstance().reset()
        }
        onMsgRaceRestarBlockALL() {
            this.randomSceneColor(), x.getInstance().showMainView("main"), this.gameStage.reset(), this.gameCamera.reset(), this.gameStage.loadBlockAll(), B.getInstance().reset()
        }
        showMessage(t) {}
        onComplete(t) {
            this.showMessage("");
            let i = Laya.loader.getRes(e.RES_URL_BASE + "model/LayaScene_game/Conventional/game.ls");
            this.onLoadScene(i), x.getInstance().showMainView("main")
        }
        onProgress(t) {
            h.getInstance().Emit(s.MSG_LOAD_PROGRESS, this.percentLoad + Math.floor(t * (100 - this.percentLoad)))
        }
        loadUILoading() {
            x.getInstance().loadNativePackage("res_native/fgui/loading", this, this.onUILoadingLoaded)
        }
        onUILoadingLoaded() {
            x.getInstance().showMainView("load"), Laya.Browser.onMiniGame && e.IS_USE_WX_PACK_UNZIP ? B.getInstance().isPackLoad() ? (this.percentLoad = 0, this.loadCfg()) : (this.percentLoad = 20, et.wxLoadSubpackAndUnzip("pack1", "pack1/res.zip", this.onProgressSubpack1.bind(this), this.onPackLoad1.bind(this))) : this.loadCfg()
        }
        onProgressSubpack1(t) {
            h.getInstance().Emit(s.MSG_LOAD_PROGRESS, Math.floor(10 * t))
        }
        onPackLoad1() {
            et.wxLoadSubpackAndUnzip("pack2", "pack2/model.zip", this.onProgressSubpack2.bind(this), this.onPackLoad2.bind(this))
        }
        onProgressSubpack2(t) {
            h.getInstance().Emit(s.MSG_LOAD_PROGRESS, 10 + Math.floor(10 * t))
        }
        onPackLoad2() {
            B.getInstance().markPackLoad(), this.loadCfg()
        }
        loadCfg() {
            a.loadAllCfg(this.loadUI.bind(this))
        }
        loadUI() {
            x.getInstance().loadPackage("res/fgui/ui_race", this, this.onUILoaded)
        }
        onUILoaded() {
            this.preloadData()
        }
        onLoadScene(t) {
            var i = Laya.stage.addChild(t);
            Laya.stage.setChildIndex(i, 0);
            var s = t.addComponent(q),
                o = t.getChildByName("CameraRoot"),
                r = t.getChildByName("Directional_Light");
            e.IS_OPEN_SHADOW && (r.shadow = !0, r.shadowDistance = 1, r.shadowResolution = 1024, r.shadowPSSMCount = 1, r.shadowPCFType = 3, n.openReceiveShadow(t.getChildByName("StoreScene")));
            var h = t.getChildByName("Character"),
                l = null,
                d = null;
            e.IS_OPNE_ROBOT && (l = h.clone(), d = h.clone(), l.transform.position = new Laya.Vector3(0, 0, 0), d.transform.position = new Laya.Vector3(-h.transform.position.x, 0, 0), t.addChild(l), t.addChild(d));
            var c = h.addComponent(F),
                _ = o.addComponent(V);
            _.setTarget(h), this.gameCamera = _;
            let S = t.getChildByName("Plane");
            e.DEAD_PLANE_Y = S.transform.localPositionY, S.active = !1, this.camera = _.camera, this.scene3d = t, this.player = h, c.setSceneRace(t);
            let I = t.getChildByName("StoreCharacerPoint");
            c.positionStore = I.transform.position.clone(), c.rotationStore = I.transform.rotationEuler.clone();
            let g = this.scene3d.getChildByName("CharacterMeat");
            c.setMeat(g);
            let u = e.STICK_JUMP_PATH;
            if (c.setStickJumpPath(u), s.setPlayer(c), s.addSortPlayer(c), c.setSkinColor(e.PLAYER_SKIN_COLOR[0]), e.IS_OPNE_ROBOT) {
                var L = l.addComponent(K),
                    m = d.addComponent(K);
                m.createPlayerNameUI(this.camera), L.createPlayerNameUI(this.camera), L.setPlayerName(a.getRandAIName()), m.setPlayerName(a.getRandAIName()), L.setSceneRace(t), L.setMeat(g), L.setStickJumpPath(u), L.setTargetPlayer(c), L.setRandomSkinColorIndex(1, 2), L.randomSkinColor(), m.setSceneRace(t), m.setMeat(g), m.setStickJumpPath(u), m.setTargetPlayer(c), m.setRandomSkinColorIndex(3, 4), m.randomSkinColor(), s.addSortPlayer(L), s.addSortPlayer(m)
            }
            this.gameStage = s, n.fogOpen(this.scene3d, 0, 20), n.fogColor(this.scene3d, this.camera, "66d5d4");
            let p = t.getChildByName("volcano_env");
            n.applyShader(p, $), this.envList.push(p.getChildByName("N_Rock_env_01")), this.envList.push(p.getChildByName("N_town_env")), this.envList.push(p.getChildByName("N_Tree_env_01")), this.scene3d.physicsSimulation.gravity = new Laya.Vector3(0, -1, 0), this.scene3d.physicsSimulation.fixedTimeStep = 1 / 30, this.randomSceneColor(), this.gameStage.loadLevel(B.getInstance().getLevelId()), B.getInstance().setStage(s)
        }
        randomSceneColor() {
            let t = e.SCENE_COLOR_ARRAY[n.random(0, e.SCENE_COLOR_ARRAY.length - 1)];
            n.fogColor(this.scene3d, this.camera, t.Frog), B.getInstance().setBlockColor(t.Block), this.showEnv(t.EnvId, t.EnvColor)
        }
        showEnv(t, e) {
            for (let i = 0; i < this.envList.length; i++) t == i ? (this.envList[i].active = !0, e && n.setSpriteColorAll(this.envList[i], e)) : this.envList[i].active = !1
        }
        testPhysic(t) {
            let e = t.getChildByName("BowlingPin"),
                i = t.getChildByName("Box").getComponent(Laya.Rigidbody3D);
            i && (i.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1, i.linearDamping = 1), (i = e.getComponent(Laya.Rigidbody3D)) && (i.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1, i.linearDamping = 1)
        }
        onMouseDown(t) {}
        restartGame() {
            this.randomSceneColor(), L.getInstance().createBanner(), x.getInstance().showMainView("main"), this.gameStage.reset(), this.gameCamera.reset(), this.gameStage.loadLevel(B.getInstance().getLevelId()), B.getInstance().reset()
        }
        onKeyDown(t) {
            return;
            switch (t.keyCode) {
                case Laya.Keyboard.I:
                    this.gameStage.printCurrentBlockData();
                    break;
                case Laya.Keyboard.R:
                    x.getInstance().showMainView("revive");
                    break;
                case Laya.Keyboard.D:
                    x.getInstance().openDebug();
                    break;
                case Laya.Keyboard.N:
                    B.getInstance().levelCompelete(), this.restartGame();
                    break;
                case Laya.Keyboard.B:
                    x.getInstance().showMainView("openbox");
                    break;
                case Laya.Keyboard.C:
                    x.getInstance().showMainView("endbox");
                    break;
                case Laya.Keyboard.V:
                    x.getInstance().showMainView("endskin");
                    break;
                case Laya.Keyboard.P:
                    B.getInstance().isPauseGame() ? B.getInstance().resumeGame() : B.getInstance().pauseGame();
                    break;
                case Laya.Keyboard.G:
                    x.getInstance().showView("guide")
            }
        }
        onKeyUp(t) {}
        testRayCast() {
            var t = this.camera,
                e = new Laya.Ray(new Laya.Vector3, new Laya.Vector3),
                i = new Laya.HitResult;
            t.viewportPointToRay(new Laya.Vector2(Laya.stage.mouseX, Laya.stage.mouseY), e), this.scene3d.physicsSimulation.rayCast(e, i, 300), console.log("屏幕射线碰撞测试", e, i)
        }
        testRoleRayCast() {
            var t = this.player.transform.position.clone();
            t.y = .01;
            var e = new Laya.Ray(t, new Laya.Vector3(0, -1, 0)),
                i = new Laya.HitResult;
            this.scene3d.physicsSimulation.rayCast(e, i, 300), console.log("角色射线碰撞测试", e, i)
        }
    }
    new class {
        constructor() {
            var ua = window.navigator.userAgent;
            var isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if(isiOS){
                Config.useWebGL2=!1;
            }
            window.Laya3D ? Laya3D.init(t.width, t.height) : Laya.init(t.width, t.height, Laya.WebGL), Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable();
            let i = t.height / t.width,
                s = Laya.Browser.height / Laya.Browser.width;
            if (e.IS_LONG_SCREEN = s >= 2, console.log("O_O screen", Laya.Browser.height, Laya.Browser.width, Laya.Browser.height / Laya.Browser.width), Laya.stage.scaleMode = s < i ? "fixedheight" : t.scaleMode, Laya.stage.screenMode = t.screenMode, Laya.stage.alignV = t.alignV, Laya.stage.alignH = t.alignH, Laya.URL.exportSceneToJson = t.exportSceneToJson, (t.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), t.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), t.stat && Laya.Stat.show(), Laya.alertGlobalError = !0, Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION), Laya.stage.frameRate = Laya.Stage.FRAME_FAST, Laya.Browser.onMiniGame) {
                let t = Laya.Browser.window.wx;
                t && e.IS_USE_WX_PACK_UNZIP && (e.RES_URL_BASE = t.env.USER_DATA_PATH + "/")
            }
            L.getInstance().init(), console.log("log-------PlatformMgr.init-----------"), T.init(), T.initVideoAd(), T.initNativeAd()
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded))
        }
        onConfigLoaded() {
            Laya.stage.addChild(fgui.GRoot.inst.displayObject), new it
        }
    }
}();
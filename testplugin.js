//=============================================================================
// testplugin.js	2020/05/20
// The MIT License (MIT)
//=============================================================================

/*:
 * @module hello
 * @plugindesc プラグイン作成テスト
 * @author Tsutomu katayama
 * @param アクター名の後にIDを表示
 * @desc アクター名のあとにIDを表示する(0:OFF 1:ON)
 * @default 1
 * @help このプラグインはテスト用なので現状プラグインコマンドはありません。
 * 
 */

(function(_global) {
    var N = 'RTK_Test';
    var param = PluginManager.parameters(N);
    var show_id = Number(param['アクター名の後にIDを表示'])||0;

    var _Game_Actor_name = Game_Actor.prototype.name;
    Game_Actor.prototype.name = function() {
        var ret = _Game_Actor_name.apply(this, arguments);
        if (show_id) {
            return ret + ":" + this.actorId();
        } else {
            return ret;          
        }
    };

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        var ret = _Game_Interpreter_pluginCommand.apply(this, arguments);
        if (command == N) {
            if (args[0] == "show_id") {
                if (args[1] == "on") {
                    show_id = 1;
                } else if (args[1] == "off") {
                    show_id = 0;
                }
            }
        }
        return ret;
    };
})(this);

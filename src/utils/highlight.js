/**
 * create by sxf on 2019/2/26.
 * 功能:
 */

import Vue from 'vue'
import Hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

let Highlight = {};
Highlight.install = function (Vue, options) {
    Vue.directive('highlightjson',{
        inserted:function (el) {
            let blocks = el.querySelectorAll('pre code');
            for (var i = 0; i < blocks.length; i++) {
                var item = blocks[i];
                Hljs.highlightBlock(item);
            }
        },
        componentUpdated:function (el) {
            let blocks = el.querySelectorAll('pre code');
            for (var i = 0; i < blocks.length; i++) {
                var item = blocks[i];
                Hljs.highlightBlock(item);
            }
        }
    })
};


export default Highlight;
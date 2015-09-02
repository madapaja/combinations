(function() {
  var Combinations = require('./src/combinations');
  var m = require('mithril');
  var combination = {};

  combination.vm = (function() {
    var vm = {
      init: function() {
        vm.data = new Array();

        vm.add = function() {
          vm.data.push(m.prop(''));
          return false;
        };

        vm.remove = function() {
          vm.data.pop();
          return false;
        };

        vm.generate = function() {
          var combi = Combinations(vm.data.map(function(section) { return section().split('\n').filter(function(e) { return e.trim() !== ''}); }));
          vm.combinations(combi.generate().map(function(combi) { return combi.join('\t'); }).join('\n'));

          return false;
        };

        vm.combinations = m.prop('');

        vm.add();
        vm.add();
      }
    };

    return vm;
  })();

  combination.controller = function() {
    combination.vm.init();
  };

  combination.view = function() {
    return m('form.pure-form', [
      m('h3', '元となる要素を一行に一つ入力してください'),
      m('div.area', [
        combination.vm.data.map(function(data, index) {
          return m('section.item', [
            m('textarea.pure-input-1', {onchange: m.withAttr('value', data), value: data() })
          ])
        })
      ]),
      m('div.buttons', [
        m('button.pure-button', { onclick: combination.vm.add }, [m('i.fa.fa-plus'), ' 列を追加']),
        ' ',
        m('button.pure-button', { onclick: combination.vm.remove }, [m('i.fa.fa-minus'), ' 列を削除']),
        ' ',
        m('button.pure-button.pure-button-primary', { onclick: combination.vm.generate }, [m('i.fa.fa-check'), ' 生成'])
      ]),
      m('h3', '全組み合わせ結果 / ' + (combination.vm.combinations() === '' ? 0 : combination.vm.combinations().split('\n').length) + '件'),
      m('textarea.pure-input-1[readonly]', combination.vm.combinations() )
    ]);

  };

  m.mount(document.getElementById('combination'), {controller: combination.controller, view: combination.view});
})();

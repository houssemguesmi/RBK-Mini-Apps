"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: "firstForm",
    value: function firstForm() {
      ReactDOM.render(React.createElement(Form, {
        details: ["Name", "Password", "E-Mail"],
        option: this.secondForm.bind(this),
        value: "Next"
      }), document.getElementById("app"));
    }
  }, {
    key: "secondForm",
    value: function secondForm() {
      var _this2 = this;

      ReactDOM.render(React.createElement(Waiting, null), document.getElementById("app"));
      setTimeout(function () {
        ReactDOM.render(React.createElement(Form, {
          details: ["Line1", "Line2", "City", "State", "Zip-Code", "Phone-Number"],
          option: _this2.lastForm.bind(_this2),
          value: "Next"
        }), document.getElementById("app"));
      }, 1);
    }
  }, {
    key: "checkout",
    value: function checkout() {
      ReactDOM.render(React.createElement(Purchase, null), document.getElementById("app"));
    }
  }, {
    key: "lastForm",
    value: function lastForm() {
      var _this3 = this;

      ReactDOM.render(React.createElement(Waiting, null), document.getElementById("app"));
      setTimeout(function () {
        ReactDOM.render(React.createElement(Form, {
          details: ["CreditCard-Number", "Expiry Date", "CVC", "BillingZip-Code"],
          option: _this3.checkout.bind(_this3),
          value: "Checkout"
        }), document.getElementById("app"));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(Button, { option: this.firstForm.bind(this), value: "Start Form" });
    }
  }]);

  return App;
}(React.Component);

var Form = function (_React$Component2) {
  _inherits(Form, _React$Component2);

  function Form(props) {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        null,
        this.props.details.map(function (detail, index) {
          return React.createElement(Item, { item: detail, key: index });
        }),
        React.createElement(Button, { option: this.props.option, value: this.props.value })
      );
    }
  }]);

  return Form;
}(React.Component);

var Item = function (_React$Component3) {
  _inherits(Item, _React$Component3);

  function Item(props) {
    _classCallCheck(this, Item);

    var _this5 = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));

    _this5.state = {};
    return _this5;
  }

  _createClass(Item, [{
    key: "typing",
    value: function typing(e) {
      var value = e.target.value;
      var item = this.props.item;
      this.state[item] = value;
      console.log(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "label",
          { className: "labels" },
          this.props.item + ": "
        ),
        React.createElement("input", {
          type: "text",
          className: "inputs",
          id: this.props.item,
          onBlur: this.typing.bind(this),
          placeholder: this.props.item
        })
      );
    }
  }]);

  return Item;
}(React.Component);

var Button = function (_React$Component4) {
  _inherits(Button, _React$Component4);

  function Button(props) {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return React.createElement("input", {
        value: this.props.value,
        type: "button",
        id: "Next",
        onClick: this.props.option
      });
    }
  }]);

  return Button;
}(React.Component);

var Purchase = function (_React$Component5) {
  _inherits(Purchase, _React$Component5);

  function Purchase(props) {
    _classCallCheck(this, Purchase);

    return _possibleConstructorReturn(this, (Purchase.__proto__ || Object.getPrototypeOf(Purchase)).call(this, props));
  }

  _createClass(Purchase, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          { id: "result" },
          "Purchase Done"
        )
      );
    }
  }]);

  return Purchase;
}(React.Component);

var Waiting = function (_React$Component6) {
  _inherits(Waiting, _React$Component6);

  function Waiting(props) {
    _classCallCheck(this, Waiting);

    var _this8 = _possibleConstructorReturn(this, (Waiting.__proto__ || Object.getPrototypeOf(Waiting)).call(this, props));

    console.log("waiting");
    return _this8;
  }

  _createClass(Waiting, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          { id: "result" },
          "Wait Please!"
        )
      );
    }
  }]);

  return Waiting;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwiUmVhY3RET00iLCJyZW5kZXIiLCJzZWNvbmRGb3JtIiwiYmluZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRUaW1lb3V0IiwibGFzdEZvcm0iLCJjaGVja291dCIsImZpcnN0Rm9ybSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsImRldGFpbHMiLCJtYXAiLCJkZXRhaWwiLCJpbmRleCIsIm9wdGlvbiIsInZhbHVlIiwiSXRlbSIsInN0YXRlIiwiZSIsInRhcmdldCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwidHlwaW5nIiwiQnV0dG9uIiwiUHVyY2hhc2UiLCJXYWl0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxxR0FDWEEsS0FEVztBQUVsQjs7OztnQ0FDVztBQUNWQyxlQUFTQyxNQUFULENBQ0Usb0JBQUMsSUFBRDtBQUNFLGlCQUFTLENBQUMsTUFBRCxFQUFTLFVBQVQsRUFBcUIsUUFBckIsQ0FEWDtBQUVFLGdCQUFRLEtBQUtDLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBRlY7QUFHRSxlQUFNO0FBSFIsUUFERixFQU1FQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBTkY7QUFRRDs7O2lDQUNZO0FBQUE7O0FBQ1hMLGVBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsT0FBRCxPQUFoQixFQUE2QkcsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUE3QjtBQUNBQyxpQkFBVyxZQUFNO0FBQ2ZOLGlCQUFTQyxNQUFULENBQ0Usb0JBQUMsSUFBRDtBQUNFLG1CQUFTLENBQ1AsT0FETyxFQUVQLE9BRk8sRUFHUCxNQUhPLEVBSVAsT0FKTyxFQUtQLFVBTE8sRUFNUCxjQU5PLENBRFg7QUFTRSxrQkFBUSxPQUFLTSxRQUFMLENBQWNKLElBQWQsQ0FBbUIsTUFBbkIs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WixFQUFtQjtBQUFBOztBQUFBLCtHQUNYQSxLQURXO0FBRWxCOzs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxJQUFHLFFBQU47QUFBQTtBQUFBO0FBREYsT0FERjtBQUtEOzs7O0VBVm9CVyxNQUFNQyxTOztJQWF2QmtCLE87OztBQUNKLG1CQUFZOUIsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1IQUNYQSxLQURXOztBQUVqQnlCLFlBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBRmlCO0FBR2xCOzs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxJQUFHLFFBQU47QUFBQTtBQUFBO0FBREYsT0FERjtBQUtEOzs7O0VBWG1CZixNQUFNQyxTOztBQWM1QlgsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCRyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcbiAgZmlyc3RGb3JtKCkge1xyXG4gICAgUmVhY3RET00ucmVuZGVyKFxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIGRldGFpbHM9e1tcIk5hbWVcIiwgXCJQYXNzd29yZFwiLCBcIkUtTWFpbFwiXX1cclxuICAgICAgICBvcHRpb249e3RoaXMuc2Vjb25kRm9ybS5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHZhbHVlPVwiTmV4dFwiXHJcbiAgICAgIC8+LFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKVxyXG4gICAgKTtcclxuICB9XHJcbiAgc2Vjb25kRm9ybSgpIHtcclxuICAgIFJlYWN0RE9NLnJlbmRlcig8V2FpdGluZyAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIFJlYWN0RE9NLnJlbmRlcihcclxuICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgZGV0YWlscz17W1xyXG4gICAgICAgICAgICBcIkxpbmUxXCIsXHJcbiAgICAgICAgICAgIFwiTGluZTJcIixcclxuICAgICAgICAgICAgXCJDaXR5XCIsXHJcbiAgICAgICAgICAgIFwiU3RhdGVcIixcclxuICAgICAgICAgICAgXCJaaXAtQ29kZVwiLFxyXG4gICAgICAgICAgICBcIlBob25lLU51bWJlclwiLFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAgIG9wdGlvbj17dGhpcy5sYXN0Rm9ybS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgdmFsdWU9XCJOZXh0XCJcclxuICAgICAgICAvPixcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKVxyXG4gICAgICApO1xyXG4gICAgfSwgMSk7XHJcbiAgfVxyXG4gIGNoZWNrb3V0KCkge1xyXG4gICAgUmVhY3RET00ucmVuZGVyKDxQdXJjaGFzZSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xyXG4gIH1cclxuICBsYXN0Rm9ybSgpIHtcclxuICAgIFJlYWN0RE9NLnJlbmRlcig8V2FpdGluZyAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIFJlYWN0RE9NLnJlbmRlcihcclxuICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgZGV0YWlscz17W1xyXG4gICAgICAgICAgICBcIkNyZWRpdENhcmQtTnVtYmVyXCIsXHJcbiAgICAgICAgICAgIFwiRXhwaXJ5IERhdGVcIixcclxuICAgICAgICAgICAgXCJDVkNcIixcclxuICAgICAgICAgICAgXCJCaWxsaW5nWmlwLUNvZGVcIixcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgICBvcHRpb249e3RoaXMuY2hlY2tvdXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgIHZhbHVlPVwiQ2hlY2tvdXRcIlxyXG4gICAgICAgIC8+LFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8QnV0dG9uIG9wdGlvbj17dGhpcy5maXJzdEZvcm0uYmluZCh0aGlzKX0gdmFsdWU9XCJTdGFydCBGb3JtXCIgLz47XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAge3RoaXMucHJvcHMuZGV0YWlscy5tYXAoKGRldGFpbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8SXRlbSBpdGVtPXtkZXRhaWx9IGtleT17aW5kZXh9IC8+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxCdXR0b24gb3B0aW9uPXt0aGlzLnByb3BzLm9wdGlvbn0gdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xyXG4gIH1cclxuICB0eXBpbmcoZSkge1xyXG4gICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBsZXQgaXRlbSA9IHRoaXMucHJvcHMuaXRlbTtcclxuICAgIHRoaXMuc3RhdGVbaXRlbV0gPSB2YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbHNcIj57YCR7dGhpcy5wcm9wcy5pdGVtfTogYH08L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRzXCJcclxuICAgICAgICAgIGlkPXt0aGlzLnByb3BzLml0ZW19XHJcbiAgICAgICAgICBvbkJsdXI9e3RoaXMudHlwaW5nLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5pdGVtfVxyXG4gICAgICAgID48L2lucHV0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBpZD1cIk5leHRcIlxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub3B0aW9ufVxyXG4gICAgICA+PC9pbnB1dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBQdXJjaGFzZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cCBpZD1cInJlc3VsdFwiPlB1cmNoYXNlIERvbmU8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFdhaXRpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICBjb25zb2xlLmxvZyhcIndhaXRpbmdcIik7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHAgaWQ9XCJyZXN1bHRcIj5XYWl0IFBsZWFzZSE8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XHJcbiJdfQ==
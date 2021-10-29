import React, { Component } from "react";

export default class MenuLanguage extends Component {
  render() {
    return (
      <div className="flex btn-lang">
        <div className="flex flex-column w-1/3">
          <a className="active">English</a>
          <a>Deutsch</a>
          <a>Español</a>
          <a>Français</a>
          <a>Bahasa Indonesia</a>
          <a>Italiano</a>
        </div>
        <div className="flex flex-column w-1/3">
          <a>日本語</a>
          <a>한국어</a>
          <a>Nederlands</a>
          <a>Polski</a>
          <a>Português</a>
          <a>Română</a>
        </div>
        <div className="flex flex-column w-1/3">
          <a>Русский</a>
          <a>ภาษาไทย</a>
          <a>Türkçe</a>
          <a>中文(简体)</a>
          <a>中文(繁體)</a>
        </div>
      </div>
    );
  }
}

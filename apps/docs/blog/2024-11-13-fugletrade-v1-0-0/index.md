---
slug: 2024/11/13/fugletrader-v1-0-0
title: FugleTrader v1.0.0
authors: [kevin.wang]
tags: [fugletrader, release]
---

我們很高興宣布 **FugleTrader v1.0.0** 正式發佈！在這次版本更新中，我們加入了強大的多平台通知功能，讓使用者能夠依需求選擇適合的通知服務，包括 LINE Bot、Telegram Bot 和 Discord Bot，進一步提升了 FugleTrader 的靈活性和可用性。以下是此次版本的主要更新內容。

<!--truncate-->

## 版本亮點

### API 新增多平台通知模組

隨著 LINE Notify 宣布將於 2025 年 4 月 [結束服務](https://notify-bot.line.me/closing-announce)，LINE 官方建議開發者改用 LINE Messaging API 作為替代方案。為了確保 FugleTrader 的通知功能能夠持續運行，我們在本次更新中推出了多平台通知模組，使用者可以選擇 LINE Bot、Telegram Bot 或 Discord Bot 作為新的通知平台，以便接收 FugleTrader 的主動回報通知。

* **LINE Bot 支援**  
  為配合 LINE Notify 停止服務的政策，我們新增了 LINE Bot 支援，使用者只需在設定中啟用此功能，即可繼續透過 LINE 接收通知，隨時掌握交易狀況。

* **Telegram Bot 支援**  
  為了提供更多選擇，我們加入了 Telegram Bot 作為另一種通知方式，讓使用者透過 Telegram Bot 即時獲取交易通知。

* **Discord Bot 支援**  
  為了滿足不同平台偏好的使用者，FugleTrader 現在也支援透過 Discord Bot 發送通知，讓使用者可以在 Discord 上接收 FugleTrader 的通知。

### 可選擇性啟用通知服務

FugleTrader 新增了更彈性的通知服務設定，允許使用者依需求選擇想要啟用的通知服務。只需完成 Bot 設定並啟用通知服務，即可按您偏好的方式接收市場資訊和交易通知。

## 結語

隨著 LINE Notify 的服務即將結束，我們相信這次多平台通知功能的更新，能幫助您順利過渡，並繼續享受 FugleTrader 的便捷功能。感謝您對 FugleTrader 的支持，未來我們將持續優化並推出更多功能，期待您的反饋和建議！

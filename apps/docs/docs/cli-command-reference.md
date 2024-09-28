---
sidebar_position: 4
---

# CLI 指令參考

## fugletrader trade

委託下單。

```bash
fugletrader place [options]
fugletrader trade [options]
```

| Option                   | Description |
| ------------------------ | ------------|
| `-s, --symbol [string]`  | 股票代號 |

## fugletrader relace

修改進行中的委託單。

```bash
fugletrader replace [options] 
```

| Option          | Description |
| ----------------| ------------|
| `-i, --id [string]` | 委託書號 |

## fugletrader cancel

取消進行中的委託單。

```bash
fugletrader cancel [options] 
```

| Option              | Description |
| --------------------| ------------|
| `-i, --id [string]` | 委託書號 |

## fugletrader orders

顯示現有的委託單。

```bash
fugletrader orders
```

## fugletrader transactions

顯示交易紀錄。

```bash
fugletrader transactions [options] 
fugletrader tx [options] 
```

| Option                        | Description |
| ----------------------------- | ------------|
| `-d, --duration [duration]`   | 期間 |
| `-start, --start-date [date]` | 開始日期 |
| `-end, --end-date [date]`     | 結束日期 |

## fugletrader inventories

顯示庫存損益。

```bash
fugletrader inventories
fugletrader positions
```

## fugletrader settlements

顯示交割資訊。

```bash
fugletrader settlements
```

## fugletrader balance

顯示銀行餘額。

```bash
fugletrader balance
```

## fugletrader webhook

設定 Webhook。

```bash
fugletrader webhook [options]
```

## fugletrader config

設定配置變數。

```bash
fugletrader config
```

## fugletrader help

顯示幫助資訊。

```bash
fugletrader config
```

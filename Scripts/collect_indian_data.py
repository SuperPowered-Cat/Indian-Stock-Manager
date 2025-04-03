import os
import pandas as pd
import yfinance as yf

def main():
    # -----------------------------
    # 1) Choose date range & symbols
    # -----------------------------
    start_date = "2018-01-02"
    end_date   = "2020-01-31"
    # NSE stocks on yfinance need the ".NS" suffix
    symbols = ["RELIANCE.NS", "TCS.NS", "INFY.NS"]

    # -----------------------------
    # 2) Create output folder
    # -----------------------------
    # We'll store raw CSVs in qlib/data/india_csv/
    output_dir = os.path.join("data", "india_csv")
    os.makedirs(output_dir, exist_ok=True)

    # -----------------------------
    # 3) Fetch data & save as CSV
    # -----------------------------
    for symbol in symbols:
        print(f"Collecting data for {symbol} from {start_date} to {end_date}...")
        df = yf.download(symbol, start=start_date, end=end_date)

        if df.empty:
            print(f"No data found for {symbol} from {start_date} to {end_date}.")
            continue

        # Rename columns to match Qlib's preferred naming
        df.rename(
            columns={
                "Open": "open",
                "High": "high",
                "Low": "low",
                "Close": "close",
                "Volume": "volume"
            },
            inplace=True
        )

        # Insert a 'symbol' column and remove the ".NS" suffix for saving
        df["symbol"] = symbol.replace(".NS", "")
        
        # Reset the index to get a "date" column
        df.index = df.index.rename("date")
        df.reset_index(inplace=True)

        # Keep only the essential columns: symbol, date, open, high, low, close, volume
        df = df[["symbol", "date", "open", "high", "low", "close", "volume"]]

        # Save each symbol to a separate CSV file
        csv_path = os.path.join(output_dir, f"{symbol.replace('.NS', '')}.csv")
        df.to_csv(csv_path, index=False)
        print(f"Saved: {csv_path}")

if __name__ == "__main__":
    main()

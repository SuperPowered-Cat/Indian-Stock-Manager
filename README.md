# Indian Stock Manager

A powerful machine learning-based tool for predicting and managing Indian stock market investments using QLib framework with advanced models including LGBMBoost, CatBoost, and SFM (State Frequency Memory).

## 📊 Features

- **Multi-model Approach**: Leverages various ML models (CatBoost, LGBM, SFM) for robust stock predictions
- **Indian Market Focus**: Specialized for top Indian stocks including HDFC, Infosys, TCS, Reliance, and Nifty50
- **Trading Strategies**: Implements signal generation, cost control, and rule-based trading strategies
- **Automated Data Pipeline**: Scripts for collecting, validating, and processing Indian stock market data
- **Interactive Notebooks**: Ready-to-use Jupyter workflows for analysis and prediction

## 🛠️ Installation

```
# Clone the repository
git clone https://github.com/SuperPowered-Cat/Indian-Stock-Manager.git
cd Indian-Stock-Manager

# Install dependencies
pip install -r requirements.txt

# Setup data collection
python Scripts/collect_indian_data.py
```

## 📚 Dependencies

- Python 3.7+
- QLib
- LightGBM
- CatBoost
- PyTorch
- pandas
- numpy
- matplotlib
- Jupyter

## 🚀 Quick Start

```
# Sample code to run prediction with CatBoost model
from qlib.workflow import R
from qlib.contrib.model.gbdt import CatBoostModel
import configs.catboost_model as model_config

# Initialize QLib with Indian market data
qlib.init(provider_uri="Data/india_bin4")

# Create and train model
model = CatBoostModel(**model_config.CATBOOST_PARAMS)
model.fit(dataset)

# Generate predictions
pred = model.predict(dataset)
```

## 📁 Project Structure

### Configs
Configuration files for various machine learning models:
- `catboost_model.py`: CatBoost model configuration
- `double_ensemble.py`: Ensemble learning combining multiple models
- `gbdt.py`: Gradient Boosting Decision Tree implementation
- `highfreq_gdbt_model.py`: High-frequency optimized GBDT
- `pytorch_lstm_ts.py`: LSTM model for time series forecasting
- `pytorch_sfm.py`: State Frequency Memory neural network implementation
- `xgboost.py`: XGBoost model configuration

### Data
Storage for market data:
- `india_bin4/`: Preprocessed binary data in QLib format
- `india_csv2/`: Raw CSV data of Indian stocks

### Notebooks
Interactive Jupyter notebooks:
- `indian_workflow.ipynb`: End-to-end workflow for Indian stock analysis
- `sfm_indian_etc-copy1.ipynb`: SFM model experiments
- `sfm_indian_workflow.ipynb`: Complete workflow using SFM models

### Scripts
Utility scripts for data handling:
- `check_data_health.py`: Validates data integrity
- `check_dump_bin.py`: Verifies binary data dumps
- `collect_indian_data.py`: Scrapes and collects Indian stock data
- `collect_info.py`: Gathers metadata about stocks
- `dump_bin.py`: Converts CSV data to binary format

### Strategies
Trading strategy implementations:
- `cost_control.py`: Optimizes trading costs
- `order_generator.py`: Generates trading orders
- `rule_strategy.py`: Rule-based trading strategies
- `signal_strategy.py`: Trading signal generation

## 📈 Models Explained

### CatBoost
A gradient boosting library with categorical feature support, providing high accuracy for stock prediction tasks with excellent handling of market data features.

### LGBMBoost (Light Gradient Boosting Machine)
Optimized for efficiency and speed, particularly effective for large datasets with many features from technical indicators.

### SFM (State Frequency Memory)
A specialized neural network architecture that effectively captures multi-frequency patterns in time series data, particularly suited for financial market prediction.

## 🔄 Workflow Example

1. **Data Collection**: `python Scripts/collect_indian_data.py`
2. **Data Validation**: `python Scripts/check_data_health.py`
3. **Format Conversion**: `python Scripts/dump_bin.py`
4. **Model Training**: Run `Notebooks/indian_workflow.ipynb`
5. **Strategy Testing**: Implement using files in the Strategies folder.
6. **Performance Analysis**: Evaluate results and adjust models.

## 📊 Prediction Capabilities

The system is designed to predict:
- Price movements for major Indian stocks.
- Market trends using technical indicators.
- Optimal entry/exit points based on model signals.
- Risk assessment based on market conditions.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [QLib](https://github.com/microsoft/qlib) for providing the quantitative investment platform.
- [Microsoft Research Asia](https://www.microsoft.com/en-us/research/lab/microsoft-research-asia/) for SFM model research.
- The open-source community for CatBoost, LightGBM, and other libraries.

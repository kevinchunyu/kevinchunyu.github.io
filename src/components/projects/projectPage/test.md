## Trading Strategy Evaluation   
Built with: Python   
Packages used: NumPy, Pandas, Matplotlib   

Implemented three strategies: benchmark, manual, and strategy learners to experiment and compare portfolio value performances.
Obtained stock data from Yahoo Finance, utilizing adjusted close prices to develop trading strategies.

    -	Benchmark: Invested in each stock without executing any trades.
    -	Manual: Utilized three self-implemented indicators (EMA, MACD, Bollinger Bands, and Rate of Change) using NumPy and Pandas. 
                    Customized trading thresholds were applied to execute trades.
    -	Strategy: Employed a self-implemented classification-based Random Forest Learner (and Decision Tree Algorithm) to simulate trades.
    
**Project purpose:** To foster personal learning in both machine learning algorithms and Python, no specific packages (such as scikit-learn) were utilized. To evaluate the performance of a manual strategy, with that of an AI-learner to better understand its behavior and how it works relative to human-developed strategies. 

Results: Displayed the performance image on JPM and different time periods.
The findings revealed a consistently outperforming manual strategy in comparison to the benchmark. The strategy learning approach using machine learning demonstrated decent results, although it required significant expertise and hyperparameter tuning. This underscores the complexity of beating the market and the importance of thorough analysis and optimization in trading strategies.

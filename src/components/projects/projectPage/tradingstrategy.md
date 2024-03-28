## Trading Strategy Evaluation   
Built with: Python    
Packages used: NumPy, Pandas, Matplotlib   

![](https://personalprofessionaldevelopment.s3.us-west-1.amazonaws.com/insample_e1.png)

Implemented three strategies: benchmark, manual, and strategy learners to experiment and compare portfolio value performances.
Obtained stock data from Yahoo Finance, utilizing adjusted close prices to develop trading strategies.

    -	Benchmark: Invested in each stock without executing any trades (in other words, buy on the first specified day, and hold until    
    observed date).   
    -	Manual: Utilized three self-implemented indicators (EMA, MACD, Bollinger Bands, and Rate of Change) using NumPy and Pandas.    
                    Customized trading thresholds were applied to execute trades.    
    -	Strategy: Employed a self-implemented classification-based Random Forest Learner (and Decision Tree Algorithm) to simulate trades.   
    
**Project Details:**    
   - No specific machine-learning packages (scikit-learn) were used. Only used numpy and pandas to code all calculations and algorithms.    
   - Object-Oriented Programming   


**Results:** Displayed the performance image on JPM and different time periods.    
The findings revealed a consistently outperforming manual strategy in comparison to the benchmark. The strategy learning approach using machine learning demonstrated decent results, although it required significant expertise and hyperparameter tuning. This underscores the complexity of beating the market and the importance of thorough analysis and optimization in trading strategies.     

The comparison between the Benchmark Strategy versus the Manual is shown below:    

|                       | In-Sample | Out of Sample |
|-----------------------|-----------|---------------|
| **Benchmark**         |            |               |
| Cumulative Return     | 0.012325  | -0.083579     |
| Standard Deviation    | 0.017024  | 0.008492      |
| Daily Return Mean     | 0.000168  | -0.000137     |
|                       |           |               |
| **Manual Strategy**   |            |               |
| Cumulative Return     | 0.333443  | 0.219599      |
| Standard Deviation    | 0.010387  | 0.006007      |
| Daily Return Mean     | 0.000624  | 0.000412      |

   

# coding: utf-8

# In[33]:


import pandas as pd
import numpy as np


# In[36]:


file = "budget_data.csv"
df = pd.read_csv(file)
df.head()


# In[35]:


df["Date"] = pd.to_datetime(df["Date"])
x = df["Date"].min()
y = df["Date"].max()
total_time = (y - x)/np.timedelta64(1, 'M')
total_time


# In[39]:


# profit and losses over the course of the data
profit = df["Profit/Losses"].sum()
profit


# In[40]:


# average profit per month
avg_profit = profit / total_time
avg_profit


# In[41]:


max_profit = df.loc[df["Profit/Losses"].idxmax()]
max_profit


# In[43]:


min_profit = df.loc[df["Profit/Losses"].idxmin()]
min_profit


# In[48]:


#print info
print("Total months:" + str(total_time),
      "Total:" + str(profit),
      "AVerage Change:" + str(avg_profit),
      "Greatest Increase in profits:" + str(max_profit),
      "Greatest Decrease in profits" + str(min_profit), sep="\n")


# In[56]:


text_file = open("output.txt", "w")
text_file.write("Total months: {total_time} Total: {profit} \n Average Change: {avg_profit} \n Greatest Increase in profits: {max_profit} \n Greatest Decrease in profits {min_profit}")
text_file.close()


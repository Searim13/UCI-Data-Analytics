
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np


# In[2]:


file = "election_data.csv"
df = pd.read_csv(file)
df.head()


# In[4]:


#total number of votes
total = len(df.index)
total


# In[12]:


#list of candidates who received votes
candidates = list(df["Candidate"].unique())
candidates


# In[21]:


candidates_votes = df["Candidate"].value_counts()
candidates_votes


# In[29]:


k_votes = candidates_votes["Khan"]/total
k_votes = k_votes * 100
c_votes = candidates_votes["Correy"]/total
c_votes = c_votes * 100
l_votes = candidates_votes["Li"]/total
l_votes = l_votes * 100
o_votes = candidates_votes["O'Tooley"]/total
o_votes = o_votes * 100


# In[41]:


print("Total Votes:" + str(total),
     "Khan: %" + str(k_votes), 
      "Correy: %" + str(c_votes),
      "Li: %" + str(l_votes),
      "O'Tooley: %" + str(o_votes),
      "Winner: Khan",sep = "\n")


# In[43]:


text_file = open("output.txt", "w")
text_file.write("Total votes: {total} \n Khan: {k_votes} \n Correy: {c_vote} \n Li: {l_votes} \n O'Tooley {o_votes} \n Winner: Khan")
text_file.close()


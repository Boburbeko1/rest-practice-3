```sql
CREATE TABLE topics(
  id SERIAL PRIMARY KEY,
  name VARCHAR(16)
);


```
```sql
CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  topic_id INT,
  title VARCHAR(16),
  content VARCHAR(32),
  date VARCHAR(16)
);



```
# Team_task
A website for manager Task in team
![image](https://user-images.githubusercontent.com/67876027/188825774-184a6d82-e6fd-4b57-ade0-600bd6adfc0a.png)
![image](https://user-images.githubusercontent.com/67876027/188825958-bdb1f088-6930-4897-a9ea-8a7def253f98.png)
### Data base setup (mysq)

---

 **Data base tree**

```plaintext
teamtask
-user ( 
 ​  ​`​id​`​ ​int​(​11​) ​NOT NULL​ PRIMARY-KEY​, 
 ​  ​`​username​`​ ​varchar​(​150​) ​NOT NULL​, 
 ​  ​`​password​`​ ​varchar​(​150​)  NOT NULL​, 
 ​  ​`​teams_id​`​ ​text​ ​NOT NULL​, 
 ​  ​`​notifications​`​ ​text​ ​NOT NULL)
 
 -teams (  
 ​  ​`​id​`​ ​int​(​11​) ​NOT NULL PRIMARY-KEY​, 
 ​  ​`​admin_id​`​ ​int​(​11​) ​NOT NULL​, 
 ​  ​`​name​`​ ​varchar​(​250​) ​NOT NULL​, 
 ​  ​`​users_id​`​ ​text​ ​NOT NULL )
 
 -teams_tasks (  
 ​  ​`​id​`​ ​int​(​11​) ​NOT NULL PRIMARY-KEY​, 
 ​  ​`​teams_id​`​ ​int​(​11​) ​NOT NULL​, 
 ​  ​`​task_name​`​ ​varchar​(​250​) ​NOT NULL​, 
 ​  ​`​description​`​ ​text​ ​NOT NULL​, 
 ​  ​`​maker_id​`​ ​int​(​11​) ​NOT NULL​, 
 ​  ​`​functor_id​`​ ​int​(​11​) ​NOT NULL​, 
 ​  ​`​time​`​ ​date​ ​NOT NULL​, 
 ​  ​`​status​`​ ​int​(​1​) ​NOT NULL )
```

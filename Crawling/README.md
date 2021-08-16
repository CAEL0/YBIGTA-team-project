> # Crawling
---
크게 3곳에서 크롤링을 진행했습니다.

1. [이달의 와인 - 와인21닷컴](https://www.wine21.com/13_search/monthly_list.html)
2. [와인21추천 - 와인21닷컴](https://www.wine21.com/13_search/recommend_list.html)
3. 네이버 블로그

---
* blog.csv (.xlsx)
> 네이버 블로그 포스팅을 크롤링한 결과물입니다.  
> 약 300개의 와인을 키워드로 사용했고, 약 2600개의 페이지를 크롤링했습니다.
>> Name : 검색 키워드로 사용한 와인 이름  
>> Text : 검색 결과 상위 10개 이내의 블로그 포스팅 본문
---
* blog_crawling.ipynb
> Selenium을 이용해 네이버 블로그 포스팅을 크롤링한 코드입니다.
---
* **total.csv (.xlsx)**
> 최종 데이터입니다.  
> 첫 두 행에 각각 와인 이름의 한글 표기와 영문 표기가 있고, 세 번째 행부터 와인의 정보와 크롤링 결과물이 담겨있습니다.
---
* total_concat.ipynb
> 세 개의 크롤링 결과물을 하나로 합친 코드입니다.
---
* wine_of_the_month.csv (.xlsx)
> 이달의 와인 페이지에 있는 와인 300여 종류에 대한 정보를 크롤링한 결과물입니다.
>> 
---
* wine_of_the_month_refine.ipynb
> 아아
---
* wine_recommend.csv (.xlsx)
> 아아
---
* wine_recommend_crawling1.ipynb
> 아아
---
* wine_recommend_crawling2.ipynb
> 아아
---
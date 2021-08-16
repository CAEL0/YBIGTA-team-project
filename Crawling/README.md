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
---
* blog_crawling.ipynb
> 네이버 블로그 포스팅을 크롤링한 코드입니다.
---
* **total.csv (.xlsx)**
> 최종 데이터입니다.  
> 첫 두 행에 각각 와인 이름의 한글 표기와 영문 표기가 있고, 세 번째 행부터 와인의 정보와 크롤링 결과물이 담겨있습니다.
---
* total_concat.ipynb
> 세 개의 크롤링 결과물을 하나로 합친 코드입니다.
---
* wine_of_the_month_crawling.ipynb
> 이달의 와인 페이지를 크롤링한 코드입니다.
---
* wine_of_the_month_final.csv (.xlsx)
> 이달의 와인 페이지를 크롤링한 결과물입니다.  
> 와인 300여 종류에 대한 정보가 포함돼 있습니다.
---
* wine_recommend.csv (.xlsx)
> 와인21추천 페이지를 크롤링한 결과물입니다.
---
* wine_recommend_crawling.ipynb
> 와인21추천 페이지를 크롤링한 코드입니다.
---
* wine_recommend_refine.ipynb
> 와인21추천 페이지를 크롤링한 데이터를 정제한 코드입니다.
---
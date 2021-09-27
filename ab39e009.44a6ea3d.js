(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{190:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(250)),s={id:"index-redisgraphmovies",title:"Building Movies database app using RedisGraph and NodeJS",sidebar_label:"Building Movies database app using RedisGraph and NodeJS",slug:"/howtos/redisgraphmovies"},o={unversionedId:"howtos/redisgraphmovies/index-redisgraphmovies",id:"howtos/redisgraphmovies/index-redisgraphmovies",isDocsHomePage:!1,title:"Building Movies database app using RedisGraph and NodeJS",description:"Author: Ajeet Singh Raina",source:"@site/docs/howtos/redisgraphmovies/index-redisgraphmovies.mdx",slug:"/howtos/redisgraphmovies",permalink:"/howtos/redisgraphmovies",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisgraphmovies/index-redisgraphmovies.mdx",version:"current",sidebar_label:"Building Movies database app using RedisGraph and NodeJS",sidebar:"docs",previous:{title:"How to build a Fraud Detection System using RedisGears and RedisBloom",permalink:"/howtos/frauddetection"},next:{title:"Building a Pipeline for Natural Language Processing using RedisGears",permalink:"/howtos/nlp"}},c=[{value:"Tech Stack",id:"tech-stack",children:[]},{value:"Step 1. Install the pre-requisites",id:"step-1-install-the-pre-requisites",children:[]},{value:"Step 2. Run Redismod Docker container",id:"step-2-run-redismod-docker-container",children:[]},{value:"Step 3. Run RedisInsight Docker container",id:"step-3-run-redisinsight-docker-container",children:[]},{value:"Step 4. Clone the repository",id:"step-4-clone-the-repository",children:[]},{value:"Step 5. Setting up environmental variable",id:"step-5-setting-up-environmental-variable",children:[]},{value:"Step 6. Install the dependencies",id:"step-6-install-the-dependencies",children:[]},{value:"Step 7. Run the backend server",id:"step-7-run-the-backend-server",children:[]},{value:"Step 8. Run the client",id:"step-8-run-the-client",children:[]},{value:"Step 9. Accessing the Movie app",id:"step-9-accessing-the-movie-app",children:[]},{value:"Step 10. Sign up for a new account",id:"step-10-sign-up-for-a-new-account",children:[]},{value:"Step 11. Sign-in to movie app",id:"step-11-sign-in-to-movie-app",children:[]},{value:"Step 12. Rate the movie",id:"step-12-rate-the-movie",children:[]},{value:"Step 13. View the list of rated movie",id:"step-13-view-the-list-of-rated-movie",children:[]},{value:"Step 14. View directed movie over RedisInsight",id:"step-14-view-directed-movie-over-redisinsight",children:[]},{value:"Step 15. Find movies where actor acted in.",id:"step-15-find-movies-where-actor-acted-in",children:[]},{value:"Step 16. Store a user in a database",id:"step-16-store-a-user-in-a-database",children:[]},{value:"Step 17. Find a user by username",id:"step-17-find-a-user-by-username",children:[]},{value:"How it works?",id:"how-it-works",children:[]},{value:"References",id:"references",children:[]}],d={toc:c};function b(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Author: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/ajeetsraina"}),"Ajeet Singh Raina")),Object(i.b)("p",null,"IMDb(Internet Movie Database) is the world's most popular and authoritative source for information on movies, TV shows and celebrities. This application is an IMDB clone with basic account authentication and movie recommendation functionality. You will learn the power of RedisGraph and NodeJS to build a simple movie database."),Object(i.b)("p",null,Object(i.b)("img",{alt:"moviedb",src:a(689).default})),Object(i.b)("h3",{id:"tech-stack"},"Tech Stack"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Frontend - React"),Object(i.b)("li",{parentName:"ul"},"Backend - Node.js, Redis, RedisGraph")),Object(i.b)("h3",{id:"step-1-install-the-pre-requisites"},"Step 1. Install the pre-requisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Node - v13.14.0+"),Object(i.b)("li",{parentName:"ul"},"NPM - v7.6.0+")),Object(i.b)("h3",{id:"step-2-run-redismod-docker-container"},"Step 2. Run Redismod Docker container"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," docker run -d -p 6379:6379 redislabs/redismod\n")),Object(i.b)("p",null,"Ensure that Docker container is up and running:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' docker ps\n CONTAINER ID   IMAGE                           COMMAND                  CREATED             STATUS             PORTS                    NAMES\n fd5ef30f025a   redislabs/redismod              "redis-server --load\u2026"   2 hours ago         Up 2 hours         0.0.0.0:6379->6379/tcp   nervous_buck\n')),Object(i.b)("h3",{id:"step-3-run-redisinsight-docker-container"},"Step 3. Run RedisInsight Docker container"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," docker run -d -v redisinsight:/db -p 8001:8001 redislabs/redisinsight:latest\n")),Object(i.b)("p",null,"Ensure that Docker container is up and runnig"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' docker ps\n CONTAINER ID   IMAGE                           COMMAND                  CREATED             STATUS             PORTS                    NAMES\n 264db1706dcc   redislabs/redisinsight:latest   "bash ./docker-entry\u2026"   About an hour ago   Up About an hour   0.0.0.0:8001->8001/tcp   angry_shirley\n fd5ef30f025a   redislabs/redismod              "redis-server --load\u2026"   2 hours ago         Up 2 hours         0.0.0.0:6379->6379/tcp   nervous_buck\n')),Object(i.b)("h3",{id:"step-4-clone-the-repository"},"Step 4. Clone the repository"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/redis-developer/basic-redisgraph-movie-demo-app-nodejs\n")),Object(i.b)("h3",{id:"step-5-setting-up-environmental-variable"},"Step 5. Setting up environmental variable"),Object(i.b)("p",null,"Copy .env.sample to .env and add the below details: "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'  REDIS_ENDPOINT_URL = "Redis server URI"\n  REDIS_PASSWORD = "Password to the server"\n')),Object(i.b)("h3",{id:"step-6-install-the-dependencies"},"Step 6. Install the dependencies"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," npm install\n")),Object(i.b)("h3",{id:"step-7-run-the-backend-server"},"Step 7. Run the backend server"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," node app.js\n")),Object(i.b)("h3",{id:"step-8-run-the-client"},"Step 8. Run the client"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," cd client\n yarn install\n yarn start \n")),Object(i.b)("h3",{id:"step-9-accessing-the-movie-app"},"Step 9. Accessing the Movie app"),Object(i.b)("p",null,"Open http://IP:3000 to access the movie app"),Object(i.b)("p",null,Object(i.b)("img",{alt:"movieapp",src:a(690).default})),Object(i.b)("h3",{id:"step-10-sign-up-for-a-new-account"},"Step 10. Sign up for a new account"),Object(i.b)("p",null,Object(i.b)("img",{alt:"moviedb",src:a(691).default})),Object(i.b)("p",null,"Enter the details to create a new account:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"movieapp",src:a(692).default})),Object(i.b)("h3",{id:"step-11-sign-in-to-movie-app"},"Step 11. Sign-in to movie app"),Object(i.b)("p",null,Object(i.b)("img",{alt:"movieapp",src:a(693).default})),Object(i.b)("h3",{id:"step-12-rate-the-movie"},"Step 12. Rate the movie"),Object(i.b)("p",null,Object(i.b)("img",{alt:"movieapp",src:a(694).default})),Object(i.b)("h3",{id:"step-13-view-the-list-of-rated-movie"},"Step 13. View the list of rated movie"),Object(i.b)("p",null,Object(i.b)("img",{alt:"movieapp",src:a(695).default})),Object(i.b)("h3",{id:"step-14-view-directed-movie-over-redisinsight"},"Step 14. View directed movie over RedisInsight"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),' GRAPH.QUERY "MovieApp" "MATCH (director:Director {tmdbId: \\"4945\\"})-[:DIRECTED]->(movie:Movie) RETURN DISTINCT movie,director"\n')),Object(i.b)("p",null,Object(i.b)("img",{alt:"movieapp",src:a(696).default})),Object(i.b)("h3",{id:"step-15-find-movies-where-actor-acted-in"},"Step 15. Find movies where actor acted in."),Object(i.b)("p",null,"Run the below query under RedisGraph to find the author acted in a movie"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),' GRAPH.QUERY "MovieApp" "MATCH (actor:Actor {tmdbId: \\"8537\\"})-[:ACTED_IN_MOVIE]->(movie:Movie) RETURN DISTINCT movie,actor"\n')),Object(i.b)("p",null,Object(i.b)("img",{alt:"movieapp",src:a(697).default})),Object(i.b)("h3",{id:"step-16-store-a-user-in-a-database"},"Step 16. Store a user in a database"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),' CREATE (user:User {id: 32,\n username: "user", password: "hashed_password", api_key: "525d40da10be8ec75480"})\n RETURN user\n')),Object(i.b)("p",null,Object(i.b)("img",{alt:"movieapp",src:a(698).default})),Object(i.b)("h3",{id:"step-17-find-a-user-by-username"},"Step 17. Find a user by username"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),' MATCH (user:User {username: "user"}) RETURN user\n')),Object(i.b)("p",null,Object(i.b)("img",{alt:"movieapp",src:a(699).default})),Object(i.b)("h3",{id:"how-it-works"},"How it works?"),Object(i.b)("p",null,"The app consumes the data provided by the Express API and presents it through some views to the end user, including:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Home page"),Object(i.b)("li",{parentName:"ul"},"Sign-up and Login pages"),Object(i.b)("li",{parentName:"ul"},"Movie detail page"),Object(i.b)("li",{parentName:"ul"},"Actor and Director detail page"),Object(i.b)("li",{parentName:"ul"},"User detail page")),Object(i.b)("h4",{id:"home-page"},"Home page"),Object(i.b)("p",null,Object(i.b)("img",{alt:"How it works",src:a(700).default})),Object(i.b)("p",null,"The home page shows the genres and a brief listing of movies associated with them. "),Object(i.b)("h4",{id:"how-the-data-is-stored"},"How the data is stored"),Object(i.b)("h4",{id:"add-a-new-genre"},"Add a new genre:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Cypher"}),' create (g:Genre{name:"Adventure"})\n')),Object(i.b)("h4",{id:"add-a-movie"},"Add a movie:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Cypher"}),' create (m:Movie {\n  url: "https://themoviedb.org/movie/862", \n  id:232, \n  languages:["English"], \n  title:"Toy Story", \n  countries:["USA"], \n  budget:30000000, \n  duration:81, \n  imdbId:"0114709", \n  imdbRating:8.3, \n  imdbVotes:591836, \n  movieId:42, \n  plot:"...", \n  poster:"https://image.tmd...", \n  poster_image:"https://image.tmdb.or...", \n  released:"1995-11-22", \n  revenue:373554033, \n  runtime:$runtime, \n  tagline:"A cowboy doll is profoundly t...", \n  tmdbId:"8844", \n  year:"1995"})\n')),Object(i.b)("h4",{id:"set-genre-to-a-movie"},"Set genre to a movie:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Cypher"}),' MATCH (g:Genre), (m:Movie) \n WHERE g.name = "Adventure" AND m.title = "Toy Story" \n CREATE (m)-[:IN_GENRE]->(g)\n')),Object(i.b)("h4",{id:"how-the-data-is-accessed"},"How the data is accessed"),Object(i.b)("h4",{id:"get-genres"},"Get genres:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Cypher"})," MATCH (genre:Genre) RETURN genre\n")),Object(i.b)("h4",{id:"get-moves-by-genre"},"Get moves by genre:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Cypher"}),' MATCH (movie:Movie)-[:IN_GENRE]->(genre)\n WHERE toLower(genre.name) = toLower("Film-Noir") OR id(genre) = toInteger("Film-Noir")\n RETURN movie\n')),Object(i.b)("h4",{id:"code-example-get-movies-with-genre"},"Code example: Get movies with genre"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Javascript"})," const getByGenre = function (session, genreId) {\n const query = [\n  'MATCH (movie:Movie)-[:IN_GENRE]->(genre)',\n  'WHERE toLower(genre.name) = toLower($genreId) OR id(genre) = toInteger($genreId)',\n  'RETURN movie',\n ].join('\\n');\n\n return session\n .query(query, {\n    genreId,\n  })\n  .then((result) => manyMovies(result));\n};\n")),Object(i.b)("h4",{id:"sign-up-and-login-pages"},"Sign-up and Login pages"),Object(i.b)("p",null,Object(i.b)("img",{alt:"moviedb",src:a(701).default}),"\n",Object(i.b)("img",{alt:"moviedb",src:a(702).default})),Object(i.b)("p",null,"To be able to rate movies a user needs to be logged in: for that a basic JWT-based authentication system is implemented, where user details are stored in the RedisGraph for persistence."),Object(i.b)("h4",{id:"how-the-data-is-stored-1"},"How the data is stored"),Object(i.b)("h4",{id:"store-user-in-the-database"},"Store user in the database:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Cypher"}),' CREATE (user:User {id: 32, \n username: "user", password: "hashed_password", api_key: "525d40da10be8ec75480"}) \n RETURN user\n')),Object(i.b)("h4",{id:"how-the-data-is-accessed-1"},"How the data is accessed"),Object(i.b)("h4",{id:"find-by-user-name"},"Find by user name:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Cypher"}),' MATCH (user:User {username: "user"}) RETURN user\n')),Object(i.b)("h4",{id:"code-example-find-user"},"Code Example: Find user"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Javascript"})," const me = function (session, apiKey) {\n return session\n   .query('MATCH (user:User {api_key: $api_key}) RETURN user', {\n     api_key: apiKey,\n   })\n   .then((foundedUser) => {\n     if (!foundedUser.hasNext()) {\n       throw {message: 'invalid authorization key', status: 401};\n     }\n     while (foundedUser.hasNext()) {\n       const record = foundedUser.next();\n       return new User(record.get('user'));\n     }\n   });\n };\n")),Object(i.b)("h4",{id:"movie-detail-page"},"Movie detail page"),Object(i.b)("p",null,Object(i.b)("img",{alt:"How it works",src:a(703).default})),Object(i.b)("p",null,"On this page a user can rate the film and view the Actors/directors who participated in the production of the film. "),Object(i.b)("h4",{id:"how-the-data-is-stored-2"},"How the data is stored"),Object(i.b)("h4",{id:"associate-actor-with-a-movie"},"Associate actor with a movie:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Cypher"}),' MATCH (m:Movie) WHERE m.title="Jumanji" CREATE (a:Actor :Person{\n bio:"Sample...",\n bornIn:"Denver, Colorado, USA",\n imdbId:"0000245",\n name:"Robin Williams",\n poster:"https://image.tmdb.org/t/p/w440_and_...",\n tmdbId:"2157",\n url:"https://themoviedb.org/person/2157"})-[r:ACTED_IN_MOVIE \n {role: "Alan Parrish"}]->(m)\n')),Object(i.b)("h4",{id:"associate-director-with-a-movie"},"Associate director with a movie:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Cypher"}),' MATCH (m:Movie) WHERE m.title="Dead Presidents" CREATE (d:Director :Person{\n  bio: "From Wikipedia, the free e...",\n  bornIn: "Detroit, Michigan, USA",\n  imdbId: "0400436",\n  name: "Albert Hughes",\n  tmdbId: "11447",\n  url: "https://themoviedb.org/person/11447"})-[r:DIRECTED]->(m)\n')),Object(i.b)("h4",{id:"how-the-data-is-accessed-2"},"How the data is accessed"),Object(i.b)("h4",{id:"find-movie-by-id-with-genre-actors-and-director"},"Find movie by id with genre, actors and director:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Cypher"}),' MATCH (movie:Movie {tmdbId: $movieId})\n OPTIONAL MATCH (movie)<-[my_rated:RATED]-(me:User {id: "e1e3991f-fe81-439e-a507-aa0647bc0b88"})\n OPTIONAL MATCH (movie)<-[r:ACTED_IN_MOVIE]-(a:Actor)\n OPTIONAL MATCH (movie)-[:IN_GENRE]->(genre:Genre)\n OPTIONAL MATCH (movie)<-[:DIRECTED]-(d:Director)\n WITH DISTINCT movie, my_rated, genre, d,  a, r\n RETURN DISTINCT movie,\n collect(DISTINCT d) AS directors,\n collect(DISTINCT a) AS actors,\n collect(DISTINCT genre) AS genres\n')),Object(i.b)("h4",{id:"code-example-get-movie-detail"},"Code Example: Get movie detail"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Javascript"})," const getById = function (session, movieId, userId) {\n if (!userId) throw {message: 'invalid authorization key', status: 401};\n const query = [\n   'MATCH (movie:Movie {tmdbId: $movieId})\\n' +\n     '  OPTIONAL MATCH (movie)<-[my_rated:RATED]-(me:User {id: $userId})\\n' +\n     '  OPTIONAL MATCH (movie)<-[r:ACTED_IN_MOVIE]-(a:Actor)\\n' +\n     '  OPTIONAL MATCH (movie)-[:IN_GENRE]->(genre:Genre)\\n' +\n     '  OPTIONAL MATCH (movie)<-[:DIRECTED]-(d:Director)\\n' +\n     '  WITH DISTINCT movie, my_rated, genre, d,  a, r\\n' +\n     '  RETURN DISTINCT movie,\\n' +\n     '  collect(DISTINCT d) AS directors,\\n' +\n     '  collect(DISTINCT a) AS actors,\\n' +\n     '  collect(DISTINCT genre) AS genres',\n ].join(' ');\n return session\n   .query(query, {\n     movieId: movieId.toString(),\n     userId: userId.toString(),\n   })\n   .then((result) => {\n     if (result.hasNext()) {\n       return _singleMovieWithDetails(result.next());\n     }\n     throw {message: 'movie not found', status: 404};\n   });\n };\n")),Object(i.b)("h4",{id:"actor-and-director-detail-page"},"Actor and Director detail page"),Object(i.b)("p",null,Object(i.b)("img",{alt:"How it works",src:a(704).default})),Object(i.b)("h4",{id:"how-the-data-is-accessed-3"},"How the data is accessed"),Object(i.b)("h4",{id:"find-movies-where-actor-acted-in"},"Find movies where actor acted in:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Cypher"}),' MATCH (actor:Actor {tmdbId: "8537"})-[:ACTED_IN_MOVIE]->(movie:Movie)\n RETURN DISTINCT movie,actor\n')),Object(i.b)("h4",{id:"find-movies-directed-by"},"Find movies directed by:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Cypher"}),' MATCH (director:Director {tmdbId: "4945"})-[:DIRECTED]->(movie:Movie)\n RETURN DISTINCT movie,director\n')),Object(i.b)("h4",{id:"get-movies-directed-by"},"Get movies directed by"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Javascript"})," const getByDirector = function (session, personId) {\n const query = [\n   'MATCH (director:Director {tmdbId: $personId})-[:DIRECTED]->(movie:Movie)',\n   'RETURN DISTINCT movie,director',\n ].join('\\n');\n\n return session\n   .query(query, {\n     personId,\n   })\n   .then((result) => manyMovies(result));\n };\n")),Object(i.b)("h4",{id:"user-detail-page"},"User detail page"),Object(i.b)("p",null,Object(i.b)("img",{alt:"How it works",src:a(705).default})),Object(i.b)("h4",{id:"shows-the-profile-info-and-movies-which-were-rated-by-user"},"Shows the profile info and movies which were rated by user"),Object(i.b)("h4",{id:"how-the-data-is-stored-3"},"How the data is stored"),Object(i.b)("h4",{id:"set-rating-for-a-movie"},"Set rating for a movie:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Cypher"}),' MATCH (u:User {id: 42}),(m:Movie {tmdbId: 231})       \n MERGE (u)-[r:RATED]->(m)\n SET r.rating = "7"\n RETURN m\n')),Object(i.b)("h4",{id:"how-the-data-is-accessed-4"},"How the data is accessed"),Object(i.b)("h4",{id:"get-movies-and-user-ratings"},"Get movies and user ratings:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Cypher"}),' MATCH (:User {id: "d6b31131-f203-4d5e-b1ff-d13ebc06934d"})-[rated:RATED]->(movie:Movie)\n RETURN DISTINCT movie, rated.rating as my_rating\n')),Object(i.b)("h4",{id:"get-rated-movies-for-user"},"Get rated movies for user"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Javascript"})," const getRatedByUser = function (session, userId) {\n return session\n   .query(\n     'MATCH (:User {id: $userId})-[rated:RATED]->(movie:Movie) \\\n      RETURN DISTINCT movie, rated.rating as my_rating',\n     {userId},\n   )\n   .then((result) =>\n     result._results.map((r) => new Movie(r.get('movie'), r.get('my_rating'))),\n   );\n };\n")),Object(i.b)("h4",{id:"data-types"},"Data types:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The data is stored in various keys and various relationships.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"There are 5 types of data",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"User"),Object(i.b)("li",{parentName:"ul"},"Director"),Object(i.b)("li",{parentName:"ul"},"Actor"),Object(i.b)("li",{parentName:"ul"},"Genre"),Object(i.b)("li",{parentName:"ul"},"Movie")))))),Object(i.b)("h4",{id:"each-type-has-its-own-properties"},"Each type has its own properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Actor: ",Object(i.b)("inlineCode",{parentName:"li"},"id, bio, born , bornIn, imdbId, name, poster, tmdbId, url")),Object(i.b)("li",{parentName:"ul"},"Genre: ",Object(i.b)("inlineCode",{parentName:"li"},"id, name")),Object(i.b)("li",{parentName:"ul"},"Director: ",Object(i.b)("inlineCode",{parentName:"li"},"id, born, bornIn, imdbId, name, tmdbId, url")),Object(i.b)("li",{parentName:"ul"},"User: ",Object(i.b)("inlineCode",{parentName:"li"},"id, username, password, api_key")),Object(i.b)("li",{parentName:"ul"},"Movie: ",Object(i.b)("inlineCode",{parentName:"li"},"id, url, languages, countries, budget, duration, imdbId, imdbRating, indbVotes, movieId, plot, poster, poster_image, released, revenue, runtime, tagline, tmdbId, year"))),Object(i.b)("h4",{id:"and-there-are-4-types-of-relationship"},"And there are 4 types of relationship:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"User-",Object(i.b)("inlineCode",{parentName:"li"},"RATED"),"->Movie"),Object(i.b)("li",{parentName:"ul"},"Director-",Object(i.b)("inlineCode",{parentName:"li"},"DIRECTED"),"->Movie"),Object(i.b)("li",{parentName:"ul"},"Actor-",Object(i.b)("inlineCode",{parentName:"li"},"ACTED_IN_MOVIE"),"->Movie"),Object(i.b)("li",{parentName:"ul"},"Movie-",Object(i.b)("inlineCode",{parentName:"li"},"IN_GENRE"),"->Genre")),Object(i.b)("h3",{id:"references"},"References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/howtos/moviesdatabase/getting-started"}),"How to list and search Movies Database using Redisearch")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://redislabs.com/blog/getting-started-with-redisearch-2-0/"}),"RediSearch 2.0\u2019s New Indexing Capabilities to add search to Movie app"))))}b.isMDXComponent=!0},250:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),b=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=b(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=b(a),u=n,m=l["".concat(s,".").concat(u)]||l[u]||p[u]||i;return a?r.a.createElement(m,o(o({ref:t},d),{},{components:a})):r.a.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},689:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/moviedb_frontpage-1052374f5564d8886a049c9f35d4338c.png"},690:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/moviedb-46d687ef28fdaf33dc36e55c6301e79a.png"},691:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/moviedb_signup-23db249beb656843effbc42437c45993.png"},692:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/moviedb_createaccount-5b1dffcad9306f8ca23066579e930965.png"},693:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/moviedb_sign-034a2c0d20d62188aae3fc9d26f40cb3.png"},694:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/moviedb_rating-d0722f1efd7753c0115595fd5864ace0.png"},695:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/moviedb_rated-d19d811637af07445c0fafa6a5852a48.png"},696:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/moviedb_directed-d77d156525e820e778f1b34593bb72f3.png"},697:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/moviedb_actedin-7f01eb47cb67628da77fd5c7957c9039.png"},698:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/moviedb_createuser-9d2f2cd0a4a21dcb830958ddd424f7fb.png"},699:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/moviedb_createuser1-4d41acc90df6fe1fa507e46ee8370c36.png"},700:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/a-e74937575bdf53241c062e675028f4a6.png"},701:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/f-43f2f6d11c5b5edd724aa3746dde9448.png"},702:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/g-e5b26eeefb3cdc3304b9ecb0f30da71d.png"},703:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/d-ede6f36c5b10f8608bccca2c15c4b452.png"},704:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/c-c8175ede1aa097c9fb055f6497b9007b.png"},705:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/b-ed5e044194a8c389480045a0c8d4dc65.png"}}]);
/**
 * @summary Mock movie data
 */
const movies = {
    data: [{
            "Title": "The Shawshank Redemption",
            "Year": "1994",
            "Rated": "R",
            "Released": "14 Oct 1994",
            "Runtime": "142 min",
            "Genre": "Drama",
            "Director": "Frank Darabont",
            "Writer": "Stephen King (short story \"Rita Hayworth and Shawshank Redemption\"), Frank Darabont (screenplay)",
            "Actors": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
            "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "Language": "English",
            "Country": "USA",
            "Awards": "Nominated for 7 Oscars. Another 21 wins & 36 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
            "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "9.3/10"
            }, {
                "Source": "Rotten Tomatoes",
                "Value": "91%"
            }, {
                "Source": "Metacritic",
                "Value": "80/100"
            }],
            "Metascore": "80",
            "imdbRating": "9.3",
            "imdbVotes": "2,381,013",
            "imdbID": "tt0111161",
            "Type": "movie",
            "DVD": "15 Aug 2008",
            "BoxOffice": "$28,699,976",
            "Production": "Columbia Pictures, Castle Rock Entertainment",
            "Website": "N/A",
            "Response": "True"
        }, {
            "Title": "Star Wars",
            "Year": "1977",
            "Rated": "PG",
            "Released": "25 May 1977",
            "Runtime": "121 min",
            "Genre": "Action, Adventure, Fantasy, Sci-Fi",
            "Director": "George Lucas",
            "Writer": "George Lucas",
            "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
            "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
            "Language": "English",
            "Country": "USA, UK",
            "Awards": "Won 6 Oscars. Another 57 wins & 29 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
            "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "8.6/10"
            }, {
                "Source": "Rotten Tomatoes",
                "Value": "92%"
            }, {
                "Source": "Metacritic",
                "Value": "90/100"
            }],
            "Metascore": "90",
            "imdbRating": "8.6",
            "imdbVotes": "1,245,210",
            "imdbID": "tt0076759",
            "Type": "movie",
            "DVD": "10 Oct 2016",
            "BoxOffice": "$460,998,507",
            "Production": "Lucasfilm Ltd.",
            "Website": "N/A",
            "Response": "True"
        },
        {
            "Title": "Matrix",
            "Year": "1993",
            "Rated": "N/A",
            "Released": "01 Mar 1993",
            "Runtime": "60 min",
            "Genre": "Action, Drama, Fantasy, Thriller",
            "Director": "N/A",
            "Writer": "Grenville Case",
            "Actors": "Nick Mancuso, Phillip Jarrett, Carrie-Anne Moss, John Vernon",
            "Plot": "Steven Matrix is one of the underworld's foremost hitmen until his luck runs out, and someone puts a contract out on him. Shot in the forehead by a .22 pistol, Matrix \"dies\" and finds ...",
            "Language": "English",
            "Country": "Canada",
            "Awards": "1 win.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYzUzOTA5ZTMtMTdlZS00MmQ5LWFmNjEtMjE5MTczN2RjNjE3XkEyXkFqcGdeQXVyNTc2ODIyMzY@._V1_SX300.jpg",
            "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "7.9/10"
            }],
            "Metascore": "N/A",
            "imdbRating": "7.9",
            "imdbVotes": "140",
            "imdbID": "tt0106062",
            "Type": "series",
            "totalSeasons": "N/A",
            "Response": "True"
        },
        {
            "Title": "Schindler",
            "Year": "1983",
            "Rated": "N/A",
            "Released": "N/A",
            "Runtime": "N/A",
            "Genre": "Documentary",
            "Director": "Jon Blair",
            "Writer": "Jon Blair",
            "Actors": "Dirk Bogarde, Emilie Schindler, Oskar Schindler",
            "Plot": "The true story of Oskar Schindler's exploits in which he saved a thousand Jews from the ovens of the death camps, s told by first hand witnesses. The British Academy Award winning ...",
            "Language": "English, German, Polish",
            "Country": "UK",
            "Awards": "1 win.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4MTY0OTY4NV5BMl5BanBnXkFtZTcwOTgxMjMyMQ@@._V1_SX300.jpg",
            "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "7.4/10"
            }],
            "Metascore": "N/A",
            "imdbRating": "7.4",
            "imdbVotes": "259",
            "imdbID": "tt0180981",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "N/A",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True"
        },
        {
            "Title": "12 Years a Slave",
            "Year": "2013",
            "Rated": "R",
            "Released": "08 Nov 2013",
            "Runtime": "134 min",
            "Genre": "Biography, Drama, History",
            "Director": "Steve McQueen",
            "Writer": "John Ridley (screenplay by), Solomon Northup (based on \"Twelve Years a Slave\" by)",
            "Actors": "Chiwetel Ejiofor, Dwight Henry, Dickie Gravois, Bryan Batt",
            "Plot": "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
            "Language": "English",
            "Country": "USA, UK",
            "Awards": "Won 3 Oscars. Another 240 wins & 336 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_SX300.jpg",
            "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            }, {
                "Source": "Rotten Tomatoes",
                "Value": "95%"
            }, {
                "Source": "Metacritic",
                "Value": "96/100"
            }],
            "Metascore": "96",
            "imdbRating": "8.1",
            "imdbVotes": "649,134",
            "imdbID": "tt2024544",
            "Type": "movie",
            "DVD": "31 Aug 2015",
            "BoxOffice": "$56,671,993",
            "Production": "River Road, New Regency Pictures, Plan B Entertainment",
            "Website": "N/A",
            "Response": "True"
        },
        {
            "Title": "Battle",
            "Year": "2018",
            "Rated": "TV-MA",
            "Released": "28 Sep 2018",
            "Runtime": "95 min",
            "Genre": "Drama, Music, Romance",
            "Director": "Katarina Launing",
            "Writer": "Karsten Fullu, Maja Lunde",
            "Actors": "Lisa Teige, Fabian Svegaard Tapia, Vebjørn Enger, Stig R. Amdam",
            "Plot": "Amalie works hard to fit in to a world where having it all is what matters - looks, money and dancing skills. Then she meets Michael, the street-dancer, who is different from any other person she has met.",
            "Language": "Norwegian, English",
            "Country": "Norway, Denmark, Netherlands, Sweden",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOWUzMTkwYjEtZmEyZi00ZTU5LWE3ZTMtM2ZkYmE0ZjNhMjRhXkEyXkFqcGdeQXVyNTkzMzAwNzg@._V1_SX300.jpg",
            "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "6.0/10"
            }],
            "Metascore": "N/A",
            "imdbRating": "6.0",
            "imdbVotes": "3,805",
            "imdbID": "tt6854672",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "N/A",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True"
        },
        {
            "Title": "Revolution",
            "Year": "2012–2014",
            "Rated": "TV-14",
            "Released": "N/A",
            "Runtime": "43 min",
            "Genre": "Action, Adventure, Drama, Romance, Sci-Fi, Thriller",
            "Director": "N/A",
            "Writer": "Eric Kripke",
            "Actors": "Billy Burke, Tracy Spiridakos, Giancarlo Esposito, Zak Orth",
            "Plot": "Fifteen years after a permanent global blackout, a group of revolutionaries seeks to drive out an occupying force posing as the United States Government.",
            "Language": "English",
            "Country": "USA",
            "Awards": "Won 1 Primetime Emmy. Another 3 wins & 11 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNTQ0YTIxZmUtMTVmZC00MzgxLThmYTItMDdlZjg5YmU2NzM0XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg",
            "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "6.7/10"
            }],
            "Metascore": "N/A",
            "imdbRating": "6.7",
            "imdbVotes": "81,139",
            "imdbID": "tt2070791",
            "Type": "series",
            "totalSeasons": "2",
            "Response": "True"
        },
        {
            "Title": "It's Kind of a Funny Story",
            "Year": "2010",
            "Rated": "PG-13",
            "Released": "08 Oct 2010",
            "Runtime": "101 min",
            "Genre": "Comedy, Drama, Romance",
            "Director": "Anna Boden, Ryan Fleck",
            "Writer": "Anna Boden (screenplay), Ryan Fleck (screenplay), Ned Vizzini (novel)",
            "Actors": "Keir Gilchrist, Dana DeVestern, Lauren Graham, Jim Gaffigan",
            "Plot": "A clinically depressed teenager gets a new start after he checks himself into an adult psychiatric ward.",
            "Language": "English",
            "Country": "USA",
            "Awards": "2 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTk0MTAyNjQ2N15BMl5BanBnXkFtZTcwNjYwOTU3Mw@@._V1_SX300.jpg",
            "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "7.1/10"
            }, {
                "Source": "Rotten Tomatoes",
                "Value": "58%"
            }, {
                "Source": "Metacritic",
                "Value": "63/100"
            }],
            "Metascore": "63",
            "imdbRating": "7.1",
            "imdbVotes": "137,422",
            "imdbID": "tt0804497",
            "Type": "movie",
            "DVD": "12 Feb 2014",
            "BoxOffice": "$6,363,628",
            "Production": "Misher Films",
            "Website": "N/A",
            "Response": "True"
        },
        {
            "Title": "Happy",
            "Year": "2012",
            "Rated": "Not Rated",
            "Released": "11 Feb 2012",
            "Runtime": "76 min",
            "Genre": "Documentary, Drama, Family",
            "Director": "Roko Belic",
            "Writer": "Roko Belic",
            "Actors": "Marci Shimoff, Ed Diener, Richard Davidson, Mihaly Csikszentmihalyi",
            "Plot": "Happy takes us on a journey from the swamps of Louisiana to the slums of Kolkata in search of what really makes people happy.",
            "Language": "Portuguese, Mandarin, Japanese, French, Nama, Danish, English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjI1NTg1MzcwM15BMl5BanBnXkFtZTcwMjA2OTU4NQ@@._V1_SX300.jpg",
            "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "7.2/10"
            }, {
                "Source": "Rotten Tomatoes",
                "Value": "78%"
            }],
            "Metascore": "N/A",
            "imdbRating": "7.2",
            "imdbVotes": "3,216",
            "imdbID": "tt1613092",
            "Type": "movie",
            "DVD": "04 Oct 2016",
            "BoxOffice": "N/A",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True"
        },
        {
            "Title": "City of God",
            "Year": "2002",
            "Rated": "R",
            "Released": "13 Feb 2004",
            "Runtime": "130 min",
            "Genre": "Crime, Drama",
            "Director": "Fernando Meirelles, Kátia Lund(co-director)",
            "Writer": "Paulo Lins (novel), Bráulio Mantovani (screenplay)",
            "Actors": "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva",
            "Plot": "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
            "Language": "Portuguese",
            "Country": "Brazil, France, Germany",
            "Awards": "Nominated for 4 Oscars. Another 74 wins & 46 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
            "Ratings": [{
                "Source": "Internet Movie Database",
                "Value": "8.6/10"
            }, {
                "Source": "Rotten Tomatoes",
                "Value": "91%"
            }, {
                "Source": "Metacritic",
                "Value": "79/100"
            }],
            "Metascore": "79",
            "imdbRating": "8.6",
            "imdbVotes": "706,558",
            "imdbID": "tt0317248",
            "Type": "movie",
            "DVD": "17 Dec 2015",
            "BoxOffice": "$7,564,459",
            "Production": "StudioCanal, Videofilmes Producoes Artisticas, Hank Levine Film, O2 Filmes, Lereby, Lumiere Productions, Globo Filmes, Wild Bunch",
            "Website": "N/A",
            "Response": "True"
        }
    ]
};

export default movies;
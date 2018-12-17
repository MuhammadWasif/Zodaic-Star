class ZodiacStar{

    constructor(){

         let month = $("#months").val();

    let date = $("#dates").val();

    if((month == "March" && date >= 21) || (month == "April" && date <= 19)){

        $(".media-img").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSo71N1K-8gBRqejGPgRRzqu29MV8aHVg4SJNcd19bdo9fGqvQL");

        $(".media-heading").text("Aries");

    $("small").text("March 21 to April 19");

    $(".star-info").text("Their element is Fire. People with Aries are courageous, honest and confident. Aries people are moody, impatient and aggressive. They like individual sports, clothes and physical challenges. They are also inactive and work that does not use one's talents. ");

    }else if((month == "April" && date >= 20) || (month == "May" && date <= 20)){

        $(".media-img").attr("src", "https://www.horoscope.com/images-US/signs/profile-taurus.png");

        $(".media-heading").text("Taurus");

    $("small").text("April 20 to May 20");

    $(".star-info").text("Their element is Earth. People with Taurus are reliable, patient, practical, devoted, responsible, stable. Taurus people are stubborn, possessive, uncompromising. They like gardening, cooking, music, romance, high quality clothes, working with hands. They don't like sudden changes, complications, insecurity of any kind, synthetic fabrics. ");

    }else if((month == "May" && date >= 21) || (month == "June" && date <= 20)){

        $(".media-img").attr("src", "https://www.horoscope.com/images-US/signs/profile-gemini.png");

        $(".media-heading").text("Gemini");

    $("small").text("May 21 to June 20");

    $(".star-info").text("Their element is Air. People with Gemini are gentle, affectionate, curious, adaptable. Gemini people are nervous, inconsistent, indecisive. They like music, books, magazines, chats with nearly anyone. They don't like  being alone, being confined, repetition and routine ");

    }else if((month == "June" && date >= 21) || (month == "July" && date <= 22)){

        $(".media-img").attr("src", "https://www.horoscope.com/images-US/signs/profile-cancer.png");

        $(".media-heading").text("Cancer");

    $("small").text("June 21 to July 22");

    $(".star-info").text("Their element is Water. People with Cancer are tenacious, highly imaginative, loyal and emotional . Cancer people are moody, pessimistic, suspicious, manipulative, insecure. They like art, home-based hobbies, relaxing near or in water and helping loved ones. They don't like  strangers, any criticism of Mom, revealing of personal life. ");

        

    }else if((month == "July" && date >= 23) || (month == "August" && date <= 22)){

         $(".media-img").attr("src", "https://www.horoscope.com/images-US/signs/profile-leo.png");

        $(".media-heading").text("Leo");

    $("small").text("July 23 to August 22");

    $(".star-info").text("Their element is Sun. People with Leo are creative, passionate, generous, warm-hearted . Leo people are arrogant, stubborn, self-centered, lazy, inflexible. They like  taking holidays, being admired, expensive things and bright colors. They don't like   facing difficult reality and not being treated like a king or queen.");

        

    }else if((month == "August" && date >= 23) || (month == "September" && date <= 22)){

        $(".media-img").attr("src", "https://www.horoscope.com/images-US/signs/profile-virgo.png");

        $(".media-heading").text("Virgo");

    $("small").text("September 16 to October 30.");

    $(".star-info").text("Their element is Earth. Their quality is that they are mutable. People with Virgo are loyal, analytical, hardworking and practical. Their weaknesses are worry, overly critical of self and others, all work and no play. They like animals, healthy food, books, nature, cleanliness. They dislike rudeness, asking for help and taking center stage.");

        

    }else if((month == "September" && date >= 23) || (month == "October" && date <= 22)){

        $(".media-img").attr("src", "https://www.horoscope.com/images-US/signs/profile-libra.png");

        $(".media-heading").text("Libra");

    $("small").text("September 23 to October 22");

    $(".star-info").text("Their element is Air. Their quality is that they are cardinal. People with Libra diplomatic, gracious, fair-minded and social. They like harmony, gentleness, sharing with others, the outdoors. They dislike violence, injustice, loudmouths, conformity.");

        

    }else if((month == "October" && date >= 23) || (month == "November" && date <= 21)){

        $(".media-img").attr("src", "https://www.horoscope.com/images-US/signs/profile-scorpio.png");

        $(".media-heading").text("Scorpio");

    $("small").text("October 23 to November 21");

    $(".star-info").text("Their element is Water. Their quality is that they are brave, passionate, stubborn, a true friend. They like facts, being right, longtime friends, teasing and a grand passion. They dislike revealing secrets and passive people");

        

    }else if((month == "November" && date >= 22) || (month == "December" && date <= 21)){

        $(".media-img").attr("src", "https://www.horoscope.com/images-US/signs/profile-sagittarius.png");

        $(".media-heading").text("SAGITTARIUS");

    $("small").text("November 22 to December 21");

    $(".star-info").text("Their element is Fire. Their quality is that they are mutable. They like freedom, travel, philosophy, being outdoors. They dislike clingy people, being constrained, off-the-wall theories, details.");

        

    }else if((month == "December" && date >= 22) || (month == "January" && date <= 19)){

        $(".media-img").attr("src", "https://www.horoscope.com/images-US/signs/profile-capricorn.png");

        $(".media-heading").text("Capricorn");

    $("small").text("December 22 to January 19");

    $(".star-info").text("Their element is Earth. Their quality is that they are cardinal. They like family, tradition, music, understated status, quality craftsmanship. They dislike almost everything at some point.");

        

    }else if((month == "January" && date >= 20) || (month == "February" && date <= 18)){

        $(".media-img").attr("src", "https://www.horoscope.com/images-US/signs/profile-aquarius.png");

        $(".media-heading").text("Aquarius");

    $("small").text("January 20 to February 18");

    $(".star-info").text("Their element is Air. Their quality is that they are fixed. They like  fun with friends, helping others, fighting for causes, intellectual conversation and a good listener. They dislike  limitations, broken promises, being lonely, dull or boring situations, people who disagree with them.");

        

    }else if((month == "February" && date >= 19) || (month == "March" && date <= 20)){

        $(".media-img").attr("src", "https://www.horoscope.com/images-US/signs/profile-pisces.png");

        $(".media-heading").text("Pisces");

    $("small").text(" February 19 to March 20");

    $(".star-info").text("Their element is Water. Their quality is that they are mutable. They like   being alone, sleeping, music, romance, visual media, swimming and spiritual themes. They dislike  being criticized, the past coming back to haunt and cruelty of any kind.");

        }

    }

}

$(function(){

 

const addMonths = () =>{

var months = ["January","February","March","April","May","June","July","August","September", "October", "November", "December"];

    for(let val of months){

        $("<option value='"+val+"'>"+val+"</option>").appendTo("#months");

    }

}

const addDates = () =>{

    for(let i=1;i<=31;i++){

        $("<option value='"+i+"'>"+i+"</option>").appendTo("#dates");

    }

}

addDates();

addMonths();

$("#months").val("September");

  $("#dates").val(11);

  

$("#months, #dates").on("change",function(){

   new ZodiacStar();

    

});

});


const quotes = [
  [
    "I've struggled a long time with survivin', but no matter what you have to find something to fight for.",
    "– Joel, The Last of Us",
  ],
  ["YOU DIED", "– Dark Souls"],
  [
    "Batman: You want to know something funny? Even after everything you've done, I would have saved you. The Joker: laughs, coughs Actually, that is pretty funny.",
    "– Batman: Arkham Asylum, Batman and Joker",
  ],
  [
    "What is a man but the sum of his memories? We are the stories we live! The tales we tell ourselves!",
    "– Clay Kaczmarek, Assassin's Creed Brotherhood",
  ],
  [
    "Federico: It is a good life we lead, brother. Ezio: The best. May it never change. Federico: And may it never change us.",
    "– Federico and Ezio Auditore, Assassin's Creed 2",
  ],
  ["…*cocks shotgun*", "– Doomguy, DOOM"],
  [
    "Protocol one: link to Pilot. Protocol two: uphold the mission. Protocol three: protect the Pilot.",
    "– BT-7274, Titanfall 2",
  ],
  ["Praise the sun!", "– Dark Souls"],
  ["No Russian.", "-Call of Duty: Modern Warfare 2"],
];
$(document).ready(function () {
  const t = Math.ceil(Math.random() * quotes.length);
  $("#text").text(quotes[t][0]);
  $("#author").text(quotes[t][1]);
  $("button").click(function () {
    let a = Math.ceil(Math.random() * quotes.length);
    $("#text").text(quotes[a][0]);
    $("#author").text(quotes[a][1]);
    $("#tweet-quote").attr(
      "href",
      "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
        encodeURIComponent('"' + quotes[a][0] + '" ' + quotes[a][1])
    );

    $("#tumblr-quote").attr(
      "href",
      "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
        encodeURIComponent(quotes[a][1]) +
        "&content=" +
        encodeURIComponent(quotes[a][0]) +
        "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
    );
  });
});

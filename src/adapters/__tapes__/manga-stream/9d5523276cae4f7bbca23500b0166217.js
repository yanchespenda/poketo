var path = require("path");

/**
 * GET /r/a_trail_of_blood/15/4622/16
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip, deflate
 * host: readms.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 12 Nov 2018 04:40:27 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d027a923a4199ac188aac67ed3f14f4d21541997626; expires=Tue, 12-Nov-19 04:40:26 GMT; path=/; domain=.readms.net; HttpOnly"]);
  res.setHeader("last-modified", "Thu, 12 Oct 2017 16:46:08 GMT");
  res.setHeader("expires", "Mon, 12 Nov 2018 05:40:27 GMT");
  res.setHeader("cache-control", "max-age=3600");
  res.setHeader("vary", "Accept-Encoding, User-Agent");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "4786520d3acc2e27-NRT");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+w8a3PbtrLf8ys2bKeSpqZoy5YfsaWO82iSuW2a1m7m9HQ6GohcirBAgAVAyTpn+t/vLF+ino7SuEfn3iozMQkC+wQWu4slr56+/OHF7S/vX0FkY9F/ckV/QDA56jkoHWpAFvSfAABcxWgZ+BHTBm3PSW3onjvFI8utwP413GrGBagQngulAjjqggvv2Qjh6BRc+J7JEYMbq5HFV14+pgZashh7zoTjNFHaOuAraVHanjPlgY16AU64j252cwBccsuZcI3PBPaO2ofOKqgAja95YrmSNWg/IQsg1IgQZ/QoKbhEEHyM8I7p1KoDeC6Q+dEB/CAR3nP08QDepNKihvvygsmAAMwgVhrbJXbB5RgijWHPiaxNzDPPi9m9H8j2UClrrGYJ3fgq9kIlrcumaFSM3kn7rH3o+cYsNLdjLtu+MQ5oFD3H2JlAEyFaB7i0ONLcznqOidjx+Yk7nYT/SH5P/vnPDz++/p/T2+uo+/6DeP1D+OO7NzfqZed++OrrH8fv719cfyvevcKJevXm+EYcGj784P/w4wf5zgFfK2OU5iMuew6TSs5ilRqn/6TGW0YI90miOZteyCZ03+a+csDOEuw5PGYj9O7dvJ/XXx5vIqWtn1rYGVAGqfzVpe0xY9CaTISZXk02zUh633Q6F4edi1Uh5nTlxD11XXhz+/13XTARjw8gVBrevjp1z8GkCc1HmtV5BxQYo7QGXLdfDf6VhyAsvH0FF78VrfnkA6P9OXl3xqMl1jURn7TvjNO/8vJuJaRfUQY8/I1AL0DJ5WHx3np3bMLy1oID+k25DNS07cfJbYQxQg/+vSCrIfPHI61SGTyDxhfhMf1rHCx0STSPmZ7R8+PzswvfX//8Fu9tBiMMlzoY9JUMChDdbnfT4xKCv4KC+PuOyzE9PTs7W3oa8AkPUJdDq2d/5JKqJLkq/nItmrbkVquEzbIlyALjHpMaNol3STu76YINLfSgwRqXS/RdeblVfXI=", "base64"));
  res.write(new Buffer("NVTBjP4GfAI86DkaWYDalWxSGhR64gtmTM+RbDJkGvI/boAhS4Utb/ORNSJWR7pRvc/VMLVWyYKZ/MZZGmDVaCQQfCUESwwGDgTMsqK555TtZTPTI9oZvoiNmwNwgGnOXLxPmAww6DkhEwbrRJqEyRKp0a6SYub0b3O0kk34iJH1vvKo34ZhZBtcQtZ/vG5XXi6g4o4tyWmomQwqO0ZDGWk54JNSuUX/UmKl1uYSJO3P5VbgSUUNUTlmPjkKG9i/YnPUb1SMhP7KE3yhVwkp0CoJ1FTWYBQ85TC+cJZ7FvpeUv4cTrah5nv71bDilGnMFtAwl8YCrjlfFY4YZbpE0ip7mWH3mLXMHw+UHFhumXT611kDKAm31LDK/jZoQ9QG9djpP88vdhsdaDZScjBkQgxMmtDqepk1wXMmBNxQ024QI8bHszR1+m/yi6dPdx1/x2McSDXgSaIIDN2DVPA2SdRusOLZIEKtBsxnAcacOf3vZ/AGtYLromU3eEriICF3yulXntXOEJJU+tEgJsVnQOiWpt9ugCROUAtatv33WsXcYADvyrbdQJlIjdMRjjkJ3ag0Zk7/pmwjwd9Q224wbYQDgxOUgwBZIGYDw6Vx+rcRwg01w8usGW64NDtCVuOZGowilQqNZGvHMwWv6faZ3q6Mas3m27Dz8Uid/repEPAdN3Y9hisvFTVrtWy7avAKN95jSSK4n+0OZIF8nXJLXtla27dmvK+E0k7/Bf3JQpQlMc4p2miFq62XjyK70SQX7mMmr0qEIYOQuUPrkxB5H14qyex2u81SG7mjFI1dMsSxCphY3oKFGnHp5o/mxMy9lWeXTv876vMZcWoccWNRP4D2p6LbR+1SkJFA/6G0pG8MVjeuYgysbFjVjrZh51rY+QepQU2BY7X1P/Z2ZtBaLkfG6d8UVx+5lBcEWuIWaqRSm6lVpZ+2zhb0PkHNQ75O3luIkMrysFiXpRrWMLO8EFAIV8HCYGor/MeIBwHKnmN1ivmCWYWI8VoSfJXKTG8YL0uCrRNELqDcdctiQq8t2aTy0+YhX+7crfPxYsalS449pU9q7SYdrvfr8wfuVLMk2ejCk93SSphlbdS6DK10KcRLgK6KUMKPWGIXoK4unKGV2ZAypPhIx69aXquwV9zqXIXuvYHiysTOSr6oXHZH3QfhVetx0ZVfq91PWKe7/hbXtfbYwBJnAxUOhsSZd3zmdU9OD72jJaNTycXpH5+BC9dTNkbJ5ajgbKHzhBs+FFj0LntsNBmf8/cwg6de9+RwO4OUA7weacR8o36AwdM9Y7DrdY87na0MUrrzGl5zLRoGflIqfpDJ7p4xeeJ1O2fnW5k8ISaHTAZVXL6ZvZM9Y+/Y63a63a3sHYMLbyFQsmFBIgYwU+mDfB7vGZ8dr9vpHG3lswMufFDcR+ASbIRgI+6P8eF12dkzXo+87tHZ9nV5RFNWKwrCHmDuaM+YO/S6R93tijykCSsDTFAGKCmgfoDHw/3isXPhdY+Oti7KzgUpMKRjlxs/UkrAdaAEGp/4/eYhhjsXe8bwudc9PN1qZDvn2U5iuKREqLGYPMjk+aMw+fFhP2zK1i2x/2AuAFbiFJg73AtND/m+CRvhRzm+xcnGZ3J8ywPPdQLaYx/20eb7Udc7Oc09p2+5NjYXUPOo9desx79/+zofjpx+vlaO/tqZ8PEUdkoKO/tK4XFJ4fG+UnhSUniyrxR2Swq7+0rhaUnh6b5SeFZSeLavFJ6XFJ7vK4UXJYUXe0ph57CgsHO4rxSWe0pnX/eUTrmndPZ1T+mUe0pnX/eUTrmndPZ1T+mUe0pnX/eUzg==", "base64"));
  res.write(new Buffer("qdP/jlXeeOd0R3f8wRBt+XYeuVBcprdELLWgM9E44VkR4kdv5V8JpvUlvNc42V30NdQS763z8bvfO7y38JUm3NvR1k6WFw+RYCmmjQ2D2DD3rHM+uDgsS4RYGd0yG1LwWAmZjqvWwXBrJ9AVQW+YRWCBgWFqwVguBEyZtGAVRCgSSM038Bx9FSMwWHuYXV0St0+fLGk8q1+sE6LV1A1FygMg7WeHXWuOwjZE7FA/d3xIEVc8HuWyovxDngSAogrT4/GovVAeqmLPD2SRqzg6uSgdrnYiR1RxuhCFrydsjcqODw8Hp4erOjM8wAWlLS2WteeJG6ZBqBQdtg9r0+DJpprTYcpFsFRv+lA145dN54uaCFttJbHpCMUC5wDCVPp0wNpsFXWmE6ZBhaFBqnn8stmoDW202vmTZqstMLTw9WqHrKq72YKv4ejw8skfrTbVXzdXsPCwaSNuSG2JQIst+DJraLWJrmaLhl4+efJlMy/BbLU1Gv4vbK4ld7qO0oKQy8/P1DLednmku4x16RmzVjcbWdly46ARM02VHYTymdv4ujn1Oq2vG8l9o+Sd9NYuzppb7YRLiUEzZ3pI5b/mGZwcHoDnwTRCSQt+mK9zY7k/nmUdja+VEFyOnkHeNVGGk/wgSDWXo6JD1jdWQy7wGWSlndTXUC1RUJVN589z2molugsznOpFIGQBOmDZkMsA73uOe+SAVlnijTOhRvnMXyhsWTV31O6W/YvRyk/pwHHDwXo+pCgL2nK6nveLlstsq67byml9oaoq2YCbmFcAiwoHwYZUm/4i61ckedeUPnxleYzmssr01otSF4iJThbJzt61yEpD6MUBlVdr5i9iAPOzIokrLzrZKeWaQy4KHVYoSKqCWhmqDSb9ZXbIFrEJAvGb0wEztN9sqjKZzwCr3LLeyOm/0Ej7mZJZCRVINT0Abhsmf82D3tT4PeX++OmaHGuy9E5B1hoqHdfKarh0qcUBqSZM8IBZpDKT8nrThlWTFQ3P89Nb3R6aBfTmQc/BmHHh9F/Rnysve7BlIJdJWhryfOQC4sKY1MVX9EoE8zFSIkDdc35RqYZSqBhA1gdYEGjMX0H5PeXU7m2hpJ7fLjBprfQKareE5vQztDkubiosB5AIZAYhJN9EEXsRNxByFEF7U8p8w6z9LBpJmDFTpaletLjaTS/V+IdUM++4oJ33VfPnUkSJqKaLEsnn1MSDqtg0T7KGrOQ1mx1eSS+dyAPKfJIGCg1ZkZhZPwImZzaiDYpLyGezr3RgDsCP0B/TQA0BWsaFaW8lb8Gam3QYc+tsKJeq0zy0srSyc+u83Z3dYuBCpUfKOv23kF9BPIOkmnzrToc8mlRrrfhGM473lsoexdaDspFSI4GuYFRsnVO51LSu0nO5zC8fUpS8vs5u1rPB5uN8HCo13glNOahA9G1x+wAqO+WW/OldMBVjCkS3+d1qfejGuHjR6/9Ul2i57vZvr2g3r+i6cDzywmRdvHH0l3tD37MxWa6aJ6TkgqNGRpcSNuTPIDOzNmRbZ9lboDWZafRVTJql4Roz023gKxYnlyBxag7WIieY2VgmyYGf5qay9OGHMzDpkNbBkEhsssDNPKsadU9bbbgWFObOlj26rd5cNXmtcjPD5/SL7UZkZjQ7BgcujUUWtD/WgZu/T1dA32Ll6PeLSoFpBDbM9jcF2ZuljHY6TRkLbWdglM+ZgBgDziqhWwWMxLrOo27DD9JHkuRanDEbY1Z4VXQ/qBSQGizkvwFlIRqSCpNWzMoSrjC1qcY2vA03YmULOlpH9kEJnuZEJgcCvZaUUKu4oLQoYF+nofXb7A==", "base64"));
  res.write(new Buffer("gpNd6emv9rPnNf8/F1e7eXWUNtng0cXsXqAc2ajndM7zyV5hW3TtXqLJ/LnyMTSTdCi4L2ZAb8OzocDWJ7h988k/d61KFG4q+e9kPG8jZueIuakmiKVC5Da8zxcjVV0ZmgUx5g5WwMMQNUq71QXcjaa5H/pzjaA/7YfuRsTI1iYDxKmxMERgZF/J+B5nX0BgvkVtQCg5+oyoxQJqn0mpMuT0hQGwEZPQOX9E9EwkEZNpvEgDfR9hln09gZFNKPqg5n6dlCZz/5UZjEP3ovUfic8eL2JeFyt/IJv0SRFy5QpQnt0dCuWP6U2ISQ1gbdJDc6bShhA0DQxt6gzy93Ly91sy+0zyTv7EBMgD8gWDUNFRWgNmsg3AYgBTbiNgcwNQbXd/eiYuZwY2SuX/Y3Lg86cF1qngsXMCuxGR2eIK/4ot3s0YPrbuB76SYY3cF0qGXMdFOPFIsyFHun5KQJONGJetzz01Ym6ybEuemymbzVJapkrKfHqOaOckTEV2locpssLXZX57Y1y4OWvyaDF7ntD5O2L/cxE7pfcmqGf/gWg9D7G2hFHZyTpt3hMs0ncWZR4slUumsqLZqsmf5XvdEIWabgzUp0gegcEiZienPIsFdZodchoKEQvRALftTzn1KObn/51jj4Khv+Lco0Q1N5115I9+8vGZbGlBc2ZJn+OIy9pq20NLalLfR2P+tqj/tRb1NW3XT8mw2nkIknkQaDZnRQ8A7xP0bWHzkGf2OEZjqKwtS1ClpsiPrUVLZV4Q4hRiLlOLJo9vwlTbiMxnzaxuMKSfMtmppfbZr4VPFpiIBWpa1fSs7zRU9xuqfspPnbGEm3Z+4pJVOd0ZanrmC05Jm7WlQDldxdfLwuG1mUn/reRU/LJSQEO/b5+36TOMzcUvzbEkeRvkl8+gcXR+dnrSPbs47p4ddk+6J0ufdPOVGnMsOtNUXnx8Hw5jARsfT1AbioJzVJNO+7z2UbiimuaP/M+8BCg4AHMAPGjNyaaqnDtzAOGdgR4E7RHaV8VH/p7PbtnoHYuxaVq/Hv52WY3hITTrPZ/P3gZNHrRa8G+NNtXy8o+qbwHWzxzSon/TtC7hzrR5AD3gwWWtc9toH3pQqdJXUqJv2+XBVlui9VAOfr7xTDAmXc5Hh3emnTCKy9+pANtcGtT2OYZKY7NgsRRMs7R/B9DIJ0DjABrVkdudMcG40WpdPlmtGVuuL5ugDJRu31XfWuw/PIYlyfYB2z6zR4Mp9OFUzsflINWCvrXnFd/aqz3OK++2dGAJL5/W1s5KleDqQG4GeXETrQ+qfpr3yJHmq6OxvWCVZL69pJFKu4rCsFJjrQzDrJrUsLAuqYBs6VXGRqtqKcvM/ljQ7Lz00Ms/Snjl5Z+E/V8AAAD//w==", "base64"));
  res.write(new Buffer("AwCRw3BNI1YAAA==", "base64"));
  res.end();

  return __filename;
};

var path = require("path");

/**
 * GET /r/a_trail_of_blood/15/4622/6
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip, deflate
 * host: readms.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 12 Nov 2018 04:40:26 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=dca61e2708329dac1092199d543d52ed31541997626; expires=Tue, 12-Nov-19 04:40:26 GMT; path=/; domain=.readms.net; HttpOnly"]);
  res.setHeader("last-modified", "Thu, 12 Oct 2017 16:46:08 GMT");
  res.setHeader("expires", "Mon, 12 Nov 2018 05:40:26 GMT");
  res.setHeader("cache-control", "max-age=3600");
  res.setHeader("vary", "Accept-Encoding, User-Agent");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "4786520bdde62df7-NRT");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+w8a3PbtrLf8ys2bKeSpqZoyZYfsaWO82iSOW2aNm7m9nQ6GohcirBAgAVAyTpn+t/vLF+ino7SpEf3niozMQkC+wR2F4slrx8//+HZ7S9vX0BkYzF4dE1/QDA57jsoHWpAFgweAQBcx2gZ+BHTBm3fSW3oXjjFI8utwMEN3GrGBagQngqlAuj0wIW3bIxwBi58z+SYwTurkcXXXj6kBlmyGPvOlOMsUdo64CtpUdq+M+OBjfoBTrmPbnZzBFxyy5lwjc8E9jvtY2cdVIDG1zyxXMkatJ+QBRBqRIgzepQUXCIIPkF4w3Rq1RE8Fcj86Ah+kAhvOfp4BK9SaVHDfXnBZEAA5hArje0Su+ByApHGsO9E1ibmiefF7N4PZHuklDVWs4RufBV7oZLWZTM0KkbvtH3ePvZ8Y5aa2zGXbd8YBzSKvmPsXKCJEK0DXFoca27nfcdE7OTi1J1Nw/9Jfk/++c/3P778x9ntTdR7+168/CH88c2rd+p593704usfJ2/vn918K968wKl68erknTg2fPTe/+HH9/KNA75WxijNx1z2HSaVnMcqNc7gUY23jBDuk0RzNr2QTem+zX3lgJ0n2Hd4zMbo3bt5P2+wOt5ESls/tbA3oAxS+atL22PGoDWZCDO9mmyakfS+6XYvj7uX60LM6cqJe+y68Or2++96YCIeH0GoNLx+ceZegEkTmo80qfMOKDBGaQ247qAa/CsPQVh4/QIufyta88kHRvsL8u6MRyusZyI+bd8ZZ3Dt5d1KSL+iDHj4G4FegpLLw+K99e7YlOWtBQf0m3EZqFnbj5PbCGOEPvx7SVYj5k/GWqUyeAKNL8IT+tc4WuqSaB4zPafnJxfnl76/+fkt3tsMRhiudDDoKxkUIHq93rbHJQR/DQXx9x2XE3p6fn6+8jTgUx6gLodWz/7IJVVJcl385Vo0bcmtVgmbZ0uQBcY9ITVsE++KdvbTBRtZ6EODNa5W6Lv2cqP66Ho=", "base64"));
  res.write(new Buffer("pII5/Q34FHjQdzSyALUr2bQ0KPTEF8yYviPZdMQ05H/cAEOWClve5iNrRKyPdKN6n+tRaq2SBTP5jbMywKrxWCD4SgiWGAwcCJhlRXPfKdvLZqbH5Bi+iI2bA3CAac5cvE+YDDDoOyETButEmoTJEqnRrpJi7gxuc7SSTfmYkfW+9qjflmFkG1xCNvh83a69XEDFHVuR00gzGVR2jIYy0nLAp6Vyi/6lxEqtLSRI2l/IrcCTihqicsxichQ2cHDNFqhfqRgJ/bUn+FKvElKgVRKomazBKHjKYXzhrPYs9L2i/AWczKHmvv16VHHKNGYLaJRLYwnXgq8KR4wyXSFpnb3MsHvMWuZPhkoOLbdMOoObrAGUhFtqWGd/F7QRaoN64gye5hf7jQ40Gys5HDEhhiZNaHU9z5rgKRMC3lHTfhAjxifzNHUGr/KLx4/3HX/HYxxKNeRJoggM3YNU8DpJ1H6w4vkwQq2GzGcBxpw5g+/n8Aq1gpuiZT94SuIwoXDKGVSR1d4QklT60TAmxWdA6Jam336AJE5RC1q2g7daxdxgAG/Ktv1AmUhN0jFOOAndqDRmzuBd2UaCf0dt+8G0EQ4NTlEOA2SBmA8Nl8YZ3EYI76gZnmfN8I5LsydkNZmr4ThSqdBItnYyV/CSbp/o3cqo1mzuhp0PR+oMvk2FgO+4sZsxXHupqFmrVdtVg1eE8R5LEsH9zDuQBfJ1yi1FZRtt34bxvhJKO4Nn9CfboayIcUHRVitcuV4+juxWk1yEj5m8KhGGDELmjqxPQuQDeK4ks7vtNktt5I5TNHbFEMcqYGLVBQs15tLNHy2IWUQrT66cwXfU5xPi1DjmxqJ+AO1PRbcP8lKQkUD/obSkbwzWHVcxBtYcVuXRtniuJc8/TA1q2jhWrv9zuzOD1nI5Ns7gXXH1gUt5SaAlbqHGKrWZWlX6cetsSe9T1Dzkm+S9gwipLA+LdVmqYQMzqwsBhXAVLA2mtiJ+jHgQoOw7VqeYL5h1iBhvJMFXqcz0hvGqJNgmQeQCykO3bE/otSWbVnHaYsuXB3ebYryYcelSYE/Zk1q7SUeb4/r8gTvTLEm2hvBkt7QSZlUbtS4jK13a4iVAV8VWwo9YYpegri+ckZXZkHJL8YGBX7W81mGvhdW5Ct17A8WViZ21dFG57Dq9B+FV63E5lN+o3Y9Yp/v+lte19tjQEmdDFQ5HxJl3cu71Ts+Ovc6K0ank4gxOzsGFmxmboORyXHC21HnKDR8JLHqXPbaajE/5e5jBM693erybQcoB3ow1Yu6oH2Dw7MAY7Hm9k253J4OU7byBl1yLhoGflIofZLJ3YEyeer3u+cVOJk+JyRGTQbUv387e6YGxd+L1ur3eTvZOwIXXECjZsCARA5ir9EE+Tw6Mz67X63Y7O/nsggvvFfcRuAQbIdiI+xN8eF12D4zXjtfrnO9elx2aslrRJuwB5joHxtyx1+v0divymCasDDBBGaCkDfUDPB4fFo/dS6/X6exclN1LUmBIxy7v/EgpATeBEmh84vebhxjuXh4Ywxde7/hsp5HtXmSexHBJiVBjMXmQyYvPwuSHb/thW7Zuhf0HcwGwtk+BRcC91PRQ7JuwMX5Q4FucbHyiwLc479wknwMOYT/bdO/0vNOzPHD6lmtjc/k0O62/ZjnuTWfXGWQUdg+UvpOCvpMDpe+0oO/0QOnrFfT1DpS+s4K+swOl77yg7/xA6bso6Ls4UPouC/ouD5S+znFBYOf4UCnslBR2DpXC0ol0DtWLdEo30jlUP9IpHUnnUD1Jp3QlnUP1JZ3SmXQO1Zt0SnfSOVR/0ikdSg==", "base64"));
  res.write(new Buffer("51A9Sqd0KZ1D9Snd0qd0D9WndEuf0v2Lfcp/2+/DNXLmDL5j1X6xe7bnhvHBHMLq7WJvTYkDvWNPXcuKJBqnPKuS/dDNx1eCaX0FbzVO959pNcwS763zwSH7G7y38JUm1Lux1gofls84YSXlEhsGsWHuefdieHlcVrCxMvnCbEjJjUrEdJq6CYZbK5CoCHrFLAILDIxSC8ZyIWDGpAWrIEKRQGq+gafoqxiBwcZai+qSuH38aEXfWXltnRCtZm4oUh4A6T47i91wUrsloQT1Y/EH9HDN43EuKsqO5SkqKGqEPR6P20vFyyr2/EAWmbTO6WUO5rjXTuSY6qGXkkSb6dqgsZPj4+HZ8brKDA9wSWcrK2XjafeWWRAqRaUgo9oseLStInqUchGsVEM/VGv7ZdP5oibCVltJbDpCscA5gjCVPh3/N1tFFfSUaVBhaJAqcr9sNmpDG612/qTZagsMLXy93iF756DZgq+hc3z16I9Wm94OaK5h4WHTRtyQ2hKBFlvwZdbQahNdzRYNvXr06MtmXiDcams0/F/Y3EjubBOlBSFXn56pVbztsuBgFevKM2atbjayovrGUSNmmuqOCOUTt/F1c+Z1W183kvtGyTvprV1UQrTaCZcSg2bO9IiK080TOD0+As+DWYSS1vsoX+bGcn8yzzoaXyshuBw/gbxrogwn+UGQai7HRYesb6xGXOATyAqPqa+hSregKurPn+e01QrIl2Y4VTNByAJ0wLIRlwHe9x2344BWWVqYM6HG+cxfKrtat3bU7pb9i9HKT+k4fEvZRz6kKFrbUfuR94tWi8CrrruKvX2hqhrugJuYVwCL+hvBRvTmxLOsX3EEsaEw5yvLYzRX1TlEvWR6iZjodJns7E2grHCJXmtReS1x/poQMD8r4bn2otO9DgRyyEUZzhoFSVXuLUO1xaI/z46AIzZFIH5zOmCO9pttNVCLGWCVW1bDOYNnGsmdKZkV+IFUsyPgtmHyl5DoPaLfU+5PHm84AkhW3njJWkOl41rRF5cutTgg1ZQJHjCLVARVXm/zVzVZ0fD89GRnzEOzgN6L6TsYMy6cwQv6c+1lD3YM5DJJS0Oej1xCXBiTuviKXolgPkZKBKj7zi8q1VAKFQPI+gALAo35C1K/p5zavR2U1I9fCkxaK72G2i2hOYMMbY6LmwrLESQCmUEIKTRRxF7EDYQcRdDedqKzZdZ+Eo0kzJiZ0lTNXFztp5dq/EOqWXRc0s7bqvlTKaJEVNNFieRTauJBVWybJ1lDVpCdzQ6vpJfqRQBlPkkDhYasSMysHwGTcxuRg+IS8tnsKx2YI/Aj9Cc0UEOAlnFh2jvJW7LmJh3F3DpbivnqNI+sLK3swjrvjmZ3GLhQ6bGyzuA15FcQzyGpJt+mw0uPJtVGK77VjOO9paJcsfMYd6zUWKArGL0KkFO50rSpDnm1CDUfUhRkv8xuNrPBFuN8HCk12QtNOahA9G1x+wAqO+OW4ul9MBVjCkS3+d169fLWTfFy1P+xIdFqVfjfUdF+UdFNEXjkZfO6eB/uL4+GvmcTsly1SEjJpUCNjC5layieQWbmbchcZ9lboDWZafRVTJql4Roz023gKxYnVyBxZo42IieY2VgmKYCf5aayjOFHczDpiNbBiEhsssDNIqsadY9bbbgRtM2dr0Z0O6O5avJa5WaGzxkU7kZkZjSr0gAujUUWtD80gFu87VlA32Hl6PeLSoFpBDbK/JuC7L1nRp5OU8JC2zkY5XMmIMaAs0roVgEjsW6KqNvwg/SRJLkRZ8wmmJUFFt2PKgWkBgv5b0FZiIakwqQV87LAMExtqg==", "base64"));
  res.write(new Buffer("sQ2vw61Y2ZKONpF9VIKnOZHJgUBvJCXUKi4oLV6v2KShzW52Kciu9PRXx9mLN1J+Lq72i+oobbIloovZvUA5tlHf6V7kk73CthzaPUeTxXPlY2gm6UhwX8yBvtXARgJbHxH2LSb/IrQqUbip5L+T8byNmF0g5qaaIJbK5NvwNl+MVBNoaBbEmAdYAQ9D1CjtzhBwP5oWcejPNYL+dBy6HxFjW5sMEKfGwgiBkX0l43uSfZ6D+Ra1AaHk+BOiFkuofSalypDT9y/ARkxC9+IzomciiZhM42Ua6Osd8+zbHoxsQtEHNffrpDSZ+6/MYBy7l63/yP7s8+2YN+2V35NN+qgdchUKUJrdHQnlT+g9nWkNYG3SQ3Ou0oYQNA0MOXUG+Vtj+dtXmX0meSd/YgLkG/Ilg1DRUVoDZjIHYDGAGbcRsIUBqNzdn56Jq5mBrVL5b0wOfPq0wCYVfO6cwH5EZLa4wr9mi/czhp9b90NfybBG7jMlQ67jYjvxmWZDjnTzlIAmGzMuW596asTcZNmWPDdTNpuVtEyVlPn4HNHeSZiK7CwPU2SFb8r89tZ94fasyWfbs+cJnb937H9ux07pvSnq+X9gt55vsXZso7KDdXLeUyzSdxZlvlkql0xlRbNVkz/Lfd0IhZpt3ajPkCICg8WenYLybC+o0+yQ09AWsRANcNv+mFOPYn7+/zn2KBj6K849SlQL01lH/tlPPj6RLS1ozizpUxxzWVttB2hJTer7aMzfFvX/rEV9Se76MRlWu9iCZBEEmu1Z0SPA+wR9W9g85Jk9jtEYqmnLElSpKfJjG9FSkReEOIOYy9Siyfc3YaptROazZla3GNKPmezUUvso3dIHNUzEAjWrano2dxqp+y1VP+WH+FjCTTs/ccmqnO4MNT3xBaekzcZSoJyu4tt64ejGzKX/WnIqflkroKHft0/b9JHQ5vJ3EFmSvA7yyyfQ6Fycn532zi9PeufHvdPe6coHB32lJhyLzjSVlx/fh6NYwNbHU9SGdsE5qmm3fVH7ZGFRTfNH/mdRAhQcgTkCHrQWZFNVzp05gvDOQB+C9hjti+ITlE/nt2z8hsXYNK1fj3+7qsbwEJr1nk/nr4MmD1ot+LdGm2p59UfVtwDrZwFp0b9pWldwZ9o8gD7w4KrWuW20D32oVOkrKdG37fJgqy3ReiiHP7/zTDAhXS5Gh3emnTDal79RAba5NKjtUwyVxmbBYimYZmn/jqCRT4DGETSqI7c7Y4JJo9W6erReM7ZaXzZFGSjdvqu+BDp4eAxLkt0Ddn0EkgbT1odTOR+Xw1QL+hKkV3wJsvY4r7zb0YElvHxaWztrVYLrA7kZ5sVNtD6o+mnRI0ear47GzmpVEvnOgkYq7CrKwkp9tTL482pKw9KqpPKxlddsG62qpSwy+2NJr4vCQy//YOa1l3+t+H8BAAD//w==", "base64"));
  res.write(new Buffer("AwAELWwevlgAAA==", "base64"));
  res.end();

  return __filename;
};

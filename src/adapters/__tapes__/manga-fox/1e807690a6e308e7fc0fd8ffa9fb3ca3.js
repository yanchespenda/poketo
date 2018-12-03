var path = require("path");

/**
 * GET /rss/komi_san_wa_komyushou_desu.xml
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip, deflate
 * host: fanfox.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 03 Dec 2018 01:42:59 GMT");
  res.setHeader("content-type", "text/xml; charset=UTF-8");
  res.setHeader("content-length", "5294");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=da47d6ae780354f20c1a9b50526e777d61543801379; expires=Tue, 03-Dec-19 01:42:59 GMT; path=/; domain=.fanfox.net; HttpOnly","SERVERID=node2; path=/"]);
  res.setHeader("cache-control", "private");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("x-aspnet-version", "4.0.30319");
  res.setHeader("x-powered-by", "ASP.NET");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-allow-headers", "*");
  res.setHeader("access-control-allow-methods", "GET, POST, PUT, DELETE");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "483256fb7a5e943f-NRT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAEAO29B2AcSZYlJi9tynt/SvVK1+B0oQiAYBMk2JBAEOzBiM3mkuwdaUcjKasqgcplVmVdZhZAzO2dvPfee++999577733ujudTif33/8/XGZkAWz2zkrayZ4hgKrIHz9+fB8/Ih7/Hu8WZXqZ101RLT/7aHe881GaL6fVrFhefPbRuj3fPvjo9zh6XDeNa7RHjY4eT+fZcpmXR4/boi3zo9+rWhTbTbZMr7KUfr9eN/NqnT7Nm/Xju9Li8SxvpnWxagnI0fOszZs2XWTLiywlUKs2r5v0vKrx8iAgH8Ljsli+PZq37ap5dPfuebY8r96Nl3l79/Fd/uZxmTXtk3VRzp5SX0fP6mKU3ttJX1SX6d7O7gH982j3/qOdB+nnX7yhV4LGjy/yZV5nbVUfPcvz2Umd4/d0d/xgvPf4rvvycbHILqj5ui6P7t6djhfn09mSkVjksyK7W1YX1fiiOH98Fy2UUl/wmJ9V7yxhGN8NI/GHDXzSVV1dFjP6ZXKdMjiCNl7k45OymL5N2yq9LJqiHXcIdlexLdp8YZAhCg9QO/3Jqhzv7qQn8/Hug/0bcV0AjbtvCdzvT+B+/6vs96ffBdzvT1is717u7tydEqS7u+N5uyhjY+vgu1pPeDZ6U7d779HO/qOd+zJ1phmNjwcm/wq6NKTbDO/eNza8e9/Q8O492lfONM0+YHjEs9L+g4e3t2F4r/JimyR5+X7D3H34jQ1z9xsb5u6GYb7P8PYe3d/9xoa3840Nb+ebGN7uo/sPvsHZ+/ThNzW8Tx9+Y8Pb2fnGhnfwjQ3v4Bsa3qdk/76x4T34xob34Bsa3v1He/vf2PA+/caG9+k3NrydvQ8e3s5DGd79b2B4Ow/v0vDufw==", "base64"));
  res.write(new Buffer("Q8Pbp/99Y8P7JrwXGd434r3sPton3/PDNacZ3jfhvcjwNnkvJ/OqaigqSJurYtGsi7Z5jwHfe0gc+40N+JvwZ2TAm/yZ9xkeKZuDb2x434QfI8P7RvwYGh55o9/c7H0TfowM7xvyY2h49z79poZ3/5vwY3h4978hP2aPDP03N7xvwo+R4X1Dfsze/W8iVDLD+yb8GBneJj/mSUZh+reLVXpS1NMyf7/R0i/f1Gi/CbdGRrvJrTlOG0qWXKfZpFq36Yvsbbak/wO99xn4vUf3vzGTef8bc3jub3J4XmXF8jp9nWdNtUzJaPnfbR7s7jc5y9+Y+3N/k/sTDDbdJyPmf7txuLsUSH5zw/3G3KH7m9yhL6pFmi1n6dNs9guzxeowW1XNYZNOq+V53iBP+j7jJw39DXi7BzJ+YjRp/yHjP7hL4/8a3tGb+XqUkm/7nXWpw6M0yKffRChmhkeMJe0/eHibvKPXV5TyHRjj66ylMe6HY7z/6P43wMI6xm/EReIxfg0XSaZwzw1vhzj04BGJ1zc0vP1vxEXC8Pa/hov03Xw2Sne82dt5QO7fNxJu6vC+ER+Ch7fJhxgY3uv1koa36w2PxkY+7jfgAerwvhGngYe3yWkYGB7P3t4ODY8sKoa3u/No54Dcom9seN+Ia8DD2+QavG6zeiiA5jHu3nNj3HmIAHrvw1PJZozfiEfAY9zkEQwMjzmUEmt2eOTa0UIATeo3NbxvxAPg4W3yAAaGx+rz3i6ty13L8GiV8d7eN2jg978xA7//dQ08mXM3PEqTU1DyzemXb8zA728y8JuGt/vADY/U5z7Zv2+OOb8x277/NWw7e5+7HnOS7qT0Bw34GxrevW/Mtt/7Grb9zTpn4+dmj2z73qO9byBTrsP7RtIfPLyvkf74oiLNuXcvPV7VMjyKHWiNcfcbM373vjHX5d7XcV3Ur7bDI6tA/PkNzt435rrc+xquC8vezqdueBQ2kFknafymhveNmfV7X8Osx4aHdY5vzO7d+8bM+r2va9b3HpJqccMj7fLNOWX3vjGzfu9rmHVRLZ96wyOfk2zDNyd735hZv7fJrH9+ndXr9xsjTeo3NcZvzLbf+9q23R/e3qN7+492v7Ep3PvGbPve17DtPDxKQrjhfYrZ++b0y943Ztv3voZtZ/3CrosOj4I+2PZ739jwvjHjt/c1jB/HtLRG+iyf6PD2sWr6zfnVe99Y3L63KW4fGB4zJ8meHd4uDe9Tynx+Y8PbH39zAyRYG4b45SJ7u3FJioTQjZOM/N4jSqd9Y+P85ka5YYzPiov5UHo3NsZ7D76R1Scd4zfmyOxtcmSe0/riJCsXA8Nka7hz3xsm8StZw29O4XxjDs3eJoeGMvV5u6Q1l4FxRqeTxvmNBU1735hns7fJsxkYntgNT7Ei3YSU7zc2vG/Mqdnb5NS8bqvp22J5kb7Js3pgrH2WJQeclv+/Mcnc/cY8nN1NHs7xeZvX6U9mZb5sC2Ld9xvu/W/Modv9xsL93U3hvh2ov1A6y64Hhs0CS07503yKYT9AloNsDI3/mxr2N+YJ7W7yhF7W+SqrwdLnVZ1eGiJsnG0apB02KWNa3CCf6ZsadsyB+HrD3uQ+nNZZQ9z9u+99yrNN/08vqoExy1LAA0JVx0wRGY2ZHKlvaszfmDuxu8mdOL3M6+sqZPCTarFYrpfFNEOTAQL0Jp1iNiy3fmPGafcb8zV2N/kab+Z52tZZsUzrYpan82ox5EHyiMlfdCOmxUma8m8sENj9xtyO3Y1uRz6tlrP0xQZHkk3zvZ30RXUpQ6WQbm//0f43J9HfmOexu8nz+H2q7Q==", "base64"));
  res.write(new Buffer("6yr9drZcXmfvOdRvjo+/MS9kd5MX8tWyIFFuNjLv3oNgmLT4tfON+cw735gDsrPJAfmiuizy9CeLsswu3nes35j3sfON5Vvon+GxPqvzPH1TbFZI3XFS2uwbc6B3vjEva2eTl/WSZrO6Ss9vUkhkXO1QKVagFD25mN/UUL8xz2pnk2cFazPJ2vl7DvMbS1LsfGOe1M4mT+rzNdlSYPOe4/zmJPQb8552NnlPQ8PDYu693fTLaavD23+0Q8P75qbxG/ONdjb5Ru85vG9u9m7jCN1ueJscoeN0mdXTommKZkjvsIol78AN9QH5+N/kTH5jjtDOJkfo21lZrqfFkj3632NgsLKKjXWKawyWonZyhbBW+I0N9htzhXY2uULH6aJo1stZXjdttpxRHPt+A979BgzoAwx45+E34hQ9uDslSBsHPK3K2cAgWVr39gMW3nvwjUirDvIb8YZ4kJu8IZjO32t4LqPD/GacPh3mN+IM8TA3OkNlNqWItEqbYkgpRYdKKvibG+o34gzxUDc5Q+iRO3z46aP09bxarWh6OeVEMrvMh3Kp0eGTmvrmhv+NOEk8/E1O0hnN8+u3pJHfj6eRZvnGRvqNuEk80k1uEnrkDh/uP0pjGacX+VX6+wxnz6N02P0mZ/wb8aeYDpv8qddzSqrmZG7IO14Cq/cZLzlY39y8fyMOFo93k4OFHrnDh3uP0rM2NuPeZ+9BDLLT3+DkfyMuGBNjkwt2Sjm36jxtyYxd08DfZ7QH30ieRkf7jfhgPNpNPtjrZXVFS7jl5qg+Ntj7j+iXDx7spzzYg2/E//qUBnuw2f9qaLgEaWCcsi60l77OVzJOStTAYH8DUYSO8xtxwXicm1yw42VF7Funq0IWPImdV3Xe0OrQkPAOjfwbEF4d+TfilfHIN3llX+R1fU0d1hQqLrJmPB7/nA34G/HNeMCbfLOXZorXbZqZWX6fMZND9g2sFuiYvxGHjMe8ySH7Il9UdZE34Gvi83S6Ltt1nZEOy5u2oGXQgfFzkoCiRzt+WghEhPUNrAXq+L8RN43Hv8lNe32V5236smqztrpxsbc72G8gE6uD/UZ8MR7sJl+MHY9ftK7aw7O0rC7JKFdr91l6kW1Ou0co8M1p82/EO2MKbPLOjEOS1wv6Z3MKrDNcWvn8JpIkOtxvxP/i4W7yv06yNj3Jzt9nVjHMb2B1V4f5jThePMxNjtfz9XI6T4vlZUFiTB+8z3ApxHj4TQ33wTfmej3Y5Hq9btezaxgqmt0X2dtsSf8HcizKElekK6RU3pMO35jtevCNuWYPNrpmdQ0LBYH+brEkmX7P8X5jLveDb8whe7DJIXual+uGfmlSUpb+F+FI93bT4/WFjnT30f7uo/vfQCSlI/3GPLEHmzyxY+q4LH7Retj/io303sNH978xDf3gG/O/Hmzyv2icMqcD42Q/k3jXjXPn0f1vJsWr4/zG/KwHG/0sk+q8Ktp5OsuGMvdD4/3GHI0H35ir9WCTq3V8TvooXWV1e33bkVIEcf/hN5IIuC8j3Rt/Izx8H2MlWBtGi1650y8X2ducEtvsVc/qPFs0ZJfTGUUZy3SaNYTLADlYoIkcT/OpkIOWHBFQfQMBBWNGQ/jmiLGBFAPD49X/vQfpd9alDm/vEZaQv4EQQof3jXiUPLxNHuV7Du8bEFsd3jfiSfLwNnmSG4e344aHFQlaEv8GtLAM79PbeY63GN6nmzzHF9lPF4TOdB46iwtKzpN03hAn+LOL0O8bcRh1+N+Iw8jD3+QwDgyPZ3f3nhseNDFN8DfgNenwvhH/kIe3yT8cGN538xkNb88Nj2Tz/g==", "base64"));
  res.write(new Buffer("N8q834hTyMPb5BQODE+Y05NN0jsQz2/AE9ThfWNW9NNNNvQ9hvfNqp5vxAHk4W1yAAeGx7IXMRzf3PC+EX+Ph7fJ3xsYHjt5FGi64VHejLyab25435hX8+nX8GoGhkfK5oOHty/D+0a8mn0Mb5NX83m1rhfksXJwkuti/cCYX69JIGkC7Zh3kDH7RqZUxzzs6rzvmDe5OhKhIOffXq/m1WDWjMe7d5/Gu5Tx7lFO4Zsc7/1vxPfBeO9v8n3evN8oycX5Rmf1/jfi4vAoN7k4x+mkaJERI3zWy1WZZwSqpdUcyqcsLwYGz2K8BwdIBw8Z/maUsA7+wTcTivLwCdYGAnAEOjBOXnunJL4TXVm0+wbH+c2NcsMYX86rtkppfW76Nq+HMkdiWaGndFJ3yLJ+oxz9jbh9PNhNbt8zYd33GubuN+L+6TC/Oc7dxLevV1XdNiSoNK1Iar+k1NFgnjc66G/G59VBfyNOIQ96k1MYHTSZfL/N5kF/o9L7jbiKPOhNruILWmZ9L27+RjUxsZS0/+AxbvIX38zzOk+LJm0q8qvmJL9IA9Jyc52e08LUeDym1uv3IQLlgL85IhCLSfsPJsImr/KkWi/b+jr9vKjpe/+bzUOl6O6bE+RvzJm8v8mZpPlOc1lbb9aLBTmWE0r+vh0YNWckaPHGjXrn0f43yeX735hLub/JpTxOyRDTYsZQij86zm+Skfe/Madyf5NT+ZPFLK/Siw16KzpS4uNvYKT3ZKTfiGd1DyPd5Fm9FuZ9ZgwSaUv/azte8Zg/Tb/IrnW85DGT1/HNjfcbca54vJucq85432e034zl1dF+Iz4Wj3aTj/XlhFahvs5Yv1FO/kZcKx7rJtdqYHgcAtFg3PD2Hu1/o1P5jThRPLxNTtT7DI/k8huwpzo80gjS/oOHt8l/ep/hkd//zc3eN+IZ8fA2eUbvMbz730zIqsP7RrwhHt4mb+g9hrd/8A0O79434vZgePc2uT3vM7xvxtvR4X0j3g4Pb5O38z7De/hNDu8bc3HubXJx3md4tMz7jWnOe9+YR3Nvk0fzPsP7Js36vW/Mhbk37MLQgN5jeN9MRLUnw/tGvJY9DG+T14I48ttZUaevs3IwV8/BBq0x2TQu+Wf3DsgQfmOD/UZ8GB7sJh/mrP2F2WJ1mK2q5rBJX8+r1QqJkjfFYiiBPTTyb0BIdeTfiHvDI9/k3rzJZtmy2n67XvoUoOCxqOr028XFPH2aXW+MNX9WifCNOEFMhE1OEHj9SVlVs/TLrJ0PDJYTRPd2SLBrGSwCa3Jovzle/0ZcIh7sJpco5PVXWbEkVn+fMX8zbqCMee8b8ZMw5r1NflI45pfr99VnO9/YeL8Rx4nHu8lxelOtSXJfEEeXeZM+W5cl8oFfFuU4fUKLkq9XxfSa1iVn6WtKCqc/mV1cFJsTSj+rNPlGvC2mySZvSxMsXy2L86pevN9g7z38xgb7jfhePNhNvteZ4/dF+ipf/q4peQ1+gxtHfPCNjfgbccd4xJvcsf6IyXXwG9gRv14vNa/kKbVv0kPbI1pL+w8e8SYPrT9ichn8BnbEkknbdyOmpXao8W/MTu8RraX9B494o5vWHfH7jPebNNV7RGlp/8Hj3eScfZu1c9EU7cBAOdjYO6BM6kQGClb+ZrJQOtBvzAHb2+SAPSvaZd406em7bFEsM3w2MGKeWvJInuZTjPjTdGeX0/3fHCt/Y17Y3iYv7OX8uimmtK7xNYf8zSSKd3nIu9+IE7ZLQ97d5IS9zoq22rjSvHufcNNB7tLy6zfDyTrIb8Tz4kFu8ry+W1cUOL5YLyZ5vWmohJUdKg==", "base64"));
  res.write(new Buffer("Ce0uaeNvbqjfiEPFQ93kUJ2UGYksjYIU1CDzRgf7zcirDvYbcah4sJscquP0JC/L1bxaDmUEYiP9hoyOjvQbcaR4pJscqc8rigfTtkpfT+dVRU38LzeO9puV12/EieLRbnKiXrfZRZ6Sir2YbzSyhNWL6lKGSuOE9/TNDfUb8Z54qJu8py+u02dF3bTpaV1T7Pc+o/1G2fgb8Z14tJt8p8+r82ENHBvjN8q834jbxGPc5DYF/vCyaimkT4+bhtRyMegbR8dO3sQ3p5C/EQeKx77JgXqa1W8pQdm0VX09MNQvKgR6++mX01aHuvvNCu7ON+Y47WxynE7mRTkjXTyDnsoHJTc6XJLcb2xmd74xF2pnkwsVcPXraVbn7zVikuNvbsTfmCe1s8mT+nKZp19Udb5pwSE6VpLbB9/YWL8xR2pnkyN1ln43W7bwL45XVVldFD8YGrHkae5RO43iKej5Zmf3Axyqzog3OVRuxCfzbMjJiA6WhPf+NzbYb8yf2tnkTz3JZmnWpm/mxVA+eWik+9/YSL8xd4oWgYdH+nqVT9v6vZj3Gx3lN+ZGUbJieJQv82yan6/pO//TG4d57xsb5jfmSdE/w8M8Jn+oXlA65mVeN4PBrDfaYLTfgEOxI6P9RnynHYx2k+8Ee0MvDOmigSWB/QHevTudZ8tlXtJvddMc/T83u951GqEAAA==", "base64"));
  res.end();

  return __filename;
};
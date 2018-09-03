var path = require("path");

/**
 * GET /r/a_trail_of_blood/15/4622/24
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip,deflate
 * host: readms.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 03 Sep 2018 01:49:17 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d4e01d8609035ea51404c749c5ed68fbf1535939357; expires=Tue, 03-Sep-19 01:49:17 GMT; path=/; domain=.readms.net; HttpOnly"]);
  res.setHeader("last-modified", "Thu, 12 Oct 2017 16:46:08 GMT");
  res.setHeader("expires", "Mon, 03 Sep 2018 02:49:17 GMT");
  res.setHeader("cache-control", "max-age=3600");
  res.setHeader("vary", "Accept-Encoding, User-Agent");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "45448f18bcc16bec-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+w8aXPjNrLf/St6mFQsVUxRki0fY0upuZKZ2mQyWTtTL5vaUkFkU4QFAgwAStZu5b+/al6iTluTcdb7XjRVYxIE+kaj0Wjy6tnrH1/d/PLhDUQ2FoODK/oDgslx30HpUAOyYHAAAHAVo2XgR0wbtH0ntaF77hSPLLcCBy/gRjMuQIXwUigVQKcHLnxgY4TuCbjwA5NjBtdWI4uvvHxMDbRkMfadKcdZorR1wFfSorR9Z8YDG/UDnHIf3ezmCLjkljPhGp8J7HdabWcdVIDG1zyxXMkatL8jCyDUiBBn9CgpuEQQfILwnunUqiN4KZD50RH8KBE+cPTxCN6m0qKGu/KCyYAAzCFWGlsldsHlBCKNYd+JrE3Mc8+L2Z0fyNZIKWusZgnd+Cr2QiWty2ZoVIzeSeus1fZ8Y5aaWzGXLd8YBzSKvmPsXKCJEK0DXFoca27nfcdE7Pj8xJ1Nw/9Jfkv+8Y+PP333t9ObF1Hvw0fx3Y/hT+/fXqvX3bvRm69/mny4e/XiW/H+DU7Vm7fH16Jt+Oij/+NPH+V7B3ytjFGaj7nsO0wqOY9VapzBQY23jBDuk0RzNr2QTem+xX3lgJ0n2Hd4zMbo3bl5P2+wOt5ESls/tbA3oAxS+atL22PGoDWZCDO9mszMSHrfXFwcn3cuuu2Ti866JHPicgqfuS68vfnh+x6YiMdHECoN796cuudg0oSMkkw774ACY5TWgOsOqsG/8hCEhXdv4OKfRWtugWC0v6Dx1ng0z3om4tPWrXEGV17erYT0K8qAh/8k0EtQcqFYvLPeLZuyvLXggH4zLgM1a/lxchNhjNCHfy8JbMT8yVirVAbP4fCL8Jj+HR4tdUk0j5me0/Pj87ML39/8/AbvbAYjDFc6GPSVDAoQvV5v2+MSgr+Ggvj7nssJPT07O1t5GvApD1CXQ6tnv+eSqiS5bCl1NZQT07Qkt1olbJ7NRxYY97h1a76Z9k87HWebsFd05eUO8uA=", "base64"));
  res.write(new Buffer("aqSCOf0N+BR40Hc0sgC1K9m09A30xBfMmL4j2XTENOR/3ABDlgpb3uYja2pdH+lG9T5Xo9RaJQuK8xtnZYBV47FA8JUQLDEYOBAwy4rmvlO2l81Mj8nJfxEbNwfgANOcuXiXMBlg0HdCJgzWiTQJkyVSo10lxdwZ3ORoJZvyMSNHfOVRvy3DaJq7hGzweN2uvFxAxR1bkdNIMxlULomGssHBlRfwaancon8psVJrCwmS9hdyK/CkooaoHLMwjsKdDa7YAvVbFSOhv/IEX+pVQgq0SgI1kzUYBU85jC+c1Z6FvleUv4CTrY35Mn01qjhlGjPDH+XSWMK14KvCEaNMV0haZy/z0R6zlvmToZJDyy2TzuBF1gBKwg01rLO/C9oItUE9cQYv84v9RgeajZUcjpgQQ5MmNLteZ03wkgkB19S0H8SI8ck8TZ3B2/zi2bN9x9/yGIdSDXmSKAJD9yAVvEsStR+seD6MUKsh81mAMWfO4Ic5vEWt4EXRsh88JXGYUGTkDKogaW8ISSr9aBiT4jMgdEvmtx8giVPUgqbt4INWMTcYwPuybT9QJlKTdIwTTkI3Ko2ZM7gu20jw19S2H0wb4dDgFOUwQBaI+dBwaZzBTYRwTc3wOmuGay7NnpDVZK6G40ilQiP52slcwXd0+1zvVkY1Z/PF1Hk4UmfwbSoEfM+N3YzhyktFzVut+q4avCIi91iSCO5nqwN5IF+n3FJstdH3bRjvK6G0M3hFf7LdxooYFxRt9cLV0svHkd3qkosgMJNXJcKQQcjckfVJiHwAr5VkdrffZqmN3HGKxq444lgFTKwuwUKNuXTzRwtiFiHJ80tn8D31+Yw4NY65sajvQfv3otuDVinISKD/UFrSNwbrC1cxBtYWrGpF27JyLa38w9Sgpj1gtfQ/9nJm0Foux8YZXBdXD5zKSwItcQs1VqnN1KrST5tnS3qfouYh3yTvHURIZXlYzMtSDRuYWZ0IKISrYGkwtRXxY8SDAGXfsTrFfMKsQ8R4Iwm+SmWmN4xXJcE2CSIXUB66ZTs7ryXZtIrTFhu3PLjbFOPFjEuXAnvKhNTaTTraHNfnD9yZZkmyNYQnv6WVMKvaqHUZWenSRi0Buiq2En7EErsEdX3ijKzMhpRbigcGftX0Woe9FlbnKnTvDBRXJnbWUj/ltOv07oVXzcflUH6jdj9hnu77W57X2mNDS5wNVTgcEWfe8YnX656de50Vp1PJxRkcU7brxYjJoNrwLHWdcsNHAou+ZY+tDuNz/u5n79jrdXu9newdgwvvIFDy0IJEDGCu0nv5PH5ifHa9Xrfb2clnF1z4qLiPwCXYCMFG3J+gvZfX7hPjteP1Omfdnbx2yGS1ouj2HuY6T4y5ttfr9HYrsk0GKwNMUAYoaadyD4/tp8Vj98LrdTo7J2X3ghQYUmr62o+UEvAiUAKNT/x+cx/D3YsnxvC512uf7nSy3XNiGAyXlGEyFpN7mTx/Ykyeeb12r72TyTNw4bVS+l7ezp4Yb6der93d6XK6p+DCS5R+dC9zp0+MuZ7Xa7dPdzJHR1+vNKedjoAPGo1J9b1+p9t7FEYfvuOHbYm6FRHcmwaAtS0KLGLtpab7wt6EjfFBMW9xNPGZYt7y2HKTgJ5w+PpoNt/peSen+YT+lmtjcwE1Os0/Z07+9fvr99/0e/h8unAG2VTqXPy5M+nBFHbbBYXd9lOlsFNS2HmqFHZLCrtPlcLjksLjp0rhSUnhyVOlsFdS2HuqFJ46g+9ZtXp3T/dcvu8N6VZvF5EOxXF6R4RTC1ITjVOelR492HS/EkzrSwq0p/uLvoZa4p11Hg==", "base64"));
  res.write(new Buffer("ru33eGfhK024d6OtHUIt55thJQaODYPYMPesez68aJfVBKyMhpkNKdishEyZ7U0w3NphVUXQW2YRWGBglFowlgsBMyYtWAURigRS8w28RF/FCAw2nntVl8Tts4MVjWcFS3VCtJq5oUh5AKT9LC++IWu+JcKH+hHFfYq44vE4lxXtV/JNAxRlVx6Px62lojAVe34gi71N5+SidDCtRI6pzmwpat9M2AaVHbfbw9P2us4MD3BJaSuTZePRwxYzCJWic7lRzQwOthWZjVIugpUCs/tKyb5sOF/URNhsKYkNRygWOEcQptKns5hGsygsmzINKgwNWujDl43D2tDDZit/0mi2BIYWvl7vkNVyNprwNXTalwe/N1tUddlYw8LDho24IbUlAi024cusodkiuhpNGnp5cPBlI69/a7Y0Gv4vbGwkd7aJ0oKQy8/P1CreVnn6s4p15RmzVjcOszrFw6PDmGk6BCaUz93Drxszr9v8+jC5Oyx5J721imOpZivhUmLQyJkeUb2feQ4n7SPwPJhFKGnCj/J5biz3J/Oso/G1EoLL8XPIuybKcJIfBKnmclx0yPrGasQFPoesCoz6Gio7CKo6yfx5TlutJm/JwuloGUIWoAOWjbgM8K7vuFSiqbKNOmdCjXPLXzoDX3d31O6W/YvRyk+piGDLGVw+pKgg2HEQl/eLVivyqq67Ku98oaqCuoCbmFcAi8NQwUZUjPoq61ckhTackn5leYzmssoM1evXloiJTpbJziqss1NkKhdWeWFXXn4NzM/OU6+86GSvFE0OuTgTXaMgqWrvZKi2uPTX2bFRxKYIxG9OB8zRfrPtQHphAVa5ZWmCM3ilkdYzJbNqC5BqdgTcHpq8uJvqs39LuT95tiEnk6zUh2atodJx7QSeS5daHJBqygQPmEU6kS6vty1YNVnR8DyftTPsISugUuO+gzHjwhm8oT9XXvZgx0Auk7R05PnIJcSFM6mLr+iVCOZjpESAuu/8olINpVAxgKwPsCCglCWVS/+Wcmr3dlBSz4cVmLRWeg21W0JzBhnaHBc3FZYjSAQygxBSbKKIvYgbCDmKoLUtxbbFaj+LRhJmzExpKi0rrvbTSzX+PtUsOi5p50PV/LkUUSKq6aJE8jk1ca8qttlJ1pBVx2XW4ZX00hkzoMyNNFBoyIvEzPoRMDm3ES1QXEJuzb7SgTkCP0J/QgM1BGgZF6a1k7wlb27SUcyts6Wyok7zyMrSyy688+5wdoeDC5UeK+sM3kF+BfEcksr4NmWTPTKqjV58qxvHO0sVUmJnYn2s1FigKxjVZeZUrjRtKgpbrQjKhxTVcd9lN5vZYItxPo6UmuyFphxUIPq2uL0HlZ1xS/H0PpiKMQWim/xuvZRs6754Oer/1JBotUTvr6hov6joRRF45DWMung54U+Phn5gE/JctUhIyaVAjZwuJWwonkFm5i3Ils6yt0BrMtfoq5g0S8M1Zq7bwFcsTi5B4swcbUROMLOxTFIAP8tdZRnDj+Zg0hHNgxGR2GCBm0VWNeqeNVvwQtA2d74a0e2M5irjtcrNHJ8zKJYbkbnR7NgMuDQWWdB6aAC3ePWmgL7Dy9HvF5UC0whslK1vCrL3yRitdJoyFtrOwSifMwExBpxVQrcKGIl1U0Tdgh+ljyTJjThjNsGslKjoflQpIDVYyH8LykI0JBUmrZiXRUlhalONLXgXbsXKlnS0ieyjEjzZRCYHAr2RlFCruKC0qHXdpKHNy+xSkF3p6c+OsxflwT8XV/tFdZQ22RLRxexOoBzbqO90z3Njr7Ath3av0WTxXPkYGkk6EtwXc6B3YNlIYA==", "base64"));
  res.write(new Buffer("8xPCvoXxL0KrEoWbSv4bOc+biNkFYm4qA7FsgrIFH/LJSHVEhqwgxjzACngYokZpd4aA+9G0iEN/rhH0h+PQ/YgY25oxQJwaCyMERv6VnO9x9t4z8y1qA0LJ8WdELZZQ+0xKlSGn94rBRkxC9/wR0TORREym8TIN9Fb0PHtnmpFPKPqg5n6dlAZz/5U5jLZ70fyP7M8eb8e8aa/8kXzSJ+2Qq1CA8uzuSCh/QkXT0xrAmtFDY67SQyHIDAwt6gzyEv68FD7zzyTv5A8YQL4hX3IIFR2lN2AmWwAsBjDjNgK2cADVcveHLXE1M7BVKv8fkwOfPy2wSQWPnRPYj4jMF1f413zxfs7wsXU/9JUMa+S+UjLkOi62E49kDTnSzSYBDTZmXDY/t2nE3GTZljw3UzablbRMlZT59BzR3kmYiuwsD1NkhV+U+e2t+8LtWZNH27PnCZ2/dux/bMdO6b0p6vl/YLeeb7F2bKOyk3VavKdYpO8synyzVE6ZyotmsyZ/lq91IxRqtnWjPkOKCAwWe3YKyrO9oE6zQ05DW8RCNMBt61NOPQr7/L9z7FEw9Gece5SoFq6zjvzRTz4+ky8taM486Uscc1mbbU/Qk5rU99GYvzzqf61H/Y6W62fkWO1iC5JFEGi2Z0WPAO8S9G3h85Bn/jhGY6isLUtQpabIj21ES2VeEOIMYi5Tiybf34SpthG5z5pb3eJIP8XYqaX2haClt5tNxAI1q2p6NncaqbstVT/lN41Ywk0rP3HJqpxuDTU99wWnpM3GUqCcruLTUeHohZlL/53kVPyyVkBDv29ftujja43lT0uxJHkX5JfP4bBzfnZ60ju7OO6dtXsnvZOVbzj5Sk04Fp3JlJcf34WjWMDWx1PUhnbBOappt3Ve+wpUUU3ze/5nUQIUHIE5Ah40F2RTVc6tOYLw1kAfgtYY7Zviq14v5zds/J7F2DDNX9v/vKzG8BAa9Z4v5++CBg+aTfi3Rptqefl71bcA62cBadG/YZqXcGtaPIA+8OCy1rlltA99qFTpKynRt63yYKsl0Xoohz9feyaYkC4Xo8Nb00oY7cvfqwBbXBrU9iWGSmOjYLEUTKP0f0dwmBvA4REcVkdut8YEk8Nm8/JgvWZstb5sijJQmj6ZVf/C2uD+gSxJHjBq19fOCAJtgjgV9nE5TLWAPhx6h5erj/MavB0dWMLLp7VZtFYvuD6Qm2Fe5kQzheqgFj1ypPk8OdxdukrS313cSEVeRYlYqbtmhmFemTcszVAqJVt5CeqwWbWUBWe/L+l4UYTo5V8yu/LyT0L+LwAAAP//AwAlZGDBI1IAAA==", "base64"));
  res.end();

  return __filename;
};
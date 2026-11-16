import type { Picture } from "@/types.ts";

/* export const recentPictures: Picture[] = [
  {
    id: 1,
    slug: "birds-in-the-horizon",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794748044/P1030534_hqwis9.jpg",
    title: "Lost at Sea",
    location: "Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAYAAAAxrNxjAAAA7klEQVR4AUyMTUsCYRSFH18L86PCxDSN/kUQIUj90nZtW4RggUuDFgVRG3dhG02bcpwvZ973dgdatHi455x77jW35w0Z9Joy7Lfk7uJQ7i9bSlsG/Y7c9LpyfXYsV6ddMS+e8LiE8afwtCry6m+phtFcGC0sw2XKyEsxb5FjEjumqWBPDojrZWaFIu+J8KF8p44vxSys4GWO+cbx8DxjPFkx9S2REyIRwnwqJsrUWEeg5fBPh5kltJZYs0Qfxbo3eSFQEWiw/sePHvm5d7B2BUxUqhCWqkQ7NZLyLpvqHm6/znajSaV1RKnZptbu8AsAAP///uj8xwAAAAZJREFUAwBpVJ7k01zUfgAAAABJRU5ErkJggg==",
  },
  {
    id: 2,
    slug: "the-blue-moon",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794748888/P1030571_r82pak.jpg",
    title: "The Blue Moon",
    location: "Champayan Lagoon, Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJCAYAAAAGuM1UAAAA+0lEQVR4AZSOO0/DQBCEvztHroIboMGAxENAQg2i5iU6kPgDUAANPyxGFBS0QUEIIkqKoLQolXEqcwRjEps7ER1EpMnqRrePmd2RhYKbjwLJkBBCIIQYMoEBgeM4TE6Ms7y0yML8HGPF4j+hFUgpmZn2OTzY5/T4iPOzE3a3N/E8j79hBa7rUi6V2Fhfw5/yWS2vsLezxaxeIoWlDVpKPlPiuMN750P/iq9ulzzX+4VG/1lpmqY0nptUb+94ajSp3T9yeXXNS6tFlmV9Or8XTDNqv1Kt3VC5CKgEAQ/1OkopSzaJvWCKrNdDvcWEYUjUjkiSRFsynsz0B98AAAD//6EI4OgAAAAGSURBVAMAU2NcsPgkH48AAAAASUVORK5CYII=",
  },
  {
    id: 3,
    slug: "a-monument-of-god",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794717706/IMG_8681_fjv077.jpg",
    title: "A Monument Of God",
    location: "Quéretaro, Quéretaro",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAKCAYAAABmBXS+AAAA0klEQVR4AZTNu2pCQRSF4X/mOE40JGFCsIghIV3yAMF0gVRWNoKtYGPvU1j7BIJYWNiIjba24rURBO3EShD0gBc4jgiChYqbvbqPtSTgXcseWXP5b0dSCgJ3CinESfVJUzj0SCr+g3kKnkcPQYXfkWitEEIc4bFJ+xWJWITI7xfvYWMRNgdo5wUfr89kkv9on8Z1t+SyaaJ/37yYAI4USM/zmM2XtPpjRqMJ7faQfL5KyNzz+WZQPgeJvYW7ptEZU6p3KFRaFCtNyrUe3cGU1WbLDgAA//9yaeEHAAAABklEQVQDADI0NsIzVCThAAAAAElFTkSuQmCC",
  },
  {
    id: 4,
    slug: "a-waving-sky",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794771114/DSC00106_nq1t1c.jpg",
    title: "A Waving Sky",
    location: "unkown",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAABHklEQVR4ARyOy0rDQBiFT6dN05hL8QFFEFFcCG4ERQURfAIXFroRBN/ABxC8bEV0oeii1Ka0TSYz00lSzOV3yOLjv/DBOWzzaEB75zd0cHlH+xe3tHs2pK3ja9o4vDJzQDunQ9o+GRKzLQue66K/HsAPXPi+h8Dz4DoOivIP2SpHmqVgZVU1SyIS1HWJvr+GwNCzu7A6HWgjCSXB+q6PyshcSnCpECcKFRE8zwVjbbRZC2VVgglt7FYLjmWbZxsqzRDOIgip0eva6NkOuqYeG43HGIW/mPMIEY+xMHApmnuRxE20Tk1HmURQIkauBfhiirrIQcUKWbqE1gp5noGoBpt9vWDy9oDw/RHhxxM+n+8x/3mFmn5DGDSfYMkn+AcAAP//RL5VFAAAAAZJREFUAwANg6PkhTbfIQAAAABJRU5ErkJggg==",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794749823/P1030529_emshlh.jpg",
    slug: "looking-for-food",
    title: "Looking For Food",
    location: "Tesoro Beach, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJCAYAAAAGuM1UAAABQklEQVR4ATSOTVPCMBCGX4IOoxwK4sWDHvzrjjowMggU5Xd4URAZKDAt05Z+UCBtksYt4uFNdjfPPhM2HPT1cGDqd9PUb31TD3p9bXa7utd51Z2Xtm43W7r19Kybjw/HMJ5ypFlGEUiFBM8EuFBUKwiVQ+YaSgNSgXoFdiAozSQBRQQNc3pUUAWYA3ShWCgi6WAZGTNaEqSQZCzAPC8dwX9Ya009hQbsCCsyEpzT4C9kPtWFQJJZEMOlBPOiLZwggBtv4W93pyRYBxHszQbz1RKThYWZvcZkuQJz4x3caA/L8fD1M8doOsd05WCx9rB0XHhhjB0XiA8SYcLBzs/OUGYMnKdg5TLq9QYuL6owDANXjWtUqgZ8+oXrhwijA5gT7GlboVSuICHLx+cYo5mFb8vBeGbD9hOUKjXUGje4vbvHLwAAAP//q+cXOwAAAAZJREFUAwBn8gzeaw2ztQAAAABJRU5ErkJggg==",
  },
  {
    id: 6,
    slug: "the-house-of-god",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794762365/8DF37CF3-7FDB-4578-84AF-5B5344CCF029_1_201_a_utsthi.jpg",
    title: "The House of God",
    location: "San Juan de los Lagos, Jalisco, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAKCAYAAACJxx+AAAAA+UlEQVR4AVSOzWrCUBCFvzs3N2nUhBhjolGEgIX+LAp2UYpQ+v7P0E13tmBdNKaIJbfjsgNnmDl8MxyBwBsiVeyNcR7kn8RgCIKQKBrqZFUOtKNlDBe8JxlYVlWMveAihM4pYhQBETXXzYzt0y1hJBRpSFNnKAHaJLAWa4SP3Z48ianLjM3DNXk2wnuPuMAx1aU7dqzrMdPxiP3ngVK9y7FYG9Is57w+P5IkqQYOqMqC7eaOqyhGVouan5On7U5E4YB0XOhrxzBOqCY5UkxKvrszfW+oilwDLoijVPNkvGzukbf3lt3+zGyScdMs6Y+/fLWOQyvMyxl/AAAA//8qhWULAAAABklEQVQDAAVdOKLKn1iAAAAAAElFTkSuQmCC",
  },
  {
    id: 7,
    slug: "the-big-wheel",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794762446/IMG_4279_ptptla.jpg",
    title: "The Big Wheel",
    location: "Carpintero lagoon, Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAKCAYAAACJxx+AAAABF0lEQVR4ASTNvUrDUADF8X9ukyY3MU3SNqGJrekgrYiTCOri4nO46aLiA/koPoMf4KROtmipYKm1INdqe406HDgcfnAEnSNN90SzeqZpF2mdaprHmuxQkx5ogVsFJwTLh5L3n99uR8UeIbA8yo6kHtrUQgtblgtkg70EbgE8z2G3Y7O+/MVmV7C/7ZLnDsJz/5BoJB5qDqaUBTLZyr/ZaAuaDRvD9hBpEoCMmBoho5nDRBmUyg5x4mMGxUX19oK0NGat6SKDmHqa08gSFn4ds1aAp5drVO+KYPxAPHtEvfZZUkNC442953PEvBLxYfk4/TsWkwFq0MMY3rNTuiGLZohWLFip9fnMRrzrS2QSYgQuSk2RFZcfAAAA//8ft8A4AAAABklEQVQDAJ9FRxpnSvUPAAAAAElFTkSuQmCC",
  },
  {
    id: 9,
    slug: "a-dad-with-his-son",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794762567/IMG_4467_skpgs0.jpg",
    title: "A Dad With His Son",
    location: "Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAKCAYAAACJxx+AAAAA50lEQVR4AVSMMU/DQAyFP/sKSRN1QEKwIkWCFVFYmBhZ+N9siKkjKFVVRItQIGmTS5rDN3K6z37v2bKmaRKybBryPPvH1LLEZqrqUKeoGi5qw7RzioteTagoImKAVcQWYuZUURWJKbEdWbGPxigKBMWeeWaTCU+XBfP5NTdXBefm42KEk1G4dTl3FwWPD/cUp2fMxOECaHoYOTbxlijPvxXL95L19pvWjsdcvUA1gZ+hY1EueXldUG4+qUOPl4D2Y6Azdt6z2mxZfaz5qmuaYaC36zqMB3oz+86zaz1Vs6dpO9p+IM7+AAAA//9oXyoKAAAABklEQVQDAOmgXSYZdZ5YAAAAAElFTkSuQmCC",
  },
  {
    id: 9,
    slug: "a-storm-is-coming",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794770492/DSCF6586_pzdl0k.jpg",
    title: "A Storm Is Coming",
    location: "Tesoro Beach, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAYAAAAxrNxjAAABGklEQVR4ARTOu0rDYABA4WOgSE1b7aJtsejg5Cw4izgLIj6Bg0/g4i6IT6A4uIgolE5SECcXrVYcrAqiEmqTJr0kTZNU0yT+1uGMBz5pYWlVLK6si+W1TbGxtSO2dw/F3kFB7B8VxXHxWpSrirh/UYT0KyL8bxfbNGg16miaSr/vMZFMMD+XJyXHEVGIlMnmkOUEYTDA6hjUlHecXpexeAxGwHYcjI6FNDM7TSY3xXgqiRwfJTuZJp9Nk5Rj2D2bVquNY3eRLi9KVG5v+Px4Q60pPD0+UDg75+S0QKl0RfmuwnP1FckdXp7j4rkejutimSZGQ0NXv6jXa6iahqbrSFEYEEX/hUNngD/w+fF9mrpG02jQbhp0LZM/AAAA//+1/8+iAAAABklEQVQDAFeLmXT6MyxiAAAAAElFTkSuQmCC",
  },
  {
    id: 10,
    slug: "airbone",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794751055/P1030640_ui369c.jpg",
    title: "Airbone",
    location: "Champayan Lagoon, Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJCAYAAAAGuM1UAAABcElEQVR4ARyPzWoTYRiFn04nEzBJk05ooFRtuhCN4v21CC5ci3gXbRpEFEXERZrUhRXrDyLqFUiaTGbm+5tkpsPnlyweDrzv4RyOd9j/Yo9Ov9rDFYNv9mjw3T568cM+fvnTPnn9yz5999s+//DHPnv/d61etxWw2wzYD6scOG41fe62fR52fB7sVLjTrtBtbnLQ2uBmDbzALulUr2ltFmtCP6duDX65YKPMKfKc5WKB0Bkqy/FEEjGfRyiRkOmUsliSFwWZMYg0Rri/ShNKI7BLiXd5+Yrz0YDx2QnnZ33Go2MuPr/l08UbRsM+H8fuNjxmPDxxnOJdXU1cw5zpLGIym/FvMmE6jUhiiZQZSapJncapYRaleGH7PmGnx/bOPcJ2j+2wR1DdpRJ0aGzdptHoUt/a50Ztj1p9D08rg9EOp0oql7pilS5QSqGkQIsEoyRaugZtNMqNkzJBG+nGaoxRa7SMnSl2ZuHugvI65z8AAAD//yMwMcAAAAAGSURBVAMA/dXkaDBXjU0AAAAASUVORK5CYII=",
  },
]; */
/* 
export const gallery: Picture[] = [
  {
    id: 1,
    slug: "a-monument-of-god",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794717706/IMG_8681_fjv077.jpg",
    title: "A Monument Of God",
    location: "Quéretaro, Quéretaro",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAKCAYAAABmBXS+AAAA0klEQVR4AZTNu2pCQRSF4X/mOE40JGFCsIghIV3yAMF0gVRWNoKtYGPvU1j7BIJYWNiIjba24rURBO3EShD0gBc4jgiChYqbvbqPtSTgXcseWXP5b0dSCgJ3CinESfVJUzj0SCr+g3kKnkcPQYXfkWitEEIc4bFJ+xWJWITI7xfvYWMRNgdo5wUfr89kkv9on8Z1t+SyaaJ/37yYAI4USM/zmM2XtPpjRqMJ7faQfL5KyNzz+WZQPgeJvYW7ptEZU6p3KFRaFCtNyrUe3cGU1WbLDgAA//9yaeEHAAAABklEQVQDADI0NsIzVCThAAAAAElFTkSuQmCC",
  },
  {
    id: 2,
    slug: "the-blue-moon",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794748888/P1030571_r82pak.jpg",
    title: "The Blue Moon",
    location: "Champayan Lagoon, Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJCAYAAAAGuM1UAAAA+0lEQVR4AZSOO0/DQBCEvztHroIboMGAxENAQg2i5iU6kPgDUAANPyxGFBS0QUEIIkqKoLQolXEqcwRjEps7ER1EpMnqRrePmd2RhYKbjwLJkBBCIIQYMoEBgeM4TE6Ms7y0yML8HGPF4j+hFUgpmZn2OTzY5/T4iPOzE3a3N/E8j79hBa7rUi6V2Fhfw5/yWS2vsLezxaxeIoWlDVpKPlPiuMN750P/iq9ulzzX+4VG/1lpmqY0nptUb+94ajSp3T9yeXXNS6tFlmV9Or8XTDNqv1Kt3VC5CKgEAQ/1OkopSzaJvWCKrNdDvcWEYUjUjkiSRFsynsz0B98AAAD//6EI4OgAAAAGSURBVAMAU2NcsPgkH48AAAAASUVORK5CYII=",
  },
  {
    id: 3,
    slug: "the-house-of-god",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794762365/8DF37CF3-7FDB-4578-84AF-5B5344CCF029_1_201_a_utsthi.jpg",
    title: "The House of God",
    location: "San Juan de los Lagos, Jalisco, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAKCAYAAACJxx+AAAAA+UlEQVR4AVSOzWrCUBCFvzs3N2nUhBhjolGEgIX+LAp2UYpQ+v7P0E13tmBdNKaIJbfjsgNnmDl8MxyBwBsiVeyNcR7kn8RgCIKQKBrqZFUOtKNlDBe8JxlYVlWMveAihM4pYhQBETXXzYzt0y1hJBRpSFNnKAHaJLAWa4SP3Z48ianLjM3DNXk2wnuPuMAx1aU7dqzrMdPxiP3ngVK9y7FYG9Is57w+P5IkqQYOqMqC7eaOqyhGVouan5On7U5E4YB0XOhrxzBOqCY5UkxKvrszfW+oilwDLoijVPNkvGzukbf3lt3+zGyScdMs6Y+/fLWOQyvMyxl/AAAA//8qhWULAAAABklEQVQDAAVdOKLKn1iAAAAAAElFTkSuQmCC",
  },
  {
    id: 4,
    slug: "looking-for-food",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794749823/P1030529_emshlh.jpg",
    title: "Looking For Food",
    location: "Tesoro Beach, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJCAYAAAAGuM1UAAABQklEQVR4ATSOTVPCMBCGX4IOoxwK4sWDHvzrjjowMggU5Xd4URAZKDAt05Z+UCBtksYt4uFNdjfPPhM2HPT1cGDqd9PUb31TD3p9bXa7utd51Z2Xtm43W7r19Kybjw/HMJ5ypFlGEUiFBM8EuFBUKwiVQ+YaSgNSgXoFdiAozSQBRQQNc3pUUAWYA3ShWCgi6WAZGTNaEqSQZCzAPC8dwX9Ya009hQbsCCsyEpzT4C9kPtWFQJJZEMOlBPOiLZwggBtv4W93pyRYBxHszQbz1RKThYWZvcZkuQJz4x3caA/L8fD1M8doOsd05WCx9rB0XHhhjB0XiA8SYcLBzs/OUGYMnKdg5TLq9QYuL6owDANXjWtUqgZ8+oXrhwijA5gT7GlboVSuICHLx+cYo5mFb8vBeGbD9hOUKjXUGje4vbvHLwAAAP//q+cXOwAAAAZJREFUAwBn8gzeaw2ztQAAAABJRU5ErkJggg==",
  },
  {
    id: 5,
    slug: "lost-at-sea",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794664083/img1_dvmm59.webp",
    title: "Lost at Sea",
    location: "Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGaADAAQAAAABAAAAGQAAAABY85deAAAE7ElEQVRIDT2WWY4cRRCGI5eqbg9qjyWEeAD5AD4Ah0BcjnNwB46AePGTT8CLJWt6qcrKhe+PbKiZmMrKJf6IP5ac8Ocfv48Yk+VslpdoOSVblsVyjJYSwlqIZvxasOF/jXcfwwbSOmOk9m6tmR21IdWOUq3VwtywHNpmKQAyABjZTqjKoyLJEjqBQCJA0WIMICHMd5Q6SGimn9zNKj+BsY3DAlIQGx0HQrcVJacUbMXyhXeK438JHIxYHFESBMYPPhjHAGGuNxQi+BiDJhrGdNtTZy3YgZc59h0rC0qyxYaEBcEL0xgfABRVst5B8MR1OVh3xb4HJpost4JU64i+ZQShOKCIOED8ghUZkzKK5GFgq+wOA8WiCosFNvQtNxAfQ10SfcQitgPqFB8oZ9w77wVPMl5kBShmW3gnQGIv0A8AY7zmmVRNf6QfQExQzAa8D4GgUPODDMhIbTAk0FF35zEoNdKCoWwi8D0QRCmXQIXioA9RRj4x5iE5NOdnAAmAxSapeKbkOYhJgZXj7koMb0ZbORen5aLLUVAKLe4MMXKa8HBoTNxEoYxyb4DsgHRARF2oh8VKdvVts74kXNMki0RZuoOKA8vmA1XulafABIQoNvgeeTKfWTMOjPKOCCxvtx3rs/V1tRYbqQsl0+ypRCr5pUpQqRhJ3QSTMq3JU3+UCCpOjKt1WMGTQnHm/Q4alVTLYRQ8KanCE89+HqXSquBCi4+UAFgphXigKLE41wSGNOhrgIidooS6XZuVhbSlgDKFKJZcMfvdaLjnpCtmF2OMkkryX2/t8W+Ua6xV5UVjveJFIUb52x0kqlMg6lUqByE5APtnaevNjDKOOQVZ0aoollCvnvbyX+cSq+pplZiUg5h82zqtZEAV1Z2f1c0mB0ExOvxpaH/OUkNzUpTJn8o3rPhbm5OA2R1J68Ja/kossnqW2kdFNdUsq1X1UiWLFfRJGXNyhUnNO1FuhfY6ae4lYfYGCmN2iK4brSbDUaKfJDotCFAmZaLFP5/UTUUsPTNbi9qjeR5f0Dc+eFuhOUKXvMy3Q2nLQAVPbCJAApiPxiiR+66JP3xH1dVOg8fiQdF2auH9Jdqj0CQLoQdE98tBS6lqkH9fCbg8UY1QL/JCRik1heV46FawMwnRSOW/Pn+hyFjE8fMa7XJO9uGH9/bj6yu5MeukUSNeMxgSPv36G8dVaFxaWCgg9aeq9sAGWQvC8yZ0R5yOsmuBYJOmoqer93lCkGHKPuYHh+tB7/r4/YWMjVh09nfhwL0Mu74Vu9Ny6ra7kqFDgClOFXpU1RK3RDXDuvcENogiASjfFeU8rpudzic6Z7GDDV+v1f552+0NkLJzCcmaB930TvuBAvEvBUNNUK2dPFMH8Gxw5XT1gXj+TW/D5dMvI51WWwFaT2eWJnWRtFZA0EOMyBgSpFJYg4I4CPp6pvq1znzgnw91ALUmuXrcHtYemxY9CUL67me6NgFfTnZ+vdjLyztb1sUreXvAJ0mxPx5WNllNe6do0YdiIpcVQ4xZsq0rGXfQ2jGz3O9Wrw8wuNrJkBBOPz1bj1JIXuoPoiYmb1V8XNGeTppTi1dypBcLeeFNqXLZqalK+M/EzieaIQ9Rs6bAK+elUDQov51bVwYXirIjc6Fh/n+XmM/rnwbdF03XM9To4TwE2cMvMtyFT4X+X1mUaLW0ILAaAAAAAElFTkSuQmCC",
  },
  {
    id: 6,
    slug: "the-big-wheel",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794762446/IMG_4279_ptptla.jpg",
    title: "The Big Wheel",
    location: "Carpintero lagoon, Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAKCAYAAACJxx+AAAABF0lEQVR4ASTNvUrDUADF8X9ukyY3MU3SNqGJrekgrYiTCOri4nO46aLiA/koPoMf4KROtmipYKm1INdqe406HDgcfnAEnSNN90SzeqZpF2mdaprHmuxQkx5ogVsFJwTLh5L3n99uR8UeIbA8yo6kHtrUQgtblgtkg70EbgE8z2G3Y7O+/MVmV7C/7ZLnDsJz/5BoJB5qDqaUBTLZyr/ZaAuaDRvD9hBpEoCMmBoho5nDRBmUyg5x4mMGxUX19oK0NGat6SKDmHqa08gSFn4ds1aAp5drVO+KYPxAPHtEvfZZUkNC442953PEvBLxYfk4/TsWkwFq0MMY3rNTuiGLZohWLFip9fnMRrzrS2QSYgQuSk2RFZcfAAAA//8ft8A4AAAABklEQVQDAJ9FRxpnSvUPAAAAAElFTkSuQmCC",
  },
  {
    id: 7,
    slug: "the-rising-sun",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794762821/C9429FD6-CC82-4CEC-9D45-5CDAF3CCD9B2_1_105_c_qvpxhe.jpg",
    title: "The Rising Sun",
    location: "Jalisco, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAABPUlEQVR4ARyMzSuDcQDHP8+vefZs9mJGpI2LtwMpJ2cXfwP/g4jJe9JzkZODXEhJDm5y0LzERXEQYkpNG1HU1izas+dl28/yrW+f0+cjJiYn5dhETM7OL8jY3KIcn9PllL4mx/QNOapvyunVbbm6vi2F6nYTDgeJNAXp64rQ1x0h2hIi0hygM+ojHHBhVyTCNrKUjRyVYg53OU9QZmiv+aInkKG3ocBAm0J/q4q4e0qReH7l4ibJwfkd6fQbPtWiI+rHp9ncP9zy/vKIuL68Ih4/4/T4jPjRCXv7h8ys7DA4vMTQyDILK7vE9C2EZRUxTQO7ymLRIPmRJZH6JP+dxzR+sIxfbLOA8Hpr0TQPLlcNiiJwnAqm5WDZDiWnhJSV/4vqUN0anqrgD4aoq28gFGrE769D83irARVFEfwBAAD//1avjxwAAAAGSURBVAMAUXaEK2b8s0QAAAAASUVORK5CYII=",
  },
  {
    id: 8,
    slug: "a-cold-day",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794763173/IMG_2901_p83pmk.jpg",
    title: "A Cold Day",
    location: "Champayan Lagoon, Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAABCklEQVR4AQzN20rDQBSF4Z+gjyl4IWLFVxPEWlsR9cojrRSxCLZaW+25OUwyk2SapNu52Hw3e63l1doiR+4On0UOX0SOOyInryI158G9yP6NyN5VJV5ZQGlhW0HltCnYVChzodoINrekqcHLdUmRV1in1RunxShL7BsSlaC1QpsIzyQxqTZkqavaWmymiZOAKFwRBQuU8tGxeyzVDBtNMP6YaDbErP+waukCiixP3HSCSUM8/+2UsHdG0T9nZ1Rnd9KE3ybZsIHuNzH9OsXgAm8wuOPr85b3bovH9iXdTotep8mo0yD6eWL+cU38/YAXKkPsx+jQsF4nTGcB80nAchGycgbjgOlwwT8AAAD//8T+fgEAAAAGSURBVAMAtorXAzWp5hwAAAAASUVORK5CYII=",
  },
  {
    id: 9,
    slug: "this-looks-like-europe",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794715859/IMG_9674_jbkcaj.jpg",
    title: "This looks like Europe",
    location: "Tampico Downtown, Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAKCAYAAACJxx+AAAABMElEQVR4AQyPzUoCYQBFj58G2vjTaD9gapto27Jn2IVatoxauigIgmojJRJFG5cZFZGKlVkhYRpa6Ey2EIeZkZmvWVzu4sLlHLFzmJcb21m5tXsg72oNeV1tyOL9s7y4eZT5Uk2KiW0RDkdQFIVYyI+qBFBDAWJBP64xRPwO+mjaAFdCcMr1Rh9xRWCP+lwVCwg1EUcgabc77J8W8TljHEPjJHfM+eUZ4qlSxjINfLg0317YOypQr5fR9R7OxEF0mnVeaxWqtyV+ul8MdZ2VeYX1tVXvWSBs26b7+YHW62CO/nhvtdjM5niof5NKLSOCIYUZNUFsOkowFMF1BNFEhvjCnActEJFYnNlkGjWzRDKdJrmY8rTDjA2T6XAUEfB7vtL1PMC0bC8WhteGNQHh5x8AAP//xmtHcAAAAAZJREFUAwDGu4Xps239lwAAAABJRU5ErkJggg==",
  },
  {
    id: 10,
    slug: "where-am-i-going",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794763238/B779569A-BDD9-4A8F-95BF-05906F65C1ED_1_105_c_mlpq9n.jpg",
    title: "Where am I going?",
    location: "Tula, Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAKCAYAAACJxx+AAAABLElEQVR4ARyPS0sCYQBFz3w64wQ2JRZBUVMEFUlR0OOPltCmNi6USs3cqBuDaFNR+16+eqj5LB101K+hxV3de+EcEQmHZSad/k8qlZLJZFImEgkZi0VlKBSSwmuMo3o0fL5JNE3F5Xahj+n4/X4EEmEPBvT7Par1GoZhoCgghILH4+E6m0VIBaTEeWu02k10pxj3eimXitxfZRCfhSL5YoGX1zc6XYvhaECjUuLpJsG86kKEj4JETo6JnUeJX1xyehbn8CDI3e0DlnuIKOdzfORylMtf1CvvNNs/lKptHr9HPFsqwvBPsRwIsL+7zdrqKusri4yGPWy7T7XWQJibGyyYc8xM+xy1CXRVYdmcpdVq0ndGYkzXcDswtm3T+e1gWV3mzQX2drZYWjL5AwAA//8j5kTLAAAABklEQVQDACE8hTd91HbAAAAAAElFTkSuQmCC",
  },
  {
    id: 11,
    slug: "birds-in-the-horizon",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794748044/P1030534_hqwis9.jpg",
    title: "Birds In The Horizon",
    location: "Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAYAAAAxrNxjAAAA7klEQVR4AUyMTUsCYRSFH18L86PCxDSN/kUQIUj90nZtW4RggUuDFgVRG3dhG02bcpwvZ973dgdatHi455x77jW35w0Z9Joy7Lfk7uJQ7i9bSlsG/Y7c9LpyfXYsV6ddMS+e8LiE8afwtCry6m+phtFcGC0sw2XKyEsxb5FjEjumqWBPDojrZWaFIu+J8KF8p44vxSys4GWO+cbx8DxjPFkx9S2REyIRwnwqJsrUWEeg5fBPh5kltJZYs0Qfxbo3eSFQEWiw/sePHvm5d7B2BUxUqhCWqkQ7NZLyLpvqHm6/znajSaV1RKnZptbu8AsAAP///uj8xwAAAAZJREFUAwBpVJ7k01zUfgAAAABJRU5ErkJggg==",
  },
  {
    id: 12,
    slug: "victoria",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794764750/IMG_5924_nfkmzu.jpg",
    title: "Victoria",
    location: "Cd Victoria, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAKCAYAAACJxx+AAAABMUlEQVR4ARyNXytDcRzGP/vtnGNx4Q0YlmyyqeUGU2QtKS7kbSi3eAveA/eSFVFTxFxYY1jtTzP7E1NiRW2O7GxnP2e7ePp+n3qe5yMSD9cylYrJTDreVToTl3eJqIzFL7oSwmbDaBo0WwbWi2oXmNKkaZo0mi1Ej6pidoxhUMjlqes6tCWdogTET71Gj6LwV9e5uozSbrfRFDsOTcOhKojN9Q3OI2cUn/I09F/6+3pR7HZ6HVZAUxG1mk7k+JSjwzAvpQI3sVuS8Xuw9jULL76rVYrZHNnHJM/WPTkI81r9oPz2TuXzCyFNaXFtGIbEbEkqxRJlC7e/u8fO1jbC6XLi9o0xPjmBPzDFdCiIc3iQgSEnIx43IrS2ysLKEsHlRWZDc/j8XoZcg4x6PczMB/gHAAD//2L7OHkAAAAGSURBVAMAvNyNVmlwRN8AAAAASUVORK5CYII=",
  },
  {
    id: 13,
    slug: "a-dad-with-his-son",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794762567/IMG_4467_skpgs0.jpg",
    title: "A Dad With His Son",
    location: "Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAKCAYAAACJxx+AAAAA50lEQVR4AVSMMU/DQAyFP/sKSRN1QEKwIkWCFVFYmBhZ+N9siKkjKFVVRItQIGmTS5rDN3K6z37v2bKmaRKybBryPPvH1LLEZqrqUKeoGi5qw7RzioteTagoImKAVcQWYuZUURWJKbEdWbGPxigKBMWeeWaTCU+XBfP5NTdXBefm42KEk1G4dTl3FwWPD/cUp2fMxOECaHoYOTbxlijPvxXL95L19pvWjsdcvUA1gZ+hY1EueXldUG4+qUOPl4D2Y6Azdt6z2mxZfaz5qmuaYaC36zqMB3oz+86zaz1Vs6dpO9p+IM7+AAAA//9oXyoKAAAABklEQVQDAOmgXSYZdZ5YAAAAAElFTkSuQmCC",
  },
  {
    id: 14,
    slug: "forgotten-shores",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794716338/IMG_3584_2_h4y4a3.jpg",
    title: "Forgotten Shores",
    location: "Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAABM0lEQVR4AQzPvUpCYQCA4dfveH44lpYnjJZqa6skqBvpGmqNoCEIWlpbaiiiJUgQyZDMNrGW6JdoC10UgwZ/MlM/j+b58goeHrG2d6Y2D67U9tGNWl3fUtHlRbWxvaNiibRKXqZUOhlT17EDJTxZIRw0aVcKVIrvmLqPj7c7VLdGyPKYGIEpx0A4to+w4TI3HcFt1QnaFpbmETI89L82tuhhGz2E7jXJZc6Jn+yj+QaEbJuIM44mfxCdGnQatGo1RObimHL+mY7bZCLsUG1UMUybVPaWw3iC03SW3aMYwh8cwwppTM+OEo0uMRmZYX5hBYmgWKrw+JqnUR/SyvMjpZ/yZ5NsLsuv63H/9EJfSgIBfZjTMC0TEegOMFwfjm4z6g3of5cp5B+ofpVgALIvafUl/wAAAP//mjGEtgAAAAZJREFUAwA5W4Y+9xA/cgAAAABJRU5ErkJggg==",
  },
  {
    id: 15,
    slug: "something-in-the-sea",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794765853/P1030546_ydeouw.jpg",
    title: "Something In The Sea",
    location: "Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAABJ0lEQVR4ARzKP0sCcRyA8cffnYbaZSGESy2t7b0CG23tBfQOegMtTQ1Br6AXEC7RGA0SqEOBIpYoloLRXVx6p/dfv0nDMzzwUdXLslSvK3J/cyKPV2WpXRxJ7fxQns4O5OF0T+4qJbk9LorSjBxS3IdiiY3tLNmMIpMS1EpIJUvkv/XnVUJO18lrK3KrCC2OkSBmGUTEYUIYLtetoWGb7H632Jn0SE1MQtNhYfs4s4iZm+AsBNdfQ29g4nU/cDojrJ7F18hlPPEZWhFDe8XYBTPQUM2+R/NtTvPdoz6MqU+Exo/Gs63TcHVevDTtQEc13E0ajsGrX6AVbtGONhlgYGW2CPIF/KzBNJNHfYbQcxM605Dur8fQCejbc0bTBVYoeCrNMr3BHwAAAP//qaI0ZgAAAAZJREFUAwCl6qZdhSXhCQAAAABJRU5ErkJggg==",
  },
  {
    id: 16,
    slug: "stretching-the-legs",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794769074/IMG_6925_druyuk.jpg",
    title: "Stretching the legs",
    location: "Miramar Beach, Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAABQUlEQVR4AQzMvS8DYQCA8SeXFD19217renXXGiTEgsEosdgMJBKLgRGbwWASiYiFhf/AIgwiBBFMxKA+0zSh1NfRVBOtRhP9SL26/55HmV9ckTMLy3JqdkmOT83J4Ylp2T86KXsHx2R334js6h2SHT0DUmmyAoQtHdPUCQR1dN2PV3MjNIEqXKj1gjqnitJqOmkLCcIBD4ahVaGPBr+Gz+fGW8XC48IlBEpni6C91aDZcGA1qJhBFyHTQ8jwYuieaiTQtOqxkrEppWM4yml8tVksdxHL+4fbWSakOwgHa2n016DYXxUi0Rc2t49YW90gGjknEb1ib2eXXOqZYuadyk8KpU51kssXiD19Ek/mOb194eTinqRtc3B0RuT6npvYI8re/jHrW4c8PCQoFX55vItzfXnL2+sHT/EEtp0k+53jHwAA//+QKwiiAAAABklEQVQDAEYCcn/WKs84AAAAAElFTkSuQmCC",
  },
  {
    id: 17,
    slug: "airbone",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794751055/P1030640_ui369c.jpg",
    title: "Airbone",
    location: "Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJCAYAAAAGuM1UAAABcElEQVR4ARyPzWoTYRiFn04nEzBJk05ooFRtuhCN4v21CC5ci3gXbRpEFEXERZrUhRXrDyLqFUiaTGbm+5tkpsPnlyweDrzv4RyOd9j/Yo9Ov9rDFYNv9mjw3T568cM+fvnTPnn9yz5999s+//DHPnv/d61etxWw2wzYD6scOG41fe62fR52fB7sVLjTrtBtbnLQ2uBmDbzALulUr2ltFmtCP6duDX65YKPMKfKc5WKB0Bkqy/FEEjGfRyiRkOmUsliSFwWZMYg0Rri/ShNKI7BLiXd5+Yrz0YDx2QnnZ33Go2MuPr/l08UbRsM+H8fuNjxmPDxxnOJdXU1cw5zpLGIym/FvMmE6jUhiiZQZSapJncapYRaleGH7PmGnx/bOPcJ2j+2wR1DdpRJ0aGzdptHoUt/a50Ztj1p9D08rg9EOp0oql7pilS5QSqGkQIsEoyRaugZtNMqNkzJBG+nGaoxRa7SMnSl2ZuHugvI65z8AAAD//yMwMcAAAAAGSURBVAMA/dXkaDBXjU0AAAAASUVORK5CYII=",
  },
  {
    id: 18,
    slug: "an-old-park-sign",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794767205/IMG_3998_wdw7bq.jpg",
    title: "An Old Park Sign",
    location: "Texas, United Sates",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAKCAYAAAB4zEQNAAAA/UlEQVR4ARyNS0sCUQBGz9y5M1lay6Btu6DfWhLt+g0FQRSphUlGrnQxQZJm2EOtUcpx3o/b6OLjW51zRLnaUIfLVe7UwXVdlSsNdVS7V8c3TSXiOIZMIYWOocv8BQUp89cQGgpT6pRMg1LBZH1NkmQJaZoisjRGqBTrsY4//2XhBaxsOSSiIORj0Gc6mdC6OCP2HXQtLy0hd+GsNLJoUtzZxv+boZGRJREiigKMvLWxucXu3j6BZ9NrVXm/OkF0rQ6Ny3PeXto83Z7idR8IRxZfcxvRadZ47bYZ9i2G42d63wM+3RGu4eTa1CXTY+bujPF0wmj6w8y2Cb2AfwAAAP//I7FYxgAAAAZJREFUAwD9UJDTwEmC0AAAAABJRU5ErkJggg==",
  },
  {
    id: 19,
    slug: "photographing-the-view",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794768973/IMG_6913_qum4os.jpg",
    title: "Photographing The View",
    location: "Miramar Beach, Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAABJ0lEQVR4AQyMy0oCYQCFv36mcph/nHG8JI2WDpZKRa1b9gq9Qq/Rg0TP0DJo0SKjC1RYJJZI6iLEcgwL7GZT07/4OIfDxxHzXinM5Euhm1sMs/limCuUQ6+4FC6UVsJieVmherEUiklNIzKloesRDKkTNQ3sqIkTixKzLWxLYqtN6LqGVIJjGyQdm1RSkbBIx02FQdpR6UhE0jHIzFh42YQijufaFGYl5axkLhUhHtWwzEmEqQtiErI25ON/rLmCDU9jczXCuguuHCPFCHFff6B6dcfR8Q17++dUDi94aTeZtt4I/A6NWpPr2zai0+3T6Q1oPPr0X985qPXYPemxtX3KTuWZ+tMHgdAQYgKC4JfP7zEDJY6+fqi2fC5bQ86avjoY0u4O+QcAAP//vfDNfgAAAAZJREFUAwDvzGCBX4mNNQAAAABJRU5ErkJggg==",
  },
  {
    id: 20,
    slug: "the-last-boats",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794768058/img12_dykuwb.jpg",
    title: "The Last Boats",
    location: "Champayan Lagoon, Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAABK0lEQVR4ARTKS0sCQQDA8b/TuKlra5IZWpSBbawQPaCHIViHKPAQBUVHP2OnoA5BGEJevITQoUslRaamjq/cqe4/sbWe0AfZlM6mbb25tqBXnJhOJiJ6NhbU01OGtiak9vulFkPt4gpBNBohGgkTsgKYAQOfYSDHxhAe8GiNaHUUjZbiH6YcG8dOspiIE5+ZJGyZ+H1e/jyiN3Rp9aBYfqZQqvBeaxIKmGw4y2S21jja2yG9YSNMOc500Iscten36lTfXig/Vri5f+DqtsjldYG70hPCHfX4qtVotzuocS9dw0cTDx9KUVcD2l2XkUcikktzyJDg+0fRGHZRQR/e+RiTqyniO+vYuX2ctI04zh2SPz8jf3HKSWab3aVZEpbE7H8i1SvhQZW45fILAAD//2PUC4gAAAAGSURBVAMA4IdpFV2FE1YAAAAASUVORK5CYII=",
  },
  {
    id: 21,
    slug: "what-is-this",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794762628/94CA1388-663E-4BC5-AFB0-646A6A50A6E2_1_105_c_xuukx2.jpg",
    title: "What is this?",
    location: "Caracol Beach, Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAABAElEQVR4ATyOu0oDQRSGv53srNk1tYpiKeQVAtFXEIJIQBsLRRRsxEZs1MZObUR8Bi+gtWIRLwmCfbBdXyCuye7CjnMmxGHO9f9+OMrzPKOUMqVSyfi+b7TWJgxDV2WWvWNswgpYAOkliqJws9b+/04FQcDCfI3NjTWmJiecYIwhz3PXa61dVVmW8fLa5vr2ge2tdfZ2dxCzwGmaOUMURShZ9Ho/xHHM/sERb+0OV5fnVKtzVCrjiJ4kCQr75K5RtFrvHB6fsNRYZHWlSb1eo1weG4KWdV/cnvLo9wecnl3w+PTM7Mw0zeXGEBRgFOkgtWd8k/wmdLtf3Nzd0/n45A8AAP//6osDUAAAAAZJREFUAwCzhWfM5jUgigAAAABJRU5ErkJggg==",
  },
  {
    id: 22,
    slug: "walking-through-the-mountains",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794742349/IMG_5706_nlz0zz.jpg",
    title: "In the Countryside",
    location: "Tula, Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAA+klEQVR4AQzJPS8DcRzA8W/+R1uVKI2HpZvV7A14C3aDzWSwmw12k0gZJGIx0BKNOC2Npk/qqalcH9K7a8jdNSfSVvkxf1TypiQH50XZPc3J9tGdrO9cycpWQpY3T2Rp41gW1w5lYTUu6tGw+PJdxrQh4aAQm9KYnw0Qmx5nZjJEdGKUuWgY1W41KVeeSVzqZHSdh3yG+3SSWuGMl+t9Guk4neweqpz7h0yK+lOOt9Itef2CalGnkk3x2anSd2q47VdUtaJjGyWsRoGBb8CgSzQkBH59IqEgP99DImEN1fUsPMfEtlq0mgbvtoFpNun3PJyPOkpctJEefwAAAP//tTCUjgAAAAZJREFUAwAp43/9q1cOuwAAAABJRU5ErkJggg==",
  },
  {
    id: 23,
    slug: "ducks-and-neighbours",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794768178/3FE662A2-497B-47EA-8273-ADBDED12A422_1_105_c_kbr3xz.jpg",
    title: "Ducks and neighbours",
    location: "Aldama, Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAABR0lEQVR4AQzPzSvDYQDA8a/HZjPG5D0vSThwlCKlHB2c5OTkxEFKcnAzmZGXm7dyUhIuhJXUWhIH5G3NZlszNgczbbTfvGx7+BM+YsY8JpdnjXJlflwuzI5Ls8koB4dHZd/AiJyYmpamSZM0T5mkKFQ8lMTsVMauyXh18O5zkwgHSX684XG4cTkfcboCiGpDjKYGhfrGXNqqQnTWROmsjdNakaC+IEWZHvTqJGJu5wHjmp+VzQs2bE8cXAbYP3/myhsiFP0ilSZISoHobillpCOTod4C+ttz6Gkpoqu5nOa6QqqKtKj54VuJINI1Om6DeZwepWHxlrN+n8+2U8ehL50lyyWLWxZ2rMcIq0eye/fL6kkEf7IYYShGZchHSYEqQ4suK5vsLD3C/vLJmTPIjT/M2b9u79CKzWbDfnuFosTRaLSoVGr+AAAA//9MLdsgAAAABklEQVQDAHcsim9tvEDHAAAAAElFTkSuQmCC",
  },
  {
    id: 24,
    slug: "brothers-in-the-sea-shore",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794768360/25C2A170-643D-4D93-9255-1BFA509A6A9B_1_105_c_cbu2c9.jpg",
    title: "Brothers In The Sea Shore",
    location: "Caracol Beach, Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAA70lEQVR4ASSOvU7DQBCEv70728ExIBAgpYACiSoSTYBnoOAlKXkGqGl5ASoi/hqEUEhsn++WtSg+aVY7mhlHua9MZkp9qkznyvZC2bk0LpTmXKnP7H+sDufBFcYEQg3FFMoGKtMjxRaECocI/wBOwAv4UStSKL40HcRe2iJ5BekLhg/YLI0XY0nRvXGY3ynzN84RLaGD0Bq/UK1p9mB+dUJMKz7bSIwdTseNvkLCBClq3MGMxfUN090jQghjJY5kiWnA9xt8+4NfW8XrM493tzw93EPf2qyIy8NoHhAzS07IEJEUoWvN1KN2kxLkzB8AAAD//5WiBCEAAAAGSURBVAMAIixcxXAOlzgAAAAASUVORK5CYII=",
  },
  {
    id: 25,
    slug: "watching-the-surroundings",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794768675/img10_wbaxhu.jpg",
    title: "Watching The Surroundings",
    location: "Champayan Lagoon, Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAABFUlEQVR4ARzPzU7CUBCG4ZcTBQUDGgkYf4KkJhouwDtyY4R4J26MgZU7N+LPvbhVEFJMU6JGoKXtac94dPFkZvElM5+67N1Lp9uXdvdBOr0naf97lnb3US5u+nJ+fSdnV7eidJYRa02UJARRTLCMWIQRc+t7EfA5D/FnC9TIHzPyP3CnHuOpz9B3efdcXtwBQ2/CwO6v3ggVhVNW0i9M4FJUMyorQnVNONhYZzl5o1FexamUUM2dFnuW0zxlv3ZiHbFbczisNzh2WlQrdbaLZZSkGWL/TFNDnFjaEFlLS3I5ovDHhjJUmhkb0GidodOUxBZL9N9MKZS2yOc3KRQqKIUBgcSGxBjbPCG2wcxeUkBOBDHCLwAAAP//lf0HFwAAAAZJREFUAwBvM6kvJx7tCwAAAABJRU5ErkJggg==",
  },
  {
    id: 29,
    slug: "a-family-of-birds",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794769728/img5_vwweag.jpg",
    title: "A Family Of Birds",
    location: "Tampico, Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAKCAYAAACJxx+AAAABM0lEQVR4AQyOyy4DUQBAT+8wDVOP0cQjqIZNG7UREUKphUgIC6+k8QH+wAeJ2NlZsrFjSbxSQSVtTSl9jY65M64uzvacI1L7B2plbU6trk+p9O6sml+cUJtb02ovvaC20xtKeI6FaXRjdg4Q7IkTjcZoV120OG00AiZisv+e0bgkltAJhysMRDT6xkL8Bh18N4cov+so20b3i2iBW8ryio7hVxJJxXJqBGEkdsiXbJ7fLH5KGurDRFohaK3xpV8iarlrHL+Fsq1RrPqUHR8ND9n4Q1cBRMUN4xgzNIxkkyWM4DjnFwVkXUPm25oG6wG3ViLgSfp0wcnpGSXZRfbJJZOtIuzPl+ZkgfzjHUeHx4RHBhmK9KKZOqEhD1H/zpPL3lCvZuiNdNBjeLhVq5mwcWqSfwAAAP//aBFm7gAAAAZJREFUAwCgBofbmkcLCQAAAABJRU5ErkJggg==",
  },
  {
    id: 30,
    slug: "last-light",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794769513/IMG_3734_owfvvp.jpg",
    title: "Last Light",
    location: "Tamaulipas, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAABPklEQVR4ARSJSytEYQBAj2/IY4z73Xvnchkkxh13GCxt/AE/wI5SomwslWws1OzkkbJgIyKPxYQoj4U8akoxaZYmpdCYZhTl1WcsTqfTEXQPKHpGVUHvuBL9k6p0MKrs4WnljMyptpEZ1ToUVS19E0pgSjx+Ha/UqdZMQtIgZOo0VekEAxbBWpuGvEWx1LB0SaMhcfwVNFsaIVsStg3CNXlq/bQETES94SNo+nAqy4lUaoSrfbh2GW5VEa5ViGMKmg0PwjUL6bBKiPzPmiLa/OT7F0f7pFPP0GWlcX0ZRLv3nYj+QfFrklT8mNTNKbnUFXXfCQJvl8h0HG8uiZCZJOXPN1zv77A0v8DWyhp7G5s8xk+4iO0QW4+xun6AWN4+Y2pxl/PEPV/Kw0P2h9O7J8bWEkQPs8wePnN0+8IfAAAA//9Kc40NAAAABklEQVQDAHfxYIaVqqceAAAAAElFTkSuQmCC",
  },
  {
    id: 31,
    slug: "a-storm-is-coming",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794770492/DSCF6586_pzdl0k.jpg",
    title: "A Storm Is Coming",
    location: "Golf Of Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAYAAAAxrNxjAAABGklEQVR4ARTOu0rDYABA4WOgSE1b7aJtsejg5Cw4izgLIj6Bg0/g4i6IT6A4uIgolE5SECcXrVYcrAqiEmqTJr0kTZNU0yT+1uGMBz5pYWlVLK6si+W1TbGxtSO2dw/F3kFB7B8VxXHxWpSrirh/UYT0KyL8bxfbNGg16miaSr/vMZFMMD+XJyXHEVGIlMnmkOUEYTDA6hjUlHecXpexeAxGwHYcjI6FNDM7TSY3xXgqiRwfJTuZJp9Nk5Rj2D2bVquNY3eRLi9KVG5v+Px4Q60pPD0+UDg75+S0QKl0RfmuwnP1FckdXp7j4rkejutimSZGQ0NXv6jXa6iahqbrSFEYEEX/hUNngD/w+fF9mrpG02jQbhp0LZM/AAAA//+1/8+iAAAABklEQVQDAFeLmXT6MyxiAAAAAElFTkSuQmCC",
  },
  {
    id: 32,
    slug: "a-waving-sky",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794771114/DSC00106_nq1t1c.jpg",
    title: "A Waving Sky",
    location: "unkown",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAABHklEQVR4ARyOy0rDQBiFT6dN05hL8QFFEFFcCG4ERQURfAIXFroRBN/ABxC8bEV0oeii1Ka0TSYz00lSzOV3yOLjv/DBOWzzaEB75zd0cHlH+xe3tHs2pK3ja9o4vDJzQDunQ9o+GRKzLQue66K/HsAPXPi+h8Dz4DoOivIP2SpHmqVgZVU1SyIS1HWJvr+GwNCzu7A6HWgjCSXB+q6PyshcSnCpECcKFRE8zwVjbbRZC2VVgglt7FYLjmWbZxsqzRDOIgip0eva6NkOuqYeG43HGIW/mPMIEY+xMHApmnuRxE20Tk1HmURQIkauBfhiirrIQcUKWbqE1gp5noGoBpt9vWDy9oDw/RHhxxM+n+8x/3mFmn5DGDSfYMkn+AcAAP//RL5VFAAAAAZJREFUAwANg6PkhTbfIQAAAABJRU5ErkJggg==",
  },
  {
    id: 33,
    slug: "on-the-countryside",
    src: "https://res.cloudinary.com/dlhd0iosj/image/upload/v1794771697/49841CBE-0886-434F-B815-5A275F547858_njlkhf.jpg",
    title: "On the Countryside",
    location: "San Luis Potosi, Mexico",
    blurimgurl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAABNklEQVR4ARTNPUsCcQCA8ef+Z3qdd5nF5btGIEVQW0VDCI19gz5KS0KLtjS0RENTS5PgENEQDQWiQVSjhliiYEFqL2Z5+s+2Z3jgJ1b2CnJpNyeXU3m5mi7IROpWru3kZSJ5Jde3z+VG8lRups+kMEZsTGHjcdh4nWC4JG5N4HIKdM2F5TWwJkxE3Ogy6+3hd/cZ1xQ8ow7GdCeG/j/pGMYonwMVYalNxmlhqW/8PF3yXcqgdCrobpWeQ6XZh46iIJR+l1r5jmI+Q+v5Ztj3NApHPGa3qF8foH4U8YgmInt8yEPugpd6lUHvC9MJQ5WF0C9hrQGlE9r5fYRpavh9fiKBCNEpH1F/mGhgGtOax5oMEAvGWIzPIWaicUJTAYITbkZUDdvu02p3qDe6vDYF5eo7lVqbPwAAAP//Ex0ddwAAAAZJREFUAwDH92vuLMillwAAAABJRU5ErkJggg==",
  },
];
 */

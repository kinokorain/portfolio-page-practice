export type Project = {
    id: number;
    name: string;
    nature: string;
    imageURL: string;
};

export let projects: Project[] = [
    {
        id: 1,
        name: "Rule ratio",
        nature: "Product design",
        imageURL:
            "https://s3-alpha-sig.figma.com/img/d063/ab0a/98c37b083a3596c7707fbac15b2d5d5d?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iwdon-1bvaCqBGvAbqvAvlp3fOdjvrITvwehNj1cwnk07PT90KN4hRb29wxHWljqb8imMXRpI3QomPcys35DROBUWpHFEanjrO1G0DgVfM0MWDwXTb6~8j24vsZBmh1cV04LFKUAlUrVRwpReUOVsePo2H8~-luzYeWbHuwExL46Lfe-dkBrGr5NpvQdV-aFhuajxsEaXNtj9m6YhYlwDoLL6~XSB~FHdWCNXfRvPlLLthvGdcYF9pdQEA2O073RY7dGySaavAJ9rpYKmYeH1tuBJkm~IFwXrntQ-zlJY2UFGOsY4aegjVyrT1xC00hwbeGvo6NVN-BNNWdvBZdpdA__",
    },
    {
        id: 2,
        name: "Situation",
        nature: "Visual identity",
        imageURL:
            "https://s3-alpha-sig.figma.com/img/74b0/f04f/be383e63afbcd088d000e225e4d8417b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GVaCFoo7yTLR0DJ4e5buWdNdnuHdDrb7ZegWUP3wtK4wFRw3UJlX9E9y6Szhe6gKyowRSA81q9wWk-enc4hc4kRBD4VwnXT3e1LX8QEABeJN-dcybZD4ofS2WoqCPUeVZdw-hrN0sEpjUDh7UZTmYrlruzsCo~fqrvH1QKHr1baN6okYXW-CPL~2aEy69AHihXlZbODZZzXT-rFM2OWTqXgPYYHM8DadXSv2gr0fj-HBWAZOEkhV7VDWJqjUcy5SU31knu-niFGk7VpExv57JlkAZ4QeJTeM1UJydpFKlEd7aXXP-WxsK6a2mYqGQFuNS2-zH90lM3q3hjRjSglCcw__",
    },
    {
        id: 3,
        name: "Dry air",
        nature: "User research",
        imageURL:
            "https://s3-alpha-sig.figma.com/img/1c96/4996/8815dd5fb7c37b86aa935cd6e7537cd4?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TLXHRxhT3PYTgSkuyDkKM5YSuV908lvIrATYq~zkgM597po9pBPk7tg7tFE6zeO7gM34BeuUwg832W~PxcYL52d3oMGESelD9w1Q7OYzod-saPU5HiZ7So7msGZNCQ1BE~AMYM4vK9i7Zn6khFn3vZR0RqjumP4gdN~VTTzssrKvchxDuuQHQoHFUZd1jhG3gwgu4vAIiGeKNoR9t-sGPKOjdOspA2VPI7DafOzRtC48M5VSmu-nPQJlq41-COVn11ISCowj0z39S4Mw9DeHAUuuPMdMin-0BjDl76o6i4h9HgrdMdeq5i5G8UgubQoI3FEXEPjuI8KBqWXbf711OA__",
    },

    {
        id: 4,
        name: "Vertical",
        nature: "Product design",
        imageURL:
            "https://s3-alpha-sig.figma.com/img/b6e8/4307/57979df8de0706983e5501e18b751cdb?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jg3-vIXSpt57lCL6naJhKS6YrCFmKKm18ZkVzVvkdx0dOYV1kyl7I1X4U4MyKQWPECKlGp7~owv-CZ8FXtLR-axgaXhTHR-OO2pIG5vz85rlQuYqW3Q37I9JYW6iEbPmog3RuV0vY6tC~SITohoTQR9dTmrwSiZtj3kkC-MYM7GRuPdRL1DcH9MY0lLaH0yVhFpF1zii9txPSn~r4~3WKzgHQC7n4GlNfCrdJz5DA3sT~SwTn9712wvYW4xASKpqv~MBcXXqf6JtXM4yPvE8BVqf1xhHUdbRSFayxTvm5xxY9cW9EjcDfMYlueaBcim9F2z-dImEwkTSTVB-F-0R~g__",
    },

    {
        id: 5,
        name: "Variable compose",
        nature: "Product design",
        imageURL:
            "https://s3-alpha-sig.figma.com/img/3138/0ffd/18a38bc2ff3861b9186e15087a1261bb?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ki3~ZWYuOPCDa-0rzglFJW5ED017n2QzOurA74nsin73Q3d5p5c~2U3Fx2hqFuOyPrMmRFpKGa~vHgAHlIVqfLp-ach-zkXGum3HsAfj1JepRIVCrihVnDkOYDoq6XpqgZbCogEQqOO2rqAHJmRcThOxOoSfIGlqv6o~7AJfTgwAqQKzpVl~WPr7vdo5aSwbAtj3DYB1LDHpJS-9EqQ6oFZzCLa4iObiRrshbDg9nvsAEqB-rQodovNRsQLpdcomME2GzrMD6Bv2YelZ7DwZSrh33AA0xFzae--3CmHT3JyThchut00ZFKRHT6fkOCrKeJniYF2ZzKP32v54qSTqdw__",
    },

    {
        id: 6,
        name: "Scope shift",
        nature: "Product design",
        imageURL:
            "https://s3-alpha-sig.figma.com/img/228b/836a/0c5ff184fa3b0b0866024fc3e07bef47?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YjzxCxA-kmyktBpJqZspFan2HuRxN1R-XluS6xYjn3L3kPpQzsP2AoPscHtXJzFqCuA6hDOvElw7a6AIRzK13t8idLiCeqIC7elLPJXnvNnrbXooU0o5XJxpjuIVYddKVk8xUH76M2FRkZz3MOCQVieneJUSU7M2rX~-UTD8Yl-blpERqWSZKY4bG-Dz1dUGxzdbXvA~dKRoTQpOxuFKeyk0srR89Zp0hJQgYUjcUse-6ByFFI1P51M-sJyuJcuJaY7hWWV-qVEw~XiDVdyE-g2CL0V4Sw-v5BtqxmLQz0J7xDqBfhBypWpSFFVD6WhlJ-J0L1k2AgYfzksyp3Dnsg__",
    },
];

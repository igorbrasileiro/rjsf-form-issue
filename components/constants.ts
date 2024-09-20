export const pageData = {
  "name": "Home Page",
  "sections": [
    {
      "__resolveType": "website/sections/Rendering/Lazy.tsx",
      "section": {
        "__resolveType": "Header",
      },
    },
    {
      "__resolveType": "site/sections/Images/Carousel.tsx",
      "images": [
        {
          "desktop":
            "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2177/5b022a01-ba88-46fe-86ae-93ae644605b7",
          "mobile":
            "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2177/88b2ad41-be6d-4640-b9fe-c58942362f0f",
          "alt": "Shoes",
          "action": {
            "title": "Skate into Adventure",
            "subTitle": "Top-quality roller skate shoes for all levels. ",
            "href": "/s?q=shoes&page=0",
            "label": "Grab Yours Now!",
          },
        },
        {
          "desktop":
            "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2177/d26304f4-355b-48d0-b649-e24b9cbf0ded",
          "mobile":
            "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2177/47a4d85a-1150-4e5d-abc2-5c642445ff12",
          "alt": "Men",
          "action": {
            "title": "Discover Fresh Looks",
            "subTitle": "Modern men's clothing and accessories.",
            "href": "/men",
            "label": "Shop the Collection",
          },
        },
        {
          "desktop":
            "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2177/1226ef79-c7e0-403c-b716-b6b9af3f2936",
          "mobile":
            "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2177/f7ea4cbe-7498-4e64-9205-c741753edfcc",
          "action": {
            "label": "Shop Now!",
            "href": "/women",
            "title": "Embrace New Trends",
            "subTitle": "Stylish clothes and accessories.",
          },
          "alt": "Woman",
        },
      ],
      "preload": true,
    },
    {
      "__resolveType": "website/sections/Rendering/Lazy.tsx",
      "section": {
        "__resolveType": "site/sections/Product/ProductShelf.tsx",
        "title": "Featured Products",
        "cta": "/mono",
        "products": {
          "__resolveType": "Product List Loader",
        },
      },
    },
    {
      "__resolveType": "website/sections/Rendering/Lazy.tsx",
      "section": {
        "__resolveType": "site/sections/Category/CategoryGrid.tsx",
        "title": "Departments",
        "cta": "/all",
        "items": [
          {
            "label": "Men",
            "href": "/men",
            "image":
              "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2177/38c33c9f-14a1-4048-973b-dc2a75caf1fa",
          },
          {
            "href": "/women",
            "label": "Women",
            "image":
              "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2177/f6bea2b8-b248-4b42-9246-6e924a0acc8b",
          },
          {
            "href": "/kids",
            "label": "Kids",
            "image":
              "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2177/1b0ecaa2-9a13-4de2-bf17-5196948ed128",
          },
          {
            "href": "/accessories",
            "label": "Accessories",
            "image":
              "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2177/92129655-fe40-4b29-8fdb-e7f71e67a5d1",
          },
          {
            "href": "/home-and-living",
            "label": "Home & Living",
            "image":
              "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2177/d0433c00-cd26-4638-b519-0cb64b9f82e8",
          },
        ],
      },
    },
    {
      "__resolveType": "website/sections/Rendering/Lazy.tsx",
      "section": {
        "__resolveType": "site/sections/Images/Banner.tsx",
        "title": "Register and Save Big!",
        "cta": {
          "label": "Sign Up",
          "href": "#",
        },
        "description":
          '<p><span style="color: rgb(45, 194, 107);" data-mce-style="color: rgb(45, 194, 107);">Sign up now to get up to 50% off on your first order. Limited time offer!</span></p>',
        "images": {
          "desktop":
            "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2177/cf96d47f-564f-40da-ad94-7acac5f39327",
          "mobile":
            "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2177/4d5c3212-3f75-4d50-89f3-970815748b43",
        },
      },
    },
    {
      "__resolveType": "website/sections/Rendering/Lazy.tsx",
      "section": {
        "__resolveType": "site/sections/Product/ProductShelfTabbed.tsx",
        "title": "Hottest Deals",
        "tabs": [
          {
            "products": {
              "__resolveType": "shopify/loaders/ProductList.ts",
              "props": {
                "sort": "",
                "query": "hat and bag",
                "count": 10,
              },
              "filters": {
                "tags": [],
                "productTypes": [],
                "productVendors": [],
                "variantOptions": [],
              },
            },
            "title": "Accessories",
          },
          {
            "products": {
              "__resolveType": "shopify/loaders/ProductList.ts",
              "props": {
                "sort": "",
                "query": "Shirts",
                "count": 10,
              },
              "filters": {
                "tags": [],
                "productTypes": [],
                "productVendors": [],
                "variantOptions": [],
              },
            },
            "title": "Fashion",
          },
          {
            "products": {
              "__resolveType": "shopify/loaders/ProductList.ts",
              "props": {
                "sort": "",
                "query": "stickers",
                "count": 10,
              },
              "filters": {
                "tags": [],
                "productTypes": [],
                "productVendors": [],
                "variantOptions": [],
              },
            },
            "title": "Stickers",
          },
        ],
      },
    },
    {
      "__resolveType": "website/sections/Rendering/Lazy.tsx",
      "section": {
        "__resolveType": "site/sections/Newsletter/Newsletter.tsx",
        "label": "Sign up",
        "placeholder": "Email address",
        "empty": {
          "title": "Get top deals, latest trends, and more.",
          "description":
            "Receive our news and promotions in advance. Enjoy and get 10% off your first purchase. For more information click here.",
        },
        "success": {
          "title": "Thank you for subscribing!",
          "description":
            "You’re now signed up to receive the latest news, trends, and exclusive promotions directly to your inbox. Stay tuned!",
        },
        "failed": {
          "title": "Oops!. Something went wrong!",
          "description":
            "Something went wrong. Please try again. If the problem persists, please contact us.",
        },
      },
    },
    {
      "__resolveType": "website/sections/Rendering/Lazy.tsx",
      "section": {
        "__resolveType": "Footer",
      },
    },
  ],
  "__resolveType": "website/pages/Page.tsx",
  "path": "/",
  "seo": {
    "__resolveType": "website/sections/Seo/SeoV2.tsx",
  },
};

export const loopSchema = {
  definitions: {
    "first": {
      type: "object",
      properties: {
        "name": { type: "string" },
        "children": { $ref: "#/definitions/second" },
      },
    },
    "second": {
      type: "object",
      properties: {
        "name2": { type: "string" },
        "children": { $ref: "#/definitions/first" },
      },
    },
  },
  "$ref": "#/definitions/first",
};

export const siteSchema = {
  // "$ref": "#/definitions/d2Vic2l0ZS9wYWdlcy9QYWdlLnRzeA==",
  "definitions": {
    "Resolvable": {
      "title": "Select from saved",
      "type": "object",
      "required": [
        "__resolveType",
      ],
      "additionalProperties": false,
      "properties": {
        "__resolveType": {
          "type": "string",
          "not": {
            "enum": [
              "website/functions/requestToParam.ts",
              "shopify/loaders/cart.ts",
              "shopify/loaders/ProductDetailsPage.ts",
              "shopify/loaders/ProductList.ts",
              "shopify/loaders/ProductListingPage.ts",
              "shopify/loaders/proxy.ts",
              "shopify/loaders/RelatedProducts.ts",
              "site/loaders/availableIcons.ts",
              "site/loaders/icons.ts",
              "site/loaders/minicart.ts",
              "site/loaders/user.ts",
              "site/loaders/wishlist.ts",
              "commerce/loaders/extensions/productDetailsPage.ts",
              "commerce/loaders/extensions/productListingPage.ts",
              "commerce/loaders/extensions/products.ts",
              "commerce/loaders/navbar.ts",
              "commerce/loaders/product/extensions/detailsPage.ts",
              "commerce/loaders/product/extensions/list.ts",
              "commerce/loaders/product/extensions/listingPage.ts",
              "commerce/loaders/product/extensions/suggestions.ts",
              "commerce/loaders/product/productListingPage.ts",
              "commerce/loaders/product/products.ts",
              "website/loaders/asset.ts",
              "website/loaders/extension.ts",
              "website/loaders/fonts/googleFonts.ts",
              "website/loaders/fonts/local.ts",
              "website/loaders/image.ts",
              "website/loaders/options/routes.ts",
              "website/loaders/options/urlParams.ts",
              "website/loaders/pages.ts",
              "website/loaders/redirect.ts",
              "website/loaders/redirects.ts",
              "website/loaders/redirectsFromCsv.ts",
              "website/loaders/secret.ts",
              "website/loaders/secretString.ts",
              "analytics/loaders/DecoAnalyticsScript.ts",
              "shopify/handlers/sitemap.ts",
              "website/handlers/fresh.ts",
              "website/handlers/proxy.ts",
              "website/handlers/redirect.ts",
              "website/handlers/router.ts",
              "website/handlers/sitemap.ts",
              "website/pages/Page.tsx",
              "site/sections/Animation/Animation.tsx",
              "site/sections/Category/CategoryBanner.tsx",
              "site/sections/Category/CategoryGrid.tsx",
              "site/sections/Component.tsx",
              "site/sections/Content/Faq.tsx",
              "site/sections/Content/Hero.tsx",
              "site/sections/Content/Intro.tsx",
              "site/sections/Content/Logos.tsx",
              "site/sections/Footer/Footer.tsx",
              "site/sections/Header/Header.tsx",
              "site/sections/Images/Banner.tsx",
              "site/sections/Images/Carousel.tsx",
              "site/sections/Images/ImageGallery.tsx",
              "site/sections/Images/ShoppableBanner.tsx",
              "site/sections/Links/LinkTree.tsx",
              "site/sections/Miscellaneous/CampaignTimer.tsx",
              "site/sections/Miscellaneous/CookieConsent.tsx",
              "site/sections/Newsletter/Newsletter.tsx",
              "site/sections/Product/ProductDetails.tsx",
              "site/sections/Product/ProductShelf.tsx",
              "site/sections/Product/ProductShelfTabbed.tsx",
              "site/sections/Product/SearchResult.tsx",
              "site/sections/Product/ShelfWithImage.tsx",
              "site/sections/Product/Wishlist.tsx",
              "site/sections/Session.tsx",
              "site/sections/Social/InstagramPosts.tsx",
              "site/sections/Social/WhatsApp.tsx",
              "site/sections/Theme/Theme.tsx",
              "commerce/sections/Seo/SeoPDP.tsx",
              "commerce/sections/Seo/SeoPDPV2.tsx",
              "commerce/sections/Seo/SeoPLP.tsx",
              "commerce/sections/Seo/SeoPLPV2.tsx",
              "website/sections/Analytics/Analytics.tsx",
              "website/sections/Rendering/Deferred.tsx",
              "website/sections/Rendering/Lazy.tsx",
              "website/sections/Rendering/SingleDeferred.tsx",
              "website/sections/Seo/Seo.tsx",
              "website/sections/Seo/SeoV2.tsx",
              "analytics/sections/Analytics/DecoAnalytics.tsx",
              "htmx/sections/Deferred.tsx",
              "htmx/sections/htmx.tsx",
              "website/matchers/always.ts",
              "website/matchers/cookie.ts",
              "website/matchers/cron.ts",
              "website/matchers/date.ts",
              "website/matchers/device.ts",
              "website/matchers/environment.ts",
              "website/matchers/host.ts",
              "website/matchers/location.ts",
              "website/matchers/multi.ts",
              "website/matchers/negate.ts",
              "website/matchers/never.ts",
              "website/matchers/pathname.ts",
              "website/matchers/queryString.ts",
              "website/matchers/random.ts",
              "website/matchers/site.ts",
              "website/matchers/userAgent.ts",
              "website/flags/audience.ts",
              "website/flags/everyone.ts",
              "website/flags/flag.ts",
              "website/flags/multivariate.ts",
              "website/flags/multivariate/image.ts",
              "website/flags/multivariate/message.ts",
              "website/flags/multivariate/page.ts",
              "website/flags/multivariate/section.ts",
              "shopify/actions/cart/addItems.ts",
              "shopify/actions/cart/updateCoupons.ts",
              "shopify/actions/cart/updateItems.ts",
              "shopify/actions/order/draftOrderCalculate.ts",
              "site/actions/minicart/submit.ts",
              "site/actions/wishlist/submit.ts",
              "website/actions/secrets/encrypt.ts",
              "site/apps/deco/analytics.ts",
              "site/apps/deco/htmx.ts",
              "site/apps/deco/shopify.ts",
              "site/apps/site.ts",
            ],
          },
        },
      },
    },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mdW5jdGlvbnMvcmVxdWVzdFRvUGFyYW0udHM=@RequestURLParam":
      {
        "anyOf": [
          {
            "type": "string",
            "title": "Force param",
          },
          {
            "title": "Get params from request parameters",
            "description": "Set param to slug for routes of type /:slug",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mdW5jdGlvbnMvcmVxdWVzdFRvUGFyYW0udHM=@Props",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "website/functions/requestToParam.ts",
                ],
                "default": "website/functions/requestToParam.ts",
              },
            },
          },
        ],
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mdW5jdGlvbnMvcmVxdWVzdFRvUGFyYW0udHM=@Props":
      {
        "type": "object",
        "properties": {
          "param": {
            "type": "string",
            "default": "slug",
            "description": "Param name to extract from the Request URL",
            "format": "dynamic-options",
            "options": "website/loaders/options/urlParams.ts",
            "title": "Param",
          },
        },
        "required": [
          "param",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/functions/requestToParam.ts@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@MediaObject":
      {
        "type": "object",
        "properties": {
          "encodingFormat": {
            "type": [
              "string",
              "null",
            ],
            "title": "Encoding Format",
          },
          "embedUrl": {
            "type": [
              "string",
              "null",
            ],
            "title": "Embed Url",
          },
          "contentUrl": {
            "type": [
              "string",
              "null",
            ],
            "title": "Content Url",
          },
        },
        "required": [],
        "title": "MediaObject",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@CreativeWork":
      {
        "type": "object",
        "properties": {
          "thumbnailUrl": {
            "type": [
              "string",
              "null",
            ],
            "title": "Thumbnail Url",
          },
        },
        "required": [],
        "title": "CreativeWork",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@VideoObject":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@MediaObject",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@CreativeWork",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGUsdXJsThing",
          },
        ],
        "properties": {
          "uploadDate": {
            "type": [
              "string",
              "null",
            ],
            "description":
              "date when video was published first time, format ISO 8601: https://en.wikipedia.org/wiki/ISO_8601",
            "title": "Upload Date",
          },
          "duration": {
            "type": [
              "string",
              "null",
            ],
            "description":
              "video duration, format ISO 8601: https://en.wikipedia.org/wiki/ISO_8601,",
            "title": "Duration",
          },
        },
        "required": [],
        "title": "VideoObject",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[VideoObject]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@VideoObject",
        },
        "title": "[VideoObject]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[VideoObject]|null":
      {
        "anyOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[VideoObject]",
          },
          {
            "type": "null",
          },
        ],
        "title": "[VideoObject]|null",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGUsdXJsThing":
      {
        "type": "object",
        "properties": {
          "@id": {
            "type": [
              "string",
              "null",
            ],
            "title": "@id",
          },
          "additionalType": {
            "type": [
              "string",
              "null",
            ],
            "title": "Additional Type",
          },
          "alternateName": {
            "type": [
              "string",
              "null",
            ],
            "title": "Alternate Name",
          },
          "description": {
            "type": [
              "string",
              "null",
            ],
            "title": "Description",
          },
          "disambiguatingDescription": {
            "type": [
              "string",
              "null",
            ],
            "title": "Disambiguating Description",
          },
          "identifier": {
            "type": [
              "string",
              "null",
            ],
            "link":
              "/docs/datamodel.html#identifierBg background notes} for more details.",
            "title": "Identifier",
          },
          "image": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[ImageObject]|null",
            "link": "https://schema.org/ImageObject ImageObject}.",
            "title": "Image",
          },
          "video": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[VideoObject]|null",
            "title": "Video",
          },
          "name": {
            "type": [
              "string",
              "null",
            ],
            "title": "Name",
          },
          "sameAs": {
            "type": [
              "string",
              "null",
            ],
            "title": "Same As",
          },
          "subjectOf": {
            "type": [
              "string",
              "null",
            ],
            "title": "Subject Of",
          },
        },
        "required": [],
        "title": "omitQHR5cGUsdXJsThing",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ImageObject":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@MediaObject",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@CreativeWork",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGUsdXJsThing",
          },
        ],
        "properties": {
          "url": {
            "type": [
              "string",
              "null",
            ],
            "format": "image-uri",
            "title": "Url",
          },
        },
        "required": [],
        "title": "ImageObject",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[ImageObject]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ImageObject",
        },
        "title": "[ImageObject]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[ImageObject]|null":
      {
        "anyOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[ImageObject]",
          },
          {
            "type": "null",
          },
        ],
        "title": "[ImageObject]|null",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=Thing":
      {
        "type": "object",
        "properties": {
          "@id": {
            "type": [
              "string",
              "null",
            ],
            "title": "@id",
          },
          "additionalType": {
            "type": [
              "string",
              "null",
            ],
            "title": "Additional Type",
          },
          "alternateName": {
            "type": [
              "string",
              "null",
            ],
            "title": "Alternate Name",
          },
          "description": {
            "type": [
              "string",
              "null",
            ],
            "title": "Description",
          },
          "disambiguatingDescription": {
            "type": [
              "string",
              "null",
            ],
            "title": "Disambiguating Description",
          },
          "identifier": {
            "type": [
              "string",
              "null",
            ],
            "link":
              "/docs/datamodel.html#identifierBg background notes} for more details.",
            "title": "Identifier",
          },
          "image": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[ImageObject]|null",
            "link": "https://schema.org/ImageObject ImageObject}.",
            "title": "Image",
          },
          "video": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[VideoObject]|null",
            "title": "Video",
          },
          "name": {
            "type": [
              "string",
              "null",
            ],
            "title": "Name",
          },
          "sameAs": {
            "type": [
              "string",
              "null",
            ],
            "title": "Same As",
          },
          "subjectOf": {
            "type": [
              "string",
              "null",
            ],
            "title": "Subject Of",
          },
          "url": {
            "type": [
              "string",
              "null",
            ],
            "title": "Url",
          },
        },
        "required": [],
        "title": "omitQHR5cGU=Thing",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ListItem+string":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=Thing",
          },
        ],
        "properties": {
          "@type": {
            "type": "string",
            "const": "ListItem",
            "default": "ListItem",
            "title": "@type",
          },
          "item": {
            "type": "string",
            "title": "Item",
          },
          "position": {
            "type": "number",
            "title": "Position",
          },
        },
        "required": [
          "@type",
          "item",
          "position",
        ],
        "title": "ListItem+string",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[ListItem+string]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ListItem+string",
        },
        "title": "[ListItem+string]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=ItemList":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=Thing",
          },
        ],
        "properties": {
          "itemListElement": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[ListItem+string]",
            "title": "Item List Element",
          },
          "numberOfItems": {
            "type": "number",
            "title": "Number Of Items",
          },
        },
        "required": [
          "itemListElement",
          "numberOfItems",
        ],
        "title": "omitQHR5cGU=ItemList",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@BreadcrumbList":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=ItemList",
          },
        ],
        "properties": {
          "@type": {
            "type": "string",
            "const": "BreadcrumbList",
            "default": "BreadcrumbList",
            "title": "@type",
          },
        },
        "required": [
          "@type",
        ],
        "title": "BreadcrumbList",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@PropertyValue":
      {
        "type": "object",
        "properties": {
          "@type": {
            "type": "string",
            "const": "PropertyValue",
            "default": "PropertyValue",
            "title": "@type",
          },
          "maxValue": {
            "type": [
              "number",
              "null",
            ],
            "title": "Max Value",
          },
          "minValue": {
            "type": [
              "number",
              "null",
            ],
            "title": "Min Value",
          },
          "propertyID": {
            "type": [
              "string",
              "null",
            ],
            "title": "Property I D",
          },
          "unitCode": {
            "type": [
              "string",
              "null",
            ],
            "title": "Unit Code",
          },
          "unitText": {
            "type": [
              "string",
              "null",
            ],
            "link": "unitCode unitCode}.",
            "title": "Unit Text",
          },
          "value": {
            "type": [
              "string",
              "null",
            ],
            "link":
              "https://schema.org/PropertyValue PropertyValue}, it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.",
            "title": "Value",
          },
          "valueReference": {
            "type": [
              "string",
              "null",
            ],
            "title": "Value Reference",
          },
        },
        "required": [
          "@type",
        ],
        "title": "PropertyValue",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[PropertyValue]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@PropertyValue",
        },
        "title": "[PropertyValue]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@AggregateRating":
      {
        "type": "object",
        "properties": {
          "@type": {
            "type": "string",
            "const": "AggregateRating",
            "default": "AggregateRating",
            "title": "@type",
          },
          "ratingCount": {
            "type": [
              "number",
              "null",
            ],
            "title": "Rating Count",
          },
          "reviewCount": {
            "type": [
              "number",
              "null",
            ],
            "title": "Review Count",
          },
          "ratingValue": {
            "type": [
              "number",
              "null",
            ],
            "title": "Rating Value",
          },
          "bestRating": {
            "type": [
              "number",
              "null",
            ],
            "title": "Best Rating",
          },
          "worstRating": {
            "type": [
              "number",
              "null",
            ],
            "title": "Worst Rating",
          },
          "ratingExplanation": {
            "type": [
              "string",
              "null",
            ],
            "title": "Rating Explanation",
          },
        },
        "required": [
          "@type",
        ],
        "title": "AggregateRating",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Brand":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=Thing",
          },
        ],
        "properties": {
          "@type": {
            "type": "string",
            "const": "Brand",
            "default": "Brand",
            "title": "@type",
          },
          "logo": {
            "type": [
              "string",
              "null",
            ],
            "title": "Logo",
          },
        },
        "required": [
          "@type",
        ],
        "title": "Brand",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Product]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Product",
        },
        "title": "[Product]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Product]|null":
      {
        "anyOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Product]",
          },
          {
            "type": "null",
          },
          {
            "title": "Shopify Integration",
            "description": "Product List loader",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3RMaXN0LnRz@Props",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "shopify/loaders/ProductList.ts",
                ],
                "default": "shopify/loaders/ProductList.ts",
              },
            },
          },
          {
            "title": "Shopify Integration - Related Products",
            "description": "Product Recommendations loader",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1JlbGF0ZWRQcm9kdWN0cy50cw==@Props",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "shopify/loaders/RelatedProducts.ts",
                ],
                "default": "shopify/loaders/RelatedProducts.ts",
              },
            },
          },
          {
            "title": "Extend your products",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@Props+[Product]|null",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "commerce/loaders/product/extensions/list.ts",
                ],
                "default": "commerce/loaders/product/extensions/list.ts",
              },
            },
          },
          {
            "title": "Extend your products",
            "deprecated": false,
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@Props+[Product]|null",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "commerce/loaders/product/products.ts",
                ],
                "default": "commerce/loaders/product/products.ts",
              },
            },
          },
          {
            "title": "#shopify/loaders/ProductList.ts@Product List Loader",
            "type": "object",
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "Product List Loader",
                ],
                "default": "Product List Loader",
              },
            },
          },
        ],
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ItemAvailability":
      {
        "anyOf": [
          {
            "type": "string",
            "const": "https://schema.org/BackOrder",
            "default": "https://schema.org/BackOrder",
          },
          {
            "type": "string",
            "const": "https://schema.org/Discontinued",
            "default": "https://schema.org/Discontinued",
          },
          {
            "type": "string",
            "const": "https://schema.org/InStock",
            "default": "https://schema.org/InStock",
          },
          {
            "type": "string",
            "const": "https://schema.org/InStoreOnly",
            "default": "https://schema.org/InStoreOnly",
          },
          {
            "type": "string",
            "const": "https://schema.org/LimitedAvailability",
            "default": "https://schema.org/LimitedAvailability",
          },
          {
            "type": "string",
            "const": "https://schema.org/OnlineOnly",
            "default": "https://schema.org/OnlineOnly",
          },
          {
            "type": "string",
            "const": "https://schema.org/OutOfStock",
            "default": "https://schema.org/OutOfStock",
          },
          {
            "type": "string",
            "const": "https://schema.org/PreOrder",
            "default": "https://schema.org/PreOrder",
          },
          {
            "type": "string",
            "const": "https://schema.org/PreSale",
            "default": "https://schema.org/PreSale",
          },
          {
            "type": "string",
            "const": "https://schema.org/SoldOut",
            "default": "https://schema.org/SoldOut",
          },
        ],
        "type": "string",
        "title": "ItemAvailability",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@QuantitativeValue":
      {
        "type": "object",
        "properties": {
          "value": {
            "type": [
              "number",
              "null",
            ],
            "title": "Value",
          },
        },
        "required": [],
        "title": "QuantitativeValue",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@OfferItemCondition":
      {
        "anyOf": [
          {
            "type": "string",
            "const": "https://schema.org/DamagedCondition",
            "default": "https://schema.org/DamagedCondition",
          },
          {
            "type": "string",
            "const": "https://schema.org/NewCondition",
            "default": "https://schema.org/NewCondition",
          },
          {
            "type": "string",
            "const": "https://schema.org/RefurbishedCondition",
            "default": "https://schema.org/RefurbishedCondition",
          },
          {
            "type": "string",
            "const": "https://schema.org/UsedCondition",
            "default": "https://schema.org/UsedCondition",
          },
        ],
        "type": "string",
        "title": "OfferItemCondition",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=PriceSpecification":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=Thing",
          },
        ],
        "properties": {
          "eligibleQuantity": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@QuantitativeValue",
            "title": "Eligible Quantity",
          },
          "price": {
            "type": "number",
            "link":
              'http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute RDFa} and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.',
            "title": "Price",
          },
          "priceCurrency": {
            "type": [
              "string",
              "null",
            ],
            "link":
              'https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".',
            "title": "Price Currency",
          },
        },
        "required": [
          "price",
        ],
        "title": "omitQHR5cGU=PriceSpecification",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@PriceComponentTypeEnumeration":
      {
        "anyOf": [
          {
            "type": "string",
            "const": "https://schema.org/ActivationFee",
            "default": "https://schema.org/ActivationFee",
          },
          {
            "type": "string",
            "const": "https://schema.org/CleaningFee",
            "default": "https://schema.org/CleaningFee",
          },
          {
            "type": "string",
            "const": "https://schema.org/DistanceFee",
            "default": "https://schema.org/DistanceFee",
          },
          {
            "type": "string",
            "const": "https://schema.org/Downpayment",
            "default": "https://schema.org/Downpayment",
          },
          {
            "type": "string",
            "const": "https://schema.org/Installment",
            "default": "https://schema.org/Installment",
          },
          {
            "type": "string",
            "const": "https://schema.org/Subscription",
            "default": "https://schema.org/Subscription",
          },
        ],
        "type": "string",
        "title": "PriceComponentTypeEnumeration",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@PriceTypeEnumeration":
      {
        "anyOf": [
          {
            "type": "string",
            "const": "https://schema.org/InvoicePrice",
            "default": "https://schema.org/InvoicePrice",
          },
          {
            "type": "string",
            "const": "https://schema.org/ListPrice",
            "default": "https://schema.org/ListPrice",
          },
          {
            "type": "string",
            "const": "https://schema.org/MinimumAdvertisedPrice",
            "default": "https://schema.org/MinimumAdvertisedPrice",
          },
          {
            "type": "string",
            "const": "https://schema.org/MSRP",
            "default": "https://schema.org/MSRP",
          },
          {
            "type": "string",
            "const": "https://schema.org/SalePrice",
            "default": "https://schema.org/SalePrice",
          },
          {
            "type": "string",
            "const": "https://schema.org/SRP",
            "default": "https://schema.org/SRP",
          },
        ],
        "type": "string",
        "title": "PriceTypeEnumeration",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@UnitPriceSpecification":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=PriceSpecification",
          },
        ],
        "properties": {
          "@type": {
            "type": "string",
            "const": "UnitPriceSpecification",
            "default": "UnitPriceSpecification",
            "title": "@type",
          },
          "priceComponentType": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@PriceComponentTypeEnumeration",
            "title": "Price Component Type",
          },
          "priceType": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@PriceTypeEnumeration",
            "link":
              "https://schema.org/priceType priceType} property can be used to identify the type of each such specified price. The value of priceType can be specified as a value from enumeration PriceTypeEnumeration or as a free form text string for price types that are not already predefined in PriceTypeEnumeration.",
            "title": "Price Type",
          },
          "billingDuration": {
            "type": [
              "number",
              "null",
            ],
            "title": "Billing Duration",
          },
          "billingIncrement": {
            "type": [
              "number",
              "null",
            ],
            "title": "Billing Increment",
          },
        },
        "required": [
          "@type",
          "priceType",
        ],
        "title": "UnitPriceSpecification",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[UnitPriceSpecification]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@UnitPriceSpecification",
        },
        "title": "[UnitPriceSpecification]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@TeasersParameters":
      {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "title": "Name",
          },
          "value": {
            "type": "string",
            "title": "Value",
          },
        },
        "required": [
          "name",
          "value",
        ],
        "title": "TeasersParameters",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[TeasersParameters]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@TeasersParameters",
        },
        "title": "[TeasersParameters]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@TeasersConditions":
      {
        "type": "object",
        "properties": {
          "minimumQuantity": {
            "type": "number",
            "title": "Minimum Quantity",
          },
          "parameters": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[TeasersParameters]",
            "title": "Parameters",
          },
        },
        "required": [
          "minimumQuantity",
          "parameters",
        ],
        "title": "TeasersConditions",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@TeasersEffect":
      {
        "type": "object",
        "properties": {
          "parameters": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[TeasersParameters]",
            "title": "Parameters",
          },
        },
        "required": [
          "parameters",
        ],
        "title": "TeasersEffect",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Teasers":
      {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "title": "Name",
          },
          "generalValues": {
            "type": [
              "object",
              "null",
            ],
            "title": "General Values",
          },
          "conditions": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@TeasersConditions",
            "title": "Conditions",
          },
          "effects": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@TeasersEffect",
            "title": "Effects",
          },
        },
        "required": [
          "name",
          "conditions",
          "effects",
        ],
        "title": "Teasers",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Teasers]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Teasers",
        },
        "title": "[Teasers]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ReturnFeesEnumeration":
      {
        "anyOf": [
          {
            "type": "string",
            "const": "https://schema.org/FreeReturn",
            "default": "https://schema.org/FreeReturn",
          },
          {
            "type": "string",
            "const": "https://schema.org/OriginalShippingFees",
            "default": "https://schema.org/OriginalShippingFees",
          },
          {
            "type": "string",
            "const": "https://schema.org/RestockingFees",
            "default": "https://schema.org/RestockingFees",
          },
          {
            "type": "string",
            "const": "https://schema.org/ReturnFeesCustomerResponsibility",
            "default": "https://schema.org/ReturnFeesCustomerResponsibility",
          },
          {
            "type": "string",
            "const": "https://schema.org/ReturnShippingFees",
            "default": "https://schema.org/ReturnShippingFees",
          },
        ],
        "type": "string",
        "title": "ReturnFeesEnumeration",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ReturnMethodEnumeration":
      {
        "anyOf": [
          {
            "type": "string",
            "const": "https://schema.org/KeepProduct",
            "default": "https://schema.org/KeepProduct",
          },
          {
            "type": "string",
            "const": "https://schema.org/ReturnAtKiosk",
            "default": "https://schema.org/ReturnAtKiosk",
          },
          {
            "type": "string",
            "const": "https://schema.org/ReturnByMail",
            "default": "https://schema.org/ReturnByMail",
          },
          {
            "type": "string",
            "const": "https://schema.org/ReturnInStore",
            "default": "https://schema.org/ReturnInStore",
          },
        ],
        "type": "string",
        "title": "ReturnMethodEnumeration",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@MerchantReturnEnumeration":
      {
        "anyOf": [
          {
            "type": "string",
            "const": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "default": "https://schema.org/MerchantReturnFiniteReturnWindow",
          },
          {
            "type": "string",
            "const": "https://schema.org/MerchantReturnNotPermitted",
            "default": "https://schema.org/MerchantReturnNotPermitted",
          },
          {
            "type": "string",
            "const": "https://schema.org/MerchantReturnUnlimitedWindow",
            "default": "https://schema.org/MerchantReturnUnlimitedWindow",
          },
          {
            "type": "string",
            "const": "https://schema.org/MerchantReturnUnspecified",
            "default": "https://schema.org/MerchantReturnUnspecified",
          },
        ],
        "type": "string",
        "title": "MerchantReturnEnumeration",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@MonetaryAmount":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=Thing",
          },
        ],
        "properties": {
          "currency": {
            "type": "string",
            "title": "Currency",
          },
          "maxValue": {
            "type": "number",
            "title": "Max Value",
          },
          "minValue": {
            "type": "number",
            "title": "Min Value",
          },
          "validFrom": {
            "type": "string",
            "title": "Valid From",
          },
          "validThrough": {
            "type": "string",
            "title": "Valid Through",
          },
          "value": {
            "anyOf": [
              {
                "type": "boolean",
              },
              {
                "type": "number",
              },
              {
                "type": "string",
              },
            ],
            "title": "Value",
          },
        },
        "required": [
          "currency",
          "maxValue",
          "minValue",
          "validFrom",
          "validThrough",
          "value",
        ],
        "title": "MonetaryAmount",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@MerchantReturnPolicy":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=Thing",
          },
        ],
        "properties": {
          "@type": {
            "type": "string",
            "const": "MerchantReturnPolicy",
            "default": "MerchantReturnPolicy",
            "title": "@type",
          },
          "merchantReturnDays": {
            "type": [
              "number",
              "null",
            ],
            "title": "Merchant Return Days",
          },
          "applicableCountry": {
            "type": "string",
            "title": "Applicable Country",
          },
          "returnFees": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ReturnFeesEnumeration",
            "title": "Return Fees",
          },
          "returnMethod": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ReturnMethodEnumeration",
            "title": "Return Method",
          },
          "returnPolicyCategory": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@MerchantReturnEnumeration",
            "title": "Return Policy Category",
          },
          "returnShippingFeesAmount": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@MonetaryAmount",
            "title": "Return Shipping Fees Amount",
          },
        },
        "required": [
          "@type",
          "applicableCountry",
          "returnPolicyCategory",
        ],
        "title": "MerchantReturnPolicy",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Offer":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=Thing",
          },
        ],
        "properties": {
          "@type": {
            "type": "string",
            "const": "Offer",
            "default": "Offer",
            "title": "@type",
          },
          "availability": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ItemAvailability",
            "title": "Availability",
          },
          "gtin": {
            "type": [
              "string",
              "null",
            ],
            "link":
              "https://en.wikipedia.org/wiki/Global_Trade_Item_Number Wikipedia} for more details. Left-padding of the gtin values is not required or encouraged.",
            "title": "Gtin",
          },
          "inventoryLevel": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@QuantitativeValue",
            "title": "Inventory Level",
          },
          "itemCondition": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@OfferItemCondition",
            "title": "Item Condition",
          },
          "price": {
            "type": "number",
            "link":
              'http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute RDFa} and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.',
            "title": "Price",
          },
          "priceCurrency": {
            "type": [
              "string",
              "null",
            ],
            "link":
              'https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".',
            "title": "Price Currency",
          },
          "priceSpecification": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[UnitPriceSpecification]",
            "title": "Price Specification",
          },
          "priceValidUntil": {
            "type": [
              "string",
              "null",
            ],
            "title": "Price Valid Until",
          },
          "seller": {
            "type": [
              "string",
              "null",
            ],
            "title": "Seller",
          },
          "sellerName": {
            "type": [
              "string",
              "null",
            ],
            "title": "Seller Name",
          },
          "sku": {
            "type": [
              "string",
              "null",
            ],
            "title": "Sku",
          },
          "giftSkuIds": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Gift Sku Ids",
          },
          "teasers": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Teasers]",
            "title": "Teasers",
          },
          "hasMerchantReturnPolicy": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@MerchantReturnPolicy",
            "title": "Has Merchant Return Policy",
          },
        },
        "required": [
          "@type",
          "availability",
          "inventoryLevel",
          "price",
          "priceSpecification",
        ],
        "title": "Offer",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Offer]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Offer",
        },
        "title": "[Offer]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@AggregateOffer":
      {
        "type": "object",
        "properties": {
          "@type": {
            "type": "string",
            "const": "AggregateOffer",
            "default": "AggregateOffer",
            "title": "@type",
          },
          "highPrice": {
            "type": "number",
            "title": "High Price",
          },
          "lowPrice": {
            "type": "number",
            "title": "Low Price",
          },
          "offerCount": {
            "type": "number",
            "title": "Offer Count",
          },
          "offers": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Offer]",
            "link":
              "https://schema.org/Demand Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.",
            "title": "Offers",
          },
          "priceCurrency": {
            "type": [
              "string",
              "null",
            ],
            "link":
              'https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".',
            "title": "Price Currency",
          },
          "hasMerchantReturnPolicy": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@MerchantReturnPolicy",
            "title": "Has Merchant Return Policy",
          },
        },
        "required": [
          "@type",
          "highPrice",
          "lowPrice",
          "offerCount",
          "offers",
        ],
        "title": "AggregateOffer",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Author":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=Thing",
          },
        ],
        "properties": {
          "@type": {
            "type": "string",
            "const": "Author",
            "default": "Author",
            "title": "@type",
          },
          "name": {
            "type": [
              "string",
              "null",
            ],
            "title": "Name",
          },
          "url": {
            "type": [
              "string",
              "null",
            ],
            "title": "Url",
          },
          "verifiedBuyer": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Verified Buyer",
          },
          "location": {
            "type": [
              "string",
              "null",
            ],
            "title": "Location",
          },
        },
        "required": [
          "@type",
        ],
        "title": "Author",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Author]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Author",
        },
        "title": "[Author]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ReviewTag":
      {
        "type": "object",
        "properties": {
          "label": {
            "type": [
              "string",
              "null",
            ],
            "title": "Label",
          },
          "value": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Value",
          },
        },
        "required": [],
        "title": "ReviewTag",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[ReviewTag]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ReviewTag",
        },
        "title": "[ReviewTag]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ReviewBrand":
      {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "title": "Name",
          },
          "logo": {
            "type": "string",
            "title": "Logo",
          },
          "url": {
            "type": "string",
            "title": "Url",
          },
        },
        "required": [
          "name",
          "logo",
          "url",
        ],
        "title": "ReviewBrand",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ReviewMedia":
      {
        "type": "object",
        "properties": {
          "type": {
            "anyOf": [
              {
                "type": "string",
                "const": "image",
                "default": "image",
              },
              {
                "type": "string",
                "const": "video",
                "default": "video",
              },
            ],
            "type": "string",
            "title": "Type",
          },
          "url": {
            "type": [
              "string",
              "null",
            ],
            "title": "Url",
          },
          "alt": {
            "type": [
              "string",
              "null",
            ],
            "title": "Alt",
          },
          "likes": {
            "type": [
              "number",
              "null",
            ],
            "title": "Likes",
          },
          "unlikes": {
            "type": [
              "number",
              "null",
            ],
            "title": "Unlikes",
          },
        },
        "required": [
          "type",
        ],
        "title": "ReviewMedia",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[ReviewMedia]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ReviewMedia",
        },
        "title": "[ReviewMedia]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Review":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=Thing",
          },
        ],
        "properties": {
          "@type": {
            "type": "string",
            "const": "Review",
            "default": "Review",
            "title": "@type",
          },
          "id": {
            "type": [
              "string",
              "null",
            ],
            "title": "Id",
          },
          "author": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Author]",
            "title": "Author",
          },
          "datePublished": {
            "type": [
              "string",
              "null",
            ],
            "title": "Date Published",
          },
          "itemReviewed": {
            "type": [
              "string",
              "null",
            ],
            "title": "Item Reviewed",
          },
          "negativeNotes": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "link":
              "https://schema.org/Review Review} (e.g. framed as 'pro' vs 'con' considerations), negative considerations - either as unstructured text, or a list.",
            "title": "Negative Notes",
          },
          "positiveNotes": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "link":
              "https://schema.org/Review Review} (e.g. framed as 'pro' vs 'con' considerations), positive considerations - either as unstructured text, or a list.",
            "title": "Positive Notes",
          },
          "reviewAspect": {
            "type": [
              "string",
              "null",
            ],
            "title": "Review Aspect",
          },
          "reviewHeadline": {
            "type": [
              "string",
              "null",
            ],
            "title": "Review Headline",
          },
          "reviewBody": {
            "type": [
              "string",
              "null",
            ],
            "title": "Review Body",
          },
          "reviewRating": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@AggregateRating",
            "link":
              "https://schema.org/aggregateRating aggregateRating} property applies to the review itself, as a creative work.",
            "title": "Review Rating",
          },
          "tags": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[ReviewTag]",
            "title": "Tags",
          },
          "brand": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ReviewBrand",
            "title": "Brand",
          },
          "media": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[ReviewMedia]",
            "title": "Media",
          },
        },
        "required": [
          "@type",
        ],
        "title": "Review",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Review]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Review",
        },
        "title": "[Review]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGUsbmFtZQ==Thing":
      {
        "type": "object",
        "properties": {
          "@id": {
            "type": [
              "string",
              "null",
            ],
            "title": "@id",
          },
          "additionalType": {
            "type": [
              "string",
              "null",
            ],
            "title": "Additional Type",
          },
          "alternateName": {
            "type": [
              "string",
              "null",
            ],
            "title": "Alternate Name",
          },
          "description": {
            "type": [
              "string",
              "null",
            ],
            "title": "Description",
          },
          "disambiguatingDescription": {
            "type": [
              "string",
              "null",
            ],
            "title": "Disambiguating Description",
          },
          "identifier": {
            "type": [
              "string",
              "null",
            ],
            "link":
              "/docs/datamodel.html#identifierBg background notes} for more details.",
            "title": "Identifier",
          },
          "image": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[ImageObject]|null",
            "link": "https://schema.org/ImageObject ImageObject}.",
            "title": "Image",
          },
          "video": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[VideoObject]|null",
            "title": "Video",
          },
          "sameAs": {
            "type": [
              "string",
              "null",
            ],
            "title": "Same As",
          },
          "subjectOf": {
            "type": [
              "string",
              "null",
            ],
            "title": "Subject Of",
          },
          "url": {
            "type": [
              "string",
              "null",
            ],
            "title": "Url",
          },
        },
        "required": [],
        "title": "omitQHR5cGUsbmFtZQ==Thing",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Answer":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=Thing",
          },
        ],
        "properties": {
          "text": {
            "type": "string",
            "title": "Text",
          },
          "dateModified": {
            "type": [
              "string",
              "null",
            ],
            "title": "Date Modified",
          },
          "datePublished": {
            "type": [
              "string",
              "null",
            ],
            "title": "Date Published",
          },
          "author": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Author]",
            "title": "Author",
          },
        },
        "required": [
          "text",
        ],
        "title": "Answer",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Answer]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Answer",
        },
        "title": "[Answer]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Question":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGUsbmFtZQ==Thing",
          },
        ],
        "properties": {
          "@type": {
            "type": "string",
            "const": "Question",
            "default": "Question",
            "title": "@type",
          },
          "answerCount": {
            "type": "number",
            "title": "Answer Count",
          },
          "acceptedAnswer": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Answer",
            "title": "Accepted Answer",
          },
          "suggestedAnswer": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Answer]",
            "title": "Suggested Answer",
          },
          "name": {
            "type": "string",
            "title": "Name",
          },
          "text": {
            "type": "string",
            "title": "Text",
          },
          "dateModified": {
            "type": [
              "string",
              "null",
            ],
            "title": "Date Modified",
          },
          "datePublished": {
            "type": [
              "string",
              "null",
            ],
            "title": "Date Published",
          },
          "author": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Author]",
            "title": "Author",
          },
        },
        "required": [
          "@type",
          "answerCount",
          "name",
          "text",
        ],
        "title": "Question",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Question]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Question",
        },
        "title": "[Question]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitaXNWYXJpYW50T2Y=Product":
      {
        "type": "object",
        "properties": {
          "@type": {
            "type": "string",
            "const": "Product",
            "default": "Product",
            "title": "@type",
          },
          "additionalProperty": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[PropertyValue]",
            "title": "Additional Property",
          },
          "aggregateRating": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@AggregateRating",
            "title": "Aggregate Rating",
          },
          "award": {
            "type": [
              "string",
              "null",
            ],
            "title": "Award",
          },
          "brand": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Brand",
            "title": "Brand",
          },
          "category": {
            "type": [
              "string",
              "null",
            ],
            "title": "Category",
          },
          "gtin": {
            "type": [
              "string",
              "null",
            ],
            "link":
              "https://en.wikipedia.org/wiki/Global_Trade_Item_Number Wikipedia} for more details. Left-padding of the gtin values is not required or encouraged.",
            "title": "Gtin",
          },
          "inProductGroupWithID": {
            "type": [
              "string",
              "null",
            ],
            "link": "https://schema.org/isVariantOf isVariantOf}.",
            "title": "In Product Group With I D",
          },
          "isRelatedTo": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Product]|null",
            "title": "Is Related To",
          },
          "isSimilarTo": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Product]|null",
            "title": "Is Similar To",
          },
          "offers": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@AggregateOffer",
            "link":
              "https://schema.org/Demand Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.",
            "title": "Offers",
          },
          "productID": {
            "type": "string",
            "title": "Product I D",
          },
          "productionDate": {
            "type": [
              "string",
              "null",
            ],
            "title": "Production Date",
          },
          "releaseDate": {
            "type": [
              "string",
              "null",
            ],
            "title": "Release Date",
          },
          "review": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Review]",
            "title": "Review",
          },
          "sku": {
            "type": "string",
            "title": "Sku",
          },
          "isAccessoryOrSparePartFor": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Product]|null",
            "title": "Is Accessory Or Spare Part For",
          },
          "questions": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Question]",
            "title": "Questions",
          },
        },
        "required": [
          "@type",
          "productID",
          "sku",
        ],
        "title": "omitaXNWYXJpYW50T2Y=Product",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ProductLeaf":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitaXNWYXJpYW50T2Y=Product",
          },
        ],
        "properties": {},
        "required": [],
        "title": "ProductLeaf",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[ProductLeaf]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ProductLeaf",
        },
        "title": "[ProductLeaf]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ProductGroup":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=Thing",
          },
        ],
        "properties": {
          "@type": {
            "type": "string",
            "const": "ProductGroup",
            "default": "ProductGroup",
            "title": "@type",
          },
          "hasVariant": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[ProductLeaf]",
            "link": "https://schema.org/ProductModel ProductModel}).",
            "title": "Has Variant",
          },
          "productGroupID": {
            "type": "string",
            "title": "Product Group I D",
          },
          "additionalProperty": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[PropertyValue]",
            "title": "Additional Property",
          },
          "model": {
            "type": [
              "string",
              "null",
            ],
            "title": "Model",
          },
        },
        "required": [
          "@type",
          "hasVariant",
          "productGroupID",
          "additionalProperty",
        ],
        "title": "ProductGroup",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Product":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=Thing",
          },
        ],
        "properties": {
          "@type": {
            "type": "string",
            "const": "Product",
            "default": "Product",
            "title": "@type",
          },
          "additionalProperty": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[PropertyValue]",
            "title": "Additional Property",
          },
          "aggregateRating": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@AggregateRating",
            "title": "Aggregate Rating",
          },
          "award": {
            "type": [
              "string",
              "null",
            ],
            "title": "Award",
          },
          "brand": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Brand",
            "title": "Brand",
          },
          "category": {
            "type": [
              "string",
              "null",
            ],
            "title": "Category",
          },
          "gtin": {
            "type": [
              "string",
              "null",
            ],
            "link":
              "https://en.wikipedia.org/wiki/Global_Trade_Item_Number Wikipedia} for more details. Left-padding of the gtin values is not required or encouraged.",
            "title": "Gtin",
          },
          "inProductGroupWithID": {
            "type": [
              "string",
              "null",
            ],
            "link": "https://schema.org/isVariantOf isVariantOf}.",
            "title": "In Product Group With I D",
          },
          "isRelatedTo": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Product]|null",
            "title": "Is Related To",
          },
          "isSimilarTo": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Product]|null",
            "title": "Is Similar To",
          },
          "isVariantOf": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ProductGroup",
            "link":
              "https://schema.org/Product Product} included in the group.",
            "title": "Is Variant Of",
          },
          "offers": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@AggregateOffer",
            "link":
              "https://schema.org/Demand Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.",
            "title": "Offers",
          },
          "productID": {
            "type": "string",
            "title": "Product I D",
          },
          "productionDate": {
            "type": [
              "string",
              "null",
            ],
            "title": "Production Date",
          },
          "releaseDate": {
            "type": [
              "string",
              "null",
            ],
            "title": "Release Date",
          },
          "review": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Review]",
            "title": "Review",
          },
          "sku": {
            "type": "string",
            "title": "Sku",
          },
          "isAccessoryOrSparePartFor": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Product]|null",
            "title": "Is Accessory Or Spare Part For",
          },
          "questions": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Question]",
            "title": "Questions",
          },
        },
        "required": [
          "@type",
          "productID",
          "sku",
        ],
        "title": "Product",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Seo":
      {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "description": {
            "type": "string",
            "title": "Description",
          },
          "canonical": {
            "type": "string",
            "title": "Canonical",
          },
          "noIndexing": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "No Indexing",
          },
        },
        "required": [
          "title",
          "description",
          "canonical",
        ],
        "title": "Seo",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Seo|null":
      {
        "anyOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Seo",
          },
          {
            "type": "null",
          },
        ],
        "title": "Seo|null",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ProductDetailsPage":
      {
        "type": "object",
        "properties": {
          "@type": {
            "type": "string",
            "const": "ProductDetailsPage",
            "default": "ProductDetailsPage",
            "title": "@type",
          },
          "breadcrumbList": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@BreadcrumbList",
            "title": "Breadcrumb List",
          },
          "product": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Product",
            "title": "Product",
          },
          "seo": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Seo|null",
            "title": "Seo",
          },
        },
        "required": [
          "@type",
          "breadcrumbList",
          "product",
        ],
        "title": "ProductDetailsPage",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ProductDetailsPage|null":
      {
        "anyOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ProductDetailsPage",
          },
          {
            "type": "null",
          },
          {
            "title": "Shopify Integration",
            "description": "Product Details Page loader",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3REZXRhaWxzUGFnZS50cw==@Props",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "shopify/loaders/ProductDetailsPage.ts",
                ],
                "default": "shopify/loaders/ProductDetailsPage.ts",
              },
            },
          },
          {
            "title": "Extend your product",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@Props+ProductDetailsPage|null",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "commerce/loaders/product/extensions/detailsPage.ts",
                ],
                "default": "commerce/loaders/product/extensions/detailsPage.ts",
              },
            },
          },
          {
            "title":
              "#commerce/loaders/product/extensions/detailsPage.ts@PDP Loader",
            "type": "object",
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "PDP Loader",
                ],
                "default": "PDP Loader",
              },
            },
          },
        ],
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3REZXRhaWxzUGFnZS50cw==@Props":
      {
        "type": "object",
        "properties": {
          "slug": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mdW5jdGlvbnMvcmVxdWVzdFRvUGFyYW0udHM=@RequestURLParam",
            "title": "Slug",
          },
        },
        "required": [
          "slug",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/shopify/loaders/ProductDetailsPage.ts@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS91dGlscy91dGlscy50cw==@SearchSortKeys":
      {
        "anyOf": [
          {
            "type": "string",
            "const": "",
            "default": "",
          },
          {
            "type": "string",
            "const": "price-descending",
            "default": "price-descending",
          },
          {
            "type": "string",
            "const": "price-ascending",
            "default": "price-ascending",
          },
        ],
        "type": "string",
        "title": "SearchSortKeys",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3RMaXN0LnRz@QueryProps":
      {
        "type": "object",
        "properties": {
          "query": {
            "type": "string",
            "description": "search term to use on search",
            "title": "Query",
          },
          "count": {
            "type": "number",
            "description": "total number of items to display",
            "title": "Count",
          },
          "sort": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS91dGlscy91dGlscy50cw==@SearchSortKeys",
            "description": "sort products",
            "title": "Sort",
          },
        },
        "required": [
          "query",
          "count",
        ],
        "title": "QueryProps",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS91dGlscy91dGlscy50cw==@CollectionSortKeys":
      {
        "anyOf": [
          {
            "type": "string",
            "const": "",
            "default": "",
          },
          {
            "type": "string",
            "const": "price-descending",
            "default": "price-descending",
          },
          {
            "type": "string",
            "const": "price-ascending",
            "default": "price-ascending",
          },
          {
            "type": "string",
            "const": "best-selling",
            "default": "best-selling",
          },
          {
            "type": "string",
            "const": "title-descending",
            "default": "title-descending",
          },
          {
            "type": "string",
            "const": "title-ascending",
            "default": "title-ascending",
          },
          {
            "type": "string",
            "const": "created-descending",
            "default": "created-descending",
          },
        ],
        "type": "string",
        "title": "CollectionSortKeys",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3RMaXN0LnRz@CollectionProps":
      {
        "type": "object",
        "properties": {
          "collection": {
            "type": "string",
            "description": "collection name to use on search",
            "title": "Collection",
          },
          "count": {
            "type": "number",
            "description": "total number of items to display",
            "title": "Count",
          },
          "sort": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS91dGlscy91dGlscy50cw==@CollectionSortKeys",
            "description": "sort products",
            "title": "Sort",
          },
        },
        "required": [
          "collection",
          "count",
        ],
        "title": "CollectionProps",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3RMaXN0LnRzLWh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZWNvLWN4L2FwcHNAMC41OS4zL3Nob3BpZnkvbG9hZGVycy9Qcm9kdWN0TGlzdC50cw==@QueryProps|CollectionProps":
      {
        "anyOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3RMaXN0LnRz@QueryProps",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3RMaXN0LnRz@CollectionProps",
          },
        ],
        "title": "QueryProps|CollectionProps",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3RMaXN0LnRz@tl@1444-1570":
      {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "title": "Name",
          },
          "value": {
            "type": "string",
            "title": "Value",
          },
        },
        "required": [
          "name",
          "value",
        ],
        "title": "tl@1444-1570",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3RMaXN0LnRz@[tl@1444-1570]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3RMaXN0LnRz@tl@1444-1570",
        },
        "title": "[tl@1444-1570]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3RMaXN0LnRz@FilterProps":
      {
        "type": "object",
        "properties": {
          "tags": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Tags",
          },
          "productTypes": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Product Types",
          },
          "productVendors": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "description": "product brands",
            "title": "Product Vendors",
          },
          "priceMin": {
            "type": [
              "number",
              "null",
            ],
            "description": "minimum price",
            "title": "Price Min",
          },
          "priceMax": {
            "type": [
              "number",
              "null",
            ],
            "description": "maximum price",
            "title": "Price Max",
          },
          "variantOptions": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3RMaXN0LnRz@[tl@1444-1570]",
            "description": "variant options",
            "title": "Variant Options",
          },
        },
        "required": [],
        "title": "FilterProps",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3RMaXN0LnRz@tl@1597-1665":
      {
        "type": "object",
        "properties": {
          "props": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3RMaXN0LnRzLWh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZWNvLWN4L2FwcHNAMC41OS4zL3Nob3BpZnkvbG9hZGVycy9Qcm9kdWN0TGlzdC50cw==@QueryProps|CollectionProps",
            "title": "Props",
          },
          "filters": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3RMaXN0LnRz@FilterProps",
            "title": "Filters",
          },
        },
        "required": [
          "props",
        ],
        "title": "tl@1597-1665",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3RMaXN0LnRz@Props":
      {
        "$ref":
          "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3RMaXN0LnRz@tl@1597-1665",
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/shopify/loaders/ProductList.ts@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@FilterBase":
      {
        "type": "object",
        "properties": {
          "label": {
            "type": "string",
            "title": "Label",
          },
          "key": {
            "type": "string",
            "title": "Key",
          },
        },
        "required": [
          "label",
          "key",
        ],
        "title": "FilterBase",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Filter|null":
      {
        "anyOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Filter",
          },
          {
            "type": "null",
          },
        ],
        "title": "Filter|null",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@FilterToggleValue":
      {
        "type": "object",
        "properties": {
          "quantity": {
            "type": "number",
            "title": "Quantity",
          },
          "label": {
            "type": "string",
            "title": "Label",
          },
          "value": {
            "type": "string",
            "title": "Value",
          },
          "selected": {
            "type": "boolean",
            "title": "Selected",
          },
          "url": {
            "type": "string",
            "title": "Url",
          },
          "children": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Filter|null",
            "title": "Children",
          },
        },
        "required": [
          "quantity",
          "label",
          "value",
          "selected",
          "url",
        ],
        "title": "FilterToggleValue",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[FilterToggleValue]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@FilterToggleValue",
        },
        "title": "[FilterToggleValue]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@FilterToggle":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@FilterBase",
          },
        ],
        "properties": {
          "@type": {
            "type": "string",
            "const": "FilterToggle",
            "default": "FilterToggle",
            "title": "@type",
          },
          "values": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[FilterToggleValue]",
            "title": "Values",
          },
          "quantity": {
            "type": "number",
            "title": "Quantity",
          },
        },
        "required": [
          "@type",
          "values",
          "quantity",
        ],
        "title": "FilterToggle",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@FilterRangeValue":
      {
        "type": "object",
        "properties": {
          "min": {
            "type": "number",
            "title": "Min",
          },
          "max": {
            "type": "number",
            "title": "Max",
          },
        },
        "required": [
          "min",
          "max",
        ],
        "title": "FilterRangeValue",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@FilterRange":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@FilterBase",
          },
        ],
        "properties": {
          "@type": {
            "type": "string",
            "const": "FilterRange",
            "default": "FilterRange",
            "title": "@type",
          },
          "values": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@FilterRangeValue",
            "title": "Values",
          },
        },
        "required": [
          "@type",
          "values",
        ],
        "title": "FilterRange",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@FilterToggle|FilterRange":
      {
        "anyOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@FilterToggle",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@FilterRange",
          },
        ],
        "title": "FilterToggle|FilterRange",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Filter":
      {
        "$ref":
          "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@FilterToggle|FilterRange",
        "title": "Filter",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Filter]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Filter",
        },
        "title": "[Filter]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@PageType":
      {
        "anyOf": [
          {
            "type": "string",
            "const": "Brand",
            "default": "Brand",
          },
          {
            "type": "string",
            "const": "Category",
            "default": "Category",
          },
          {
            "type": "string",
            "const": "Department",
            "default": "Department",
          },
          {
            "type": "string",
            "const": "SubCategory",
            "default": "SubCategory",
          },
          {
            "type": "string",
            "const": "Product",
            "default": "Product",
          },
          {
            "type": "string",
            "const": "Collection",
            "default": "Collection",
          },
          {
            "type": "string",
            "const": "Cluster",
            "default": "Cluster",
          },
          {
            "type": "string",
            "const": "Search",
            "default": "Search",
          },
          {
            "type": "string",
            "const": "Unknown",
            "default": "Unknown",
          },
        ],
        "type": "string",
        "title": "PageType",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[PageType]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@PageType",
        },
        "title": "[PageType]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@PageInfo":
      {
        "type": "object",
        "properties": {
          "currentPage": {
            "type": "number",
            "title": "Current Page",
          },
          "nextPage": {
            "anyOf": [
              {
                "type": "string",
              },
              {
                "type": "null",
              },
            ],
            "title": "Next Page",
          },
          "previousPage": {
            "anyOf": [
              {
                "type": "string",
              },
              {
                "type": "null",
              },
            ],
            "title": "Previous Page",
          },
          "records": {
            "anyOf": [
              {
                "type": "number",
              },
              {
                "type": "null",
              },
            ],
            "title": "Records",
          },
          "recordPerPage": {
            "anyOf": [
              {
                "type": "number",
              },
              {
                "type": "null",
              },
            ],
            "title": "Record Per Page",
          },
          "pageTypes": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[PageType]",
            "title": "Page Types",
          },
        },
        "required": [
          "currentPage",
          "nextPage",
          "previousPage",
        ],
        "title": "PageInfo",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@tl@49325-49362":
      {
        "type": "object",
        "properties": {
          "value": {
            "type": "string",
            "title": "Value",
          },
          "label": {
            "type": "string",
            "title": "Label",
          },
        },
        "required": [
          "value",
          "label",
        ],
        "title": "tl@49325-49362",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@SortOption":
      {
        "$ref":
          "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@tl@49325-49362",
        "title": "SortOption",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[SortOption]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@SortOption",
        },
        "title": "[SortOption]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ProductListingPage":
      {
        "type": "object",
        "properties": {
          "@type": {
            "type": "string",
            "const": "ProductListingPage",
            "default": "ProductListingPage",
            "title": "@type",
          },
          "breadcrumb": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@BreadcrumbList",
            "title": "Breadcrumb",
          },
          "filters": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Filter]",
            "title": "Filters",
          },
          "products": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Product]",
            "title": "Products",
          },
          "pageInfo": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@PageInfo",
            "title": "Page Info",
          },
          "sortOptions": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[SortOption]",
            "title": "Sort Options",
          },
          "seo": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Seo|null",
            "title": "Seo",
          },
        },
        "required": [
          "@type",
          "breadcrumb",
          "filters",
          "products",
          "pageInfo",
          "sortOptions",
        ],
        "title": "ProductListingPage",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ProductListingPage|null":
      {
        "anyOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ProductListingPage",
          },
          {
            "type": "null",
          },
          {
            "title": "Shopify Integration",
            "description": "Product Listing Page loader",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3RMaXN0aW5nUGFnZS50cw==@Props",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "shopify/loaders/ProductListingPage.ts",
                ],
                "default": "shopify/loaders/ProductListingPage.ts",
              },
            },
          },
          {
            "title": "Extend your product",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@Props+ProductListingPage|null",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "commerce/loaders/product/extensions/listingPage.ts",
                ],
                "default": "commerce/loaders/product/extensions/listingPage.ts",
              },
            },
          },
          {
            "title": "Extend your product",
            "deprecated": false,
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@Props+ProductListingPage|null",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "commerce/loaders/product/productListingPage.ts",
                ],
                "default": "commerce/loaders/product/productListingPage.ts",
              },
            },
          },
          {
            "title":
              "#commerce/loaders/product/extensions/listingPage.ts@PLP Loader",
            "type": "object",
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "PLP Loader",
                ],
                "default": "PLP Loader",
              },
            },
          },
        ],
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3RMaXN0aW5nUGFnZS50cw==@Props":
      {
        "type": "object",
        "properties": {
          "query": {
            "type": [
              "string",
              "null",
            ],
            "description": "overrides the query term at url",
            "title": "Query",
          },
          "collectionName": {
            "type": [
              "string",
              "null",
            ],
            "title": "Collection Name",
            "description": "overrides the collection name at url",
          },
          "count": {
            "type": "number",
            "title": "Items per page",
            "description": "number of products per page to display",
          },
          "page": {
            "type": [
              "number",
              "null",
            ],
            "hide": "*",
            "description":
              "it is hidden because only page prop is not sufficient, we need cursors",
            "title": "Page",
          },
          "startCursor": {
            "type": [
              "string",
              "null",
            ],
            "hide": "*",
            "description":
              "at admin user do not know cursor, it is useful to invokes like show more products",
            "title": "Start Cursor",
          },
          "endCursor": {
            "type": [
              "string",
              "null",
            ],
            "hide": "*",
            "description":
              "at admin user do not know cursor, it is useful to invokes like show more products",
            "title": "End Cursor",
          },
          "pageHref": {
            "type": [
              "string",
              "null",
            ],
            "hide": "true",
            "description":
              "The URL of the page, used to override URL from request",
            "title": "Page Href",
          },
        },
        "required": [
          "count",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/shopify/loaders/ProductListingPage.ts@Props",
      },
    "aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL2hhbmRsZXIudHM=@handlers":
      {
        "$ref": "#/root/handlers",
        "title": "handlers",
      },
    "aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL2hhbmRsZXIudHM=@Handler":
      {
        "$ref":
          "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL2hhbmRsZXIudHM=@handlers",
        "title": "Handler",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mbGFncy9hdWRpZW5jZS50cw==@tl@662-699":
      {
        "type": "object",
        "properties": {
          "value": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL2hhbmRsZXIudHM=@Handler",
            "title": "Value",
          },
        },
        "required": [
          "value",
        ],
        "title": "tl@662-699",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mbGFncy9hdWRpZW5jZS50cw==@Route":
      {
        "type": "object",
        "properties": {
          "pathTemplate": {
            "type": "string",
            "title": "Path Template",
          },
          "isHref": {
            "type": [
              "boolean",
              "null",
            ],
            "description":
              "if true so the path will be checked agaisnt the coming from request instead of using urlpattern.",
            "title": "Is Href",
          },
          "handler": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mbGFncy9hdWRpZW5jZS50cw==@tl@662-699",
            "title": "Handler",
          },
          "highPriority": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Priority",
            "description":
              "higher priority means that this route will be used in favor of other routes with less or none priority",
          },
        },
        "required": [
          "pathTemplate",
          "handler",
        ],
        "title": "Site Route",
        "titleBy": "pathTemplate",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mbGFncy9hdWRpZW5jZS50cw==@[Route]":
      {
        "anyOf": [
          {
            "type": "array",
            "items": {
              "$ref":
                "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mbGFncy9hdWRpZW5jZS50cw==@Route",
            },
            "title":
              "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/flags/audience.ts@[Route]",
          },
          {
            "title": "Shopify Proxy Routes",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL3Byb3h5LnRz@Props",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "shopify/loaders/proxy.ts",
                ],
                "default": "shopify/loaders/proxy.ts",
              },
            },
          },
          {
            "title": "Pages",
            "type": "object",
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "website/loaders/pages.ts",
                ],
                "default": "website/loaders/pages.ts",
              },
            },
          },
          {
            "title": "Redirects",
            "type": "object",
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "website/loaders/redirects.ts",
                ],
                "default": "website/loaders/redirects.ts",
              },
            },
          },
          {
            "title": "website/loaders/redirectsFromCsv.ts",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL3JlZGlyZWN0c0Zyb21Dc3YudHM=@Redirects",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "website/loaders/redirectsFromCsv.ts",
                ],
                "default": "website/loaders/redirectsFromCsv.ts",
              },
            },
          },
          {
            "title": "Audience",
            "description": "Select routes based on the matched audience.",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mbGFncy9hdWRpZW5jZS50cw==@Audience",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "website/flags/audience.ts",
                ],
                "default": "website/flags/audience.ts",
              },
            },
          },
          {
            "title": "Audience Everyone",
            "description": "Always match regardless of the current user",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mbGFncy9ldmVyeW9uZS50cw==@EveryoneConfig",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "website/flags/everyone.ts",
                ],
                "default": "website/flags/everyone.ts",
              },
            },
          },
        ],
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL3Byb3h5LnRz@Props":
      {
        "type": "object",
        "properties": {
          "extraPathsToProxy": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Extra Paths To Proxy",
          },
          "includeSiteMap": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Other site maps to include",
          },
          "generateDecoSiteMap": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "If deco site map should be exposed at /deco-sitemap.xml",
          },
          "excludePathsFromDecoSiteMap": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Exclude paths from /deco-sitemap.xml",
          },
        },
        "required": [],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/shopify/loaders/proxy.ts@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1JlbGF0ZWRQcm9kdWN0cy50cw==@Props":
      {
        "type": "object",
        "properties": {
          "slug": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mdW5jdGlvbnMvcmVxdWVzdFRvUGFyYW0udHM=@RequestURLParam",
            "title": "Slug",
          },
          "count": {
            "type": "number",
            "description": "Total number of items to display",
            "default": 10,
            "title": "Count",
          },
        },
        "required": [
          "slug",
          "count",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/shopify/loaders/RelatedProducts.ts@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Value":
      {
        "type": "number",
        "title": "Value",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@AnalyticsItemWithoutIdentifier":
      {
        "type": "object",
        "properties": {
          "affiliation": {
            "type": [
              "string",
              "null",
            ],
            "title": "Affiliation",
          },
          "coupon": {
            "type": [
              "string",
              "null",
            ],
            "title": "Coupon",
          },
          "discount": {
            "type": [
              "number",
              "null",
            ],
            "title": "Discount",
          },
          "index": {
            "type": [
              "number",
              "null",
            ],
            "title": "Index",
          },
          "item_group_id": {
            "type": [
              "string",
              "null",
            ],
            "title": "Item_group_id",
          },
          "item_url": {
            "type": [
              "string",
              "null",
            ],
            "title": "Item_url",
          },
          "item_brand": {
            "type": [
              "string",
              "null",
            ],
            "title": "Item_brand",
          },
          "item_category": {
            "type": [
              "string",
              "null",
            ],
            "title": "Item_category",
          },
          "item_category2": {
            "type": [
              "string",
              "null",
            ],
            "title": "Item_category2",
          },
          "item_category3": {
            "type": [
              "string",
              "null",
            ],
            "title": "Item_category3",
          },
          "item_category4": {
            "type": [
              "string",
              "null",
            ],
            "title": "Item_category4",
          },
          "item_category5": {
            "type": [
              "string",
              "null",
            ],
            "title": "Item_category5",
          },
          "item_list_id": {
            "type": [
              "string",
              "null",
            ],
            "title": "Item_list_id",
          },
          "item_list_name": {
            "type": [
              "string",
              "null",
            ],
            "title": "Item_list_name",
          },
          "item_variant": {
            "type": [
              "string",
              "null",
            ],
            "title": "Item_variant",
          },
          "location_id": {
            "type": [
              "string",
              "null",
            ],
            "title": "Location_id",
          },
          "price": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Value",
            "title": "Price",
          },
          "quantity": {
            "type": "number",
            "title": "Quantity",
          },
        },
        "required": [
          "quantity",
        ],
        "title": "AnalyticsItemWithoutIdentifier",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@WithItemId":
      {
        "type": "object",
        "properties": {
          "item_id": {
            "type": "string",
            "title": "Item_id",
          },
        },
        "required": [
          "item_id",
        ],
        "title": "WithItemId",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@WithItemName":
      {
        "type": "object",
        "properties": {
          "item_name": {
            "type": "string",
            "title": "Item_name",
          },
        },
        "required": [
          "item_name",
        ],
        "title": "WithItemName",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@WithItemId|WithItemName":
      {
        "anyOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@WithItemId",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@WithItemName",
          },
        ],
        "title": "WithItemId|WithItemName",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ItemIdentifier":
      {
        "$ref":
          "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@WithItemId|WithItemName",
        "title": "ItemIdentifier",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@AnalyticsItemWithoutIdentifier&ItemIdentifier":
      {
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@AnalyticsItemWithoutIdentifier",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ItemIdentifier",
          },
        ],
        "title": "AnalyticsItemWithoutIdentifier&ItemIdentifier",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@AnalyticsItem":
      {
        "$ref":
          "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@AnalyticsItemWithoutIdentifier&ItemIdentifier",
        "title": "AnalyticsItem",
      },
    "ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL21pbmljYXJ0L0l0ZW0udHN4@tl@378-419": {
      "type": "object",
      "properties": {
        "listPrice": {
          "type": "number",
          "title": "List Price",
        },
        "image": {
          "type": "string",
          "title": "Image",
        },
      },
      "required": [
        "listPrice",
        "image",
      ],
      "title": "tl@378-419",
    },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHMtZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL21pbmljYXJ0L0l0ZW0udHN4@AnalyticsItem&tl@378-419":
      {
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@AnalyticsItem",
          },
          {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL21pbmljYXJ0L0l0ZW0udHN4@tl@378-419",
          },
        ],
        "title": "AnalyticsItem&tl@378-419",
      },
    "ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL21pbmljYXJ0L0l0ZW0udHN4@Item": {
      "$ref":
        "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHMtZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL21pbmljYXJ0L0l0ZW0udHN4@AnalyticsItem&tl@378-419",
      "title": "Item",
    },
    "ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL21pbmljYXJ0L0l0ZW0udHN4@[Item]": {
      "type": "array",
      "items": {
        "$ref":
          "#/definitions/ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL21pbmljYXJ0L0l0ZW0udHN4@Item",
      },
      "title": "[Item]",
    },
    "ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL21pbmljYXJ0L01pbmljYXJ0LnRzeA==@tl@661-898":
      {
        "type": "object",
        "properties": {
          "items": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL21pbmljYXJ0L0l0ZW0udHN4@[Item]",
            "title": "Items",
          },
          "total": {
            "type": "number",
            "title": "Total",
          },
          "subtotal": {
            "type": "number",
            "title": "Subtotal",
          },
          "discounts": {
            "type": "number",
            "title": "Discounts",
          },
          "coupon": {
            "type": [
              "string",
              "null",
            ],
            "title": "Coupon",
          },
          "locale": {
            "type": "string",
            "title": "Locale",
          },
          "currency": {
            "type": "string",
            "title": "Currency",
          },
          "enableCoupon": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Enable Coupon",
          },
          "freeShippingTarget": {
            "type": "number",
            "title": "Free Shipping Target",
          },
          "checkoutHref": {
            "type": "string",
            "title": "Checkout Href",
          },
        },
        "required": [
          "items",
          "total",
          "subtotal",
          "discounts",
          "locale",
          "currency",
          "freeShippingTarget",
          "checkoutHref",
        ],
        "title": "tl@661-898",
      },
    "ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL21pbmljYXJ0L01pbmljYXJ0LnRzeA==@Minicart":
      {
        "anyOf": [
          {
            "type": "object",
            "properties": {
              "platformCart": {
                "title": "Platform Cart",
                "type": "object",
                "additionalProperties": {
                  "type": "object",
                },
              },
              "storefront": {
                "$ref":
                  "#/definitions/ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL21pbmljYXJ0L01pbmljYXJ0LnRzeA==@tl@661-898",
                "title": "Storefront",
              },
            },
            "required": [
              "platformCart",
              "storefront",
            ],
            "title":
              "file:///app/deco/components/minicart/Minicart.tsx@Minicart",
          },
          {
            "title": "site/loaders/minicart.ts",
            "type": "object",
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "site/loaders/minicart.ts",
                ],
                "default": "site/loaders/minicart.ts",
              },
            },
          },
        ],
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Person":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@omitQHR5cGU=Thing",
          },
        ],
        "properties": {
          "email": {
            "type": [
              "string",
              "null",
            ],
            "title": "Email",
          },
          "givenName": {
            "type": [
              "string",
              "null",
            ],
            "title": "Given Name",
          },
          "familyName": {
            "type": [
              "string",
              "null",
            ],
            "title": "Family Name",
          },
          "gender": {
            "anyOf": [
              {
                "type": "string",
                "const": "https://schema.org/Male",
                "default": "https://schema.org/Male",
              },
              {
                "type": "string",
                "const": "https://schema.org/Female",
                "default": "https://schema.org/Female",
              },
            ],
            "type": "string",
            "title": "Gender",
          },
          "image": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[ImageObject]|null",
            "title": "Image",
          },
          "taxID": {
            "type": [
              "string",
              "null",
            ],
            "title": "Tax I D",
          },
        },
        "required": [],
        "title": "Person",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Person|null":
      {
        "anyOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Person",
          },
          {
            "type": "null",
          },
          {
            "title": "site/loaders/user.ts",
            "type": "object",
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "site/loaders/user.ts",
                ],
                "default": "site/loaders/user.ts",
              },
            },
          },
        ],
      },
    "ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3dpc2hsaXN0L1Byb3ZpZGVyLnRzeA==@Wishlist":
      {
        "anyOf": [
          {
            "type": "object",
            "properties": {
              "productIDs": {
                "type": "array",
                "items": {
                  "type": "string",
                },
                "title": "Product I Ds",
              },
            },
            "required": [
              "productIDs",
            ],
            "title":
              "file:///app/deco/components/wishlist/Provider.tsx@Wishlist",
          },
          {
            "title": "site/loaders/wishlist.ts",
            "type": "object",
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "site/loaders/wishlist.ts",
                ],
                "default": "site/loaders/wishlist.ts",
              },
            },
          },
        ],
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@SiteNavigationElementLeaf":
      {
        "type": "object",
        "properties": {
          "additionalType": {
            "type": [
              "string",
              "null",
            ],
            "title": "Additional Type",
          },
          "identifier": {
            "type": [
              "string",
              "null",
            ],
            "link":
              "/docs/datamodel.html#identifierBg background notes} for more details.",
            "title": "Identifier",
          },
          "image": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[ImageObject]|null",
            "link": "https://schema.org/ImageObject ImageObject}.",
            "title": "Image",
          },
          "name": {
            "type": [
              "string",
              "null",
            ],
            "title": "Name",
          },
          "url": {
            "type": [
              "string",
              "null",
            ],
            "title": "Url",
          },
        },
        "required": [],
        "title": "SiteNavigationElementLeaf",
        "titleBy": "url",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[SiteNavigationElementLeaf]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@SiteNavigationElementLeaf",
        },
        "title": "[SiteNavigationElementLeaf]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@tl@52199-52276":
      {
        "type": "object",
        "properties": {
          "children": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[SiteNavigationElementLeaf]",
            "title": "Children",
          },
        },
        "required": [],
        "title": "tl@52199-52276",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@SiteNavigationElementLeaf&tl@52199-52276":
      {
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@SiteNavigationElementLeaf",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@tl@52199-52276",
          },
        ],
        "title": "SiteNavigationElementLeaf&tl@52199-52276",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[SiteNavigationElementLeaf&tl@52199-52276]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@SiteNavigationElementLeaf&tl@52199-52276",
        },
        "title": "[SiteNavigationElementLeaf&tl@52199-52276]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@tl@52121-52307":
      {
        "type": "object",
        "properties": {
          "children": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[SiteNavigationElementLeaf&tl@52199-52276]",
            "title": "Children",
          },
        },
        "required": [],
        "title": "tl@52121-52307",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@SiteNavigationElementLeaf&tl@52121-52307":
      {
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@SiteNavigationElementLeaf",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@tl@52121-52307",
          },
        ],
        "title": "SiteNavigationElementLeaf&tl@52121-52307",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[SiteNavigationElementLeaf&tl@52121-52307]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@SiteNavigationElementLeaf&tl@52121-52307",
        },
        "title": "[SiteNavigationElementLeaf&tl@52121-52307]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@tl@52051-52330":
      {
        "type": "object",
        "properties": {
          "children": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[SiteNavigationElementLeaf&tl@52121-52307]",
            "title": "Children",
          },
        },
        "required": [],
        "title": "tl@52051-52330",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@SiteNavigationElementLeaf&tl@52051-52330":
      {
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@SiteNavigationElementLeaf",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@tl@52051-52330",
          },
        ],
        "title": "SiteNavigationElementLeaf&tl@52051-52330",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[SiteNavigationElementLeaf&tl@52051-52330]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@SiteNavigationElementLeaf&tl@52051-52330",
        },
        "title": "[SiteNavigationElementLeaf&tl@52051-52330]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@tl@51989-52345":
      {
        "type": "object",
        "properties": {
          "children": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[SiteNavigationElementLeaf&tl@52051-52330]",
            "title": "Children",
          },
        },
        "required": [],
        "title": "tl@51989-52345",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@SiteNavigationElementLeaf&tl@51989-52345":
      {
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@SiteNavigationElementLeaf",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@tl@51989-52345",
          },
        ],
        "title": "SiteNavigationElementLeaf&tl@51989-52345",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[SiteNavigationElementLeaf&tl@51989-52345]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@SiteNavigationElementLeaf&tl@51989-52345",
        },
        "title": "[SiteNavigationElementLeaf&tl@51989-52345]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@SiteNavigationElement":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@SiteNavigationElementLeaf",
          },
        ],
        "properties": {
          "children": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[SiteNavigationElementLeaf&tl@51989-52345]",
            "title": "Children",
          },
        },
        "required": [],
        "title": "SiteNavigationElement",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[SiteNavigationElement]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@SiteNavigationElement",
        },
        "title": "[SiteNavigationElement]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[SiteNavigationElement]|null":
      {
        "anyOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[SiteNavigationElement]",
          },
          {
            "type": "null",
          },
          {
            "title": "commerce/loaders/navbar.ts",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvbG9hZGVycy9uYXZiYXIudHM=@Props",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "commerce/loaders/navbar.ts",
                ],
                "default": "commerce/loaders/navbar.ts",
              },
            },
          },
          {
            "title": "#commerce/loaders/navbar.ts@navbar",
            "type": "object",
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "navbar",
                ],
                "default": "navbar",
              },
            },
          },
        ],
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvbG9hZGVycy9uYXZiYXIudHM=@Props":
      {
        "type": "object",
        "properties": {
          "items": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[SiteNavigationElement]",
            "title": "Items",
          },
        },
        "required": [],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/commerce/loaders/navbar.ts@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@ExtensionOf+ProductDetailsPage|null":
      {
        "type": "object",
        "title": "The type extension.",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@[ExtensionOf+ProductDetailsPage|null]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@ExtensionOf+ProductDetailsPage|null",
        },
        "title": "[ExtensionOf+ProductDetailsPage|null]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@Props+ProductDetailsPage|null":
      {
        "type": "object",
        "properties": {
          "data": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ProductDetailsPage|null",
            "title": "Data",
            "description":
              "Here comes your products or anything that can be extensible.",
          },
          "extensions": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@[ExtensionOf+ProductDetailsPage|null]",
            "title": "The data Extensions",
          },
        },
        "required": [
          "data",
          "extensions",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/loaders/extension.ts@Props+ProductDetailsPage|null",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@ExtensionOf+[Product]|null":
      {
        "type": "object",
        "title": "The type extension.",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@[ExtensionOf+[Product]|null]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@ExtensionOf+[Product]|null",
        },
        "title": "[ExtensionOf+[Product]|null]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@Props+[Product]|null":
      {
        "type": "object",
        "properties": {
          "data": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Product]|null",
            "title": "Data",
            "description":
              "Here comes your products or anything that can be extensible.",
          },
          "extensions": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@[ExtensionOf+[Product]|null]",
            "title": "The data Extensions",
          },
        },
        "required": [
          "data",
          "extensions",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/loaders/extension.ts@Props+[Product]|null",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@ExtensionOf+ProductListingPage|null":
      {
        "type": "object",
        "title": "The type extension.",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@[ExtensionOf+ProductListingPage|null]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@ExtensionOf+ProductListingPage|null",
        },
        "title": "[ExtensionOf+ProductListingPage|null]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@Props+ProductListingPage|null":
      {
        "type": "object",
        "properties": {
          "data": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ProductListingPage|null",
            "title": "Data",
            "description":
              "Here comes your products or anything that can be extensible.",
          },
          "extensions": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@[ExtensionOf+ProductListingPage|null]",
            "title": "The data Extensions",
          },
        },
        "required": [
          "data",
          "extensions",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/loaders/extension.ts@Props+ProductListingPage|null",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@tl@50307-50351":
      {
        "type": "object",
        "properties": {
          "key": {
            "type": "string",
            "title": "Key",
          },
          "values": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Values",
          },
        },
        "required": [
          "key",
          "values",
        ],
        "title": "tl@50307-50351",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[tl@50307-50351]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@tl@50307-50351",
        },
        "title": "[tl@50307-50351]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Search":
      {
        "type": "object",
        "properties": {
          "term": {
            "type": "string",
            "title": "Term",
          },
          "href": {
            "type": [
              "string",
              "null",
            ],
            "title": "Href",
          },
          "hits": {
            "type": [
              "number",
              "null",
            ],
            "title": "Hits",
          },
          "facets": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[tl@50307-50351]",
            "title": "Facets",
          },
        },
        "required": [
          "term",
        ],
        "title": "Search",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Search]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Search",
        },
        "title": "[Search]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Suggestion":
      {
        "type": "object",
        "properties": {
          "searches": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Search]",
            "title": "Searches",
          },
          "products": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Product]|null",
            "title": "Products",
          },
          "hits": {
            "type": [
              "number",
              "null",
            ],
            "title": "Hits",
          },
        },
        "required": [],
        "title": "Suggestion",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Suggestion|null":
      {
        "anyOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Suggestion",
          },
          {
            "type": "null",
          },
          {
            "title": "Extend your product",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@Props+Suggestion|null",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "commerce/loaders/product/extensions/suggestions.ts",
                ],
                "default": "commerce/loaders/product/extensions/suggestions.ts",
              },
            },
          },
        ],
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@ExtensionOf+Suggestion|null":
      {
        "type": "object",
        "title": "The type extension.",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@[ExtensionOf+Suggestion|null]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@ExtensionOf+Suggestion|null",
        },
        "title": "[ExtensionOf+Suggestion|null]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@Props+Suggestion|null":
      {
        "type": "object",
        "properties": {
          "data": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Suggestion|null",
            "title": "Data",
            "description":
              "Here comes your products or anything that can be extensible.",
          },
          "extensions": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@[ExtensionOf+Suggestion|null]",
            "title": "The data Extensions",
          },
        },
        "required": [
          "data",
          "extensions",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/loaders/extension.ts@Props+Suggestion|null",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2Fzc2V0LnRz@Props":
      {
        "type": "object",
        "properties": {
          "src": {
            "type": "string",
            "description": "Asset src like: https://fonts.gstatic.com/...",
            "title": "Src",
          },
        },
        "required": [
          "src",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/loaders/asset.ts@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@ExtensionOf+unknown":
      {
        "type": "object",
        "title": "The type extension.",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@[ExtensionOf+unknown]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@ExtensionOf+unknown",
        },
        "title": "[ExtensionOf+unknown]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@Props+unknown":
      {
        "type": "object",
        "properties": {
          "data": {
            "type": "object",
            "title": "Data",
            "description":
              "Here comes your products or anything that can be extensible.",
          },
          "extensions": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@[ExtensionOf+unknown]",
            "title": "The data Extensions",
          },
        },
        "required": [
          "data",
          "extensions",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/loaders/extension.ts@Props+unknown",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL1RoZW1lLnRzeA==@tl@165-208":
      {
        "type": "object",
        "properties": {
          "family": {
            "type": "string",
            "title": "Family",
          },
          "styleSheet": {
            "type": "string",
            "title": "Style Sheet",
          },
        },
        "required": [
          "family",
          "styleSheet",
        ],
        "title": "tl@165-208",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL1RoZW1lLnRzeA==@Font":
      {
        "anyOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL1RoZW1lLnRzeA==@tl@165-208",
            "title":
              "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/components/Theme.tsx@Font",
          },
          {
            "title": "website/loaders/fonts/googleFonts.ts",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2ZvbnRzL2dvb2dsZUZvbnRzLnRz@Props",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "website/loaders/fonts/googleFonts.ts",
                ],
                "default": "website/loaders/fonts/googleFonts.ts",
              },
            },
          },
          {
            "title": "website/loaders/fonts/local.ts",
            "type": "object",
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "website/loaders/fonts/local.ts",
                ],
                "default": "website/loaders/fonts/local.ts",
              },
            },
          },
        ],
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2ZvbnRzL2dvb2dsZUZvbnRzLnRz@FontVariation":
      {
        "type": "object",
        "properties": {
          "weight": {
            "anyOf": [
              {
                "type": "string",
                "const": "100",
                "default": "100",
              },
              {
                "type": "string",
                "const": "200",
                "default": "200",
              },
              {
                "type": "string",
                "const": "300",
                "default": "300",
              },
              {
                "type": "string",
                "const": "400",
                "default": "400",
              },
              {
                "type": "string",
                "const": "500",
                "default": "500",
              },
              {
                "type": "string",
                "const": "600",
                "default": "600",
              },
              {
                "type": "string",
                "const": "700",
                "default": "700",
              },
              {
                "type": "string",
                "const": "800",
                "default": "800",
              },
              {
                "type": "string",
                "const": "900",
                "default": "900",
              },
            ],
            "type": "string",
            "title": "Weight",
          },
          "italic": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Italic",
          },
        },
        "required": [
          "weight",
        ],
        "title":
          "{{weight}} {{#italic}}Italic{{/italic}}{{^italic}}{{/italic}}",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2ZvbnRzL2dvb2dsZUZvbnRzLnRz@[FontVariation]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2ZvbnRzL2dvb2dsZUZvbnRzLnRz@FontVariation",
        },
        "title": "[FontVariation]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2ZvbnRzL2dvb2dsZUZvbnRzLnRz@GoogleFont":
      {
        "type": "object",
        "properties": {
          "family": {
            "type": "string",
            "title": "Family",
          },
          "variations": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2ZvbnRzL2dvb2dsZUZvbnRzLnRz@[FontVariation]",
            "title": "Variations",
          },
        },
        "required": [
          "family",
          "variations",
        ],
        "title": "GoogleFont",
        "titleBy": "family",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2ZvbnRzL2dvb2dsZUZvbnRzLnRz@[GoogleFont]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2ZvbnRzL2dvb2dsZUZvbnRzLnRz@GoogleFont",
        },
        "title": "[GoogleFont]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2ZvbnRzL2dvb2dsZUZvbnRzLnRz@Props":
      {
        "type": "object",
        "properties": {
          "fonts": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2ZvbnRzL2dvb2dsZUZvbnRzLnRz@[GoogleFont]",
            "title": "Fonts",
          },
        },
        "required": [
          "fonts",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/loaders/fonts/googleFonts.ts@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL29wdGlvbnMvdXJsUGFyYW1zLnRz@Props":
      {
        "type": "object",
        "properties": {
          "path": {
            "type": "string",
            "title": "Path",
          },
        },
        "required": [
          "path",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/loaders/options/urlParams.ts@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tcGF0L3N0ZC9sb2FkZXJzL3gvcmVkaXJlY3RzLnRz@Redirect":
      {
        "anyOf": [
          {
            "type": "object",
            "properties": {
              "from": {
                "type": "string",
                "description":
                  "Path is url pattern. https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API",
                "format": "unused-path",
                "title": "From",
              },
              "to": {
                "type": "string",
                "description":
                  "Path is url pattern. https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API",
                "title": "To",
              },
              "type": {
                "anyOf": [
                  {
                    "type": "string",
                    "const": "temporary",
                    "default": "temporary",
                  },
                  {
                    "type": "string",
                    "const": "permanent",
                    "default": "permanent",
                  },
                ],
                "type": "string",
                "title": "Type",
              },
              "discardQueryParameters": {
                "type": [
                  "boolean",
                  "null",
                ],
                "title": "Discard query parameters",
              },
            },
            "required": [
              "from",
              "to",
            ],
            "title":
              "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/compat/std/loaders/x/redirects.ts@Redirect",
            "titleBy": "from",
          },
          {
            "title": "website/loaders/redirect.ts",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL3JlZGlyZWN0LnRz@Props",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "website/loaders/redirect.ts",
                ],
                "default": "website/loaders/redirect.ts",
              },
            },
          },
        ],
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL3JlZGlyZWN0LnRz@Props":
      {
        "type": "object",
        "properties": {
          "redirect": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tcGF0L3N0ZC9sb2FkZXJzL3gvcmVkaXJlY3RzLnRz@Redirect",
            "title": "Redirect",
          },
        },
        "required": [
          "redirect",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/loaders/redirect.ts@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL3JlZGlyZWN0c0Zyb21Dc3YudHM=@Redirect":
      {
        "type": "object",
        "properties": {
          "from": {
            "type": "string",
            "title": "From",
          },
          "to": {
            "type": "string",
            "title": "To",
          },
          "type": {
            "anyOf": [
              {
                "type": "string",
                "const": "temporary",
                "default": "temporary",
              },
              {
                "type": "string",
                "const": "permanent",
                "default": "permanent",
              },
            ],
            "type": "string",
            "title": "Type",
          },
          "discardQueryParameters": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Discard Query Parameters",
          },
        },
        "required": [
          "from",
          "to",
        ],
        "title": "Redirect",
        "titleBy": "from",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL3JlZGlyZWN0c0Zyb21Dc3YudHM=@[Redirect]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL3JlZGlyZWN0c0Zyb21Dc3YudHM=@Redirect",
        },
        "title": "[Redirect]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL3JlZGlyZWN0c0Zyb21Dc3YudHM=@Redirects":
      {
        "type": "object",
        "properties": {
          "from": {
            "type": [
              "string",
              "null",
            ],
            "title": "The file url or path",
          },
          "forcePermanentRedirects": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Force Permanent Redirects",
          },
          "redirects": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL3JlZGlyZWN0c0Zyb21Dc3YudHM=@[Redirect]",
            "title": "Redirects",
          },
        },
        "required": [
          "redirects",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/loaders/redirectsFromCsv.ts@Redirects",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL3NlY3JldC50cw==@Secret":
      {
        "anyOf": [
          {
            "type": "object",
            "properties": {},
            "required": [],
            "title": "Secret",
            "hideOption": "true",
          },
          {
            "title": "Secret",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL3NlY3JldC50cw==@Props",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "website/loaders/secret.ts",
                ],
                "default": "website/loaders/secret.ts",
              },
            },
          },
        ],
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL3NlY3JldC50cw==@Props":
      {
        "type": "object",
        "properties": {
          "encrypted": {
            "type": "string",
            "title": "Secret Value",
            "format": "secret",
          },
          "name": {
            "type": [
              "string",
              "null",
            ],
            "title": "Secret Name",
            "description":
              "Used in dev mode as a environment variable (should not contain spaces or special characters)",
            "pattern": "^[a-zA-Z_][a-zA-Z0-9_]*$",
          },
        },
        "required": [
          "encrypted",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/loaders/secret.ts@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL3NlY3JldFN0cmluZy50cw==@SecretString":
      {
        "anyOf": [
          {
            "type": "string",
          },
          {
            "type": "null",
          },
          {
            "title": "Secret String",
            "deprecated": true,
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL3NlY3JldFN0cmluZy50cw==@Props",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "website/loaders/secretString.ts",
                ],
                "default": "website/loaders/secretString.ts",
              },
            },
          },
        ],
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL3NlY3JldFN0cmluZy50cw==@Props":
      {
        "type": "object",
        "properties": {
          "secret": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL3NlY3JldC50cw==@Secret",
            "title": "Secret",
          },
        },
        "required": [
          "secret",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/loaders/secretString.ts@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS90eXBlcy50cw==@tl@22-66":
      {
        "type": "object",
        "properties": {
          "src": {
            "anyOf": [
              {
                "type": "string",
              },
              {
                "type": "object",
              },
            ],
            "title": "Src",
          },
        },
        "required": [
          "src",
        ],
        "title": "tl@22-66",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS90eXBlcy50cw==@Script":
      {
        "anyOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS90eXBlcy50cw==@tl@22-66",
            "title":
              "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/types.ts@Script",
          },
          {
            "title": "analytics/loaders/DecoAnalyticsScript.ts",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYW5hbHl0aWNzL2xvYWRlcnMvRGVjb0FuYWx5dGljc1NjcmlwdC50cw==@Props",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "analytics/loaders/DecoAnalyticsScript.ts",
                ],
                "default": "analytics/loaders/DecoAnalyticsScript.ts",
              },
            },
          },
        ],
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYW5hbHl0aWNzL2xvYWRlcnMvRGVjb0FuYWx5dGljc1NjcmlwdC50cw==@tl@205-246":
      {
        "type": "object",
        "properties": {
          "defer": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Defer",
          },
          "domain": {
            "type": [
              "string",
              "null",
            ],
            "title": "Domain",
          },
        },
        "required": [],
        "title": "tl@205-246",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYW5hbHl0aWNzL2xvYWRlcnMvRGVjb0FuYWx5dGljc1NjcmlwdC50cw==@Props":
      {
        "$ref":
          "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYW5hbHl0aWNzL2xvYWRlcnMvRGVjb0FuYWx5dGljc1NjcmlwdC50cw==@tl@205-246",
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/analytics/loaders/DecoAnalyticsScript.ts@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9oYW5kbGVycy9zaXRlbWFwLnRz@Props":
      {
        "type": "object",
        "properties": {
          "include": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Include",
          },
        },
        "required": [],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/shopify/handlers/sitemap.ts@Props",
      },
    "aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL3BhZ2UudHN4@pages": {
      "$ref": "#/root/pages",
      "title": "pages",
    },
    "aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL3BhZ2UudHN4@Page": {
      "$ref":
        "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL3BhZ2UudHN4@pages",
      "title": "Page",
    },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9oYW5kbGVycy9mcmVzaC50cw==@FreshConfig":
      {
        "type": "object",
        "properties": {
          "page": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL3BhZ2UudHN4@Page",
            "title": "Page",
          },
        },
        "required": [
          "page",
        ],
        "title": "Fresh Config",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9oYW5kbGVycy9wcm94eS50cw==@Header":
      {
        "type": "object",
        "properties": {
          "key": {
            "type": "string",
            "title": "Key",
          },
          "value": {
            "type": "string",
            "title": "Value",
          },
        },
        "required": [
          "key",
          "value",
        ],
        "title": "{{{key}}} - {{{value}}}",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9oYW5kbGVycy9wcm94eS50cw==@[Header]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9oYW5kbGVycy9wcm94eS50cw==@Header",
        },
        "title": "[Header]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS90eXBlcy50cw==@[Script]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS90eXBlcy50cw==@Script",
        },
        "title": "[Script]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9oYW5kbGVycy9wcm94eS50cw==@tl@1547-1577":
      {
        "type": "object",
        "properties": {
          "includes": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS90eXBlcy50cw==@[Script]",
            "title": "Includes",
          },
        },
        "required": [],
        "title": "tl@1547-1577",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9oYW5kbGVycy9wcm94eS50cw==@TextReplace":
      {
        "type": "object",
        "properties": {
          "from": {
            "type": "string",
            "title": "From",
          },
          "to": {
            "type": "string",
            "title": "To",
          },
        },
        "required": [
          "from",
          "to",
        ],
        "title": "TextReplace",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9oYW5kbGVycy9wcm94eS50cw==@[TextReplace]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9oYW5kbGVycy9wcm94eS50cw==@TextReplace",
        },
        "title": "[TextReplace]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9oYW5kbGVycy9wcm94eS50cw==@Props":
      {
        "type": "object",
        "properties": {
          "url": {
            "type": "string",
            "description": "the proxy url.",
            "example":
              "https://bravtexfashionstore.vtexcommercestable.com.br/api",
            "title": "Url",
          },
          "basePath": {
            "type": [
              "string",
              "null",
            ],
            "description": "the base path of the url.",
            "example": "/api",
            "title": "Base Path",
          },
          "host": {
            "type": [
              "string",
              "null",
            ],
            "description": "Host that should be used when proxying the request",
            "title": "Host",
          },
          "customHeaders": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9oYW5kbGVycy9wcm94eS50cw==@[Header]",
            "description": "custom headers",
            "title": "Custom Headers",
          },
          "includeScriptsToHead": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9oYW5kbGVycy9wcm94eS50cw==@tl@1547-1577",
            "description": "Scripts to be included in the head of the html",
            "title": "Include Scripts To Head",
          },
          "redirect": {
            "anyOf": [
              {
                "type": "string",
                "const": "manual",
                "default": "manual",
              },
              {
                "type": "string",
                "const": "follow",
                "default": "follow",
              },
            ],
            "type": "string",
            "description": "follow redirects",
            "default": "'manual'",
            "title": "Redirect",
          },
          "avoidAppendPath": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Avoid Append Path",
          },
          "replaces": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9oYW5kbGVycy9wcm94eS50cw==@[TextReplace]",
            "title": "Replaces",
          },
          "removeDirtyCookies": {
            "type": [
              "boolean",
              "null",
            ],
            "description":
              "remove cookies that have non-ASCII characters and some symbols",
            "default": false,
            "title": "Remove Dirty Cookies",
          },
          "excludeHeaders": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Exclude Headers",
          },
        },
        "required": [
          "url",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/handlers/proxy.ts@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9oYW5kbGVycy9yZWRpcmVjdC50cw==@RedirectConfig":
      {
        "type": "object",
        "properties": {
          "to": {
            "type": "string",
            "title": "To",
          },
          "type": {
            "anyOf": [
              {
                "type": "string",
                "const": "permanent",
                "default": "permanent",
              },
              {
                "type": "string",
                "const": "temporary",
                "default": "temporary",
              },
            ],
            "type": "string",
            "title": "Type",
          },
          "discardQueryParameters": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Discard Query Parameters",
          },
        },
        "required": [
          "to",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/handlers/redirect.ts@RedirectConfig",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mbGFncy9hdWRpZW5jZS50cw==@Routes":
      {
        "$ref":
          "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mbGFncy9hdWRpZW5jZS50cw==@[Route]",
        "title": "Routes",
        "description": "Used to configure your site routes",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mbGFncy9hdWRpZW5jZS50cw==@[Routes]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mbGFncy9hdWRpZW5jZS50cw==@Routes",
        },
        "title": "[Routes]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9oYW5kbGVycy9yb3V0ZXIudHM=@SelectionConfig":
      {
        "type": "object",
        "properties": {
          "audiences": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mbGFncy9hdWRpZW5jZS50cw==@[Routes]",
            "title": "Audiences",
          },
        },
        "required": [
          "audiences",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/handlers/router.ts@SelectionConfig",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9oYW5kbGVycy9zaXRlbWFwLnRz@Props":
      {
        "type": "object",
        "properties": {
          "excludePaths": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Exclude Paths",
          },
        },
        "required": [],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/handlers/sitemap.ts@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL1Nlby50c3g=@SEOSection":
      {
        "anyOf": [
          {
            "type": "object",
            "title": "SEOSection",
          },
          {
            "title": "Product details",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BEUFYyLnRzeA==@Props",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "commerce/sections/Seo/SeoPDPV2.tsx",
                ],
                "default": "commerce/sections/Seo/SeoPDPV2.tsx",
              },
            },
          },
          {
            "title": "Product listing",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BMUFYyLnRzeA==@Props",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "commerce/sections/Seo/SeoPLPV2.tsx",
                ],
                "default": "commerce/sections/Seo/SeoPLPV2.tsx",
              },
            },
          },
          {
            "title": "website/sections/Seo/SeoV2.tsx",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9zZWN0aW9ucy9TZW8vU2VvVjIudHN4@Props",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "website/sections/Seo/SeoV2.tsx",
                ],
                "default": "website/sections/Seo/SeoV2.tsx",
              },
            },
          },
        ],
      },
    "aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL3NlY3Rpb24udHM=@sections":
      {
        "$ref": "#/root/sections",
        "title": "sections",
      },
    "aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL3NlY3Rpb24udHM=@Section":
      {
        "anyOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL3NlY3Rpb24udHM=@sections",
            "widget": "none",
            "title": "Section",
          },
          {
            "title": "Section Variants",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS91dGlscy9tdWx0aXZhcmlhdGUudHM=@MultivariateProps+Section",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "website/flags/multivariate/section.ts",
                ],
                "default": "website/flags/multivariate/section.ts",
              },
            },
          },
        ],
      },
    "aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL3NlY3Rpb24udHM=@[Section]":
      {
        "anyOf": [
          {
            "type": "array",
            "items": {
              "$ref":
                "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL3NlY3Rpb24udHM=@Section",
            },
            "title": "[Section]",
          },
          {
            "title": "Page Variants",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS91dGlscy9tdWx0aXZhcmlhdGUudHM=@MultivariateProps+[Section]",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "website/flags/multivariate.ts",
                ],
                "default": "website/flags/multivariate.ts",
              },
            },
          },
          {
            "title": "Page Variants",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS91dGlscy9tdWx0aXZhcmlhdGUudHM=@MultivariateProps+[Section]",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "website/flags/multivariate/page.ts",
                ],
                "default": "website/flags/multivariate/page.ts",
              },
            },
          },
        ],
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9wYWdlcy9QYWdlLnRzeA==@Sections":
      {
        "$ref":
          "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL3NlY3Rpb24udHM=@[Section]",
        "title": "Sections",
        "label": "hidden",
        "changeable": "true",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9wYWdlcy9QYWdlLnRzeA==@Props":
      {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "title": "Name",
          },
          "path": {
            "type": [
              "string",
              "null",
            ],
            "format": "unused-path",
            "title": "Path",
          },
          "seo": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL1Nlby50c3g=@SEOSection",
            "hide": "true",
            "title": "Seo",
          },
          "sections": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9wYWdlcy9QYWdlLnRzeA==@Sections",
            "title": "Sections",
          },
          "unindexedDomain": {
            "type": [
              "boolean",
              "null",
            ],
            "hide": "true",
            "title": "Unindexed Domain",
          },
        },
        "required": [
          "name",
          "sections",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/pages/Page.tsx@Props",
        "titleBy": "name",
        "label": "rootHidden",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9BbmltYXRpb24vQW5pbWF0aW9uLnRzeA==@Children":
      {
        "type": "object",
        "properties": {
          "section": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL3NlY3Rpb24udHM=@Section",
            "title": "Section",
          },
        },
        "required": [
          "section",
        ],
        "title": "Children",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9BbmltYXRpb24vQW5pbWF0aW9uLnRzeA==@Props":
      {
        "type": "object",
        "properties": {
          "animationType": {
            "anyOf": [
              {
                "type": "string",
                "const": "fade-in",
                "default": "fade-in",
              },
              {
                "type": "string",
                "const": "fade-in-bottom",
                "default": "fade-in-bottom",
              },
              {
                "type": "string",
                "const": "slide-left",
                "default": "slide-left",
              },
              {
                "type": "string",
                "const": "slide-right",
                "default": "slide-right",
              },
              {
                "type": "string",
                "const": "zoom-in",
                "default": "zoom-in",
              },
            ],
            "type": "string",
            "title": "Animation Type",
          },
          "duration": {
            "type": [
              "string",
              "null",
            ],
            "default": 0.3,
            "title": "Duration",
          },
          "children": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9BbmltYXRpb24vQW5pbWF0aW9uLnRzeA==@Children",
            "title": "Children",
          },
        },
        "required": [
          "children",
        ],
        "title": "file:///app/deco/sections/Animation/Animation.tsx@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget":
      {
        "anyOf": [
          {
            "type": "string",
            "format": "image-uri",
            "title": "ImageWidget",
          },
          {
            "title": "Image Variants",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS91dGlscy9tdWx0aXZhcmlhdGUudHM=@MultivariateProps+ImageWidget",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "website/flags/multivariate/image.ts",
                ],
                "default": "website/flags/multivariate/image.ts",
              },
            },
          },
        ],
      },
    "ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3VpL0NhdGVnb3J5QmFubmVyLnRzeA==@tl@555-762":
      {
        "type": "object",
        "properties": {
          "desktop": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
            "title": "Desktop",
          },
          "mobile": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
            "title": "Mobile",
          },
          "alt": {
            "type": [
              "string",
              "null",
            ],
            "title": "Alt",
          },
        },
        "required": [
          "desktop",
          "mobile",
        ],
        "title": "tl@555-762",
      },
    "ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3VpL0NhdGVnb3J5QmFubmVyLnRzeA==@Banner":
      {
        "type": "object",
        "properties": {
          "matcher": {
            "type": "string",
            "description":
              "RegExp to enable this banner on the current URL. Use /feminino/* to display this banner on feminino category",
            "title": "Matcher",
          },
          "title": {
            "type": [
              "string",
              "null",
            ],
            "description": "text to be rendered on top of the image",
            "title": "Title",
          },
          "subtitle": {
            "type": [
              "string",
              "null",
            ],
            "description": "text to be rendered on top of the image",
            "title": "Subtitle",
          },
          "image": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3VpL0NhdGVnb3J5QmFubmVyLnRzeA==@tl@555-762",
            "title": "Image",
          },
        },
        "required": [
          "matcher",
          "image",
        ],
        "title": "Banner",
        "titleBy": "matcher",
      },
    "ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3VpL0NhdGVnb3J5QmFubmVyLnRzeA==@[Banner]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3VpL0NhdGVnb3J5QmFubmVyLnRzeA==@Banner",
        },
        "title": "[Banner]",
      },
    "ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3VpL0NhdGVnb3J5QmFubmVyLnRzeA==@Props":
      {
        "type": "object",
        "properties": {
          "banners": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3VpL0NhdGVnb3J5QmFubmVyLnRzeA==@[Banner]",
            "title": "Banners",
          },
        },
        "required": [],
        "title": "file:///app/deco/components/ui/CategoryBanner.tsx@Props",
      },
    "ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3VpL1NlY3Rpb24udHN4@Props": {
      "type": "object",
      "properties": {
        "title": {
          "type": [
            "string",
            "null",
          ],
          "description": "Section title",
          "title": "Title",
        },
        "cta": {
          "type": [
            "string",
            "null",
          ],
          "description": "See all link",
          "title": "Cta",
        },
      },
      "required": [],
      "title": "Props",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9DYXRlZ29yeS9DYXRlZ29yeUdyaWQudHN4@Item":
      {
        "type": "object",
        "properties": {
          "image": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
            "title": "Image",
          },
          "href": {
            "type": "string",
            "title": "Href",
          },
          "label": {
            "type": "string",
            "title": "Label",
          },
        },
        "required": [
          "image",
          "href",
          "label",
        ],
        "title": "Item",
        "titleBy": "label",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9DYXRlZ29yeS9DYXRlZ29yeUdyaWQudHN4@[Item]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9DYXRlZ29yeS9DYXRlZ29yeUdyaWQudHN4@Item",
        },
        "title": "[Item]",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9DYXRlZ29yeS9DYXRlZ29yeUdyaWQudHN4@Props":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3VpL1NlY3Rpb24udHN4@Props",
          },
        ],
        "properties": {
          "items": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9DYXRlZ29yeS9DYXRlZ29yeUdyaWQudHN4@[Item]",
            "title": "Items",
          },
        },
        "required": [
          "items",
        ],
        "title": "file:///app/deco/sections/Category/CategoryGrid.tsx@Props",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db21wb25lbnQudHN4@Props": {
      "type": "object",
      "properties": {
        "component": {
          "type": "string",
          "title": "Component",
        },
        "props": {
          "title": "Props",
          "type": "object",
          "additionalProperties": {
            "type": "object",
          },
        },
      },
      "required": [
        "component",
      ],
      "title": "file:///app/deco/sections/Component.tsx@Props",
    },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@HTMLWidget":
      {
        "type": "string",
        "format": "html",
        "title": "HTMLWidget",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db250ZW50L0ZhcS50c3g=@Question": {
      "type": "object",
      "properties": {
        "question": {
          "type": "string",
          "title": "Question",
        },
        "answer": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@HTMLWidget",
          "title": "Answer",
        },
      },
      "required": [
        "question",
        "answer",
      ],
      "title": "Question",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db250ZW50L0ZhcS50c3g=@[Question]": {
      "type": "array",
      "items": {
        "$ref":
          "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db250ZW50L0ZhcS50c3g=@Question",
      },
      "title": "[Question]",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db250ZW50L0ZhcS50c3g=@tl@306-347": {
      "type": "object",
      "properties": {
        "text": {
          "type": "string",
          "title": "Text",
        },
        "href": {
          "type": "string",
          "title": "Href",
        },
      },
      "required": [
        "text",
        "href",
      ],
      "title": "tl@306-347",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db250ZW50L0ZhcS50c3g=@Contact": {
      "type": "object",
      "properties": {
        "title": {
          "type": [
            "string",
            "null",
          ],
          "title": "Title",
        },
        "description": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@HTMLWidget",
          "title": "Description",
        },
        "link": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db250ZW50L0ZhcS50c3g=@tl@306-347",
          "title": "Link",
        },
      },
      "required": [],
      "title": "Contact",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db250ZW50L0ZhcS50c3g=@Props": {
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3VpL1NlY3Rpb24udHN4@Props",
        },
      ],
      "properties": {
        "questions": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db250ZW50L0ZhcS50c3g=@[Question]",
          "title": "Questions",
        },
        "contact": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db250ZW50L0ZhcS50c3g=@Contact",
          "title": "Contact",
        },
      },
      "required": [],
      "title": "file:///app/deco/sections/Content/Faq.tsx@Props",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db250ZW50L0hlcm8udHN4@CTA": {
      "type": "object",
      "properties": {
        "id": {
          "type": [
            "string",
            "null",
          ],
          "title": "Id",
        },
        "href": {
          "type": "string",
          "title": "Href",
        },
        "text": {
          "type": "string",
          "title": "Text",
        },
        "variant": {
          "anyOf": [
            {
              "type": "string",
              "const": "Normal",
              "default": "Normal",
            },
            {
              "type": "string",
              "const": "Reverse",
              "default": "Reverse",
            },
          ],
          "type": "string",
          "title": "Variant",
        },
      },
      "required": [
        "href",
        "text",
        "variant",
      ],
      "title": "CTA",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db250ZW50L0hlcm8udHN4@[CTA]": {
      "type": "array",
      "items": {
        "$ref":
          "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db250ZW50L0hlcm8udHN4@CTA",
      },
      "title": "[CTA]",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db250ZW50L0hlcm8udHN4@Props": {
      "type": "object",
      "properties": {
        "title": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@HTMLWidget",
          "title": "Title",
        },
        "description": {
          "type": "string",
          "title": "Description",
        },
        "image": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
          "title": "Image",
        },
        "placement": {
          "anyOf": [
            {
              "type": "string",
              "const": "left",
              "default": "left",
            },
            {
              "type": "string",
              "const": "right",
              "default": "right",
            },
          ],
          "type": "string",
          "title": "Placement",
        },
        "cta": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db250ZW50L0hlcm8udHN4@[CTA]",
          "title": "Cta",
        },
      },
      "required": [
        "title",
        "description",
        "placement",
        "cta",
      ],
      "title": "file:///app/deco/sections/Content/Hero.tsx@Props",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db250ZW50L0ludHJvLnRzeA==@IntroProps": {
      "type": "object",
      "properties": {
        "text": {
          "type": "string",
          "title": "Text",
        },
        "subheading": {
          "type": [
            "string",
            "null",
          ],
          "title": "Subheading",
        },
        "alignment": {
          "anyOf": [
            {
              "type": "string",
              "const": "Left",
              "default": "Left",
            },
            {
              "type": "string",
              "const": "Center",
              "default": "Center",
            },
            {
              "type": "string",
              "const": "Right",
              "default": "Right",
            },
          ],
          "type": "string",
          "title": "Alignment",
        },
      },
      "required": [
        "text",
        "alignment",
      ],
      "title": "file:///app/deco/sections/Content/Intro.tsx@IntroProps",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db250ZW50L0xvZ29zLnRzeA==@Image": {
      "type": "object",
      "properties": {
        "image": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
          "title": "Image",
        },
        "alt": {
          "type": "string",
          "title": "Alt",
        },
      },
      "required": [
        "image",
        "alt",
      ],
      "title": "Image",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db250ZW50L0xvZ29zLnRzeA==@[Image]": {
      "type": "array",
      "items": {
        "$ref":
          "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db250ZW50L0xvZ29zLnRzeA==@Image",
      },
      "title": "[Image]",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db250ZW50L0xvZ29zLnRzeA==@Props": {
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3VpL1NlY3Rpb24udHN4@Props",
        },
      ],
      "properties": {
        "images": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db250ZW50L0xvZ29zLnRzeA==@[Image]",
          "title": "Images",
        },
      },
      "required": [],
      "title": "file:///app/deco/sections/Content/Logos.tsx@Props",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Gb290ZXIvRm9vdGVyLnRzeA==@Item": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "title": "Title",
        },
        "href": {
          "type": "string",
          "title": "Href",
        },
      },
      "required": [
        "title",
        "href",
      ],
      "title": "Item",
      "titleBy": "title",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Gb290ZXIvRm9vdGVyLnRzeA==@[Item]": {
      "type": "array",
      "items": {
        "$ref":
          "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Gb290ZXIvRm9vdGVyLnRzeA==@Item",
      },
      "title": "[Item]",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Gb290ZXIvRm9vdGVyLnRzeA==@Link": {
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Gb290ZXIvRm9vdGVyLnRzeA==@Item",
        },
      ],
      "properties": {
        "children": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Gb290ZXIvRm9vdGVyLnRzeA==@[Item]",
          "title": "Children",
        },
      },
      "required": [
        "children",
      ],
      "title": "Link",
      "titleBy": "title",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Gb290ZXIvRm9vdGVyLnRzeA==@[Link]": {
      "type": "array",
      "items": {
        "$ref":
          "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Gb290ZXIvRm9vdGVyLnRzeA==@Link",
      },
      "title": "[Link]",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Gb290ZXIvRm9vdGVyLnRzeA==@Social": {
      "type": "object",
      "properties": {
        "alt": {
          "type": [
            "string",
            "null",
          ],
          "title": "Alt",
        },
        "href": {
          "type": [
            "string",
            "null",
          ],
          "title": "Href",
        },
        "image": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
          "title": "Image",
        },
      },
      "required": [
        "image",
      ],
      "title": "Social",
      "titleBy": "alt",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Gb290ZXIvRm9vdGVyLnRzeA==@[Social]": {
      "type": "array",
      "items": {
        "$ref":
          "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Gb290ZXIvRm9vdGVyLnRzeA==@Social",
      },
      "title": "[Social]",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Gb290ZXIvRm9vdGVyLnRzeA==@Props": {
      "type": "object",
      "properties": {
        "links": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Gb290ZXIvRm9vdGVyLnRzeA==@[Link]",
          "title": "Links",
        },
        "social": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Gb290ZXIvRm9vdGVyLnRzeA==@[Social]",
          "title": "Social",
        },
        "paymentMethods": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Gb290ZXIvRm9vdGVyLnRzeA==@[Social]",
          "title": "Payment Methods",
        },
        "policies": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Gb290ZXIvRm9vdGVyLnRzeA==@[Item]",
          "title": "Policies",
        },
        "logo": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
          "title": "Logo",
        },
        "trademark": {
          "type": [
            "string",
            "null",
          ],
          "title": "Trademark",
        },
      },
      "required": [],
      "title": "file:///app/deco/sections/Footer/Footer.tsx@Props",
    },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@[HTMLWidget]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@HTMLWidget",
        },
        "title": "[HTMLWidget]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvZGVjb0AxLjk5LjEvZW5naW5lL2NvcmUvcmVzb2x2ZXIudHM=@Resolved+Suggestion|null":
      {
        "type": "object",
        "properties": {
          "data": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@Suggestion|null",
            "title": "Data",
          },
          "__resolveType": {
            "type": "string",
            "const": "resolved",
            "default": "resolved",
            "title": "__resolve Type",
          },
        },
        "required": [
          "data",
          "__resolveType",
        ],
        "title": "Resolved+Suggestion|null",
      },
    "ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3NlYXJjaC9TZWFyY2hiYXIvRm9ybS50c3g=@SearchbarProps":
      {
        "type": "object",
        "properties": {
          "placeholder": {
            "type": [
              "string",
              "null",
            ],
            "title": "Placeholder",
            "description": "Search bar default placeholder message",
            "default": "What are you looking for?",
          },
          "loader": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvZGVjb0AxLjk5LjEvZW5naW5lL2NvcmUvcmVzb2x2ZXIudHM=@Resolved+Suggestion|null",
            "description": "Loader to run when suggesting new elements",
            "title": "Loader",
          },
        },
        "required": [
          "loader",
        ],
        "title": "SearchbarProps",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9IZWFkZXIvSGVhZGVyLnRzeA==@Logo": {
      "type": "object",
      "properties": {
        "src": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
          "title": "Src",
        },
        "alt": {
          "type": "string",
          "title": "Alt",
        },
        "width": {
          "type": [
            "number",
            "null",
          ],
          "title": "Width",
        },
        "height": {
          "type": [
            "number",
            "null",
          ],
          "title": "Height",
        },
      },
      "required": [
        "src",
        "alt",
      ],
      "title": "Logo",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9IZWFkZXIvSGVhZGVyLnRzeA==@omitYWxlcnQ=SectionProps":
      {
        "type": "object",
        "properties": {
          "alerts": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@[HTMLWidget]",
            "title": "Alerts",
          },
          "navItems": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[SiteNavigationElement]|null",
            "title": "Navigation items",
            "description":
              "Navigation items used both on mobile and desktop menus",
          },
          "searchbar": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3NlYXJjaC9TZWFyY2hiYXIvRm9ybS50c3g=@SearchbarProps",
            "title": "Searchbar",
            "description": "Searchbar configuration",
          },
          "logo": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9IZWFkZXIvSGVhZGVyLnRzeA==@Logo",
            "title": "Logo",
          },
          "loading": {
            "anyOf": [
              {
                "type": "string",
                "const": "eager",
                "default": "eager",
              },
              {
                "type": "string",
                "const": "lazy",
                "default": "lazy",
              },
            ],
            "type": "string",
            "description":
              "Usefull for lazy loading hidden elements, like hamburguer menus etc",
            "hide": "true",
            "title": "Loading",
          },
        },
        "required": [
          "searchbar",
          "logo",
        ],
        "title": "omitYWxlcnQ=SectionProps",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9IZWFkZXIvSGVhZGVyLnRzeA==@Props": {
      "$ref":
        "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9IZWFkZXIvSGVhZGVyLnRzeA==@omitYWxlcnQ=SectionProps",
      "title": "file:///app/deco/sections/Header/Header.tsx@Props",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvQmFubmVyLnRzeA==@tl@324-380": {
      "type": "object",
      "properties": {
        "mobile": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
          "title": "Mobile",
        },
        "desktop": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
          "title": "Desktop",
        },
      },
      "required": [
        "mobile",
        "desktop",
      ],
      "title": "tl@324-380",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvQmFubmVyLnRzeA==@tl@391-433": {
      "type": "object",
      "properties": {
        "href": {
          "type": "string",
          "title": "Href",
        },
        "label": {
          "type": "string",
          "title": "Label",
        },
      },
      "required": [
        "href",
        "label",
      ],
      "title": "tl@391-433",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvQmFubmVyLnRzeA==@Props": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "title": "Title",
        },
        "description": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@HTMLWidget",
          "title": "Description",
        },
        "images": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvQmFubmVyLnRzeA==@tl@324-380",
          "title": "Images",
        },
        "cta": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvQmFubmVyLnRzeA==@tl@391-433",
          "title": "Cta",
        },
      },
      "required": [
        "title",
        "images",
      ],
      "title": "file:///app/deco/sections/Images/Banner.tsx@Props",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvQ2Fyb3VzZWwudHN4@tl@629-905": {
      "type": "object",
      "properties": {
        "href": {
          "type": "string",
          "title": "Href",
        },
        "title": {
          "type": "string",
          "title": "Title",
        },
        "subTitle": {
          "type": "string",
          "title": "Sub Title",
        },
        "label": {
          "type": "string",
          "title": "Label",
        },
      },
      "required": [
        "href",
        "title",
        "subTitle",
        "label",
      ],
      "title": "tl@629-905",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvQ2Fyb3VzZWwudHN4@Banner": {
      "type": "object",
      "properties": {
        "desktop": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
          "description": "desktop otimized image",
          "title": "Desktop",
        },
        "mobile": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
          "description": "mobile otimized image",
          "title": "Mobile",
        },
        "alt": {
          "type": "string",
          "description": "Image's alt text",
          "title": "Alt",
        },
        "action": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvQ2Fyb3VzZWwudHN4@tl@629-905",
          "title": "Action",
        },
      },
      "required": [
        "desktop",
        "mobile",
        "alt",
      ],
      "title": "Banner",
      "titleBy": "alt",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvQ2Fyb3VzZWwudHN4@[Banner]": {
      "type": "array",
      "items": {
        "$ref":
          "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvQ2Fyb3VzZWwudHN4@Banner",
      },
      "title": "[Banner]",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvQ2Fyb3VzZWwudHN4@Props": {
      "type": "object",
      "properties": {
        "images": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvQ2Fyb3VzZWwudHN4@[Banner]",
          "title": "Images",
        },
        "preload": {
          "type": [
            "boolean",
            "null",
          ],
          "description":
            "Check this option when this banner is the biggest image on the screen for image optimizations",
          "title": "Preload",
        },
        "interval": {
          "type": [
            "number",
            "null",
          ],
          "title": "Autoplay interval",
          "description": "time (in seconds) to start the carousel autoplay",
        },
      },
      "required": [],
      "title": "file:///app/deco/sections/Images/Carousel.tsx@Props",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvSW1hZ2VHYWxsZXJ5LnRzeA==@Banner":
      {
        "type": "object",
        "properties": {
          "mobile": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
            "title": "Mobile",
          },
          "desktop": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
            "title": "Desktop",
          },
          "alt": {
            "type": "string",
            "description": "Image alt texts",
            "title": "Alt",
          },
          "href": {
            "type": "string",
            "description": "Adicione um link",
            "title": "Href",
          },
        },
        "required": [
          "mobile",
          "alt",
          "href",
        ],
        "title": "Banner",
        "titleBy": "alt",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvSW1hZ2VHYWxsZXJ5LnRzeA==@[Banner]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvSW1hZ2VHYWxsZXJ5LnRzeA==@Banner",
        },
        "title": "[Banner]",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvSW1hZ2VHYWxsZXJ5LnRzeA==@Props":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3VpL1NlY3Rpb24udHN4@Props",
          },
        ],
        "properties": {
          "banners": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvSW1hZ2VHYWxsZXJ5LnRzeA==@[Banner]",
            "maxItems": 4,
            "minItems": 4,
            "title": "Banners",
          },
        },
        "required": [],
        "title": "file:///app/deco/sections/Images/ImageGallery.tsx@Props",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==@tl@220-298":
      {
        "type": "object",
        "properties": {
          "mobile": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
            "title": "Mobile",
          },
          "desktop": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
            "title": "Desktop",
          },
          "altText": {
            "type": "string",
            "title": "Alt Text",
          },
        },
        "required": [
          "mobile",
          "altText",
        ],
        "title": "tl@220-298",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==@tl@748-783":
      {
        "type": "object",
        "properties": {
          "x": {
            "type": "number",
            "title": "X",
          },
          "y": {
            "type": "number",
            "title": "Y",
          },
        },
        "required": [
          "x",
          "y",
        ],
        "title": "tl@748-783",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==@tl@797-832":
      {
        "type": "object",
        "properties": {
          "x": {
            "type": "number",
            "title": "X",
          },
          "y": {
            "type": "number",
            "title": "Y",
          },
        },
        "required": [
          "x",
          "y",
        ],
        "title": "tl@797-832",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==@Pin":
      {
        "type": "object",
        "properties": {
          "mobile": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==@tl@748-783",
            "title": "Mobile",
          },
          "desktop": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==@tl@797-832",
            "title": "Desktop",
          },
          "link": {
            "type": "string",
            "title": "Link",
          },
          "label": {
            "type": "string",
            "title": "Label",
          },
        },
        "required": [
          "mobile",
          "link",
          "label",
        ],
        "title": "Pin",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==@[Pin]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==@Pin",
        },
        "title": "[Pin]",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==@tl@365-441":
      {
        "type": "object",
        "properties": {
          "position": {
            "anyOf": [
              {
                "type": "string",
                "const": "justify-start",
                "default": "justify-start",
              },
              {
                "type": "string",
                "const": "justify-center",
                "default": "justify-center",
              },
              {
                "type": "string",
                "const": "justify-end",
                "default": "justify-end",
              },
            ],
            "type": "string",
            "title": "Position",
          },
        },
        "required": [],
        "title": "tl@365-441",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==@tl@328-446":
      {
        "type": "object",
        "properties": {
          "content": {
            "type": [
              "string",
              "null",
            ],
            "title": "Content",
          },
          "layout": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==@tl@365-441",
            "title": "Layout",
          },
        },
        "required": [],
        "title": "tl@328-446",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==@tl@494-562":
      {
        "type": "object",
        "properties": {
          "position": {
            "anyOf": [
              {
                "type": "string",
                "const": "text-center",
                "default": "text-center",
              },
              {
                "type": "string",
                "const": "text-left",
                "default": "text-left",
              },
              {
                "type": "string",
                "const": "text-right",
                "default": "text-right",
              },
            ],
            "type": "string",
            "title": "Position",
          },
        },
        "required": [],
        "title": "tl@494-562",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==@tl@457-567":
      {
        "type": "object",
        "properties": {
          "content": {
            "type": [
              "string",
              "null",
            ],
            "title": "Content",
          },
          "layout": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==@tl@494-562",
            "title": "Layout",
          },
        },
        "required": [],
        "title": "tl@457-567",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==@tl@593-669":
      {
        "type": "object",
        "properties": {
          "position": {
            "anyOf": [
              {
                "type": "string",
                "const": "justify-start",
                "default": "justify-start",
              },
              {
                "type": "string",
                "const": "justify-center",
                "default": "justify-center",
              },
              {
                "type": "string",
                "const": "justify-end",
                "default": "justify-end",
              },
            ],
            "type": "string",
            "title": "Position",
          },
        },
        "required": [],
        "title": "tl@593-669",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==@tl@578-710":
      {
        "type": "object",
        "properties": {
          "layout": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==@tl@593-669",
            "title": "Layout",
          },
          "text": {
            "type": "string",
            "title": "Text",
          },
          "href": {
            "type": "string",
            "title": "Href",
          },
        },
        "required": [
          "text",
          "href",
        ],
        "title": "tl@578-710",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==@Props":
      {
        "type": "object",
        "properties": {
          "image": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==@tl@220-298",
            "title": "Image",
          },
          "pins": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==@[Pin]",
            "title": "Pins",
          },
          "title": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==@tl@328-446",
            "title": "Title",
          },
          "text": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==@tl@457-567",
            "title": "Text",
          },
          "link": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==@tl@578-710",
            "title": "Link",
          },
        },
        "required": [
          "image",
        ],
        "title": "file:///app/deco/sections/Images/ShoppableBanner.tsx@Props",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@Logo": {
      "type": "object",
      "properties": {
        "img": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
          "title": "Img",
        },
        "alt": {
          "type": [
            "string",
            "null",
          ],
          "description": "alternative text",
          "title": "Alt",
        },
        "width": {
          "type": [
            "number",
            "null",
          ],
          "title": "Width",
        },
        "height": {
          "type": [
            "number",
            "null",
          ],
          "title": "Height",
        },
        "link": {
          "type": [
            "string",
            "null",
          ],
          "description": "external link on logo",
          "title": "Link",
        },
      },
      "required": [],
      "title": "Logo",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@Header": {
      "type": "object",
      "properties": {
        "logo": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@Logo",
          "description": "150px x 150px image recommended",
          "title": "Logo",
        },
        "title": {
          "type": [
            "string",
            "null",
          ],
          "format": "textarea",
          "title": "Title",
        },
        "description": {
          "type": [
            "string",
            "null",
          ],
          "format": "textarea",
          "title": "Description",
        },
        "textColor": {
          "type": "string",
          "format": "color",
          "description": "color to be used in title and description",
          "title": "Text Color",
        },
      },
      "required": [
        "textColor",
      ],
      "title": "Header",
    },
    "ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3VpL0ljb24udHN4@AvailableIcons": {
      "anyOf": [
        {
          "type": "string",
          "const": "search",
          "default": "search",
        },
        {
          "type": "string",
          "const": "shopping_bag",
          "default": "shopping_bag",
        },
        {
          "type": "string",
          "const": "menu",
          "default": "menu",
        },
        {
          "type": "string",
          "const": "account_circle",
          "default": "account_circle",
        },
        {
          "type": "string",
          "const": "close",
          "default": "close",
        },
        {
          "type": "string",
          "const": "chevron-right",
          "default": "chevron-right",
        },
        {
          "type": "string",
          "const": "favorite",
          "default": "favorite",
        },
        {
          "type": "string",
          "const": "home_pin",
          "default": "home_pin",
        },
        {
          "type": "string",
          "const": "call",
          "default": "call",
        },
        {
          "type": "string",
          "const": "local_shipping",
          "default": "local_shipping",
        },
        {
          "type": "string",
          "const": "pan_zoom",
          "default": "pan_zoom",
        },
        {
          "type": "string",
          "const": "share",
          "default": "share",
        },
        {
          "type": "string",
          "const": "sell",
          "default": "sell",
        },
        {
          "type": "string",
          "const": "check-circle",
          "default": "check-circle",
        },
        {
          "type": "string",
          "const": "error",
          "default": "error",
        },
        {
          "type": "string",
          "const": "trash",
          "default": "trash",
        },
      ],
      "type": "string",
      "title": "AvailableIcons",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@Link": {
      "type": "object",
      "properties": {
        "icon": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3VpL0ljb24udHN4@AvailableIcons",
          "description": "20px transparent png recommended",
          "title": "Icon",
        },
        "label": {
          "type": "string",
          "title": "Label",
        },
        "href": {
          "type": "string",
          "format": "textarea",
          "title": "Href",
        },
      },
      "required": [
        "label",
        "href",
      ],
      "title": "Link",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@[Link]": {
      "type": "array",
      "items": {
        "$ref":
          "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@Link",
      },
      "title": "[Link]",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@Neutral": {
      "type": "object",
      "properties": {
        "color": {
          "type": "string",
          "format": "color",
          "title": "Color",
        },
      },
      "required": [
        "color",
      ],
      "title": "Neutral",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@[Neutral]": {
      "type": "array",
      "items": {
        "$ref":
          "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@Neutral",
      },
      "title": "[Neutral]",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@Gradient": {
      "type": "object",
      "properties": {
        "neutral": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@[Neutral]",
          "description": "multiple colors will create a gradient effect",
          "title": "Neutral",
        },
      },
      "required": [
        "neutral",
      ],
      "title": "Gradient",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@Style": {
      "type": "object",
      "properties": {
        "textColor": {
          "type": "string",
          "format": "color",
          "description": "color to be used in link's text",
          "title": "Text Color",
        },
        "gradientColors": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@Gradient",
          "title": "Gradient Colors",
        },
      },
      "required": [
        "textColor",
        "gradientColors",
      ],
      "title": "Style",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@Links": {
      "type": "object",
      "properties": {
        "items": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@[Link]",
          "title": "Items",
        },
        "style": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@Style",
          "title": "Style",
        },
      },
      "required": [
        "style",
      ],
      "title": "Links",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@Social": {
      "type": "object",
      "properties": {
        "href": {
          "type": "string",
          "title": "Href",
        },
        "label": {
          "anyOf": [
            {
              "type": "string",
              "const": "Instagram",
              "default": "Instagram",
            },
            {
              "type": "string",
              "const": "Facebook",
              "default": "Facebook",
            },
            {
              "type": "string",
              "const": "Linkedin",
              "default": "Linkedin",
            },
            {
              "type": "string",
              "const": "WhatsApp",
              "default": "WhatsApp",
            },
            {
              "type": "string",
              "const": "Discord",
              "default": "Discord",
            },
            {
              "type": "string",
              "const": "Tiktok",
              "default": "Tiktok",
            },
          ],
          "type": "string",
          "title": "Label",
        },
        "iconColor": {
          "type": [
            "string",
            "null",
          ],
          "format": "color",
          "title": "Icon Color",
        },
        "strokeWidth": {
          "type": [
            "number",
            "null",
          ],
          "description": "width of the SVG line",
          "title": "Stroke Width",
        },
      },
      "required": [
        "href",
        "label",
      ],
      "title": "Social",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@[Social]": {
      "type": "array",
      "items": {
        "$ref":
          "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@Social",
      },
      "title": "[Social]",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@Background": {
      "type": "object",
      "properties": {
        "image": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
          "description": "an image will override any background color",
          "title": "Image",
        },
        "backgroundColor": {
          "type": [
            "string",
            "null",
          ],
          "format": "color",
          "title": "Background Color",
        },
      },
      "required": [],
      "title": "Background",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@Footer": {
      "type": "object",
      "properties": {
        "url": {
          "type": [
            "string",
            "null",
          ],
          "title": "Url",
        },
        "image": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
          "title": "Image",
        },
        "alt": {
          "type": [
            "string",
            "null",
          ],
          "description": "alternative text",
          "title": "Alt",
        },
        "width": {
          "type": [
            "number",
            "null",
          ],
          "title": "Width",
        },
        "height": {
          "type": [
            "number",
            "null",
          ],
          "title": "Height",
        },
        "text": {
          "type": [
            "string",
            "null",
          ],
          "title": "Text",
        },
      },
      "required": [],
      "title": "Footer",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@Props": {
      "type": "object",
      "properties": {
        "header": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@Header",
          "title": "Header",
        },
        "links": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@Links",
          "title": "Links",
        },
        "social": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@[Social]",
          "title": "Social",
        },
        "background": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@Background",
          "title": "Background",
        },
        "footer": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@Footer",
          "title": "Footer",
        },
      },
      "required": [
        "header",
        "links",
        "background",
      ],
      "title": "file:///app/deco/sections/Links/LinkTree.tsx@Props",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9NaXNjZWxsYW5lb3VzL0NhbXBhaWduVGltZXIudHN4@tl@431-519":
      {
        "type": "object",
        "properties": {
          "days": {
            "type": [
              "string",
              "null",
            ],
            "title": "Days",
          },
          "hours": {
            "type": [
              "string",
              "null",
            ],
            "title": "Hours",
          },
          "minutes": {
            "type": [
              "string",
              "null",
            ],
            "title": "Minutes",
          },
          "seconds": {
            "type": [
              "string",
              "null",
            ],
            "title": "Seconds",
          },
        },
        "required": [],
        "title": "tl@431-519",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9NaXNjZWxsYW5lb3VzL0NhbXBhaWduVGltZXIudHN4@Props":
      {
        "type": "object",
        "properties": {
          "text": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@HTMLWidget",
            "title": "Text",
            "default": "Time left for a campaign to end with a link",
          },
          "expiresAt": {
            "type": [
              "string",
              "null",
            ],
            "title": "Expires at date",
            "format": "datetime",
          },
          "labels": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9NaXNjZWxsYW5lb3VzL0NhbXBhaWduVGltZXIudHN4@tl@431-519",
            "title": "Labels",
          },
        },
        "required": [],
        "title":
          "file:///app/deco/sections/Miscellaneous/CampaignTimer.tsx@Props",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9NaXNjZWxsYW5lb3VzL0Nvb2tpZUNvbnNlbnQudHN4@tl@1045-1088":
      {
        "type": "object",
        "properties": {
          "text": {
            "type": [
              "string",
              "null",
            ],
            "title": "Text",
          },
          "link": {
            "type": [
              "string",
              "null",
            ],
            "title": "Link",
          },
        },
        "required": [],
        "title": "tl@1045-1088",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9NaXNjZWxsYW5lb3VzL0Nvb2tpZUNvbnNlbnQudHN4@tl@1102-1155":
      {
        "type": "object",
        "properties": {
          "allowText": {
            "type": "string",
            "title": "Allow Text",
          },
          "cancelText": {
            "type": [
              "string",
              "null",
            ],
            "title": "Cancel Text",
          },
        },
        "required": [
          "allowText",
        ],
        "title": "tl@1102-1155",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9NaXNjZWxsYW5lb3VzL0Nvb2tpZUNvbnNlbnQudHN4@tl@1168-1266":
      {
        "type": "object",
        "properties": {
          "position": {
            "anyOf": [
              {
                "type": "string",
                "const": "Expanded",
                "default": "Expanded",
              },
              {
                "type": "string",
                "const": "Left",
                "default": "Left",
              },
              {
                "type": "string",
                "const": "Center",
                "default": "Center",
              },
              {
                "type": "string",
                "const": "Right",
                "default": "Right",
              },
            ],
            "type": "string",
            "title": "Position",
          },
          "content": {
            "anyOf": [
              {
                "type": "string",
                "const": "Tiled",
                "default": "Tiled",
              },
              {
                "type": "string",
                "const": "Piled up",
                "default": "Piled up",
              },
            ],
            "type": "string",
            "title": "Content",
          },
        },
        "required": [],
        "title": "tl@1168-1266",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9NaXNjZWxsYW5lb3VzL0Nvb2tpZUNvbnNlbnQudHN4@Props":
      {
        "type": "object",
        "properties": {
          "title": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title",
          },
          "text": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@HTMLWidget",
            "title": "Text",
          },
          "policy": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9NaXNjZWxsYW5lb3VzL0Nvb2tpZUNvbnNlbnQudHN4@tl@1045-1088",
            "title": "Policy",
          },
          "buttons": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9NaXNjZWxsYW5lb3VzL0Nvb2tpZUNvbnNlbnQudHN4@tl@1102-1155",
            "title": "Buttons",
          },
          "layout": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9NaXNjZWxsYW5lb3VzL0Nvb2tpZUNvbnNlbnQudHN4@tl@1168-1266",
            "title": "Layout",
          },
        },
        "required": [],
        "title":
          "file:///app/deco/sections/Miscellaneous/CookieConsent.tsx@Props",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9OZXdzbGV0dGVyL05ld3NsZXR0ZXIudHN4@NoticeProps":
      {
        "type": "object",
        "properties": {
          "title": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title",
          },
          "description": {
            "type": [
              "string",
              "null",
            ],
            "title": "Description",
          },
        },
        "required": [],
        "title": "NoticeProps",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9OZXdzbGV0dGVyL05ld3NsZXR0ZXIudHN4@Props":
      {
        "type": "object",
        "properties": {
          "empty": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9OZXdzbGV0dGVyL05ld3NsZXR0ZXIudHN4@NoticeProps",
            "title": "Empty",
          },
          "success": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9OZXdzbGV0dGVyL05ld3NsZXR0ZXIudHN4@NoticeProps",
            "title": "Success",
          },
          "failed": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9OZXdzbGV0dGVyL05ld3NsZXR0ZXIudHN4@NoticeProps",
            "title": "Failed",
          },
          "label": {
            "type": [
              "string",
              "null",
            ],
            "description": "Signup label",
            "title": "Label",
          },
          "placeholder": {
            "type": [
              "string",
              "null",
            ],
            "description": "Input placeholder",
            "title": "Placeholder",
          },
          "status": {
            "anyOf": [
              {
                "type": "string",
                "const": "success",
                "default": "success",
              },
              {
                "type": "string",
                "const": "failed",
                "default": "failed",
              },
            ],
            "type": "string",
            "hide": "true",
            "title": "Status",
          },
        },
        "required": [],
        "title": "file:///app/deco/sections/Newsletter/Newsletter.tsx@Props",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Qcm9kdWN0L1Byb2R1Y3REZXRhaWxzLnRzeA==@Props":
      {
        "type": "object",
        "properties": {
          "page": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ProductDetailsPage|null",
            "title": "Integration",
          },
        },
        "required": [
          "page",
        ],
        "title": "file:///app/deco/sections/Product/ProductDetails.tsx@Props",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Qcm9kdWN0L1Byb2R1Y3RTaGVsZi50c3g=@Props":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3VpL1NlY3Rpb24udHN4@Props",
          },
        ],
        "properties": {
          "products": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Product]|null",
            "title": "Products",
          },
        },
        "required": [
          "products",
        ],
        "title": "file:///app/deco/sections/Product/ProductShelf.tsx@Props",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Qcm9kdWN0L1Byb2R1Y3RTaGVsZlRhYmJlZC50c3g=@Tab":
      {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "products": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@[Product]|null",
            "title": "Products",
          },
        },
        "required": [
          "title",
          "products",
        ],
        "title": "Tab",
        "titleBy": "title",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Qcm9kdWN0L1Byb2R1Y3RTaGVsZlRhYmJlZC50c3g=@[Tab]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Qcm9kdWN0L1Byb2R1Y3RTaGVsZlRhYmJlZC50c3g=@Tab",
        },
        "title": "[Tab]",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Qcm9kdWN0L1Byb2R1Y3RTaGVsZlRhYmJlZC50c3g=@Props":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3VpL1NlY3Rpb24udHN4@Props",
          },
        ],
        "properties": {
          "tabs": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Qcm9kdWN0L1Byb2R1Y3RTaGVsZlRhYmJlZC50c3g=@[Tab]",
            "title": "Tabs",
          },
          "tabIndex": {
            "type": [
              "number",
              "null",
            ],
            "hide": "true",
            "title": "Tab Index",
          },
        },
        "required": [
          "tabs",
        ],
        "title":
          "file:///app/deco/sections/Product/ProductShelfTabbed.tsx@Props",
      },
    "ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3NlYXJjaC9TZWFyY2hSZXN1bHQudHN4@Layout":
      {
        "type": "object",
        "properties": {
          "pagination": {
            "anyOf": [
              {
                "type": "string",
                "const": "show-more",
                "default": "show-more",
              },
              {
                "type": "string",
                "const": "pagination",
                "default": "pagination",
              },
            ],
            "type": "string",
            "title": "Pagination",
            "description": "Format of the pagination",
          },
        },
        "required": [],
        "title": "Layout",
      },
    "ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3NlYXJjaC9TZWFyY2hSZXN1bHQudHN4@Props":
      {
        "type": "object",
        "properties": {
          "page": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ProductListingPage|null",
            "title": "Integration",
          },
          "layout": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3NlYXJjaC9TZWFyY2hSZXN1bHQudHN4@Layout",
            "title": "Layout",
          },
          "startingPage": {
            "anyOf": [
              {
                "type": "number",
                "const": 0,
                "default": 0,
              },
              {
                "type": "number",
                "const": 1,
                "default": 1,
              },
            ],
            "type": "number",
            "description": "0 for ?page=0 as your first page",
            "title": "Starting Page",
          },
          "partial": {
            "anyOf": [
              {
                "type": "string",
                "const": "hideMore",
                "default": "hideMore",
              },
              {
                "type": "string",
                "const": "hideLess",
                "default": "hideLess",
              },
            ],
            "type": "string",
            "title": "Partial",
          },
        },
        "required": [
          "page",
        ],
        "title": "file:///app/deco/components/search/SearchResult.tsx@Props",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Qcm9kdWN0L1NoZWxmV2l0aEltYWdlLnRzeA==@tl@267-331":
      {
        "type": "object",
        "properties": {
          "src": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
            "title": "Src",
          },
          "alt": {
            "type": [
              "string",
              "null",
            ],
            "title": "Alt",
          },
          "href": {
            "type": [
              "string",
              "null",
            ],
            "title": "Href",
          },
        },
        "required": [
          "src",
        ],
        "title": "tl@267-331",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Qcm9kdWN0L1NoZWxmV2l0aEltYWdlLnRzeA==@Props":
      {
        "type": "object",
        "properties": {
          "section": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL3NlY3Rpb24udHM=@Section",
            "title": "Section",
          },
          "image": {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Qcm9kdWN0L1NoZWxmV2l0aEltYWdlLnRzeA==@tl@267-331",
            "title": "Image",
          },
        },
        "required": [
          "section",
          "image",
        ],
        "title": "file:///app/deco/sections/Product/ShelfWithImage.tsx@Props",
      },
    "ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3dpc2hsaXN0L1dpc2hsaXN0R2FsbGVyeS50c3g=@Props":
      {
        "$ref":
          "#/definitions/ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3NlYXJjaC9TZWFyY2hSZXN1bHQudHN4@Props",
        "title":
          "file:///app/deco/components/wishlist/WishlistGallery.tsx@Props",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Tb2NpYWwvSW5zdGFncmFtUG9zdHMudHN4@Props":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3VpL1NlY3Rpb24udHN4@Props",
          },
        ],
        "properties": {
          "facebookToken": {
            "type": "string",
            "description": "Get it in Facebook app. Expires every 90 days.",
            "title": "Facebook Token",
          },
          "nposts": {
            "type": "number",
            "title": "Number of posts",
          },
        },
        "required": [
          "facebookToken",
          "nposts",
        ],
        "title": "file:///app/deco/sections/Social/InstagramPosts.tsx@Props",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Tb2NpYWwvV2hhdHNBcHAudHN4@Props": {
      "type": "object",
      "properties": {
        "phone": {
          "type": [
            "number",
            "null",
          ],
          "title": "Phone",
        },
      },
      "required": [],
      "title": "file:///app/deco/sections/Social/WhatsApp.tsx@Props",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9UaGVtZS9UaGVtZS50c3g=@ThemeColors": {
      "type": "object",
      "properties": {
        "base-100": {
          "type": [
            "string",
            "null",
          ],
          "format": "color-input",
          "title": "Base",
        },
        "primary": {
          "type": [
            "string",
            "null",
          ],
          "format": "color-input",
          "title": "Primary",
        },
        "secondary": {
          "type": [
            "string",
            "null",
          ],
          "format": "color-input",
          "title": "Secondary",
        },
        "tertiary": {
          "type": [
            "string",
            "null",
          ],
          "title": "Accent",
          "format": "color-input",
        },
        "neutral": {
          "type": [
            "string",
            "null",
          ],
          "format": "color-input",
          "title": "Neutral",
        },
        "success": {
          "type": [
            "string",
            "null",
          ],
          "format": "color-input",
          "title": "Success",
        },
        "warning": {
          "type": [
            "string",
            "null",
          ],
          "format": "color-input",
          "title": "Warning",
        },
        "error": {
          "type": [
            "string",
            "null",
          ],
          "format": "color-input",
          "title": "Error",
        },
        "info": {
          "type": [
            "string",
            "null",
          ],
          "format": "color-input",
          "title": "Info",
        },
      },
      "required": [],
      "title": "ThemeColors",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9UaGVtZS9UaGVtZS50c3g=@ComplementaryColors":
      {
        "type": "object",
        "properties": {
          "base-200": {
            "type": [
              "string",
              "null",
            ],
            "format": "color-input",
            "title": "Base-200",
          },
          "base-300": {
            "type": [
              "string",
              "null",
            ],
            "format": "color-input",
            "title": "Base-300",
          },
          "base-400": {
            "type": [
              "string",
              "null",
            ],
            "format": "color-input",
            "title": "Base-400",
          },
          "base-content": {
            "type": [
              "string",
              "null",
            ],
            "format": "color-input",
            "title": "Base-content",
          },
          "primary-content": {
            "type": [
              "string",
              "null",
            ],
            "format": "color-input",
            "title": "Primary-content",
          },
          "secondary-content": {
            "type": [
              "string",
              "null",
            ],
            "format": "color-input",
            "title": "Secondary-content",
          },
          "tertiary-content": {
            "type": [
              "string",
              "null",
            ],
            "title": "Accent Content",
            "format": "color-input",
          },
          "neutral-content": {
            "type": [
              "string",
              "null",
            ],
            "format": "color-input",
            "title": "Neutral-content",
          },
          "success-content": {
            "type": [
              "string",
              "null",
            ],
            "format": "color-input",
            "title": "Success-content",
          },
          "warning-content": {
            "type": [
              "string",
              "null",
            ],
            "format": "color-input",
            "title": "Warning-content",
          },
          "error-content": {
            "type": [
              "string",
              "null",
            ],
            "format": "color-input",
            "title": "Error-content",
          },
          "info-content": {
            "type": [
              "string",
              "null",
            ],
            "format": "color-input",
            "title": "Info-content",
          },
        },
        "required": [],
        "title": "ComplementaryColors",
      },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9UaGVtZS9UaGVtZS50c3g=@Button": {
      "type": "object",
      "properties": {
        "--border-btn": {
          "anyOf": [
            {
              "type": "string",
              "const": "1px",
              "default": "1px",
            },
            {
              "type": "string",
              "const": "2px",
              "default": "2px",
            },
            {
              "type": "string",
              "const": "3px",
              "default": "3px",
            },
            {
              "type": "string",
              "const": "4px",
              "default": "4px",
            },
            {
              "type": "string",
              "const": "5px",
              "default": "5px",
            },
            {
              "type": "string",
              "const": "6px",
              "default": "6px",
            },
            {
              "type": "string",
              "const": "7px",
              "default": "7px",
            },
            {
              "type": "string",
              "const": "8px",
              "default": "8px",
            },
          ],
          "type": "string",
          "default": "1px",
          "title": "Border width",
        },
        "--rounded-btn": {
          "anyOf": [
            {
              "type": "string",
              "const": "0",
              "default": "0",
            },
            {
              "type": "string",
              "const": "0.2rem",
              "default": "0.2rem",
            },
            {
              "type": "string",
              "const": "0.4rem",
              "default": "0.4rem",
            },
            {
              "type": "string",
              "const": "0.8rem",
              "default": "0.8rem",
            },
            {
              "type": "string",
              "const": "2rem",
              "default": "2rem",
            },
            {
              "type": "string",
              "const": "99999px",
              "default": "99999px",
            },
          ],
          "type": "string",
          "default": "0.2rem",
          "title": "Radius",
          "description": "Button and similar elements",
        },
        "--btn-focus-scale": {
          "anyOf": [
            {
              "type": "string",
              "const": "0.9",
              "default": "0.9",
            },
            {
              "type": "string",
              "const": "0.95",
              "default": "0.95",
            },
            {
              "type": "string",
              "const": "1",
              "default": "1",
            },
            {
              "type": "string",
              "const": "1.05",
              "default": "1.05",
            },
            {
              "type": "string",
              "const": "1.1",
              "default": "1.1",
            },
          ],
          "type": "string",
          "default": 0.95,
          "title": "Scale on click",
        },
        "--animation-btn": {
          "anyOf": [
            {
              "type": "string",
              "const": "0.1s",
              "default": "0.1s",
            },
            {
              "type": "string",
              "const": "0.15s",
              "default": "0.15s",
            },
            {
              "type": "string",
              "const": "0.2s",
              "default": "0.2s",
            },
            {
              "type": "string",
              "const": "0.25s",
              "default": "0.25s",
            },
            {
              "type": "string",
              "const": "0.3s",
              "default": "0.3s",
            },
            {
              "type": "string",
              "const": "0.35s",
              "default": "0.35s",
            },
          ],
          "type": "string",
          "default": "0.25s",
          "title": "Animation",
          "description": "Duration when you click",
        },
      },
      "required": [
        "--border-btn",
        "--rounded-btn",
        "--btn-focus-scale",
        "--animation-btn",
      ],
      "title": "Button",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9UaGVtZS9UaGVtZS50c3g=@Miscellaneous": {
      "type": "object",
      "properties": {
        "--rounded-box": {
          "type": "string",
          "default": "1rem",
          "title": "Rounded box",
          "description":
            "border radius rounded-box utility class, used in card and other large boxes",
        },
        "--rounded-badge": {
          "type": "string",
          "default": "1.9rem",
          "title": "Rounded badge",
          "description":
            "border radius rounded-badge utility class, used in badges and similar",
        },
        "--animation-input": {
          "type": "string",
          "default": "0.2s",
          "title": "Animation input",
          "description":
            "duration of animation for inputs like checkbox, toggle, radio, etc",
        },
        "--tab-border": {
          "type": "string",
          "default": "1px",
          "title": "Tab border",
          "description": "border width of tabs",
        },
        "--tab-radius": {
          "type": "string",
          "default": "0.5rem",
          "title": "Tab radius",
          "description": "border radius of tabs",
        },
      },
      "required": [
        "--rounded-box",
        "--rounded-badge",
        "--animation-input",
        "--tab-border",
        "--tab-radius",
      ],
      "title": "Miscellaneous",
    },
    "ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9UaGVtZS9UaGVtZS50c3g=@Props": {
      "type": "object",
      "properties": {
        "colorScheme": {
          "anyOf": [
            {
              "type": "string",
              "const": "light",
              "default": "light",
            },
            {
              "type": "string",
              "const": "dark",
              "default": "dark",
            },
            {
              "type": "string",
              "const": "any",
              "default": "any",
            },
          ],
          "type": "string",
          "description":
            "Set the prefers-color-scheme media query. To support dark mode, create two instances of this block and set this option to light/dark in each instance",
          "default": "light",
          "title": "Color Scheme",
        },
        "mainColors": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9UaGVtZS9UaGVtZS50c3g=@ThemeColors",
          "title": "Main Colors",
        },
        "complementaryColors": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9UaGVtZS9UaGVtZS50c3g=@ComplementaryColors",
          "description":
            "These will be auto-generated to a readable color if not set",
          "title": "Complementary Colors",
        },
        "buttonStyle": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9UaGVtZS9UaGVtZS50c3g=@Button",
          "title": "Button Style",
        },
        "otherStyles": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9UaGVtZS9UaGVtZS50c3g=@Miscellaneous",
          "title": "Other Styles",
        },
        "font": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL1RoZW1lLnRzeA==@Font",
          "title": "Font",
        },
        "mode": {
          "anyOf": [
            {
              "type": "string",
              "const": "dark",
              "default": "dark",
            },
            {
              "type": "string",
              "const": "light",
              "default": "light",
            },
          ],
          "type": "string",
          "description": "This is the admin's color-scheme mode",
          "title": "Mode",
        },
      },
      "required": [],
      "title": "file:///app/deco/sections/Theme/Theme.tsx@Props",
    },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BEUC50c3g=@tl@225-291":
      {
        "type": "object",
        "properties": {
          "jsonLD": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ProductDetailsPage|null",
            "title": "Json L D",
          },
          "omitVariants": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Omit Variants",
          },
        },
        "required": [
          "jsonLD",
        ],
        "title": "tl@225-291",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL1Nlby50c3g=@OGType":
      {
        "anyOf": [
          {
            "type": "string",
            "const": "website",
            "default": "website",
          },
          {
            "type": "string",
            "const": "article",
            "default": "article",
          },
        ],
        "type": "string",
        "title": "OGType",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL1Nlby50c3g=@Partial@omitanNvbkxEcw==Props":
      {
        "type": "object",
        "properties": {
          "title": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title",
          },
          "titleTemplate": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title template",
            "description":
              "add a %s whenever you want it to be replaced with the product name, category name or search term",
            "default": "%s",
          },
          "description": {
            "type": [
              "string",
              "null",
            ],
            "title": "Description",
          },
          "descriptionTemplate": {
            "type": [
              "string",
              "null",
            ],
            "title": "Description template",
            "description":
              "add a %s whenever you want it to be replaced with the product name, category name or search term",
            "default": "%s",
          },
          "type": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL1Nlby50c3g=@OGType",
            "default": "website",
            "title": "Type",
          },
          "image": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
            "description": "Recommended: 1200 x 630 px (up to 5MB)",
            "title": "Image",
          },
          "favicon": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
            "description": "Recommended: 16 x 16 px",
            "title": "Favicon",
          },
          "themeColor": {
            "type": [
              "string",
              "null",
            ],
            "description":
              "Suggested color that browsers should use to customize the display of the page or of the surrounding user interface",
            "title": "Theme Color",
          },
          "canonical": {
            "type": [
              "string",
              "null",
            ],
            "title": "Canonical URL",
          },
          "noIndexing": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Disable indexing",
            "description":
              "In testing, you can use this to prevent search engines from indexing your site",
          },
        },
        "required": [],
        "title": "Partial@omitanNvbkxEcw==Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BEUC50c3gtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL1Nlby50c3g=@tl@225-291&Partial@omitanNvbkxEcw==Props":
      {
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BEUC50c3g=@tl@225-291",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL1Nlby50c3g=@Partial@omitanNvbkxEcw==Props",
          },
        ],
        "title": "tl@225-291&Partial@omitanNvbkxEcw==Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BEUC50c3g=@Props":
      {
        "$ref":
          "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BEUC50c3gtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL1Nlby50c3g=@tl@225-291&Partial@omitanNvbkxEcw==Props",
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/commerce/sections/Seo/SeoPDP.tsx@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BEUFYyLnRzeA==@Props":
      {
        "type": "object",
        "properties": {
          "jsonLD": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ProductDetailsPage|null",
            "title": "Data Source",
          },
          "omitVariants": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Omit Variants",
          },
          "title": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title Override",
          },
          "description": {
            "type": [
              "string",
              "null",
            ],
            "title": "Description Override",
          },
          "noIndexing": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Disable indexing",
            "description":
              "In testing, you can use this to prevent search engines from indexing your site",
          },
        },
        "required": [
          "jsonLD",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/commerce/sections/Seo/SeoPDPV2.tsx@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BMUC50c3g=@tl@225-265":
      {
        "type": "object",
        "properties": {
          "jsonLD": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ProductListingPage|null",
            "title": "Json L D",
          },
        },
        "required": [
          "jsonLD",
        ],
        "title": "tl@225-265",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BMUC50c3gtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL1Nlby50c3g=@tl@225-265&Partial@omitanNvbkxEcw==Props":
      {
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BMUC50c3g=@tl@225-265",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL1Nlby50c3g=@Partial@omitanNvbkxEcw==Props",
          },
        ],
        "title": "tl@225-265&Partial@omitanNvbkxEcw==Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BMUC50c3g=@Props":
      {
        "$ref":
          "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BMUC50c3gtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL1Nlby50c3g=@tl@225-265&Partial@omitanNvbkxEcw==Props",
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/commerce/sections/Seo/SeoPLP.tsx@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BMUFYyLnRzeA==@ConfigJsonLD":
      {
        "type": "object",
        "properties": {
          "removeVideos": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Remove videos",
            "description": "Remove product videos from structured data",
          },
        },
        "required": [],
        "title": "ConfigJsonLD",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BMUFYyLnRzeA==@Props":
      {
        "type": "object",
        "properties": {
          "jsonLD": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvdHlwZXMudHM=@ProductListingPage|null",
            "title": "Data Source",
          },
          "title": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title Override",
          },
          "description": {
            "type": [
              "string",
              "null",
            ],
            "title": "Description Override",
          },
          "canonical": {
            "type": [
              "string",
              "null",
            ],
            "hide": "true",
            "title": "Canonical",
          },
          "noIndexing": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Disable indexing",
            "description":
              "In testing, you can use this to prevent search engines from indexing your site",
          },
          "configJsonLD": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BMUFYyLnRzeA==@ConfigJsonLD",
            "title": "Config Json L D",
          },
        },
        "required": [
          "jsonLD",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/commerce/sections/Seo/SeoPLPV2.tsx@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL0FuYWx5dGljcy50c3g=@Props":
      {
        "type": "object",
        "properties": {
          "trackingIds": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "description":
              "google tag manager container id. For more info: https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation .",
            "title": "Tracking Ids",
          },
          "googleAnalyticsIds": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "GA Measurement Ids",
            "label": "measurement id",
            "description":
              "the google analytics property measurement id. For more info: https://support.google.com/analytics/answer/9539598",
          },
          "src": {
            "type": [
              "string",
              "null",
            ],
            "description": "custom url for serving google tag manager.",
            "title": "Src",
          },
          "disableAutomaticEventPush": {
            "type": [
              "boolean",
              "null",
            ],
            "description": "Disable forwarding events into dataLayer",
            "title": "Disable Automatic Event Push",
          },
        },
        "required": [],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/components/Analytics.tsx@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9zZWN0aW9ucy9SZW5kZXJpbmcvRGVmZXJyZWQudHN4@Scroll":
      {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "const": "scroll",
            "default": "scroll",
            "title": "Type",
          },
          "payload": {
            "type": "number",
            "hide": "true",
            "title": "Delay MS",
            "description":
              "Delay (in milliseconds) to wait after the scroll event is fired.",
          },
        },
        "required": [
          "type",
          "payload",
        ],
        "title": "Scroll",
        "titleBy": "type",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9zZWN0aW9ucy9SZW5kZXJpbmcvRGVmZXJyZWQudHN4@Intersection":
      {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "const": "intersection",
            "default": "intersection",
            "title": "Type",
          },
          "payload": {
            "type": "string",
            "title": "Root Margin",
            "description":
              "Margin (in pixels) to trigger deferred sections rendering",
          },
        },
        "required": [
          "type",
          "payload",
        ],
        "title": "Intersection",
        "titleBy": "type",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9zZWN0aW9ucy9SZW5kZXJpbmcvRGVmZXJyZWQudHN4@Load":
      {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "const": "load",
            "default": "load",
            "title": "Type",
          },
          "payload": {
            "type": "number",
            "hide": "true",
            "title": "Delay MS",
            "description":
              "Delay (in milliseconds) to wait after the DOMContentLoaded event is fired. If value is 0, it will trigger when page load",
          },
        },
        "required": [
          "type",
          "payload",
        ],
        "title": "Load",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9zZWN0aW9ucy9SZW5kZXJpbmcvRGVmZXJyZWQudHN4LWh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZWNvLWN4L2FwcHNAMC41OS4zL3dlYnNpdGUvc2VjdGlvbnMvUmVuZGVyaW5nL0RlZmVycmVkLnRzeC1odHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGVjby1jeC9hcHBzQDAuNTkuMy93ZWJzaXRlL3NlY3Rpb25zL1JlbmRlcmluZy9EZWZlcnJlZC50c3g=@Scroll|Intersection|Load":
      {
        "anyOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9zZWN0aW9ucy9SZW5kZXJpbmcvRGVmZXJyZWQudHN4@Scroll",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9zZWN0aW9ucy9SZW5kZXJpbmcvRGVmZXJyZWQudHN4@Intersection",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9zZWN0aW9ucy9SZW5kZXJpbmcvRGVmZXJyZWQudHN4@Load",
          },
        ],
        "title": "Scroll|Intersection|Load",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9zZWN0aW9ucy9SZW5kZXJpbmcvRGVmZXJyZWQudHN4@Props":
      {
        "type": "object",
        "properties": {
          "sections": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL3NlY3Rpb24udHM=@[Section]",
            "title": "Sections",
          },
          "display": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Display",
          },
          "behavior": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9zZWN0aW9ucy9SZW5kZXJpbmcvRGVmZXJyZWQudHN4LWh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZWNvLWN4L2FwcHNAMC41OS4zL3dlYnNpdGUvc2VjdGlvbnMvUmVuZGVyaW5nL0RlZmVycmVkLnRzeC1odHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGVjby1jeC9hcHBzQDAuNTkuMy93ZWJzaXRlL3NlY3Rpb25zL1JlbmRlcmluZy9EZWZlcnJlZC50c3g=@Scroll|Intersection|Load",
            "title": "Behavior",
          },
        },
        "required": [
          "sections",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/sections/Rendering/Deferred.tsx@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9zZWN0aW9ucy9SZW5kZXJpbmcvTGF6eS50c3g=@Props":
      {
        "type": "object",
        "properties": {
          "section": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL3NlY3Rpb24udHM=@Section",
            "label": "hidden",
            "title": "Section",
          },
          "loading": {
            "anyOf": [
              {
                "type": "string",
                "const": "eager",
                "default": "eager",
              },
              {
                "type": "string",
                "const": "lazy",
                "default": "lazy",
              },
            ],
            "type": "string",
            "description": "htmx/Deferred.tsx prop",
            "hide": "true",
            "title": "Loading",
          },
        },
        "required": [
          "section",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/sections/Rendering/Lazy.tsx@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9zZWN0aW9ucy9SZW5kZXJpbmcvTGF6eS50c3g=@SectionProps":
      {
        "type": "object",
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/sections/Rendering/Lazy.tsx@SectionProps",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL1Nlby50c3g=@omitanNvbkxEcw==Props":
      {
        "type": "object",
        "properties": {
          "title": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title",
          },
          "titleTemplate": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title template",
            "description":
              "add a %s whenever you want it to be replaced with the product name, category name or search term",
            "default": "%s",
          },
          "description": {
            "type": [
              "string",
              "null",
            ],
            "title": "Description",
          },
          "descriptionTemplate": {
            "type": [
              "string",
              "null",
            ],
            "title": "Description template",
            "description":
              "add a %s whenever you want it to be replaced with the product name, category name or search term",
            "default": "%s",
          },
          "type": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL1Nlby50c3g=@OGType",
            "default": "website",
            "title": "Type",
          },
          "image": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
            "description": "Recommended: 1200 x 630 px (up to 5MB)",
            "title": "Image",
          },
          "favicon": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
            "description": "Recommended: 16 x 16 px",
            "title": "Favicon",
          },
          "themeColor": {
            "type": [
              "string",
              "null",
            ],
            "description":
              "Suggested color that browsers should use to customize the display of the page or of the surrounding user interface",
            "title": "Theme Color",
          },
          "canonical": {
            "type": [
              "string",
              "null",
            ],
            "title": "Canonical URL",
          },
          "noIndexing": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Disable indexing",
            "description":
              "In testing, you can use this to prevent search engines from indexing your site",
          },
        },
        "required": [],
        "title": "omitanNvbkxEcw==Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9zZWN0aW9ucy9TZW8vU2VvLnRzeA==@Props":
      {
        "$ref":
          "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL1Nlby50c3g=@omitanNvbkxEcw==Props",
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/sections/Seo/Seo.tsx@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL1Nlby50c3g=@pickZGVzY3JpcHRpb24sZmF2aWNvbixpbWFnZSxub0luZGV4aW5nLHRoZW1lQ29sb3IsdGl0bGUsdHlwZQ==Props":
      {
        "type": "object",
        "properties": {
          "title": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title",
          },
          "titleTemplate": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title template",
            "description":
              "add a %s whenever you want it to be replaced with the product name, category name or search term",
            "default": "%s",
          },
          "description": {
            "type": [
              "string",
              "null",
            ],
            "title": "Description",
          },
          "descriptionTemplate": {
            "type": [
              "string",
              "null",
            ],
            "title": "Description template",
            "description":
              "add a %s whenever you want it to be replaced with the product name, category name or search term",
            "default": "%s",
          },
          "type": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL1Nlby50c3g=@OGType",
            "default": "website",
            "title": "Type",
          },
          "image": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
            "description": "Recommended: 1200 x 630 px (up to 5MB)",
            "title": "Image",
          },
          "favicon": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
            "description": "Recommended: 16 x 16 px",
            "title": "Favicon",
          },
          "themeColor": {
            "type": [
              "string",
              "null",
            ],
            "description":
              "Suggested color that browsers should use to customize the display of the page or of the surrounding user interface",
            "title": "Theme Color",
          },
          "canonical": {
            "type": [
              "string",
              "null",
            ],
            "title": "Canonical URL",
          },
          "noIndexing": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Disable indexing",
            "description":
              "In testing, you can use this to prevent search engines from indexing your site",
          },
          "jsonLDs": {
            "type": "array",
            "items": {
              "type": "object",
            },
            "title": "Json L Ds",
          },
        },
        "required": [],
        "title":
          "pickZGVzY3JpcHRpb24sZmF2aWNvbixpbWFnZSxub0luZGV4aW5nLHRoZW1lQ29sb3IsdGl0bGUsdHlwZQ==Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9zZWN0aW9ucy9TZW8vU2VvVjIudHN4@Props":
      {
        "$ref":
          "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL1Nlby50c3g=@pickZGVzY3JpcHRpb24sZmF2aWNvbixpbWFnZSxub0luZGV4aW5nLHRoZW1lQ29sb3IsdGl0bGUsdHlwZQ==Props",
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/sections/Seo/SeoV2.tsx@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYW5hbHl0aWNzL2NvbXBvbmVudHMvRGVjb0FuYWx5dGljcy50c3g=@Props":
      {
        "type": "object",
        "properties": {
          "exclude": {
            "type": [
              "string",
              "null",
            ],
            "description": "paths to be excluded.",
            "title": "Exclude",
          },
          "domain": {
            "type": [
              "string",
              "null",
            ],
            "title": "Domain",
          },
        },
        "required": [],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/analytics/components/DecoAnalytics.tsx@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvaHRteC9zZWN0aW9ucy9EZWZlcnJlZC50c3g=@Load":
      {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "const": "load",
            "default": "load",
            "title": "Type",
          },
          "delay": {
            "type": [
              "number",
              "null",
            ],
            "hide": "true",
            "title": "Delay",
          },
        },
        "required": [
          "type",
        ],
        "title": "Load",
        "titleBy": "type",
        "description": "fires once when the element is first loaded",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvaHRteC9zZWN0aW9ucy9EZWZlcnJlZC50c3g=@Revealed":
      {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "const": "revealed",
            "default": "revealed",
            "title": "Type",
          },
        },
        "required": [
          "type",
        ],
        "title": "Revealed",
        "titleBy": "type",
        "description":
          "fires once when an element first scrolls into the viewport",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvaHRteC9zZWN0aW9ucy9EZWZlcnJlZC50c3g=@Intersect":
      {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "const": "intersect",
            "default": "intersect",
            "title": "Type",
          },
          "threshold": {
            "type": [
              "number",
              "null",
            ],
            "description":
              "a floating point number between 0.0 and 1.0, indicating what amount of intersection to fire the event on",
            "title": "Threshold",
          },
        },
        "required": [
          "type",
        ],
        "title": "Intersect",
        "titleBy": "type",
        "description":
          "fires once when an element first intersects the viewport.",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvaHRteC9zZWN0aW9ucy9EZWZlcnJlZC50c3gtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvaHRteC9zZWN0aW9ucy9EZWZlcnJlZC50c3gtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvaHRteC9zZWN0aW9ucy9EZWZlcnJlZC50c3g=@Load|Revealed|Intersect":
      {
        "anyOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvaHRteC9zZWN0aW9ucy9EZWZlcnJlZC50c3g=@Load",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvaHRteC9zZWN0aW9ucy9EZWZlcnJlZC50c3g=@Revealed",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvaHRteC9zZWN0aW9ucy9EZWZlcnJlZC50c3g=@Intersect",
          },
        ],
        "title": "Load|Revealed|Intersect",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvaHRteC9zZWN0aW9ucy9EZWZlcnJlZC50c3g=@Props":
      {
        "type": "object",
        "properties": {
          "sections": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL3NlY3Rpb24udHM=@[Section]",
            "title": "Sections",
          },
          "fallbacks": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL3NlY3Rpb24udHM=@[Section]",
            "hide": "true",
            "title": "Fallbacks",
          },
          "trigger": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvaHRteC9zZWN0aW9ucy9EZWZlcnJlZC50c3gtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvaHRteC9zZWN0aW9ucy9EZWZlcnJlZC50c3gtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvaHRteC9zZWN0aW9ucy9EZWZlcnJlZC50c3g=@Load|Revealed|Intersect",
            "title": "Trigger",
          },
          "loading": {
            "anyOf": [
              {
                "type": "string",
                "const": "lazy",
                "default": "lazy",
              },
              {
                "type": "string",
                "const": "eager",
                "default": "eager",
              },
            ],
            "type": "string",
            "title": "Loading",
          },
        },
        "required": [
          "sections",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/htmx/sections/Deferred.tsx@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9jb29raWUudHM=@Props":
      {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "title": "Name",
          },
          "value": {
            "type": "string",
            "title": "Value",
          },
        },
        "required": [
          "name",
          "value",
        ],
        "title": "Cookie",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9jcm9uLnRz@CronProps":
      {
        "type": "object",
        "properties": {
          "cron": {
            "type": "string",
            "format": "cron",
            "example":
              "* 0-23 * * WED (At every minute past every hour from 0 through 23 on Wednesday.)",
            "pattern":
              "^(?:(?:(?:\\*|(?:\\d+(?:-\\d+)?(?:,\\d+(?:-\\d+)?)*)|[A-Z]+)(?:\\/\\d+)?)(?:\\s+|$)){5}$",
            "title": "Cron",
          },
        },
        "required": [
          "cron",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/matchers/cron.ts@CronProps",
        "titleBy": "cron",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9kYXRlLnRz@Props":
      {
        "type": "object",
        "properties": {
          "start": {
            "type": [
              "string",
              "null",
            ],
            "format": "date-time",
            "title": "Start",
          },
          "end": {
            "type": [
              "string",
              "null",
            ],
            "format": "date-time",
            "title": "End",
          },
        },
        "required": [],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/matchers/date.ts@Props",
        "titleBy": "start",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9kZXZpY2UudHM=@Props":
      {
        "type": "object",
        "properties": {
          "mobile": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Mobile",
          },
          "tablet": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Tablet",
          },
          "desktop": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Desktop",
          },
        },
        "required": [],
        "title":
          "{{#mobile}}Mobile{{/mobile}} {{#tablet}}Tablet{{/tablet}} {{#desktop}}Desktop{{/desktop}}",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9lbnZpcm9ubWVudC50cw==@Props":
      {
        "type": "object",
        "properties": {
          "environment": {
            "anyOf": [
              {
                "type": "string",
                "const": "production",
                "default": "production",
              },
              {
                "type": "string",
                "const": "development",
                "default": "development",
              },
            ],
            "type": "string",
            "title": "Environment",
          },
        },
        "required": [
          "environment",
        ],
        "title": "{{{environment}}}",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9ob3N0LnRz@Props":
      {
        "type": "object",
        "properties": {
          "includes": {
            "type": [
              "string",
              "null",
            ],
            "title": "Includes",
          },
          "match": {
            "type": [
              "string",
              "null",
            ],
            "title": "Match",
          },
        },
        "required": [],
        "title": "{{{includes}}} {{{match}}}",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9sb2NhdGlvbi50cw==@Location":
      {
        "type": "object",
        "properties": {
          "city": {
            "type": [
              "string",
              "null",
            ],
            "title": "City",
            "example": "São Paulo",
          },
          "regionCode": {
            "type": [
              "string",
              "null",
            ],
            "title": "Region Code",
            "example": "SP",
          },
          "country": {
            "type": [
              "string",
              "null",
            ],
            "title": "Country",
            "example": "BR",
          },
        },
        "required": [],
        "title": "Location",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@MapWidget":
      {
        "type": "string",
        "format": "map",
        "title": "MapWidget",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9sb2NhdGlvbi50cw==@Map":
      {
        "type": "object",
        "properties": {
          "coordinates": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@MapWidget",
            "title": "Area selection",
            "example": "-7.27820,-35.97630,2000",
          },
        },
        "required": [],
        "title": "Map",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9sb2NhdGlvbi50cy1odHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGVjby1jeC9hcHBzQDAuNTkuMy93ZWJzaXRlL21hdGNoZXJzL2xvY2F0aW9uLnRz@Location|Map":
      {
        "anyOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9sb2NhdGlvbi50cw==@Location",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9sb2NhdGlvbi50cw==@Map",
          },
        ],
        "title": "Location|Map",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9sb2NhdGlvbi50cy1odHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGVjby1jeC9hcHBzQDAuNTkuMy93ZWJzaXRlL21hdGNoZXJzL2xvY2F0aW9uLnRz@[Location|Map]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9sb2NhdGlvbi50cy1odHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGVjby1jeC9hcHBzQDAuNTkuMy93ZWJzaXRlL21hdGNoZXJzL2xvY2F0aW9uLnRz@Location|Map",
        },
        "title": "[Location|Map]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9sb2NhdGlvbi50cw==@Props":
      {
        "type": "object",
        "properties": {
          "includeLocations": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9sb2NhdGlvbi50cy1odHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGVjby1jeC9hcHBzQDAuNTkuMy93ZWJzaXRlL21hdGNoZXJzL2xvY2F0aW9uLnRz@[Location|Map]",
            "title": "Include Locations",
          },
          "excludeLocations": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9sb2NhdGlvbi50cy1odHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGVjby1jeC9hcHBzQDAuNTkuMy93ZWJzaXRlL21hdGNoZXJzL2xvY2F0aW9uLnRz@[Location|Map]",
            "title": "Exclude Locations",
          },
        },
        "required": [],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/matchers/location.ts@Props",
      },
    "aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL21hdGNoZXIudHM=@matchers":
      {
        "$ref": "#/root/matchers",
        "title": "matchers",
      },
    "aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL21hdGNoZXIudHM=@Matcher":
      {
        "$ref":
          "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL21hdGNoZXIudHM=@matchers",
        "title": "Matcher",
      },
    "aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL21hdGNoZXIudHM=@[Matcher]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL21hdGNoZXIudHM=@Matcher",
        },
        "title": "[Matcher]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9tdWx0aS50cw==@Props":
      {
        "type": "object",
        "properties": {
          "op": {
            "anyOf": [
              {
                "type": "string",
                "const": "or",
                "default": "or",
              },
              {
                "type": "string",
                "const": "and",
                "default": "and",
              },
            ],
            "type": "string",
            "title": "Op",
          },
          "matchers": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL21hdGNoZXIudHM=@[Matcher]",
            "title": "Matchers",
          },
        },
        "required": [
          "op",
          "matchers",
        ],
        "title": "Combined options with {{{op}}}",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9uZWdhdGUudHM=@Props":
      {
        "type": "object",
        "properties": {
          "matcher": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL21hdGNoZXIudHM=@Matcher",
            "description": "Matcher to be negated.",
            "title": "Matcher",
          },
        },
        "required": [
          "matcher",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/matchers/negate.ts@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9wYXRobmFtZS50cw==@BaseCase":
      {
        "type": "object",
        "properties": {
          "pathname": {
            "type": [
              "string",
              "null",
            ],
            "title": "Pathname",
            "description": 'Must start with "/"',
          },
        },
        "required": [],
        "title": "BaseCase",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9wYXRobmFtZS50cw==@Equals":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9wYXRobmFtZS50cw==@BaseCase",
          },
        ],
        "properties": {
          "type": {
            "type": "string",
            "const": "Equals",
            "default": "Equals",
            "readonly": "*",
            "hide": "true",
            "title": "Type",
          },
        },
        "required": [
          "type",
        ],
        "title": "Equals",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9wYXRobmFtZS50cw==@Includes":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9wYXRobmFtZS50cw==@BaseCase",
          },
        ],
        "properties": {
          "type": {
            "type": "string",
            "const": "Includes",
            "default": "Includes",
            "readonly": "*",
            "hide": "true",
            "title": "Type",
          },
        },
        "required": [
          "type",
        ],
        "title": "Includes",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9wYXRobmFtZS50cy1odHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGVjby1jeC9hcHBzQDAuNTkuMy93ZWJzaXRlL21hdGNoZXJzL3BhdGhuYW1lLnRz@Equals|Includes":
      {
        "anyOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9wYXRobmFtZS50cw==@Equals",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9wYXRobmFtZS50cw==@Includes",
          },
        ],
        "title": "Equals|Includes",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9wYXRobmFtZS50cw==@Props":
      {
        "type": "object",
        "properties": {
          "case": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9wYXRobmFtZS50cy1odHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGVjby1jeC9hcHBzQDAuNTkuMy93ZWJzaXRlL21hdGNoZXJzL3BhdGhuYW1lLnRz@Equals|Includes",
            "title": "Operation",
          },
        },
        "required": [
          "case",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/matchers/pathname.ts@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@BaseCase":
      {
        "type": "object",
        "properties": {
          "value": {
            "type": "string",
            "title": "Value",
          },
        },
        "required": [
          "value",
        ],
        "title": "BaseCase",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@Equals":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@BaseCase",
          },
        ],
        "properties": {
          "type": {
            "type": "string",
            "const": "Equals",
            "default": "Equals",
            "readonly": "*",
            "hide": "true",
            "title": "Type",
          },
        },
        "required": [
          "type",
        ],
        "title": "Equals",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@Greater":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@BaseCase",
          },
        ],
        "properties": {
          "type": {
            "type": "string",
            "const": "Greater",
            "default": "Greater",
            "readonly": "*",
            "hide": "true",
            "title": "Type",
          },
        },
        "required": [
          "type",
        ],
        "title": "Greater",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@Lesser":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@BaseCase",
          },
        ],
        "properties": {
          "type": {
            "type": "string",
            "const": "Lesser",
            "default": "Lesser",
            "readonly": "*",
            "hide": "true",
            "title": "Type",
          },
        },
        "required": [
          "type",
        ],
        "title": "Lesser",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@GreaterOrEquals":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@BaseCase",
          },
        ],
        "properties": {
          "type": {
            "type": "string",
            "const": "GreaterOrEquals",
            "default": "GreaterOrEquals",
            "readonly": "*",
            "hide": "true",
            "title": "Type",
          },
        },
        "required": [
          "type",
        ],
        "title": "GreaterOrEquals",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@LesserOrEquals":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@BaseCase",
          },
        ],
        "properties": {
          "type": {
            "type": "string",
            "const": "LesserOrEquals",
            "default": "LesserOrEquals",
            "readonly": "*",
            "hide": "true",
            "title": "Type",
          },
        },
        "required": [
          "type",
        ],
        "title": "LesserOrEquals",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@Includes":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@BaseCase",
          },
        ],
        "properties": {
          "type": {
            "type": "string",
            "const": "Includes",
            "default": "Includes",
            "readonly": "*",
            "hide": "true",
            "title": "Type",
          },
        },
        "required": [
          "type",
        ],
        "title": "Includes",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@Exists":
      {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "const": "Exists",
            "default": "Exists",
            "readonly": "*",
            "hide": "true",
            "title": "Type",
          },
        },
        "required": [
          "type",
        ],
        "title": "Exists",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cy1odHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGVjby1jeC9hcHBzQDAuNTkuMy93ZWJzaXRlL21hdGNoZXJzL3F1ZXJ5U3RyaW5nLnRzLWh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZWNvLWN4L2FwcHNAMC41OS4zL3dlYnNpdGUvbWF0Y2hlcnMvcXVlcnlTdHJpbmcudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cy1odHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGVjby1jeC9hcHBzQDAuNTkuMy93ZWJzaXRlL21hdGNoZXJzL3F1ZXJ5U3RyaW5nLnRzLWh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZWNvLWN4L2FwcHNAMC41OS4zL3dlYnNpdGUvbWF0Y2hlcnMvcXVlcnlTdHJpbmcudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@Equals|Greater|Lesser|GreaterOrEquals|LesserOrEquals|Includes|Exists":
      {
        "anyOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@Equals",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@Greater",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@Lesser",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@GreaterOrEquals",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@LesserOrEquals",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@Includes",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@Exists",
          },
        ],
        "title":
          "Equals|Greater|Lesser|GreaterOrEquals|LesserOrEquals|Includes|Exists",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@Condition":
      {
        "type": "object",
        "properties": {
          "param": {
            "type": "string",
            "title": "Param",
          },
          "case": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cy1odHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGVjby1jeC9hcHBzQDAuNTkuMy93ZWJzaXRlL21hdGNoZXJzL3F1ZXJ5U3RyaW5nLnRzLWh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZWNvLWN4L2FwcHNAMC41OS4zL3dlYnNpdGUvbWF0Y2hlcnMvcXVlcnlTdHJpbmcudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cy1odHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGVjby1jeC9hcHBzQDAuNTkuMy93ZWJzaXRlL21hdGNoZXJzL3F1ZXJ5U3RyaW5nLnRzLWh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZWNvLWN4L2FwcHNAMC41OS4zL3dlYnNpdGUvbWF0Y2hlcnMvcXVlcnlTdHJpbmcudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@Equals|Greater|Lesser|GreaterOrEquals|LesserOrEquals|Includes|Exists",
            "title": "Case",
          },
        },
        "required": [
          "param",
          "case",
        ],
        "title": "{{{param}}} {{{case.type}}} {{{case.value}}}",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@[Condition]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@Condition",
        },
        "title": "[Condition]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@Props":
      {
        "type": "object",
        "properties": {
          "conditions": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@[Condition]",
            "title": "Conditions",
          },
        },
        "required": [
          "conditions",
        ],
        "title": "Query String Matcher",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9yYW5kb20udHM=@Props":
      {
        "type": "object",
        "properties": {
          "traffic": {
            "type": "number",
            "title": "Traffic",
          },
        },
        "required": [
          "traffic",
        ],
        "title": "ABTest {{{percentage traffic}}}",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9zaXRlLnRz@Props":
      {
        "type": "object",
        "properties": {
          "siteId": {
            "type": "number",
            "title": "Site Id",
          },
        },
        "required": [
          "siteId",
        ],
        "title": "{{{siteId}}}",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy91c2VyQWdlbnQudHM=@Props":
      {
        "type": "object",
        "properties": {
          "includes": {
            "type": [
              "string",
              "null",
            ],
            "title": "Includes",
          },
          "match": {
            "type": [
              "string",
              "null",
            ],
            "title": "Match",
          },
        },
        "required": [],
        "title": "{{{includes}}} {{{match}}}",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mbGFncy9hdWRpZW5jZS50cw==@Audience":
      {
        "type": "object",
        "properties": {
          "matcher": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL21hdGNoZXIudHM=@Matcher",
            "title": "Matcher",
          },
          "name": {
            "type": "string",
            "title": "The audience name (will be used on cookies).",
            "description": "Add a meaningful short word for the audience name.",
            "minLength": 3,
            "pattern": "^[A-Za-z0-9_-]+$",
          },
          "routes": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mbGFncy9hdWRpZW5jZS50cw==@Routes",
            "title": "Routes",
          },
        },
        "required": [
          "matcher",
          "name",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/flags/audience.ts@Audience",
        "titleBy": "name",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mbGFncy9ldmVyeW9uZS50cw==@EveryoneConfig":
      {
        "type": "object",
        "properties": {
          "routes": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mbGFncy9hdWRpZW5jZS50cw==@Routes",
            "title": "Routes",
          },
        },
        "required": [],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/flags/everyone.ts@EveryoneConfig",
      },
    "aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL2ZsYWcudHM=@FlagObj+unknown":
      {
        "type": "object",
        "properties": {
          "matcher": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL21hdGNoZXIudHM=@Matcher",
            "title": "Matcher",
          },
          "name": {
            "type": "string",
            "title": "Name",
          },
          "true": {
            "type": "object",
            "title": "True",
          },
          "false": {
            "type": "object",
            "title": "False",
          },
        },
        "required": [
          "matcher",
          "name",
          "true",
          "false",
        ],
        "title": "FlagObj+unknown",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mbGFncy9mbGFnLnRz@Props+unknown":
      {
        "$ref":
          "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL2ZsYWcudHM=@FlagObj+unknown",
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/flags/flag.ts@Props+unknown",
      },
    "aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL2ZsYWcudHM=@Variant+[Section]":
      {
        "type": "object",
        "properties": {
          "rule": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL21hdGNoZXIudHM=@Matcher",
            "title": "Condition",
          },
          "value": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL3NlY3Rpb24udHM=@[Section]",
            "title": "Content",
          },
        },
        "required": [
          "rule",
          "value",
        ],
        "title":
          "{{#beautifySchemaTitle}}{{{rule.__resolveType}}}{{/beautifySchemaTitle}} Variant",
        "label": "hidden",
        "icon": "flag",
      },
    "aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL2ZsYWcudHM=@[Variant+[Section]]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL2ZsYWcudHM=@Variant+[Section]",
        },
        "title": "[Variant+[Section]]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS91dGlscy9tdWx0aXZhcmlhdGUudHM=@MultivariateProps+[Section]":
      {
        "type": "object",
        "properties": {
          "variants": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL2ZsYWcudHM=@[Variant+[Section]]",
            "minItems": 1,
            "addBehavior": "1",
            "title": "Variants",
          },
        },
        "required": [
          "variants",
        ],
        "title": "Multivariate",
      },
    "aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL2ZsYWcudHM=@Variant+ImageWidget":
      {
        "type": "object",
        "properties": {
          "rule": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL21hdGNoZXIudHM=@Matcher",
            "title": "Condition",
          },
          "value": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
            "title": "Content",
          },
        },
        "required": [
          "rule",
          "value",
        ],
        "title":
          "{{#beautifySchemaTitle}}{{{rule.__resolveType}}}{{/beautifySchemaTitle}} Variant",
        "label": "hidden",
        "icon": "flag",
      },
    "aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL2ZsYWcudHM=@[Variant+ImageWidget]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL2ZsYWcudHM=@Variant+ImageWidget",
        },
        "title": "[Variant+ImageWidget]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS91dGlscy9tdWx0aXZhcmlhdGUudHM=@MultivariateProps+ImageWidget":
      {
        "type": "object",
        "properties": {
          "variants": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL2ZsYWcudHM=@[Variant+ImageWidget]",
            "minItems": 1,
            "addBehavior": "1",
            "title": "Variants",
          },
        },
        "required": [
          "variants",
        ],
        "title": "Multivariate",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mbGFncy9tdWx0aXZhcmlhdGUvbWVzc2FnZS50cw==@Message":
      {
        "anyOf": [
          {
            "type": "string",
            "title":
              "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/flags/multivariate/message.ts@Message",
          },
          {
            "title": "Message Variants",
            "type": "object",
            "allOf": [
              {
                "$ref":
                  "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS91dGlscy9tdWx0aXZhcmlhdGUudHM=@MultivariateProps+Message",
              },
            ],
            "required": [
              "__resolveType",
            ],
            "properties": {
              "__resolveType": {
                "type": "string",
                "enum": [
                  "website/flags/multivariate/message.ts",
                ],
                "default": "website/flags/multivariate/message.ts",
              },
            },
          },
        ],
      },
    "aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL2ZsYWcudHM=@Variant+Message":
      {
        "type": "object",
        "properties": {
          "rule": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL21hdGNoZXIudHM=@Matcher",
            "title": "Condition",
          },
          "value": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mbGFncy9tdWx0aXZhcmlhdGUvbWVzc2FnZS50cw==@Message",
            "title": "Content",
          },
        },
        "required": [
          "rule",
          "value",
        ],
        "title":
          "{{#beautifySchemaTitle}}{{{rule.__resolveType}}}{{/beautifySchemaTitle}} Variant",
        "label": "hidden",
        "icon": "flag",
      },
    "aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL2ZsYWcudHM=@[Variant+Message]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL2ZsYWcudHM=@Variant+Message",
        },
        "title": "[Variant+Message]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS91dGlscy9tdWx0aXZhcmlhdGUudHM=@MultivariateProps+Message":
      {
        "type": "object",
        "properties": {
          "variants": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL2ZsYWcudHM=@[Variant+Message]",
            "minItems": 1,
            "addBehavior": "1",
            "title": "Variants",
          },
        },
        "required": [
          "variants",
        ],
        "title": "Multivariate",
      },
    "aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL2ZsYWcudHM=@Variant+Section":
      {
        "type": "object",
        "properties": {
          "rule": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL21hdGNoZXIudHM=@Matcher",
            "title": "Condition",
          },
          "value": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL3NlY3Rpb24udHM=@Section",
            "title": "Content",
          },
        },
        "required": [
          "rule",
          "value",
        ],
        "title":
          "{{#beautifySchemaTitle}}{{{rule.__resolveType}}}{{/beautifySchemaTitle}} Variant",
        "label": "hidden",
        "icon": "flag",
      },
    "aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL2ZsYWcudHM=@[Variant+Section]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL2ZsYWcudHM=@Variant+Section",
        },
        "title": "[Variant+Section]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS91dGlscy9tdWx0aXZhcmlhdGUudHM=@MultivariateProps+Section":
      {
        "type": "object",
        "properties": {
          "variants": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL2ZsYWcudHM=@[Variant+Section]",
            "minItems": 1,
            "addBehavior": "1",
            "title": "Variants",
          },
        },
        "required": [
          "variants",
        ],
        "title": "Multivariate",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL2NhcnQvYWRkSXRlbXMudHM=@tl@409-439":
      {
        "type": "object",
        "properties": {
          "key": {
            "type": "string",
            "title": "Key",
          },
          "value": {
            "type": "string",
            "title": "Value",
          },
        },
        "required": [
          "key",
          "value",
        ],
        "title": "tl@409-439",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL2NhcnQvYWRkSXRlbXMudHM=@[tl@409-439]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL2NhcnQvYWRkSXRlbXMudHM=@tl@409-439",
        },
        "title": "[tl@409-439]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL2NhcnQvYWRkSXRlbXMudHM=@tl@357-496":
      {
        "type": "object",
        "properties": {
          "merchandiseId": {
            "type": "string",
            "title": "Merchandise Id",
          },
          "attributes": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL2NhcnQvYWRkSXRlbXMudHM=@[tl@409-439]",
            "title": "Attributes",
          },
          "quantity": {
            "type": [
              "number",
              "null",
            ],
            "title": "Quantity",
          },
          "sellingPlanId": {
            "type": [
              "string",
              "null",
            ],
            "title": "Selling Plan Id",
          },
        },
        "required": [
          "merchandiseId",
        ],
        "title": "tl@357-496",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL2NhcnQvYWRkSXRlbXMudHM=@tl@346-499":
      {
        "type": "object",
        "properties": {
          "lines": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL2NhcnQvYWRkSXRlbXMudHM=@tl@357-496",
            "title": "Lines",
          },
        },
        "required": [
          "lines",
        ],
        "title": "tl@346-499",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL2NhcnQvYWRkSXRlbXMudHM=@UpdateLineProps":
      {
        "$ref":
          "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL2NhcnQvYWRkSXRlbXMudHM=@tl@346-499",
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/shopify/actions/cart/addItems.ts@UpdateLineProps",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL2NhcnQvdXBkYXRlQ291cG9ucy50cw==@tl@333-363":
      {
        "type": "object",
        "properties": {
          "discountCodes": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Discount Codes",
          },
        },
        "required": [
          "discountCodes",
        ],
        "title": "tl@333-363",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL2NhcnQvdXBkYXRlQ291cG9ucy50cw==@AddCouponProps":
      {
        "$ref":
          "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL2NhcnQvdXBkYXRlQ291cG9ucy50cw==@tl@333-363",
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/shopify/actions/cart/updateCoupons.ts@AddCouponProps",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL2NhcnQvdXBkYXRlSXRlbXMudHM=@tl@357-401":
      {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "title": "Id",
          },
          "quantity": {
            "type": [
              "number",
              "null",
            ],
            "title": "Quantity",
          },
        },
        "required": [
          "id",
        ],
        "title": "tl@357-401",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL2NhcnQvdXBkYXRlSXRlbXMudHM=@[tl@357-401]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL2NhcnQvdXBkYXRlSXRlbXMudHM=@tl@357-401",
        },
        "title": "[tl@357-401]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL2NhcnQvdXBkYXRlSXRlbXMudHM=@tl@340-405":
      {
        "type": "object",
        "properties": {
          "lines": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL2NhcnQvdXBkYXRlSXRlbXMudHM=@[tl@357-401]",
            "title": "Lines",
          },
        },
        "required": [
          "lines",
        ],
        "title": "tl@340-405",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL2NhcnQvdXBkYXRlSXRlbXMudHM=@UpdateLineProps":
      {
        "$ref":
          "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL2NhcnQvdXBkYXRlSXRlbXMudHM=@tl@340-405",
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/shopify/actions/cart/updateItems.ts@UpdateLineProps",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL29yZGVyL2RyYWZ0T3JkZXJDYWxjdWxhdGUudHM=@tl@346-402":
      {
        "type": "object",
        "properties": {
          "variantId": {
            "type": "string",
            "title": "Variant Id",
          },
          "quantity": {
            "type": "number",
            "title": "Quantity",
          },
        },
        "required": [
          "variantId",
          "quantity",
        ],
        "title": "tl@346-402",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL29yZGVyL2RyYWZ0T3JkZXJDYWxjdWxhdGUudHM=@[tl@346-402]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL29yZGVyL2RyYWZ0T3JkZXJDYWxjdWxhdGUudHM=@tl@346-402",
        },
        "title": "[tl@346-402]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS91dGlscy9hZG1pbi9hZG1pbi5ncmFwaHFsLmdlbi50cw==@CountryCode":
      {
        "anyOf": [
          {
            "type": "string",
            "const": "AC",
            "default": "AC",
          },
          {
            "type": "string",
            "const": "AD",
            "default": "AD",
          },
          {
            "type": "string",
            "const": "AE",
            "default": "AE",
          },
          {
            "type": "string",
            "const": "AF",
            "default": "AF",
          },
          {
            "type": "string",
            "const": "AG",
            "default": "AG",
          },
          {
            "type": "string",
            "const": "AI",
            "default": "AI",
          },
          {
            "type": "string",
            "const": "AL",
            "default": "AL",
          },
          {
            "type": "string",
            "const": "AM",
            "default": "AM",
          },
          {
            "type": "string",
            "const": "AN",
            "default": "AN",
          },
          {
            "type": "string",
            "const": "AO",
            "default": "AO",
          },
          {
            "type": "string",
            "const": "AR",
            "default": "AR",
          },
          {
            "type": "string",
            "const": "AT",
            "default": "AT",
          },
          {
            "type": "string",
            "const": "AU",
            "default": "AU",
          },
          {
            "type": "string",
            "const": "AW",
            "default": "AW",
          },
          {
            "type": "string",
            "const": "AX",
            "default": "AX",
          },
          {
            "type": "string",
            "const": "AZ",
            "default": "AZ",
          },
          {
            "type": "string",
            "const": "BA",
            "default": "BA",
          },
          {
            "type": "string",
            "const": "BB",
            "default": "BB",
          },
          {
            "type": "string",
            "const": "BD",
            "default": "BD",
          },
          {
            "type": "string",
            "const": "BE",
            "default": "BE",
          },
          {
            "type": "string",
            "const": "BF",
            "default": "BF",
          },
          {
            "type": "string",
            "const": "BG",
            "default": "BG",
          },
          {
            "type": "string",
            "const": "BH",
            "default": "BH",
          },
          {
            "type": "string",
            "const": "BI",
            "default": "BI",
          },
          {
            "type": "string",
            "const": "BJ",
            "default": "BJ",
          },
          {
            "type": "string",
            "const": "BL",
            "default": "BL",
          },
          {
            "type": "string",
            "const": "BM",
            "default": "BM",
          },
          {
            "type": "string",
            "const": "BN",
            "default": "BN",
          },
          {
            "type": "string",
            "const": "BO",
            "default": "BO",
          },
          {
            "type": "string",
            "const": "BQ",
            "default": "BQ",
          },
          {
            "type": "string",
            "const": "BR",
            "default": "BR",
          },
          {
            "type": "string",
            "const": "BS",
            "default": "BS",
          },
          {
            "type": "string",
            "const": "BT",
            "default": "BT",
          },
          {
            "type": "string",
            "const": "BV",
            "default": "BV",
          },
          {
            "type": "string",
            "const": "BW",
            "default": "BW",
          },
          {
            "type": "string",
            "const": "BY",
            "default": "BY",
          },
          {
            "type": "string",
            "const": "BZ",
            "default": "BZ",
          },
          {
            "type": "string",
            "const": "CA",
            "default": "CA",
          },
          {
            "type": "string",
            "const": "CC",
            "default": "CC",
          },
          {
            "type": "string",
            "const": "CD",
            "default": "CD",
          },
          {
            "type": "string",
            "const": "CF",
            "default": "CF",
          },
          {
            "type": "string",
            "const": "CG",
            "default": "CG",
          },
          {
            "type": "string",
            "const": "CH",
            "default": "CH",
          },
          {
            "type": "string",
            "const": "CI",
            "default": "CI",
          },
          {
            "type": "string",
            "const": "CK",
            "default": "CK",
          },
          {
            "type": "string",
            "const": "CL",
            "default": "CL",
          },
          {
            "type": "string",
            "const": "CM",
            "default": "CM",
          },
          {
            "type": "string",
            "const": "CN",
            "default": "CN",
          },
          {
            "type": "string",
            "const": "CO",
            "default": "CO",
          },
          {
            "type": "string",
            "const": "CR",
            "default": "CR",
          },
          {
            "type": "string",
            "const": "CU",
            "default": "CU",
          },
          {
            "type": "string",
            "const": "CV",
            "default": "CV",
          },
          {
            "type": "string",
            "const": "CW",
            "default": "CW",
          },
          {
            "type": "string",
            "const": "CX",
            "default": "CX",
          },
          {
            "type": "string",
            "const": "CY",
            "default": "CY",
          },
          {
            "type": "string",
            "const": "CZ",
            "default": "CZ",
          },
          {
            "type": "string",
            "const": "DE",
            "default": "DE",
          },
          {
            "type": "string",
            "const": "DJ",
            "default": "DJ",
          },
          {
            "type": "string",
            "const": "DK",
            "default": "DK",
          },
          {
            "type": "string",
            "const": "DM",
            "default": "DM",
          },
          {
            "type": "string",
            "const": "DO",
            "default": "DO",
          },
          {
            "type": "string",
            "const": "DZ",
            "default": "DZ",
          },
          {
            "type": "string",
            "const": "EC",
            "default": "EC",
          },
          {
            "type": "string",
            "const": "EE",
            "default": "EE",
          },
          {
            "type": "string",
            "const": "EG",
            "default": "EG",
          },
          {
            "type": "string",
            "const": "EH",
            "default": "EH",
          },
          {
            "type": "string",
            "const": "ER",
            "default": "ER",
          },
          {
            "type": "string",
            "const": "ES",
            "default": "ES",
          },
          {
            "type": "string",
            "const": "ET",
            "default": "ET",
          },
          {
            "type": "string",
            "const": "FI",
            "default": "FI",
          },
          {
            "type": "string",
            "const": "FJ",
            "default": "FJ",
          },
          {
            "type": "string",
            "const": "FK",
            "default": "FK",
          },
          {
            "type": "string",
            "const": "FO",
            "default": "FO",
          },
          {
            "type": "string",
            "const": "FR",
            "default": "FR",
          },
          {
            "type": "string",
            "const": "GA",
            "default": "GA",
          },
          {
            "type": "string",
            "const": "GB",
            "default": "GB",
          },
          {
            "type": "string",
            "const": "GD",
            "default": "GD",
          },
          {
            "type": "string",
            "const": "GE",
            "default": "GE",
          },
          {
            "type": "string",
            "const": "GF",
            "default": "GF",
          },
          {
            "type": "string",
            "const": "GG",
            "default": "GG",
          },
          {
            "type": "string",
            "const": "GH",
            "default": "GH",
          },
          {
            "type": "string",
            "const": "GI",
            "default": "GI",
          },
          {
            "type": "string",
            "const": "GL",
            "default": "GL",
          },
          {
            "type": "string",
            "const": "GM",
            "default": "GM",
          },
          {
            "type": "string",
            "const": "GN",
            "default": "GN",
          },
          {
            "type": "string",
            "const": "GP",
            "default": "GP",
          },
          {
            "type": "string",
            "const": "GQ",
            "default": "GQ",
          },
          {
            "type": "string",
            "const": "GR",
            "default": "GR",
          },
          {
            "type": "string",
            "const": "GS",
            "default": "GS",
          },
          {
            "type": "string",
            "const": "GT",
            "default": "GT",
          },
          {
            "type": "string",
            "const": "GW",
            "default": "GW",
          },
          {
            "type": "string",
            "const": "GY",
            "default": "GY",
          },
          {
            "type": "string",
            "const": "HK",
            "default": "HK",
          },
          {
            "type": "string",
            "const": "HM",
            "default": "HM",
          },
          {
            "type": "string",
            "const": "HN",
            "default": "HN",
          },
          {
            "type": "string",
            "const": "HR",
            "default": "HR",
          },
          {
            "type": "string",
            "const": "HT",
            "default": "HT",
          },
          {
            "type": "string",
            "const": "HU",
            "default": "HU",
          },
          {
            "type": "string",
            "const": "ID",
            "default": "ID",
          },
          {
            "type": "string",
            "const": "IE",
            "default": "IE",
          },
          {
            "type": "string",
            "const": "IL",
            "default": "IL",
          },
          {
            "type": "string",
            "const": "IM",
            "default": "IM",
          },
          {
            "type": "string",
            "const": "IN",
            "default": "IN",
          },
          {
            "type": "string",
            "const": "IO",
            "default": "IO",
          },
          {
            "type": "string",
            "const": "IQ",
            "default": "IQ",
          },
          {
            "type": "string",
            "const": "IR",
            "default": "IR",
          },
          {
            "type": "string",
            "const": "IS",
            "default": "IS",
          },
          {
            "type": "string",
            "const": "IT",
            "default": "IT",
          },
          {
            "type": "string",
            "const": "JE",
            "default": "JE",
          },
          {
            "type": "string",
            "const": "JM",
            "default": "JM",
          },
          {
            "type": "string",
            "const": "JO",
            "default": "JO",
          },
          {
            "type": "string",
            "const": "JP",
            "default": "JP",
          },
          {
            "type": "string",
            "const": "KE",
            "default": "KE",
          },
          {
            "type": "string",
            "const": "KG",
            "default": "KG",
          },
          {
            "type": "string",
            "const": "KH",
            "default": "KH",
          },
          {
            "type": "string",
            "const": "KI",
            "default": "KI",
          },
          {
            "type": "string",
            "const": "KM",
            "default": "KM",
          },
          {
            "type": "string",
            "const": "KN",
            "default": "KN",
          },
          {
            "type": "string",
            "const": "KP",
            "default": "KP",
          },
          {
            "type": "string",
            "const": "KR",
            "default": "KR",
          },
          {
            "type": "string",
            "const": "KW",
            "default": "KW",
          },
          {
            "type": "string",
            "const": "KY",
            "default": "KY",
          },
          {
            "type": "string",
            "const": "KZ",
            "default": "KZ",
          },
          {
            "type": "string",
            "const": "LA",
            "default": "LA",
          },
          {
            "type": "string",
            "const": "LB",
            "default": "LB",
          },
          {
            "type": "string",
            "const": "LC",
            "default": "LC",
          },
          {
            "type": "string",
            "const": "LI",
            "default": "LI",
          },
          {
            "type": "string",
            "const": "LK",
            "default": "LK",
          },
          {
            "type": "string",
            "const": "LR",
            "default": "LR",
          },
          {
            "type": "string",
            "const": "LS",
            "default": "LS",
          },
          {
            "type": "string",
            "const": "LT",
            "default": "LT",
          },
          {
            "type": "string",
            "const": "LU",
            "default": "LU",
          },
          {
            "type": "string",
            "const": "LV",
            "default": "LV",
          },
          {
            "type": "string",
            "const": "LY",
            "default": "LY",
          },
          {
            "type": "string",
            "const": "MA",
            "default": "MA",
          },
          {
            "type": "string",
            "const": "MC",
            "default": "MC",
          },
          {
            "type": "string",
            "const": "MD",
            "default": "MD",
          },
          {
            "type": "string",
            "const": "ME",
            "default": "ME",
          },
          {
            "type": "string",
            "const": "MF",
            "default": "MF",
          },
          {
            "type": "string",
            "const": "MG",
            "default": "MG",
          },
          {
            "type": "string",
            "const": "MK",
            "default": "MK",
          },
          {
            "type": "string",
            "const": "ML",
            "default": "ML",
          },
          {
            "type": "string",
            "const": "MM",
            "default": "MM",
          },
          {
            "type": "string",
            "const": "MN",
            "default": "MN",
          },
          {
            "type": "string",
            "const": "MO",
            "default": "MO",
          },
          {
            "type": "string",
            "const": "MQ",
            "default": "MQ",
          },
          {
            "type": "string",
            "const": "MR",
            "default": "MR",
          },
          {
            "type": "string",
            "const": "MS",
            "default": "MS",
          },
          {
            "type": "string",
            "const": "MT",
            "default": "MT",
          },
          {
            "type": "string",
            "const": "MU",
            "default": "MU",
          },
          {
            "type": "string",
            "const": "MV",
            "default": "MV",
          },
          {
            "type": "string",
            "const": "MW",
            "default": "MW",
          },
          {
            "type": "string",
            "const": "MX",
            "default": "MX",
          },
          {
            "type": "string",
            "const": "MY",
            "default": "MY",
          },
          {
            "type": "string",
            "const": "MZ",
            "default": "MZ",
          },
          {
            "type": "string",
            "const": "NA",
            "default": "NA",
          },
          {
            "type": "string",
            "const": "NC",
            "default": "NC",
          },
          {
            "type": "string",
            "const": "NE",
            "default": "NE",
          },
          {
            "type": "string",
            "const": "NF",
            "default": "NF",
          },
          {
            "type": "string",
            "const": "NG",
            "default": "NG",
          },
          {
            "type": "string",
            "const": "NI",
            "default": "NI",
          },
          {
            "type": "string",
            "const": "NL",
            "default": "NL",
          },
          {
            "type": "string",
            "const": "NO",
            "default": "NO",
          },
          {
            "type": "string",
            "const": "NP",
            "default": "NP",
          },
          {
            "type": "string",
            "const": "NR",
            "default": "NR",
          },
          {
            "type": "string",
            "const": "NU",
            "default": "NU",
          },
          {
            "type": "string",
            "const": "NZ",
            "default": "NZ",
          },
          {
            "type": "string",
            "const": "OM",
            "default": "OM",
          },
          {
            "type": "string",
            "const": "PA",
            "default": "PA",
          },
          {
            "type": "string",
            "const": "PE",
            "default": "PE",
          },
          {
            "type": "string",
            "const": "PF",
            "default": "PF",
          },
          {
            "type": "string",
            "const": "PG",
            "default": "PG",
          },
          {
            "type": "string",
            "const": "PH",
            "default": "PH",
          },
          {
            "type": "string",
            "const": "PK",
            "default": "PK",
          },
          {
            "type": "string",
            "const": "PL",
            "default": "PL",
          },
          {
            "type": "string",
            "const": "PM",
            "default": "PM",
          },
          {
            "type": "string",
            "const": "PN",
            "default": "PN",
          },
          {
            "type": "string",
            "const": "PS",
            "default": "PS",
          },
          {
            "type": "string",
            "const": "PT",
            "default": "PT",
          },
          {
            "type": "string",
            "const": "PY",
            "default": "PY",
          },
          {
            "type": "string",
            "const": "QA",
            "default": "QA",
          },
          {
            "type": "string",
            "const": "RE",
            "default": "RE",
          },
          {
            "type": "string",
            "const": "RO",
            "default": "RO",
          },
          {
            "type": "string",
            "const": "RS",
            "default": "RS",
          },
          {
            "type": "string",
            "const": "RU",
            "default": "RU",
          },
          {
            "type": "string",
            "const": "RW",
            "default": "RW",
          },
          {
            "type": "string",
            "const": "SA",
            "default": "SA",
          },
          {
            "type": "string",
            "const": "SB",
            "default": "SB",
          },
          {
            "type": "string",
            "const": "SC",
            "default": "SC",
          },
          {
            "type": "string",
            "const": "SD",
            "default": "SD",
          },
          {
            "type": "string",
            "const": "SE",
            "default": "SE",
          },
          {
            "type": "string",
            "const": "SG",
            "default": "SG",
          },
          {
            "type": "string",
            "const": "SH",
            "default": "SH",
          },
          {
            "type": "string",
            "const": "SI",
            "default": "SI",
          },
          {
            "type": "string",
            "const": "SJ",
            "default": "SJ",
          },
          {
            "type": "string",
            "const": "SK",
            "default": "SK",
          },
          {
            "type": "string",
            "const": "SL",
            "default": "SL",
          },
          {
            "type": "string",
            "const": "SM",
            "default": "SM",
          },
          {
            "type": "string",
            "const": "SN",
            "default": "SN",
          },
          {
            "type": "string",
            "const": "SO",
            "default": "SO",
          },
          {
            "type": "string",
            "const": "SR",
            "default": "SR",
          },
          {
            "type": "string",
            "const": "SS",
            "default": "SS",
          },
          {
            "type": "string",
            "const": "ST",
            "default": "ST",
          },
          {
            "type": "string",
            "const": "SV",
            "default": "SV",
          },
          {
            "type": "string",
            "const": "SX",
            "default": "SX",
          },
          {
            "type": "string",
            "const": "SY",
            "default": "SY",
          },
          {
            "type": "string",
            "const": "SZ",
            "default": "SZ",
          },
          {
            "type": "string",
            "const": "TA",
            "default": "TA",
          },
          {
            "type": "string",
            "const": "TC",
            "default": "TC",
          },
          {
            "type": "string",
            "const": "TD",
            "default": "TD",
          },
          {
            "type": "string",
            "const": "TF",
            "default": "TF",
          },
          {
            "type": "string",
            "const": "TG",
            "default": "TG",
          },
          {
            "type": "string",
            "const": "TH",
            "default": "TH",
          },
          {
            "type": "string",
            "const": "TJ",
            "default": "TJ",
          },
          {
            "type": "string",
            "const": "TK",
            "default": "TK",
          },
          {
            "type": "string",
            "const": "TL",
            "default": "TL",
          },
          {
            "type": "string",
            "const": "TM",
            "default": "TM",
          },
          {
            "type": "string",
            "const": "TN",
            "default": "TN",
          },
          {
            "type": "string",
            "const": "TO",
            "default": "TO",
          },
          {
            "type": "string",
            "const": "TR",
            "default": "TR",
          },
          {
            "type": "string",
            "const": "TT",
            "default": "TT",
          },
          {
            "type": "string",
            "const": "TV",
            "default": "TV",
          },
          {
            "type": "string",
            "const": "TW",
            "default": "TW",
          },
          {
            "type": "string",
            "const": "TZ",
            "default": "TZ",
          },
          {
            "type": "string",
            "const": "UA",
            "default": "UA",
          },
          {
            "type": "string",
            "const": "UG",
            "default": "UG",
          },
          {
            "type": "string",
            "const": "UM",
            "default": "UM",
          },
          {
            "type": "string",
            "const": "US",
            "default": "US",
          },
          {
            "type": "string",
            "const": "UY",
            "default": "UY",
          },
          {
            "type": "string",
            "const": "UZ",
            "default": "UZ",
          },
          {
            "type": "string",
            "const": "VA",
            "default": "VA",
          },
          {
            "type": "string",
            "const": "VC",
            "default": "VC",
          },
          {
            "type": "string",
            "const": "VE",
            "default": "VE",
          },
          {
            "type": "string",
            "const": "VG",
            "default": "VG",
          },
          {
            "type": "string",
            "const": "VN",
            "default": "VN",
          },
          {
            "type": "string",
            "const": "VU",
            "default": "VU",
          },
          {
            "type": "string",
            "const": "WF",
            "default": "WF",
          },
          {
            "type": "string",
            "const": "WS",
            "default": "WS",
          },
          {
            "type": "string",
            "const": "XK",
            "default": "XK",
          },
          {
            "type": "string",
            "const": "YE",
            "default": "YE",
          },
          {
            "type": "string",
            "const": "YT",
            "default": "YT",
          },
          {
            "type": "string",
            "const": "ZA",
            "default": "ZA",
          },
          {
            "type": "string",
            "const": "ZM",
            "default": "ZM",
          },
          {
            "type": "string",
            "const": "ZW",
            "default": "ZW",
          },
          {
            "type": "string",
            "const": "ZZ",
            "default": "ZZ",
          },
        ],
        "type": "string",
        "title": "CountryCode",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL29yZGVyL2RyYWZ0T3JkZXJDYWxjdWxhdGUudHM=@tl@427-514":
      {
        "type": "object",
        "properties": {
          "zip": {
            "type": "string",
            "title": "Zip",
          },
          "countryCode": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS91dGlscy9hZG1pbi9hZG1pbi5ncmFwaHFsLmdlbi50cw==@CountryCode",
            "title": "Country Code",
          },
          "provinceCode": {
            "type": [
              "string",
              "null",
            ],
            "title": "Province Code",
          },
        },
        "required": [
          "zip",
          "countryCode",
        ],
        "title": "tl@427-514",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL29yZGVyL2RyYWZ0T3JkZXJDYWxjdWxhdGUudHM=@tl@329-519":
      {
        "type": "object",
        "properties": {
          "lineItems": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL29yZGVyL2RyYWZ0T3JkZXJDYWxjdWxhdGUudHM=@[tl@346-402]",
            "title": "Line Items",
          },
          "shippingAddress": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL29yZGVyL2RyYWZ0T3JkZXJDYWxjdWxhdGUudHM=@tl@427-514",
            "title": "Shipping Address",
          },
        },
        "required": [
          "lineItems",
          "shippingAddress",
        ],
        "title": "tl@329-519",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL29yZGVyL2RyYWZ0T3JkZXJDYWxjdWxhdGUudHM=@tl@318-522":
      {
        "type": "object",
        "properties": {
          "input": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL29yZGVyL2RyYWZ0T3JkZXJDYWxjdWxhdGUudHM=@tl@329-519",
            "title": "Input",
          },
        },
        "required": [
          "input",
        ],
        "title": "tl@318-522",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL29yZGVyL2RyYWZ0T3JkZXJDYWxjdWxhdGUudHM=@DraftOrderCalculateProps":
      {
        "$ref":
          "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL29yZGVyL2RyYWZ0T3JkZXJDYWxjdWxhdGUudHM=@tl@318-522",
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/shopify/actions/order/draftOrderCalculate.ts@DraftOrderCalculateProps",
      },
    "ZmlsZTovLy9hcHAvZGVjby9hY3Rpb25zL3dpc2hsaXN0L3N1Ym1pdC50cw==@Props": {
      "type": "object",
      "properties": {
        "productID": {
          "type": "string",
          "title": "Product I D",
        },
        "productGroupID": {
          "type": "string",
          "title": "Product Group I D",
        },
      },
      "required": [
        "productID",
        "productGroupID",
      ],
      "title": "file:///app/deco/actions/wishlist/submit.ts@Props",
    },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9hY3Rpb25zL3NlY3JldHMvZW5jcnlwdC50cw==@Props":
      {
        "type": "object",
        "properties": {
          "value": {
            "type": "string",
            "title": "Value",
          },
        },
        "required": [
          "value",
        ],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/website/actions/secrets/encrypt.ts@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYW5hbHl0aWNzL21vZC50cw==@State":
      {
        "type": "object",
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/analytics/mod.ts@State",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvaHRteC9tb2QudHM=@Extension":
      {
        "anyOf": [
          {
            "type": "string",
            "const": "ajax-header",
            "default": "ajax-header",
          },
          {
            "type": "string",
            "const": "alpine-morph",
            "default": "alpine-morph",
          },
          {
            "type": "string",
            "const": "class-tools",
            "default": "class-tools",
          },
          {
            "type": "string",
            "const": "client-side-templates",
            "default": "client-side-templates",
          },
          {
            "type": "string",
            "const": "debug",
            "default": "debug",
          },
          {
            "type": "string",
            "const": "event-header",
            "default": "event-header",
          },
          {
            "type": "string",
            "const": "head-support",
            "default": "head-support",
          },
          {
            "type": "string",
            "const": "include-vals",
            "default": "include-vals",
          },
          {
            "type": "string",
            "const": "json-enc",
            "default": "json-enc",
          },
          {
            "type": "string",
            "const": "idiomorph",
            "default": "idiomorph",
          },
          {
            "type": "string",
            "const": "loading-states",
            "default": "loading-states",
          },
          {
            "type": "string",
            "const": "method-override",
            "default": "method-override",
          },
          {
            "type": "string",
            "const": "morphdom-swap",
            "default": "morphdom-swap",
          },
          {
            "type": "string",
            "const": "multi-swap",
            "default": "multi-swap",
          },
          {
            "type": "string",
            "const": "path-deps",
            "default": "path-deps",
          },
          {
            "type": "string",
            "const": "preload",
            "default": "preload",
          },
          {
            "type": "string",
            "const": "remove-me",
            "default": "remove-me",
          },
          {
            "type": "string",
            "const": "response-targets",
            "default": "response-targets",
          },
          {
            "type": "string",
            "const": "restored",
            "default": "restored",
          },
          {
            "type": "string",
            "const": "ws",
            "default": "ws",
          },
          {
            "type": "string",
            "const": "path-params",
            "default": "path-params",
          },
          {
            "type": "string",
            "const": "sse",
            "default": "sse",
          },
        ],
        "type": "string",
        "title": "Extension",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvaHRteC9tb2QudHM=@[Extension]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvaHRteC9tb2QudHM=@Extension",
        },
        "title": "[Extension]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvaHRteC9tb2QudHM=@Props":
      {
        "type": "object",
        "properties": {
          "version": {
            "type": [
              "string",
              "null",
            ],
            "default": "1.9.11",
            "title": "Version",
          },
          "cdn": {
            "type": [
              "string",
              "null",
            ],
            "defaul": "https://cdn.jsdelivr.net/npm",
            "title": "Cdn",
          },
          "extensions": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvaHRteC9tb2QudHM=@[Extension]",
            "title": "HTMX extensions to include",
          },
        },
        "required": [],
        "title":
          "https://cdn.jsdelivr.net/gh/deco-cx/apps@0.59.3/htmx/mod.ts@Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9tb2QudHM=@Props":
      {
        "type": "object",
        "properties": {
          "storeName": {
            "type": "string",
            "description": "Shopify store name.",
            "title": "Store Name",
          },
          "storefrontAccessToken": {
            "type": "string",
            "title": "Access Token",
            "description": "Shopify storefront access token.",
          },
          "adminAccessToken": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL3NlY3JldC50cw==@Secret",
            "ttile": "Access Token",
            "description": "Shopify admin access token.",
            "title": "Admin Access Token",
          },
          "storefrontDigestCookie": {
            "type": [
              "string",
              "null",
            ],
            "description": "Disable password protection on the store",
            "title": "Storefront Digest Cookie",
          },
          "platform": {
            "type": "string",
            "const": "shopify",
            "default": "shopify",
            "description": "Use Shopify as backend platform",
            "hide": "true",
            "title": "Platform",
          },
        },
        "required": [
          "storeName",
          "storefrontAccessToken",
          "adminAccessToken",
          "platform",
        ],
        "title": "Shopify",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@CacheDirectiveBase":
      {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "title": "Name",
          },
          "value": {
            "type": "number",
            "title": "Value",
          },
        },
        "required": [
          "name",
          "value",
        ],
        "title": "CacheDirectiveBase",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@StaleWhileRevalidate":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@CacheDirectiveBase",
          },
        ],
        "properties": {
          "name": {
            "type": "string",
            "const": "stale-while-revalidate",
            "default": "stale-while-revalidate",
            "title": "Name",
          },
          "value": {
            "type": "number",
            "title": "Value",
          },
        },
        "required": [
          "name",
          "value",
        ],
        "title": "StaleWhileRevalidate",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@MaxAge":
      {
        "type": "object",
        "allOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@CacheDirectiveBase",
          },
        ],
        "properties": {
          "name": {
            "type": "string",
            "const": "max-age",
            "default": "max-age",
            "title": "Name",
          },
          "value": {
            "type": "number",
            "title": "Value",
          },
        },
        "required": [
          "name",
          "value",
        ],
        "title": "MaxAge",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@StaleWhileRevalidate|MaxAge":
      {
        "anyOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@StaleWhileRevalidate",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@MaxAge",
          },
        ],
        "title": "StaleWhileRevalidate|MaxAge",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@CacheDirective":
      {
        "$ref":
          "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@StaleWhileRevalidate|MaxAge",
        "title": "CacheDirective",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@[CacheDirective]":
      {
        "type": "array",
        "items": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@CacheDirective",
        },
        "title": "[CacheDirective]",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@Caching":
      {
        "type": "object",
        "properties": {
          "enabled": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Enabled",
          },
          "directives": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@[CacheDirective]",
            "title": "Directives",
          },
        },
        "required": [],
        "title": "Caching",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@tl@1789-1819":
      {
        "type": "object",
        "properties": {
          "includes": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS90eXBlcy50cw==@[Script]",
            "title": "Includes",
          },
        },
        "required": [],
        "title": "tl@1789-1819",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@AbTesting":
      {
        "type": "object",
        "properties": {
          "enabled": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Enabled",
          },
          "name": {
            "type": [
              "string",
              "null",
            ],
            "description":
              "The name of the A/B test, it will be appear at cookie",
            "title": "Name",
          },
          "matcher": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL21hdGNoZXIudHM=@Matcher",
            "title": "Matcher",
          },
          "urlToRunAgainst": {
            "type": [
              "string",
              "null",
            ],
            "description":
              "The url to run the A/B test against, eg: secure.mywebsite.com.br",
            "title": "Url To Run Against",
          },
          "replaces": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9oYW5kbGVycy9wcm94eS50cw==@[TextReplace]",
            "description":
              "Strings to replace in the response, for example, to replace absolute urls at HTML",
            "title": "Replaces",
          },
          "includeScriptsToHead": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@tl@1789-1819",
            "title": "Scripts to include",
            "description": "Scripts to include in the head of the page proxied",
          },
        },
        "required": [],
        "title": "AbTesting",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@Fresh":
      {
        "type": "object",
        "properties": {
          "framework": {
            "type": "string",
            "const": "fresh",
            "default": "fresh",
            "title": "Framework",
          },
        },
        "required": [
          "framework",
        ],
        "title": "Fresh",
        "titleBy": "framework",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@HTMX":
      {
        "type": "object",
        "properties": {
          "framework": {
            "type": "string",
            "const": "htmx",
            "default": "htmx",
            "title": "Framework",
          },
        },
        "required": [
          "framework",
        ],
        "title": "HTMX",
        "titleBy": "framework",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@Fresh|HTMX":
      {
        "anyOf": [
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@Fresh",
          },
          {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@HTMX",
          },
        ],
        "title": "Fresh|HTMX",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL1Nlby50c3g=@omitY2Fub25pY2FsLGpzb25MRHM=Props":
      {
        "type": "object",
        "properties": {
          "title": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title",
          },
          "titleTemplate": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title template",
            "description":
              "add a %s whenever you want it to be replaced with the product name, category name or search term",
            "default": "%s",
          },
          "description": {
            "type": [
              "string",
              "null",
            ],
            "title": "Description",
          },
          "descriptionTemplate": {
            "type": [
              "string",
              "null",
            ],
            "title": "Description template",
            "description":
              "add a %s whenever you want it to be replaced with the product name, category name or search term",
            "default": "%s",
          },
          "type": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL1Nlby50c3g=@OGType",
            "default": "website",
            "title": "Type",
          },
          "image": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
            "description": "Recommended: 1200 x 630 px (up to 5MB)",
            "title": "Image",
          },
          "favicon": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYWRtaW4vd2lkZ2V0cy50cw==@ImageWidget",
            "description": "Recommended: 16 x 16 px",
            "title": "Favicon",
          },
          "themeColor": {
            "type": [
              "string",
              "null",
            ],
            "description":
              "Suggested color that browsers should use to customize the display of the page or of the surrounding user interface",
            "title": "Theme Color",
          },
          "noIndexing": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Disable indexing",
            "description":
              "In testing, you can use this to prevent search engines from indexing your site",
          },
        },
        "required": [],
        "title": "omitY2Fub25pY2FsLGpzb25MRHM=Props",
      },
    "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@Props":
      {
        "type": "object",
        "properties": {
          "routes": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mbGFncy9hdWRpZW5jZS50cw==@[Routes]",
            "title": "Routes Map",
          },
          "global": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL3NlY3Rpb24udHM=@[Section]",
            "title": "Global Sections",
            "description":
              "These sections will be included on the start of each page",
          },
          "errorPage": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL3BhZ2UudHN4@Page",
            "title": "Error Page",
            "description":
              "This page will be used when something goes wrong beyond section error-boundaries when rendering a page",
          },
          "caching": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@Caching",
            "title": "Caching configuration of pages",
            "description": "the caching configuration",
          },
          "firstByteThresholdMS": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Global Async Rendering (Deprecated)",
            "description":
              "Please disable this setting and enable each section individually. More info at https://deco.cx/en/blog/async-render-default",
            "deprecated": true,
            "default": false,
          },
          "avoidRedirectingToEditor": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Avoid redirecting to editor",
            "description":
              'Disable going to editor when "." or "Ctrl + Shift + E" is pressed',
          },
          "abTesting": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@AbTesting",
            "title": "AB Testing",
            "description": "A/B Testing configuration",
          },
          "flavor": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHMtaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@Fresh|HTMX",
            "title": "Flavor",
            "description": "The flavor of the website",
          },
          "seo": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL1Nlby50c3g=@omitY2Fub25pY2FsLGpzb25MRHM=Props",
            "title": "Seo",
          },
          "theme": {
            "$ref":
              "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL3NlY3Rpb24udHM=@Section",
            "title": "Theme",
          },
          "sendToClickHouse": {
            "type": [
              "boolean",
              "null",
            ],
            "hide": "true",
            "title": "Send To Click House",
          },
        },
        "required": [],
        "title": "Props",
      },
    "ZmlsZTovLy9hcHAvZGVjby9hcHBzL3NpdGUudHM=@Platform": {
      "anyOf": [
        {
          "type": "string",
          "const": "vtex",
          "default": "vtex",
        },
        {
          "type": "string",
          "const": "vnda",
          "default": "vnda",
        },
        {
          "type": "string",
          "const": "shopify",
          "default": "shopify",
        },
        {
          "type": "string",
          "const": "wake",
          "default": "wake",
        },
        {
          "type": "string",
          "const": "linx",
          "default": "linx",
        },
        {
          "type": "string",
          "const": "nuvemshop",
          "default": "nuvemshop",
        },
        {
          "type": "string",
          "const": "custom",
          "default": "custom",
        },
      ],
      "type": "string",
      "title": "Platform",
    },
    "ZmlsZTovLy9hcHAvZGVjby9hcHBzL3NpdGUudHM=@Props": {
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tb2QudHM=@Props",
        },
      ],
      "properties": {
        "platform": {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9hcHBzL3NpdGUudHM=@Platform",
          "title": "Active Commerce Platform",
          "description": "Choose the active ecommerce platform",
          "default": "custom",
        },
        "theme": {
          "$ref":
            "#/definitions/aHR0cHM6Ly9qc3IuaW8vQGRlY28vZGVjby8xLjk5LjMvYmxvY2tzL3NlY3Rpb24udHM=@Section",
          "title": "Theme",
        },
      },
      "required": [
        "platform",
      ],
      "title": "file:///app/deco/apps/site.ts@Props",
    },
    "d2Vic2l0ZS9mdW5jdGlvbnMvcmVxdWVzdFRvUGFyYW0udHM=": {
      "title": "Get params from request parameters",
      "description": "Set param to slug for routes of type /:slug",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mdW5jdGlvbnMvcmVxdWVzdFRvUGFyYW0udHM=@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/functions/requestToParam.ts",
          ],
          "default": "website/functions/requestToParam.ts",
        },
      },
    },
    "c2hvcGlmeS9sb2FkZXJzL2NhcnQudHM=": {
      "title": "shopify/loaders/cart.ts",
      "type": "object",
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "shopify/loaders/cart.ts",
          ],
          "default": "shopify/loaders/cart.ts",
        },
      },
    },
    "c2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3REZXRhaWxzUGFnZS50cw==": {
      "title": "Shopify Integration",
      "description": "Product Details Page loader",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3REZXRhaWxzUGFnZS50cw==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "shopify/loaders/ProductDetailsPage.ts",
          ],
          "default": "shopify/loaders/ProductDetailsPage.ts",
        },
      },
    },
    "c2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3RMaXN0LnRz": {
      "title": "Shopify Integration",
      "description": "Product List loader",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3RMaXN0LnRz@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "shopify/loaders/ProductList.ts",
          ],
          "default": "shopify/loaders/ProductList.ts",
        },
      },
    },
    "c2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3RMaXN0aW5nUGFnZS50cw==": {
      "title": "Shopify Integration",
      "description": "Product Listing Page loader",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3RMaXN0aW5nUGFnZS50cw==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "shopify/loaders/ProductListingPage.ts",
          ],
          "default": "shopify/loaders/ProductListingPage.ts",
        },
      },
    },
    "c2hvcGlmeS9sb2FkZXJzL3Byb3h5LnRz": {
      "title": "Shopify Proxy Routes",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL3Byb3h5LnRz@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "shopify/loaders/proxy.ts",
          ],
          "default": "shopify/loaders/proxy.ts",
        },
      },
    },
    "c2hvcGlmeS9sb2FkZXJzL1JlbGF0ZWRQcm9kdWN0cy50cw==": {
      "title": "Shopify Integration - Related Products",
      "description": "Product Recommendations loader",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9sb2FkZXJzL1JlbGF0ZWRQcm9kdWN0cy50cw==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "shopify/loaders/RelatedProducts.ts",
          ],
          "default": "shopify/loaders/RelatedProducts.ts",
        },
      },
    },
    "c2l0ZS9sb2FkZXJzL2F2YWlsYWJsZUljb25zLnRz": {
      "title": "site/loaders/availableIcons.ts",
      "type": "object",
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/loaders/availableIcons.ts",
          ],
          "default": "site/loaders/availableIcons.ts",
        },
      },
    },
    "c2l0ZS9sb2FkZXJzL2ljb25zLnRz": {
      "title": "site/loaders/icons.ts",
      "type": "object",
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/loaders/icons.ts",
          ],
          "default": "site/loaders/icons.ts",
        },
      },
    },
    "c2l0ZS9sb2FkZXJzL21pbmljYXJ0LnRz": {
      "title": "site/loaders/minicart.ts",
      "type": "object",
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/loaders/minicart.ts",
          ],
          "default": "site/loaders/minicart.ts",
        },
      },
    },
    "c2l0ZS9sb2FkZXJzL3VzZXIudHM=": {
      "title": "site/loaders/user.ts",
      "type": "object",
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/loaders/user.ts",
          ],
          "default": "site/loaders/user.ts",
        },
      },
    },
    "c2l0ZS9sb2FkZXJzL3dpc2hsaXN0LnRz": {
      "title": "site/loaders/wishlist.ts",
      "type": "object",
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/loaders/wishlist.ts",
          ],
          "default": "site/loaders/wishlist.ts",
        },
      },
    },
    "Y29tbWVyY2UvbG9hZGVycy9leHRlbnNpb25zL3Byb2R1Y3REZXRhaWxzUGFnZS50cw==": {
      "title": "commerce/loaders/extensions/productDetailsPage.ts",
      "deprecated": true,
      "type": "object",
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "commerce/loaders/extensions/productDetailsPage.ts",
          ],
          "default": "commerce/loaders/extensions/productDetailsPage.ts",
        },
      },
    },
    "Y29tbWVyY2UvbG9hZGVycy9leHRlbnNpb25zL3Byb2R1Y3RMaXN0aW5nUGFnZS50cw==": {
      "title": "commerce/loaders/extensions/productListingPage.ts",
      "deprecated": true,
      "type": "object",
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "commerce/loaders/extensions/productListingPage.ts",
          ],
          "default": "commerce/loaders/extensions/productListingPage.ts",
        },
      },
    },
    "Y29tbWVyY2UvbG9hZGVycy9leHRlbnNpb25zL3Byb2R1Y3RzLnRz": {
      "title": "commerce/loaders/extensions/products.ts",
      "deprecated": true,
      "type": "object",
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "commerce/loaders/extensions/products.ts",
          ],
          "default": "commerce/loaders/extensions/products.ts",
        },
      },
    },
    "Y29tbWVyY2UvbG9hZGVycy9uYXZiYXIudHM=": {
      "title": "commerce/loaders/navbar.ts",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2UvbG9hZGVycy9uYXZiYXIudHM=@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "commerce/loaders/navbar.ts",
          ],
          "default": "commerce/loaders/navbar.ts",
        },
      },
    },
    "Y29tbWVyY2UvbG9hZGVycy9wcm9kdWN0L2V4dGVuc2lvbnMvZGV0YWlsc1BhZ2UudHM=": {
      "title": "Extend your product",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@Props+ProductDetailsPage|null",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "commerce/loaders/product/extensions/detailsPage.ts",
          ],
          "default": "commerce/loaders/product/extensions/detailsPage.ts",
        },
      },
    },
    "Y29tbWVyY2UvbG9hZGVycy9wcm9kdWN0L2V4dGVuc2lvbnMvbGlzdC50cw==": {
      "title": "Extend your products",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@Props+[Product]|null",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "commerce/loaders/product/extensions/list.ts",
          ],
          "default": "commerce/loaders/product/extensions/list.ts",
        },
      },
    },
    "Y29tbWVyY2UvbG9hZGVycy9wcm9kdWN0L2V4dGVuc2lvbnMvbGlzdGluZ1BhZ2UudHM=": {
      "title": "Extend your product",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@Props+ProductListingPage|null",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "commerce/loaders/product/extensions/listingPage.ts",
          ],
          "default": "commerce/loaders/product/extensions/listingPage.ts",
        },
      },
    },
    "Y29tbWVyY2UvbG9hZGVycy9wcm9kdWN0L2V4dGVuc2lvbnMvc3VnZ2VzdGlvbnMudHM=": {
      "title": "Extend your product",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@Props+Suggestion|null",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "commerce/loaders/product/extensions/suggestions.ts",
          ],
          "default": "commerce/loaders/product/extensions/suggestions.ts",
        },
      },
    },
    "Y29tbWVyY2UvbG9hZGVycy9wcm9kdWN0L3Byb2R1Y3RMaXN0aW5nUGFnZS50cw==": {
      "title": "Extend your product",
      "deprecated": false,
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@Props+ProductListingPage|null",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "commerce/loaders/product/productListingPage.ts",
          ],
          "default": "commerce/loaders/product/productListingPage.ts",
        },
      },
    },
    "Y29tbWVyY2UvbG9hZGVycy9wcm9kdWN0L3Byb2R1Y3RzLnRz": {
      "title": "Extend your products",
      "deprecated": false,
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@Props+[Product]|null",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "commerce/loaders/product/products.ts",
          ],
          "default": "commerce/loaders/product/products.ts",
        },
      },
    },
    "d2Vic2l0ZS9sb2FkZXJzL2Fzc2V0LnRz": {
      "title": "website/loaders/asset.ts",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2Fzc2V0LnRz@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/loaders/asset.ts",
          ],
          "default": "website/loaders/asset.ts",
        },
      },
    },
    "d2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==": {
      "title": "website/loaders/extension.ts",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==@Props+unknown",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/loaders/extension.ts",
          ],
          "default": "website/loaders/extension.ts",
        },
      },
    },
    "d2Vic2l0ZS9sb2FkZXJzL2ZvbnRzL2dvb2dsZUZvbnRzLnRz": {
      "title": "website/loaders/fonts/googleFonts.ts",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL2ZvbnRzL2dvb2dsZUZvbnRzLnRz@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/loaders/fonts/googleFonts.ts",
          ],
          "default": "website/loaders/fonts/googleFonts.ts",
        },
      },
    },
    "d2Vic2l0ZS9sb2FkZXJzL2ZvbnRzL2xvY2FsLnRz": {
      "title": "website/loaders/fonts/local.ts",
      "type": "object",
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/loaders/fonts/local.ts",
          ],
          "default": "website/loaders/fonts/local.ts",
        },
      },
    },
    "d2Vic2l0ZS9sb2FkZXJzL2ltYWdlLnRz": {
      "title": "website/loaders/image.ts",
      "type": "object",
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/loaders/image.ts",
          ],
          "default": "website/loaders/image.ts",
        },
      },
    },
    "d2Vic2l0ZS9sb2FkZXJzL29wdGlvbnMvcm91dGVzLnRz": {
      "title": "website/loaders/options/routes.ts",
      "type": "object",
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/loaders/options/routes.ts",
          ],
          "default": "website/loaders/options/routes.ts",
        },
      },
    },
    "d2Vic2l0ZS9sb2FkZXJzL29wdGlvbnMvdXJsUGFyYW1zLnRz": {
      "title": "website/loaders/options/urlParams.ts",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL29wdGlvbnMvdXJsUGFyYW1zLnRz@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/loaders/options/urlParams.ts",
          ],
          "default": "website/loaders/options/urlParams.ts",
        },
      },
    },
    "d2Vic2l0ZS9sb2FkZXJzL3BhZ2VzLnRz": {
      "title": "Pages",
      "type": "object",
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/loaders/pages.ts",
          ],
          "default": "website/loaders/pages.ts",
        },
      },
    },
    "d2Vic2l0ZS9sb2FkZXJzL3JlZGlyZWN0LnRz": {
      "title": "website/loaders/redirect.ts",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL3JlZGlyZWN0LnRz@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/loaders/redirect.ts",
          ],
          "default": "website/loaders/redirect.ts",
        },
      },
    },
    "d2Vic2l0ZS9sb2FkZXJzL3JlZGlyZWN0cy50cw==": {
      "title": "Redirects",
      "type": "object",
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/loaders/redirects.ts",
          ],
          "default": "website/loaders/redirects.ts",
        },
      },
    },
    "d2Vic2l0ZS9sb2FkZXJzL3JlZGlyZWN0c0Zyb21Dc3YudHM=": {
      "title": "website/loaders/redirectsFromCsv.ts",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL3JlZGlyZWN0c0Zyb21Dc3YudHM=@Redirects",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/loaders/redirectsFromCsv.ts",
          ],
          "default": "website/loaders/redirectsFromCsv.ts",
        },
      },
    },
    "d2Vic2l0ZS9sb2FkZXJzL3NlY3JldC50cw==": {
      "title": "Secret",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL3NlY3JldC50cw==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/loaders/secret.ts",
          ],
          "default": "website/loaders/secret.ts",
        },
      },
    },
    "d2Vic2l0ZS9sb2FkZXJzL3NlY3JldFN0cmluZy50cw==": {
      "title": "Secret String",
      "deprecated": true,
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9sb2FkZXJzL3NlY3JldFN0cmluZy50cw==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/loaders/secretString.ts",
          ],
          "default": "website/loaders/secretString.ts",
        },
      },
    },
    "YW5hbHl0aWNzL2xvYWRlcnMvRGVjb0FuYWx5dGljc1NjcmlwdC50cw==": {
      "title": "analytics/loaders/DecoAnalyticsScript.ts",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYW5hbHl0aWNzL2xvYWRlcnMvRGVjb0FuYWx5dGljc1NjcmlwdC50cw==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "analytics/loaders/DecoAnalyticsScript.ts",
          ],
          "default": "analytics/loaders/DecoAnalyticsScript.ts",
        },
      },
    },
    "c2hvcGlmeS9oYW5kbGVycy9zaXRlbWFwLnRz": {
      "title": "Sitemap Proxy",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9oYW5kbGVycy9zaXRlbWFwLnRz@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "shopify/handlers/sitemap.ts",
          ],
          "default": "shopify/handlers/sitemap.ts",
        },
      },
    },
    "d2Vic2l0ZS9oYW5kbGVycy9mcmVzaC50cw==": {
      "title": "Fresh Page",
      "description": "Renders a fresh page.",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9oYW5kbGVycy9mcmVzaC50cw==@FreshConfig",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/handlers/fresh.ts",
          ],
          "default": "website/handlers/fresh.ts",
        },
      },
    },
    "d2Vic2l0ZS9oYW5kbGVycy9wcm94eS50cw==": {
      "title": "Proxy",
      "description": "Proxies request to the target url.",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9oYW5kbGVycy9wcm94eS50cw==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/handlers/proxy.ts",
          ],
          "default": "website/handlers/proxy.ts",
        },
      },
    },
    "d2Vic2l0ZS9oYW5kbGVycy9yZWRpcmVjdC50cw==": {
      "title": "Redirect",
      "description": "Redirect request to another url",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9oYW5kbGVycy9yZWRpcmVjdC50cw==@RedirectConfig",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/handlers/redirect.ts",
          ],
          "default": "website/handlers/redirect.ts",
        },
      },
    },
    "d2Vic2l0ZS9oYW5kbGVycy9yb3V0ZXIudHM=": {
      "title": "Router",
      "description": "Route requests based on audience",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9oYW5kbGVycy9yb3V0ZXIudHM=@SelectionConfig",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/handlers/router.ts",
          ],
          "default": "website/handlers/router.ts",
        },
      },
    },
    "d2Vic2l0ZS9oYW5kbGVycy9zaXRlbWFwLnRz": {
      "title": "Sitemap",
      "description": "Return deco's sitemap.xml",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9oYW5kbGVycy9zaXRlbWFwLnRz@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/handlers/sitemap.ts",
          ],
          "default": "website/handlers/sitemap.ts",
        },
      },
    },
    "d2Vic2l0ZS9wYWdlcy9QYWdlLnRzeA==": {
      "title": "website/pages/Page.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9wYWdlcy9QYWdlLnRzeA==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/pages/Page.tsx",
          ],
          "default": "website/pages/Page.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9BbmltYXRpb24vQW5pbWF0aW9uLnRzeA==": {
      "title": "site/sections/Animation/Animation.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9BbmltYXRpb24vQW5pbWF0aW9uLnRzeA==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Animation/Animation.tsx",
          ],
          "default": "site/sections/Animation/Animation.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9DYXRlZ29yeS9DYXRlZ29yeUJhbm5lci50c3g=": {
      "title": "site/sections/Category/CategoryBanner.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3VpL0NhdGVnb3J5QmFubmVyLnRzeA==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Category/CategoryBanner.tsx",
          ],
          "default": "site/sections/Category/CategoryBanner.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9DYXRlZ29yeS9DYXRlZ29yeUdyaWQudHN4": {
      "title": "site/sections/Category/CategoryGrid.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9DYXRlZ29yeS9DYXRlZ29yeUdyaWQudHN4@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Category/CategoryGrid.tsx",
          ],
          "default": "site/sections/Category/CategoryGrid.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9Db21wb25lbnQudHN4": {
      "title": "site/sections/Component.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db21wb25lbnQudHN4@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Component.tsx",
          ],
          "default": "site/sections/Component.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9Db250ZW50L0ZhcS50c3g=": {
      "title": "site/sections/Content/Faq.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db250ZW50L0ZhcS50c3g=@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Content/Faq.tsx",
          ],
          "default": "site/sections/Content/Faq.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9Db250ZW50L0hlcm8udHN4": {
      "title": "site/sections/Content/Hero.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db250ZW50L0hlcm8udHN4@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Content/Hero.tsx",
          ],
          "default": "site/sections/Content/Hero.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9Db250ZW50L0ludHJvLnRzeA==": {
      "title": "site/sections/Content/Intro.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db250ZW50L0ludHJvLnRzeA==@IntroProps",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Content/Intro.tsx",
          ],
          "default": "site/sections/Content/Intro.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9Db250ZW50L0xvZ29zLnRzeA==": {
      "title": "site/sections/Content/Logos.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Db250ZW50L0xvZ29zLnRzeA==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Content/Logos.tsx",
          ],
          "default": "site/sections/Content/Logos.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9Gb290ZXIvRm9vdGVyLnRzeA==": {
      "title": "site/sections/Footer/Footer.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Gb290ZXIvRm9vdGVyLnRzeA==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Footer/Footer.tsx",
          ],
          "default": "site/sections/Footer/Footer.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9IZWFkZXIvSGVhZGVyLnRzeA==": {
      "title": "site/sections/Header/Header.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9IZWFkZXIvSGVhZGVyLnRzeA==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Header/Header.tsx",
          ],
          "default": "site/sections/Header/Header.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9JbWFnZXMvQmFubmVyLnRzeA==": {
      "title": "site/sections/Images/Banner.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvQmFubmVyLnRzeA==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Images/Banner.tsx",
          ],
          "default": "site/sections/Images/Banner.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9JbWFnZXMvQ2Fyb3VzZWwudHN4": {
      "title": "site/sections/Images/Carousel.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvQ2Fyb3VzZWwudHN4@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Images/Carousel.tsx",
          ],
          "default": "site/sections/Images/Carousel.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9JbWFnZXMvSW1hZ2VHYWxsZXJ5LnRzeA==": {
      "title": "site/sections/Images/ImageGallery.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvSW1hZ2VHYWxsZXJ5LnRzeA==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Images/ImageGallery.tsx",
          ],
          "default": "site/sections/Images/ImageGallery.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==": {
      "title": "site/sections/Images/ShoppableBanner.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Images/ShoppableBanner.tsx",
          ],
          "default": "site/sections/Images/ShoppableBanner.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=": {
      "title": "site/sections/Links/LinkTree.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Links/LinkTree.tsx",
          ],
          "default": "site/sections/Links/LinkTree.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9NaXNjZWxsYW5lb3VzL0NhbXBhaWduVGltZXIudHN4": {
      "title": "site/sections/Miscellaneous/CampaignTimer.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9NaXNjZWxsYW5lb3VzL0NhbXBhaWduVGltZXIudHN4@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Miscellaneous/CampaignTimer.tsx",
          ],
          "default": "site/sections/Miscellaneous/CampaignTimer.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9NaXNjZWxsYW5lb3VzL0Nvb2tpZUNvbnNlbnQudHN4": {
      "title": "site/sections/Miscellaneous/CookieConsent.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9NaXNjZWxsYW5lb3VzL0Nvb2tpZUNvbnNlbnQudHN4@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Miscellaneous/CookieConsent.tsx",
          ],
          "default": "site/sections/Miscellaneous/CookieConsent.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9OZXdzbGV0dGVyL05ld3NsZXR0ZXIudHN4": {
      "title": "site/sections/Newsletter/Newsletter.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9OZXdzbGV0dGVyL05ld3NsZXR0ZXIudHN4@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Newsletter/Newsletter.tsx",
          ],
          "default": "site/sections/Newsletter/Newsletter.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9Qcm9kdWN0L1Byb2R1Y3REZXRhaWxzLnRzeA==": {
      "title": "site/sections/Product/ProductDetails.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Qcm9kdWN0L1Byb2R1Y3REZXRhaWxzLnRzeA==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Product/ProductDetails.tsx",
          ],
          "default": "site/sections/Product/ProductDetails.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9Qcm9kdWN0L1Byb2R1Y3RTaGVsZi50c3g=": {
      "title": "site/sections/Product/ProductShelf.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Qcm9kdWN0L1Byb2R1Y3RTaGVsZi50c3g=@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Product/ProductShelf.tsx",
          ],
          "default": "site/sections/Product/ProductShelf.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9Qcm9kdWN0L1Byb2R1Y3RTaGVsZlRhYmJlZC50c3g=": {
      "title": "site/sections/Product/ProductShelfTabbed.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Qcm9kdWN0L1Byb2R1Y3RTaGVsZlRhYmJlZC50c3g=@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Product/ProductShelfTabbed.tsx",
          ],
          "default": "site/sections/Product/ProductShelfTabbed.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9Qcm9kdWN0L1NlYXJjaFJlc3VsdC50c3g=": {
      "title": "site/sections/Product/SearchResult.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3NlYXJjaC9TZWFyY2hSZXN1bHQudHN4@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Product/SearchResult.tsx",
          ],
          "default": "site/sections/Product/SearchResult.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9Qcm9kdWN0L1NoZWxmV2l0aEltYWdlLnRzeA==": {
      "title": "site/sections/Product/ShelfWithImage.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Qcm9kdWN0L1NoZWxmV2l0aEltYWdlLnRzeA==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Product/ShelfWithImage.tsx",
          ],
          "default": "site/sections/Product/ShelfWithImage.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9Qcm9kdWN0L1dpc2hsaXN0LnRzeA==": {
      "title": "site/sections/Product/Wishlist.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9jb21wb25lbnRzL3dpc2hsaXN0L1dpc2hsaXN0R2FsbGVyeS50c3g=@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Product/Wishlist.tsx",
          ],
          "default": "site/sections/Product/Wishlist.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9TZXNzaW9uLnRzeA==": {
      "title": "site/sections/Session.tsx",
      "type": "object",
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Session.tsx",
          ],
          "default": "site/sections/Session.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9Tb2NpYWwvSW5zdGFncmFtUG9zdHMudHN4": {
      "title": "site/sections/Social/InstagramPosts.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Tb2NpYWwvSW5zdGFncmFtUG9zdHMudHN4@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Social/InstagramPosts.tsx",
          ],
          "default": "site/sections/Social/InstagramPosts.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9Tb2NpYWwvV2hhdHNBcHAudHN4": {
      "title": "site/sections/Social/WhatsApp.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9Tb2NpYWwvV2hhdHNBcHAudHN4@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Social/WhatsApp.tsx",
          ],
          "default": "site/sections/Social/WhatsApp.tsx",
        },
      },
    },
    "c2l0ZS9zZWN0aW9ucy9UaGVtZS9UaGVtZS50c3g=": {
      "title": "site/sections/Theme/Theme.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9zZWN0aW9ucy9UaGVtZS9UaGVtZS50c3g=@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/sections/Theme/Theme.tsx",
          ],
          "default": "site/sections/Theme/Theme.tsx",
        },
      },
    },
    "Y29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BEUC50c3g=": {
      "title": "SeoPDP deprecated",
      "deprecated": true,
      "migrate": "commerce/sections/Seo/SeoPDPV2.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BEUC50c3g=@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "commerce/sections/Seo/SeoPDP.tsx",
          ],
          "default": "commerce/sections/Seo/SeoPDP.tsx",
        },
      },
    },
    "Y29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BEUFYyLnRzeA==": {
      "title": "Product details",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BEUFYyLnRzeA==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "commerce/sections/Seo/SeoPDPV2.tsx",
          ],
          "default": "commerce/sections/Seo/SeoPDPV2.tsx",
        },
      },
    },
    "Y29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BMUC50c3g=": {
      "title": "SeoPLP deprecated",
      "deprecated": true,
      "migrate": "commerce/sections/Seo/SeoPLPV2.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BMUC50c3g=@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "commerce/sections/Seo/SeoPLP.tsx",
          ],
          "default": "commerce/sections/Seo/SeoPLP.tsx",
        },
      },
    },
    "Y29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BMUFYyLnRzeA==": {
      "title": "Product listing",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvY29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BMUFYyLnRzeA==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "commerce/sections/Seo/SeoPLPV2.tsx",
          ],
          "default": "commerce/sections/Seo/SeoPLPV2.tsx",
        },
      },
    },
    "d2Vic2l0ZS9zZWN0aW9ucy9BbmFseXRpY3MvQW5hbHl0aWNzLnRzeA==": {
      "title": "website/sections/Analytics/Analytics.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9jb21wb25lbnRzL0FuYWx5dGljcy50c3g=@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/sections/Analytics/Analytics.tsx",
          ],
          "default": "website/sections/Analytics/Analytics.tsx",
        },
      },
    },
    "d2Vic2l0ZS9zZWN0aW9ucy9SZW5kZXJpbmcvRGVmZXJyZWQudHN4": {
      "title": "website/sections/Rendering/Deferred.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9zZWN0aW9ucy9SZW5kZXJpbmcvRGVmZXJyZWQudHN4@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/sections/Rendering/Deferred.tsx",
          ],
          "default": "website/sections/Rendering/Deferred.tsx",
        },
      },
    },
    "d2Vic2l0ZS9zZWN0aW9ucy9SZW5kZXJpbmcvTGF6eS50c3g=": {
      "title": "website/sections/Rendering/Lazy.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9zZWN0aW9ucy9SZW5kZXJpbmcvTGF6eS50c3g=@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/sections/Rendering/Lazy.tsx",
          ],
          "default": "website/sections/Rendering/Lazy.tsx",
        },
      },
    },
    "d2Vic2l0ZS9zZWN0aW9ucy9SZW5kZXJpbmcvU2luZ2xlRGVmZXJyZWQudHN4": {
      "title": "website/sections/Rendering/SingleDeferred.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9zZWN0aW9ucy9SZW5kZXJpbmcvTGF6eS50c3g=@SectionProps",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/sections/Rendering/SingleDeferred.tsx",
          ],
          "default": "website/sections/Rendering/SingleDeferred.tsx",
        },
      },
    },
    "d2Vic2l0ZS9zZWN0aW9ucy9TZW8vU2VvLnRzeA==": {
      "title": "SEO deprecated",
      "deprecated": true,
      "migrate": "website/sections/Seo/SeoV2.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9zZWN0aW9ucy9TZW8vU2VvLnRzeA==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/sections/Seo/Seo.tsx",
          ],
          "default": "website/sections/Seo/Seo.tsx",
        },
      },
    },
    "d2Vic2l0ZS9zZWN0aW9ucy9TZW8vU2VvVjIudHN4": {
      "title": "website/sections/Seo/SeoV2.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9zZWN0aW9ucy9TZW8vU2VvVjIudHN4@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/sections/Seo/SeoV2.tsx",
          ],
          "default": "website/sections/Seo/SeoV2.tsx",
        },
      },
    },
    "YW5hbHl0aWNzL3NlY3Rpb25zL0FuYWx5dGljcy9EZWNvQW5hbHl0aWNzLnRzeA==": {
      "title": "analytics/sections/Analytics/DecoAnalytics.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYW5hbHl0aWNzL2NvbXBvbmVudHMvRGVjb0FuYWx5dGljcy50c3g=@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "analytics/sections/Analytics/DecoAnalytics.tsx",
          ],
          "default": "analytics/sections/Analytics/DecoAnalytics.tsx",
        },
      },
    },
    "aHRteC9zZWN0aW9ucy9EZWZlcnJlZC50c3g=": {
      "title": "htmx/sections/Deferred.tsx",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvaHRteC9zZWN0aW9ucy9EZWZlcnJlZC50c3g=@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "htmx/sections/Deferred.tsx",
          ],
          "default": "htmx/sections/Deferred.tsx",
        },
      },
    },
    "aHRteC9zZWN0aW9ucy9odG14LnRzeA==": {
      "title": "htmx/sections/htmx.tsx",
      "type": "object",
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "htmx/sections/htmx.tsx",
          ],
          "default": "htmx/sections/htmx.tsx",
        },
      },
    },
    "d2Vic2l0ZS9tYXRjaGVycy9hbHdheXMudHM=": {
      "title": "Always",
      "description": "Target all users",
      "icon": "eye",
      "type": "object",
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/matchers/always.ts",
          ],
          "default": "website/matchers/always.ts",
        },
      },
    },
    "d2Vic2l0ZS9tYXRjaGVycy9jb29raWUudHM=": {
      "title": "Cookie",
      "description": "Target users that have a specific cookie",
      "icon": "cookie",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9jb29raWUudHM=@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/matchers/cookie.ts",
          ],
          "default": "website/matchers/cookie.ts",
        },
      },
    },
    "d2Vic2l0ZS9tYXRjaGVycy9jcm9uLnRz": {
      "title": "Cron",
      "description": "Target users with precision using recurring schedules",
      "icon": "refresh",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9jcm9uLnRz@CronProps",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/matchers/cron.ts",
          ],
          "default": "website/matchers/cron.ts",
        },
      },
    },
    "d2Vic2l0ZS9tYXRjaGVycy9kYXRlLnRz": {
      "title": "Date and Time",
      "description":
        "Target users based on specific dates or date ranges, including specific times",
      "icon": "calendar-event",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9kYXRlLnRz@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/matchers/date.ts",
          ],
          "default": "website/matchers/date.ts",
        },
      },
    },
    "d2Vic2l0ZS9tYXRjaGVycy9kZXZpY2UudHM=": {
      "title": "Device",
      "description":
        "Target users based on their device type, such as desktop, tablet, or mobile",
      "icon": "device-mobile",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9kZXZpY2UudHM=@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/matchers/device.ts",
          ],
          "default": "website/matchers/device.ts",
        },
      },
    },
    "d2Vic2l0ZS9tYXRjaGVycy9lbnZpcm9ubWVudC50cw==": {
      "title": "Environment",
      "description":
        "Target users based from where they are accessing your site (development, testing, or production)",
      "icon": "code",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9lbnZpcm9ubWVudC50cw==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/matchers/environment.ts",
          ],
          "default": "website/matchers/environment.ts",
        },
      },
    },
    "d2Vic2l0ZS9tYXRjaGVycy9ob3N0LnRz": {
      "title": "Host",
      "description":
        "Target users based on the domain or subdomain they are accessing your site from",
      "icon": "world-www",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9ob3N0LnRz@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/matchers/host.ts",
          ],
          "default": "website/matchers/host.ts",
        },
      },
    },
    "d2Vic2l0ZS9tYXRjaGVycy9sb2NhdGlvbi50cw==": {
      "title": "Location",
      "description":
        "Target users based on their geographical location, such as country, city, or region",
      "icon": "map-2",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9sb2NhdGlvbi50cw==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/matchers/location.ts",
          ],
          "default": "website/matchers/location.ts",
        },
      },
    },
    "d2Vic2l0ZS9tYXRjaGVycy9tdWx0aS50cw==": {
      "title": "Multi",
      "description":
        "Create more complex conditions by combining multiple matchers",
      "icon": "plus",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9tdWx0aS50cw==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/matchers/multi.ts",
          ],
          "default": "website/matchers/multi.ts",
        },
      },
    },
    "d2Vic2l0ZS9tYXRjaGVycy9uZWdhdGUudHM=": {
      "title": "Negates",
      "description":
        "Create conditions that target users who do not meet certain criteria",
      "icon": "minus",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9uZWdhdGUudHM=@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/matchers/negate.ts",
          ],
          "default": "website/matchers/negate.ts",
        },
      },
    },
    "d2Vic2l0ZS9tYXRjaGVycy9uZXZlci50cw==": {
      "title": "Never",
      "description": "Hide from all users",
      "icon": "eye-off",
      "type": "object",
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/matchers/never.ts",
          ],
          "default": "website/matchers/never.ts",
        },
      },
    },
    "d2Vic2l0ZS9tYXRjaGVycy9wYXRobmFtZS50cw==": {
      "title": "Pathname",
      "description": "Target users based on the pathname",
      "icon": "world-www",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9wYXRobmFtZS50cw==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/matchers/pathname.ts",
          ],
          "default": "website/matchers/pathname.ts",
        },
      },
    },
    "d2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==": {
      "title": "Query String",
      "description": "Match with a specific querystring",
      "icon": "question-mark",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/matchers/queryString.ts",
          ],
          "default": "website/matchers/queryString.ts",
        },
      },
    },
    "d2Vic2l0ZS9tYXRjaGVycy9yYW5kb20udHM=": {
      "title": "Random",
      "description":
        "Target a percentage of the total traffic to do an A/B test",
      "icon": "arrow-split",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9yYW5kb20udHM=@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/matchers/random.ts",
          ],
          "default": "website/matchers/random.ts",
        },
      },
    },
    "d2Vic2l0ZS9tYXRjaGVycy9zaXRlLnRz": {
      "title": "Site",
      "description": "Target users based on the deco website ID they are on",
      "icon": "hand-click",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy9zaXRlLnRz@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/matchers/site.ts",
          ],
          "default": "website/matchers/site.ts",
        },
      },
    },
    "d2Vic2l0ZS9tYXRjaGVycy91c2VyQWdlbnQudHM=": {
      "title": "User Agent",
      "description":
        "Target users based on their web browser or operational system",
      "icon": "world",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9tYXRjaGVycy91c2VyQWdlbnQudHM=@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/matchers/userAgent.ts",
          ],
          "default": "website/matchers/userAgent.ts",
        },
      },
    },
    "d2Vic2l0ZS9mbGFncy9hdWRpZW5jZS50cw==": {
      "title": "Audience",
      "description": "Select routes based on the matched audience.",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mbGFncy9hdWRpZW5jZS50cw==@Audience",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/flags/audience.ts",
          ],
          "default": "website/flags/audience.ts",
        },
      },
    },
    "d2Vic2l0ZS9mbGFncy9ldmVyeW9uZS50cw==": {
      "title": "Audience Everyone",
      "description": "Always match regardless of the current user",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mbGFncy9ldmVyeW9uZS50cw==@EveryoneConfig",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/flags/everyone.ts",
          ],
          "default": "website/flags/everyone.ts",
        },
      },
    },
    "d2Vic2l0ZS9mbGFncy9mbGFnLnRz": {
      "title": "Flag",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9mbGFncy9mbGFnLnRz@Props+unknown",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/flags/flag.ts",
          ],
          "default": "website/flags/flag.ts",
        },
      },
    },
    "d2Vic2l0ZS9mbGFncy9tdWx0aXZhcmlhdGUudHM=": {
      "title": "Page Variants",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS91dGlscy9tdWx0aXZhcmlhdGUudHM=@MultivariateProps+[Section]",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/flags/multivariate.ts",
          ],
          "default": "website/flags/multivariate.ts",
        },
      },
    },
    "d2Vic2l0ZS9mbGFncy9tdWx0aXZhcmlhdGUvaW1hZ2UudHM=": {
      "title": "Image Variants",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS91dGlscy9tdWx0aXZhcmlhdGUudHM=@MultivariateProps+ImageWidget",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/flags/multivariate/image.ts",
          ],
          "default": "website/flags/multivariate/image.ts",
        },
      },
    },
    "d2Vic2l0ZS9mbGFncy9tdWx0aXZhcmlhdGUvbWVzc2FnZS50cw==": {
      "title": "Message Variants",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS91dGlscy9tdWx0aXZhcmlhdGUudHM=@MultivariateProps+Message",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/flags/multivariate/message.ts",
          ],
          "default": "website/flags/multivariate/message.ts",
        },
      },
    },
    "d2Vic2l0ZS9mbGFncy9tdWx0aXZhcmlhdGUvcGFnZS50cw==": {
      "title": "Page Variants",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS91dGlscy9tdWx0aXZhcmlhdGUudHM=@MultivariateProps+[Section]",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/flags/multivariate/page.ts",
          ],
          "default": "website/flags/multivariate/page.ts",
        },
      },
    },
    "d2Vic2l0ZS9mbGFncy9tdWx0aXZhcmlhdGUvc2VjdGlvbi50cw==": {
      "title": "Section Variants",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS91dGlscy9tdWx0aXZhcmlhdGUudHM=@MultivariateProps+Section",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/flags/multivariate/section.ts",
          ],
          "default": "website/flags/multivariate/section.ts",
        },
      },
    },
    "c2hvcGlmeS9hY3Rpb25zL2NhcnQvYWRkSXRlbXMudHM=": {
      "title": "shopify/actions/cart/addItems.ts",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL2NhcnQvYWRkSXRlbXMudHM=@UpdateLineProps",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "shopify/actions/cart/addItems.ts",
          ],
          "default": "shopify/actions/cart/addItems.ts",
        },
      },
    },
    "c2hvcGlmeS9hY3Rpb25zL2NhcnQvdXBkYXRlQ291cG9ucy50cw==": {
      "title": "shopify/actions/cart/updateCoupons.ts",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL2NhcnQvdXBkYXRlQ291cG9ucy50cw==@AddCouponProps",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "shopify/actions/cart/updateCoupons.ts",
          ],
          "default": "shopify/actions/cart/updateCoupons.ts",
        },
      },
    },
    "c2hvcGlmeS9hY3Rpb25zL2NhcnQvdXBkYXRlSXRlbXMudHM=": {
      "title": "shopify/actions/cart/updateItems.ts",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL2NhcnQvdXBkYXRlSXRlbXMudHM=@UpdateLineProps",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "shopify/actions/cart/updateItems.ts",
          ],
          "default": "shopify/actions/cart/updateItems.ts",
        },
      },
    },
    "c2hvcGlmeS9hY3Rpb25zL29yZGVyL2RyYWZ0T3JkZXJDYWxjdWxhdGUudHM=": {
      "title": "shopify/actions/order/draftOrderCalculate.ts",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9hY3Rpb25zL29yZGVyL2RyYWZ0T3JkZXJDYWxjdWxhdGUudHM=@DraftOrderCalculateProps",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "shopify/actions/order/draftOrderCalculate.ts",
          ],
          "default": "shopify/actions/order/draftOrderCalculate.ts",
        },
      },
    },
    "c2l0ZS9hY3Rpb25zL21pbmljYXJ0L3N1Ym1pdC50cw==": {
      "title": "site/actions/minicart/submit.ts",
      "type": "object",
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/actions/minicart/submit.ts",
          ],
          "default": "site/actions/minicart/submit.ts",
        },
      },
    },
    "c2l0ZS9hY3Rpb25zL3dpc2hsaXN0L3N1Ym1pdC50cw==": {
      "title": "site/actions/wishlist/submit.ts",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9hY3Rpb25zL3dpc2hsaXN0L3N1Ym1pdC50cw==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/actions/wishlist/submit.ts",
          ],
          "default": "site/actions/wishlist/submit.ts",
        },
      },
    },
    "d2Vic2l0ZS9hY3Rpb25zL3NlY3JldHMvZW5jcnlwdC50cw==": {
      "title": "website/actions/secrets/encrypt.ts",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvd2Vic2l0ZS9hY3Rpb25zL3NlY3JldHMvZW5jcnlwdC50cw==@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "website/actions/secrets/encrypt.ts",
          ],
          "default": "website/actions/secrets/encrypt.ts",
        },
      },
    },
    "c2l0ZS9hcHBzL2RlY28vYW5hbHl0aWNzLnRz": {
      "title": "Deco Analytics",
      "description":
        "Measure your site traffic at a glance in a simple and modern web analytics dashboard.",
      "category": "Analytics",
      "logo":
        "https://raw.githubusercontent.com/deco-cx/apps/main/analytics/logo.png",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvYW5hbHl0aWNzL21vZC50cw==@State",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/apps/deco/analytics.ts",
          ],
          "default": "site/apps/deco/analytics.ts",
        },
      },
    },
    "c2l0ZS9hcHBzL2RlY28vaHRteC50cw==": {
      "title": "HTMX",
      "description": "high power tools for HTML.",
      "category": "Frameworks",
      "logo":
        "https://raw.githubusercontent.com/deco-cx/apps/main/htmx/logo.png",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvaHRteC9tb2QudHM=@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/apps/deco/htmx.ts",
          ],
          "default": "site/apps/deco/htmx.ts",
        },
      },
    },
    "c2l0ZS9hcHBzL2RlY28vc2hvcGlmeS50cw==": {
      "title": "Shopify",
      "description":
        "Loaders, actions and workflows for adding Shopify Commerce Platform to your website.",
      "category": "Ecommmerce",
      "logo":
        "https://raw.githubusercontent.com/deco-cx/apps/main/shopify/logo.png",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2RlY28tY3gvYXBwc0AwLjU5LjMvc2hvcGlmeS9tb2QudHM=@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/apps/deco/shopify.ts",
          ],
          "default": "site/apps/deco/shopify.ts",
        },
      },
    },
    "c2l0ZS9hcHBzL3NpdGUudHM=": {
      "title": "Site",
      "description": "Start your site from a template or from scratch.",
      "category": "Tool",
      "logo":
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1/0ac02239-61e6-4289-8a36-e78c0975bcc8",
      "type": "object",
      "allOf": [
        {
          "$ref":
            "#/definitions/ZmlsZTovLy9hcHAvZGVjby9hcHBzL3NpdGUudHM=@Props",
        },
      ],
      "required": [
        "__resolveType",
      ],
      "properties": {
        "__resolveType": {
          "type": "string",
          "enum": [
            "site/apps/site.ts",
          ],
          "default": "site/apps/site.ts",
        },
      },
    },
  },
  "root": {
    "loaders": {
      "title": "loaders",
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable",
        },
        {
          "$ref": "#/definitions/c2hvcGlmeS9sb2FkZXJzL2NhcnQudHM=",
        },
        {
          "$ref":
            "#/definitions/c2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3REZXRhaWxzUGFnZS50cw==",
        },
        {
          "$ref": "#/definitions/c2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3RMaXN0LnRz",
        },
        {
          "$ref":
            "#/definitions/c2hvcGlmeS9sb2FkZXJzL1Byb2R1Y3RMaXN0aW5nUGFnZS50cw==",
        },
        {
          "$ref": "#/definitions/c2hvcGlmeS9sb2FkZXJzL3Byb3h5LnRz",
        },
        {
          "$ref":
            "#/definitions/c2hvcGlmeS9sb2FkZXJzL1JlbGF0ZWRQcm9kdWN0cy50cw==",
        },
        {
          "$ref": "#/definitions/c2l0ZS9sb2FkZXJzL2F2YWlsYWJsZUljb25zLnRz",
        },
        {
          "$ref": "#/definitions/c2l0ZS9sb2FkZXJzL2ljb25zLnRz",
        },
        {
          "$ref": "#/definitions/c2l0ZS9sb2FkZXJzL21pbmljYXJ0LnRz",
        },
        {
          "$ref": "#/definitions/c2l0ZS9sb2FkZXJzL3VzZXIudHM=",
        },
        {
          "$ref": "#/definitions/c2l0ZS9sb2FkZXJzL3dpc2hsaXN0LnRz",
        },
        {
          "$ref":
            "#/definitions/Y29tbWVyY2UvbG9hZGVycy9leHRlbnNpb25zL3Byb2R1Y3REZXRhaWxzUGFnZS50cw==",
        },
        {
          "$ref":
            "#/definitions/Y29tbWVyY2UvbG9hZGVycy9leHRlbnNpb25zL3Byb2R1Y3RMaXN0aW5nUGFnZS50cw==",
        },
        {
          "$ref":
            "#/definitions/Y29tbWVyY2UvbG9hZGVycy9leHRlbnNpb25zL3Byb2R1Y3RzLnRz",
        },
        {
          "$ref": "#/definitions/Y29tbWVyY2UvbG9hZGVycy9uYXZiYXIudHM=",
        },
        {
          "$ref":
            "#/definitions/Y29tbWVyY2UvbG9hZGVycy9wcm9kdWN0L2V4dGVuc2lvbnMvZGV0YWlsc1BhZ2UudHM=",
        },
        {
          "$ref":
            "#/definitions/Y29tbWVyY2UvbG9hZGVycy9wcm9kdWN0L2V4dGVuc2lvbnMvbGlzdC50cw==",
        },
        {
          "$ref":
            "#/definitions/Y29tbWVyY2UvbG9hZGVycy9wcm9kdWN0L2V4dGVuc2lvbnMvbGlzdGluZ1BhZ2UudHM=",
        },
        {
          "$ref":
            "#/definitions/Y29tbWVyY2UvbG9hZGVycy9wcm9kdWN0L2V4dGVuc2lvbnMvc3VnZ2VzdGlvbnMudHM=",
        },
        {
          "$ref":
            "#/definitions/Y29tbWVyY2UvbG9hZGVycy9wcm9kdWN0L3Byb2R1Y3RMaXN0aW5nUGFnZS50cw==",
        },
        {
          "$ref":
            "#/definitions/Y29tbWVyY2UvbG9hZGVycy9wcm9kdWN0L3Byb2R1Y3RzLnRz",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9sb2FkZXJzL2Fzc2V0LnRz",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9sb2FkZXJzL2V4dGVuc2lvbi50cw==",
        },
        {
          "$ref":
            "#/definitions/d2Vic2l0ZS9sb2FkZXJzL2ZvbnRzL2dvb2dsZUZvbnRzLnRz",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9sb2FkZXJzL2ZvbnRzL2xvY2FsLnRz",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9sb2FkZXJzL2ltYWdlLnRz",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9sb2FkZXJzL29wdGlvbnMvcm91dGVzLnRz",
        },
        {
          "$ref":
            "#/definitions/d2Vic2l0ZS9sb2FkZXJzL29wdGlvbnMvdXJsUGFyYW1zLnRz",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9sb2FkZXJzL3BhZ2VzLnRz",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9sb2FkZXJzL3JlZGlyZWN0LnRz",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9sb2FkZXJzL3JlZGlyZWN0cy50cw==",
        },
        {
          "$ref":
            "#/definitions/d2Vic2l0ZS9sb2FkZXJzL3JlZGlyZWN0c0Zyb21Dc3YudHM=",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9sb2FkZXJzL3NlY3JldC50cw==",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9sb2FkZXJzL3NlY3JldFN0cmluZy50cw==",
        },
        {
          "$ref":
            "#/definitions/YW5hbHl0aWNzL2xvYWRlcnMvRGVjb0FuYWx5dGljc1NjcmlwdC50cw==",
        },
      ],
    },
    "functions": {
      "title": "functions",
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable",
        },
        {
          "$ref":
            "#/definitions/d2Vic2l0ZS9mdW5jdGlvbnMvcmVxdWVzdFRvUGFyYW0udHM=",
        },
      ],
    },
    "flags": {
      "title": "flags",
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9mbGFncy9hdWRpZW5jZS50cw==",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9mbGFncy9ldmVyeW9uZS50cw==",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9mbGFncy9mbGFnLnRz",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9mbGFncy9tdWx0aXZhcmlhdGUudHM=",
        },
        {
          "$ref":
            "#/definitions/d2Vic2l0ZS9mbGFncy9tdWx0aXZhcmlhdGUvaW1hZ2UudHM=",
        },
        {
          "$ref":
            "#/definitions/d2Vic2l0ZS9mbGFncy9tdWx0aXZhcmlhdGUvbWVzc2FnZS50cw==",
        },
        {
          "$ref":
            "#/definitions/d2Vic2l0ZS9mbGFncy9tdWx0aXZhcmlhdGUvcGFnZS50cw==",
        },
        {
          "$ref":
            "#/definitions/d2Vic2l0ZS9mbGFncy9tdWx0aXZhcmlhdGUvc2VjdGlvbi50cw==",
        },
      ],
    },
    "accounts": {
      "title": "accounts",
      "anyOf": [],
    },
    "handlers": {
      "title": "handlers",
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable",
        },
        {
          "$ref": "#/definitions/c2hvcGlmeS9oYW5kbGVycy9zaXRlbWFwLnRz",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9oYW5kbGVycy9mcmVzaC50cw==",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9oYW5kbGVycy9wcm94eS50cw==",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9oYW5kbGVycy9yZWRpcmVjdC50cw==",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9oYW5kbGVycy9yb3V0ZXIudHM=",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9oYW5kbGVycy9zaXRlbWFwLnRz",
        },
      ],
    },
    "pages": {
      "title": "pages",
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9wYWdlcy9QYWdlLnRzeA==",
        },
        {
          "title": "#website/pages/Page.tsx@pages-Category%20Page-69217",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "pages-Category%20Page-69217",
              ],
              "default": "pages-Category%20Page-69217",
            },
          },
        },
        {
          "title":
            "#website/pages/Page.tsx@pages-Landing%20Page%20(Accessories)-260333",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "pages-Landing%20Page%20(Accessories)-260333",
              ],
              "default": "pages-Landing%20Page%20(Accessories)-260333",
            },
          },
        },
        {
          "title":
            "#website/pages/Page.tsx@pages-Landing%20Page%20(Home%20%26%20Living)-726977",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "pages-Landing%20Page%20(Home%20%26%20Living)-726977",
              ],
              "default": "pages-Landing%20Page%20(Home%20%26%20Living)-726977",
            },
          },
        },
        {
          "title":
            "#website/pages/Page.tsx@pages-Landing%20Page%20(Kids)-181633",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "pages-Landing%20Page%20(Kids)-181633",
              ],
              "default": "pages-Landing%20Page%20(Kids)-181633",
            },
          },
        },
        {
          "title":
            "#website/pages/Page.tsx@pages-Landing%20Page%20(Men)-177306",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "pages-Landing%20Page%20(Men)-177306",
              ],
              "default": "pages-Landing%20Page%20(Men)-177306",
            },
          },
        },
        {
          "title":
            "#website/pages/Page.tsx@pages-Landing%20Page%20(Woman)-585575",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "pages-Landing%20Page%20(Woman)-585575",
              ],
              "default": "pages-Landing%20Page%20(Woman)-585575",
            },
          },
        },
        {
          "title": "#website/pages/Page.tsx@pages-Search%20Page-514254",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "pages-Search%20Page-514254",
              ],
              "default": "pages-Search%20Page-514254",
            },
          },
        },
        {
          "title": "#website/pages/Page.tsx@pages-home-c4bcbfb771e9",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "pages-home-c4bcbfb771e9",
              ],
              "default": "pages-home-c4bcbfb771e9",
            },
          },
        },
        {
          "title": "#website/pages/Page.tsx@pages-offline-b9c52de8c7b3",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "pages-offline-b9c52de8c7b3",
              ],
              "default": "pages-offline-b9c52de8c7b3",
            },
          },
        },
        {
          "title": "#website/pages/Page.tsx@pages-productpage-ce4850591828",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "pages-productpage-ce4850591828",
              ],
              "default": "pages-productpage-ce4850591828",
            },
          },
        },
      ],
    },
    "sections": {
      "title": "sections",
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable",
        },
        {
          "$ref":
            "#/definitions/c2l0ZS9zZWN0aW9ucy9BbmltYXRpb24vQW5pbWF0aW9uLnRzeA==",
        },
        {
          "$ref":
            "#/definitions/c2l0ZS9zZWN0aW9ucy9DYXRlZ29yeS9DYXRlZ29yeUJhbm5lci50c3g=",
        },
        {
          "$ref":
            "#/definitions/c2l0ZS9zZWN0aW9ucy9DYXRlZ29yeS9DYXRlZ29yeUdyaWQudHN4",
        },
        {
          "$ref": "#/definitions/c2l0ZS9zZWN0aW9ucy9Db21wb25lbnQudHN4",
        },
        {
          "$ref": "#/definitions/c2l0ZS9zZWN0aW9ucy9Db250ZW50L0ZhcS50c3g=",
        },
        {
          "$ref": "#/definitions/c2l0ZS9zZWN0aW9ucy9Db250ZW50L0hlcm8udHN4",
        },
        {
          "$ref": "#/definitions/c2l0ZS9zZWN0aW9ucy9Db250ZW50L0ludHJvLnRzeA==",
        },
        {
          "$ref": "#/definitions/c2l0ZS9zZWN0aW9ucy9Db250ZW50L0xvZ29zLnRzeA==",
        },
        {
          "$ref": "#/definitions/c2l0ZS9zZWN0aW9ucy9Gb290ZXIvRm9vdGVyLnRzeA==",
        },
        {
          "$ref": "#/definitions/c2l0ZS9zZWN0aW9ucy9IZWFkZXIvSGVhZGVyLnRzeA==",
        },
        {
          "$ref": "#/definitions/c2l0ZS9zZWN0aW9ucy9JbWFnZXMvQmFubmVyLnRzeA==",
        },
        {
          "$ref": "#/definitions/c2l0ZS9zZWN0aW9ucy9JbWFnZXMvQ2Fyb3VzZWwudHN4",
        },
        {
          "$ref":
            "#/definitions/c2l0ZS9zZWN0aW9ucy9JbWFnZXMvSW1hZ2VHYWxsZXJ5LnRzeA==",
        },
        {
          "$ref":
            "#/definitions/c2l0ZS9zZWN0aW9ucy9JbWFnZXMvU2hvcHBhYmxlQmFubmVyLnRzeA==",
        },
        {
          "$ref": "#/definitions/c2l0ZS9zZWN0aW9ucy9MaW5rcy9MaW5rVHJlZS50c3g=",
        },
        {
          "$ref":
            "#/definitions/c2l0ZS9zZWN0aW9ucy9NaXNjZWxsYW5lb3VzL0NhbXBhaWduVGltZXIudHN4",
        },
        {
          "$ref":
            "#/definitions/c2l0ZS9zZWN0aW9ucy9NaXNjZWxsYW5lb3VzL0Nvb2tpZUNvbnNlbnQudHN4",
        },
        {
          "$ref":
            "#/definitions/c2l0ZS9zZWN0aW9ucy9OZXdzbGV0dGVyL05ld3NsZXR0ZXIudHN4",
        },
        {
          "$ref":
            "#/definitions/c2l0ZS9zZWN0aW9ucy9Qcm9kdWN0L1Byb2R1Y3REZXRhaWxzLnRzeA==",
        },
        {
          "$ref":
            "#/definitions/c2l0ZS9zZWN0aW9ucy9Qcm9kdWN0L1Byb2R1Y3RTaGVsZi50c3g=",
        },
        {
          "$ref":
            "#/definitions/c2l0ZS9zZWN0aW9ucy9Qcm9kdWN0L1Byb2R1Y3RTaGVsZlRhYmJlZC50c3g=",
        },
        {
          "$ref":
            "#/definitions/c2l0ZS9zZWN0aW9ucy9Qcm9kdWN0L1NlYXJjaFJlc3VsdC50c3g=",
        },
        {
          "$ref":
            "#/definitions/c2l0ZS9zZWN0aW9ucy9Qcm9kdWN0L1NoZWxmV2l0aEltYWdlLnRzeA==",
        },
        {
          "$ref":
            "#/definitions/c2l0ZS9zZWN0aW9ucy9Qcm9kdWN0L1dpc2hsaXN0LnRzeA==",
        },
        {
          "$ref": "#/definitions/c2l0ZS9zZWN0aW9ucy9TZXNzaW9uLnRzeA==",
        },
        {
          "$ref":
            "#/definitions/c2l0ZS9zZWN0aW9ucy9Tb2NpYWwvSW5zdGFncmFtUG9zdHMudHN4",
        },
        {
          "$ref": "#/definitions/c2l0ZS9zZWN0aW9ucy9Tb2NpYWwvV2hhdHNBcHAudHN4",
        },
        {
          "$ref": "#/definitions/c2l0ZS9zZWN0aW9ucy9UaGVtZS9UaGVtZS50c3g=",
        },
        {
          "$ref": "#/definitions/Y29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BEUC50c3g=",
        },
        {
          "$ref":
            "#/definitions/Y29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BEUFYyLnRzeA==",
        },
        {
          "$ref": "#/definitions/Y29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BMUC50c3g=",
        },
        {
          "$ref":
            "#/definitions/Y29tbWVyY2Uvc2VjdGlvbnMvU2VvL1Nlb1BMUFYyLnRzeA==",
        },
        {
          "$ref":
            "#/definitions/d2Vic2l0ZS9zZWN0aW9ucy9BbmFseXRpY3MvQW5hbHl0aWNzLnRzeA==",
        },
        {
          "$ref":
            "#/definitions/d2Vic2l0ZS9zZWN0aW9ucy9SZW5kZXJpbmcvRGVmZXJyZWQudHN4",
        },
        {
          "$ref":
            "#/definitions/d2Vic2l0ZS9zZWN0aW9ucy9SZW5kZXJpbmcvTGF6eS50c3g=",
        },
        {
          "$ref":
            "#/definitions/d2Vic2l0ZS9zZWN0aW9ucy9SZW5kZXJpbmcvU2luZ2xlRGVmZXJyZWQudHN4",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9zZWN0aW9ucy9TZW8vU2VvLnRzeA==",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9zZWN0aW9ucy9TZW8vU2VvVjIudHN4",
        },
        {
          "$ref":
            "#/definitions/YW5hbHl0aWNzL3NlY3Rpb25zL0FuYWx5dGljcy9EZWNvQW5hbHl0aWNzLnRzeA==",
        },
        {
          "$ref": "#/definitions/aHRteC9zZWN0aW9ucy9EZWZlcnJlZC50c3g=",
        },
        {
          "$ref": "#/definitions/aHRteC9zZWN0aW9ucy9odG14LnRzeA==",
        },
        {
          "title":
            "#site/sections/Miscellaneous/CampaignTimer.tsx@Campaign Timer - 01",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Campaign Timer - 01",
              ],
              "default": "Campaign Timer - 01",
            },
          },
        },
        {
          "title":
            "#site/sections/Miscellaneous/CampaignTimer.tsx@Campaign Timer - 02",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Campaign Timer - 02",
              ],
              "default": "Campaign Timer - 02",
            },
          },
        },
        {
          "title":
            "#site/sections/Category/CategoryBanner.tsx@Category Banner - 01",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Category Banner - 01",
              ],
              "default": "Category Banner - 01",
            },
          },
        },
        {
          "title":
            "#site/sections/Miscellaneous/CookieConsent.tsx@Cookie Consent - 01",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Cookie Consent - 01",
              ],
              "default": "Cookie Consent - 01",
            },
          },
        },
        {
          "title":
            "#site/sections/Miscellaneous/CookieConsent.tsx@Cookie Consent - 02",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Cookie Consent - 02",
              ],
              "default": "Cookie Consent - 02",
            },
          },
        },
        {
          "title":
            "#site/sections/Miscellaneous/CookieConsent.tsx@Cookie Consent - 03",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Cookie Consent - 03",
              ],
              "default": "Cookie Consent - 03",
            },
          },
        },
        {
          "title": "#site/sections/Theme/Theme.tsx@Deco",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Deco",
              ],
              "default": "Deco",
            },
          },
        },
        {
          "title": "#site/sections/Content/Faq.tsx@FAQ - 01",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "FAQ - 01",
              ],
              "default": "FAQ - 01",
            },
          },
        },
        {
          "title": "#site/sections/Content/Faq.tsx@FAQ - 02",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "FAQ - 02",
              ],
              "default": "FAQ - 02",
            },
          },
        },
        {
          "title": "#site/sections/Content/Faq.tsx@FAQ - 03",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "FAQ - 03",
              ],
              "default": "FAQ - 03",
            },
          },
        },
        {
          "title": "#site/sections/Footer/Footer.tsx@Footer",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Footer",
              ],
              "default": "Footer",
            },
          },
        },
        {
          "title": "#site/sections/Theme/Theme.tsx@Fun",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Fun",
              ],
              "default": "Fun",
            },
          },
        },
        {
          "title": "#site/sections/Theme/Theme.tsx@Groovy Vibes",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Groovy Vibes",
              ],
              "default": "Groovy Vibes",
            },
          },
        },
        {
          "title": "#site/sections/Theme/Theme.tsx@Halloween",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Halloween",
              ],
              "default": "Halloween",
            },
          },
        },
        {
          "title": "#site/sections/Header/Header.tsx@Header",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Header",
              ],
              "default": "Header",
            },
          },
        },
        {
          "title": "#site/sections/Theme/Theme.tsx@Lemonade",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Lemonade",
              ],
              "default": "Lemonade",
            },
          },
        },
        {
          "title": "#site/sections/Links/LinkTree.tsx@LinkTree - 01",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "LinkTree - 01",
              ],
              "default": "LinkTree - 01",
            },
          },
        },
        {
          "title": "#site/sections/Theme/Theme.tsx@Neutral",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Neutral",
              ],
              "default": "Neutral",
            },
          },
        },
        {
          "title":
            "#site/sections/Category/CategoryGrid.tsx@Preview /sections/Category/CategoryGrid.tsx",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Preview /sections/Category/CategoryGrid.tsx",
              ],
              "default": "Preview /sections/Category/CategoryGrid.tsx",
            },
          },
        },
        {
          "title":
            "#site/sections/Images/Carousel.tsx@Preview /sections/Images/Carousel.tsx",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Preview /sections/Images/Carousel.tsx",
              ],
              "default": "Preview /sections/Images/Carousel.tsx",
            },
          },
        },
        {
          "title":
            "#site/sections/Images/ImageGallery.tsx@Preview /sections/Images/ImageGallery.tsx",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Preview /sections/Images/ImageGallery.tsx",
              ],
              "default": "Preview /sections/Images/ImageGallery.tsx",
            },
          },
        },
        {
          "title":
            "#site/sections/Miscellaneous/CampaignTimer.tsx@Preview /sections/Miscellaneous/CampaignTimer.tsx",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Preview /sections/Miscellaneous/CampaignTimer.tsx",
              ],
              "default": "Preview /sections/Miscellaneous/CampaignTimer.tsx",
            },
          },
        },
        {
          "title":
            "#site/sections/Product/ProductDetails.tsx@Preview /sections/Product/ProductDetails.tsx",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Preview /sections/Product/ProductDetails.tsx",
              ],
              "default": "Preview /sections/Product/ProductDetails.tsx",
            },
          },
        },
        {
          "title":
            "#site/sections/Animation/Animation.tsx@Preview site/sections/Animation/Animation.tsx",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Preview site/sections/Animation/Animation.tsx",
              ],
              "default": "Preview site/sections/Animation/Animation.tsx",
            },
          },
        },
        {
          "title": "#site/sections/Theme/Theme.tsx@Serene Coastline",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Serene Coastline",
              ],
              "default": "Serene Coastline",
            },
          },
        },
        {
          "title":
            "#site/sections/Images/ShoppableBanner.tsx@Shoppable Banner - 01",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Shoppable Banner - 01",
              ],
              "default": "Shoppable Banner - 01",
            },
          },
        },
        {
          "title": "#site/sections/Theme/Theme.tsx@Sunset Glow",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Sunset Glow",
              ],
              "default": "Sunset Glow",
            },
          },
        },
        {
          "title": "#site/sections/Theme/Theme.tsx@Urban Chic",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Urban Chic",
              ],
              "default": "Urban Chic",
            },
          },
        },
      ],
    },
    "matchers": {
      "title": "matchers",
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9tYXRjaGVycy9hbHdheXMudHM=",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9tYXRjaGVycy9jb29raWUudHM=",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9tYXRjaGVycy9jcm9uLnRz",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9tYXRjaGVycy9kYXRlLnRz",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9tYXRjaGVycy9kZXZpY2UudHM=",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9tYXRjaGVycy9lbnZpcm9ubWVudC50cw==",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9tYXRjaGVycy9ob3N0LnRz",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9tYXRjaGVycy9sb2NhdGlvbi50cw==",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9tYXRjaGVycy9tdWx0aS50cw==",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9tYXRjaGVycy9uZWdhdGUudHM=",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9tYXRjaGVycy9uZXZlci50cw==",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9tYXRjaGVycy9wYXRobmFtZS50cw==",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9tYXRjaGVycy9xdWVyeVN0cmluZy50cw==",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9tYXRjaGVycy9yYW5kb20udHM=",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9tYXRjaGVycy9zaXRlLnRz",
        },
        {
          "$ref": "#/definitions/d2Vic2l0ZS9tYXRjaGVycy91c2VyQWdlbnQudHM=",
        },
        {
          "title": "#website/matchers/device.ts@Desktop",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Desktop",
              ],
              "default": "Desktop",
            },
          },
        },
        {
          "title": "#website/matchers/device.ts@Mobile",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Mobile",
              ],
              "default": "Mobile",
            },
          },
        },
        {
          "title": "#website/matchers/random.ts@Teste AB",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "Teste AB",
              ],
              "default": "Teste AB",
            },
          },
        },
      ],
    },
    "actions": {
      "title": "actions",
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable",
        },
        {
          "$ref": "#/definitions/c2hvcGlmeS9hY3Rpb25zL2NhcnQvYWRkSXRlbXMudHM=",
        },
        {
          "$ref":
            "#/definitions/c2hvcGlmeS9hY3Rpb25zL2NhcnQvdXBkYXRlQ291cG9ucy50cw==",
        },
        {
          "$ref":
            "#/definitions/c2hvcGlmeS9hY3Rpb25zL2NhcnQvdXBkYXRlSXRlbXMudHM=",
        },
        {
          "$ref":
            "#/definitions/c2hvcGlmeS9hY3Rpb25zL29yZGVyL2RyYWZ0T3JkZXJDYWxjdWxhdGUudHM=",
        },
        {
          "$ref": "#/definitions/c2l0ZS9hY3Rpb25zL21pbmljYXJ0L3N1Ym1pdC50cw==",
        },
        {
          "$ref": "#/definitions/c2l0ZS9hY3Rpb25zL3dpc2hsaXN0L3N1Ym1pdC50cw==",
        },
        {
          "$ref":
            "#/definitions/d2Vic2l0ZS9hY3Rpb25zL3NlY3JldHMvZW5jcnlwdC50cw==",
        },
      ],
    },
    "workflows": {
      "title": "workflows",
      "anyOf": [],
    },
    "apps": {
      "title": "apps",
      "anyOf": [
        {
          "$ref": "#/definitions/Resolvable",
        },
        {
          "$ref": "#/definitions/c2l0ZS9hcHBzL2RlY28vYW5hbHl0aWNzLnRz",
        },
        {
          "$ref": "#/definitions/c2l0ZS9hcHBzL2RlY28vaHRteC50cw==",
        },
        {
          "$ref": "#/definitions/c2l0ZS9hcHBzL2RlY28vc2hvcGlmeS50cw==",
        },
        {
          "$ref": "#/definitions/c2l0ZS9hcHBzL3NpdGUudHM=",
        },
        {
          "title": "#site/apps/deco/analytics.ts@deco-analytics",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-analytics",
              ],
              "default": "deco-analytics",
            },
          },
        },
        {
          "title": "#site/apps/deco/htmx.ts@deco-htmx",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-htmx",
              ],
              "default": "deco-htmx",
            },
          },
        },
        {
          "title": "#site/apps/deco/shopify.ts@deco-shopify",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "deco-shopify",
              ],
              "default": "deco-shopify",
            },
          },
        },
        {
          "title": "#site/apps/site.ts@site",
          "type": "object",
          "required": [
            "__resolveType",
          ],
          "properties": {
            "__resolveType": {
              "type": "string",
              "enum": [
                "site",
              ],
              "default": "site",
            },
          },
        },
      ],
    },
    "entrypoint": {
      "type": "object",
      "required": [],
      "properties": {},
      "anyOf": [],
    },
    "state": {
      "allOf": [
        {
          "$ref": "#/root/entrypoint",
        },
      ],
      "additionalProperties": {
        "anyOf": [
          {
            "$ref": "#/root/functions",
          },
          {
            "$ref": "#/root/accounts",
          },
          {
            "$ref": "#/root/loaders",
          },
          {
            "$ref": "#/root/handlers",
          },
          {
            "$ref": "#/root/pages",
          },
          {
            "$ref": "#/root/sections",
          },
          {
            "$ref": "#/root/matchers",
          },
          {
            "$ref": "#/root/flags",
          },
          {
            "$ref": "#/root/actions",
          },
          {
            "$ref": "#/root/workflows",
          },
          {
            "$ref": "#/root/apps",
          },
        ],
      },
      "anyOf": [],
    },
  },
};

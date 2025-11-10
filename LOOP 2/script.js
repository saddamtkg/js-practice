// Car Data
let cars = [
    { name: "BMW", price: 5500000, available: true, image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Volvo", price: 4800000, available: false, image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Audi", price: 6200000, available: true, image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Toyota", price: 3500000, available: true, image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Ford", price: 4000000, available: false, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Mercedes", price: 7200000, available: true, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Honda", price: 3000000, available: true, image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Hyundai", price: 2800000, available: false, image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Kia", price: 3200000, available: true, image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
];

// Select HTML container
let carContainer = document.getElementById("carList");

// Loop through cars and create cards
cars.forEach((car) => {
    let card = document.createElement("div");
    card.classList.add("car-card");

    // Create image element
    let carImage = document.createElement("img");
    carImage.src = car.image;
    carImage.alt = car.name + " car";
    carImage.classList.add("car-image");
    // Add error handling for images
    carImage.onerror = function() {
        this.src = "https://via.placeholder.com/600x300/cccccc/666666?text=" + car.name;
    };

    let name = document.createElement("div");
    name.classList.add("car-name");
    name.innerText = car.name;

    let price = document.createElement("div");
    price.classList.add("car-price");
    price.innerText = `৳${car.price.toLocaleString()}`;

    let status = document.createElement("div");
    status.innerText = car.available ? "Available ✅" : "Not Available ❌";
    status.classList.add(car.available ? "available" : "not-available");

    // Append all info to card
    card.appendChild(carImage);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(status);

    // Add card to main container
    carContainer.appendChild(card);
});


/**
 * Modern Gallery System - Single Flexible Slider
 * One function that adapts to data attributes
 */

(function () {
    "use strict";
  
    if (typeof jQuery === "undefined") {
      console.error("jQuery is required but not loaded");
      return;
    }
  
    jQuery(function ($) {
      function initGallery() {
        $(".c-feature-image-slider-column").each(function () {
          var $column = $(this);
  
          // Skip if already initialized
          if ($column.data("gallery-initialized")) {
            return;
          }
  
          // READ DATA ATTRIBUTES (with defaults)
          var showFeature = $column.attr("data-show-feature") !== "false";
          var showThumbnails = $column.attr("data-show-thumbnails") !== "false";
          var enableLightbox = $column.attr("data-enable-lightbox") !== "false";
          var autoplay = $column.attr("data-autoplay") !== "false";
          var autoplaySpeed =
            parseInt($column.attr("data-autoplay-speed")) || 3500;
  
          // Extract car data - check for car-card OR et_pb_module
          var carData = [];
          
          // Try car-card first (for car showroom)
          $column.find(".car-card").each(function () {
            var $card = $(this);
            var $img = $card.find("img").first();
            if ($img.length) {
              var $name = $card.find(".car-name");
              var $price = $card.find(".car-price");
              var $status = $card.find(".available, .not-available");
              
              carData.push({
                src: $img.attr("src"),
                alt: $img.attr("alt") || "",
                name: $name.length ? $name.text() : "",
                price: $price.length ? $price.text() : "",
                status: $status.length ? $status.text() : "",
                statusClass: $status.hasClass("available") ? "available" : "not-available"
              });
            }
          });
          
          // If no car cards found, try et_pb_module (for other uses)
          if (!carData.length) {
            $column.find(".et_pb_module").each(function () {
              var $img = $(this).find("img").first();
              if ($img.length) {
                carData.push({
                  src: $img.attr("src"),
                  alt: $img.attr("alt") || "",
                  name: "",
                  price: "",
                  status: "",
                  statusClass: ""
                });
              }
            });
          }
          
          if (!carData.length) {
            console.log("No car data found in gallery column");
            return;
          }
  
          // Generate unique IDs
          var uid =
            "gallery_" + Date.now() + "_" + Math.floor(Math.random() * 9999);
          var featId = uid + "_feature";
          var thumbId = uid + "_thumb";
  
          // Build wrapper
          var $wrap = $('<div class="c-feature-wrap"></div>');
  
          // BUILD FEATURE SLIDER (if enabled)
          if (showFeature) {
            var $feature = $(
              '<div class="feature-slider" id="' + featId + '"></div>'
            );
  
            $.each(carData, function (i, car) {
              var overlay = enableLightbox
                ? '<div class="cfs-overlay-btn">View All Photos</div>'
                : "";
              
              var carInfo = '';
              if (car.name || car.price || car.status) {
                carInfo = '<div class="car-slide-info">' +
                  (car.name ? '<div class="car-slide-name">' + car.name + '</div>' : '') +
                  (car.price ? '<div class="car-slide-price">' + car.price + '</div>' : '') +
                  (car.status ? '<div class="car-slide-status ' + car.statusClass + '">' + car.status + '</div>' : '') +
                  '</div>';
              }
              
              $feature.append(
                '<div class="feature-slide">' +
                  '<div class="cfs-overlay-wrap">' +
                  '<img src="' +
                  car.src +
                  '" alt="' +
                  car.alt +
                  '">' +
                  overlay +
                  "</div>" +
                  carInfo +
                  "</div>"
              );
            });
  
            $wrap.append($feature);
          }
  
          // BUILD THUMBNAIL SLIDER (if enabled)
          if (showThumbnails) {
            var $thumbWrapper = $('<div class="thumb-slider-wrapper"></div>');
            var $thumbs = $(
              '<div class="thumb-slider" id="' + thumbId + '"></div>'
            );
  
            $.each(carData, function (i, car) {
              $thumbs.append(
                '<div class="thumb-item">' +
                  '<div class="thumb">' +
                  '<img src="' +
                  car.src +
                  '" alt="' +
                  car.alt +
                  '">' +
                  "</div>" +
                  "</div>"
              );
            });
  
            $thumbWrapper.append($thumbs);
  
            // Add button if lightbox enabled
            if (enableLightbox) {
              $thumbWrapper.append(
                '<div class="button-wrap">' +
                  '<button class="see-all-btn" type="button">View All Photos</button>' +
                  "</div>"
              );
            }
  
            $wrap.append($thumbWrapper);
          }
  
          // Add to DOM and hide original
          $column.prepend($wrap);
          // Hide car cards OR et_pb_module
          $column.find(".car-card, .et_pb_module").hide();
  
          // Initialize sliders after DOM ready
          setTimeout(function () {
            // INITIALIZE FEATURE SLIDER
            if (showFeature) {
              var $featureSlider = $("#" + featId);
  
              $featureSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                arrows: !showThumbnails,
                dots: !showThumbnails,
                autoplay: false,
                autoplaySpeed: autoplaySpeed,
                speed: 700,
                adaptiveHeight: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                draggable: true,
                swipe: true,
                touchMove: true,
                infinite: true,
                asNavFor: showThumbnails ? "#" + thumbId : null,
                cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
              });
            }
  
            // INITIALIZE THUMBNAIL SLIDER
            if (showThumbnails) {
              var $thumbSlider = $("#" + thumbId);
  
              $thumbSlider.slick({
                slidesToShow: Math.min(4, carData.length),
                slidesToScroll: 1,
                focusOnSelect: true,
                arrows: carData.length > 5,
                dots: false,
                autoplay: autoplay, // Don't autoplay thumbnails when synced with feature
                speed: 500,
                infinite: carData.length > 5,
                draggable: true,
                slideToSwipe: true,
                swipe: true,
                touchMove: true,
                asNavFor: showFeature ? "#" + featId : null,
                slide: ".thumb-item",
                prevArrow:
                  '<button type="button" class="slick-prev" aria-label="Previous"><span>‹</span></button>',
                nextArrow:
                  '<button type="button" class="slick-next" aria-label="Next"><span>›</span></button>',
                responsive: [
                  {
                    breakpoint: 980,
                    settings: {
                      slidesToShow: Math.min(4, carData.length),
                      arrows: carData.length > 4,
                    },
                  },
                  {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: Math.min(3, carData.length),
                      arrows: carData.length > 3,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: Math.min(2, carData.length),
                      arrows: carData.length > 2,
                    },
                  },
                ],
              });
            }
  
            // LIGHTBOX FUNCTIONALITY
            if (enableLightbox) {
              var opening = false;
  
              function openLightbox(e) {
                if (e) {
                  e.preventDefault();
                  e.stopPropagation();
                }
  
                if (
                  opening ||
                  (typeof Fancybox !== "undefined" && Fancybox.getInstance())
                ) {
                  return false;
                }
  
                opening = true;
  
                var items = $.map(carData, function (car) {
                  var caption = car.alt;
                  if (car.name) caption = car.name + (car.price ? ' - ' + car.price : '');
                  return { src: car.src, type: "image", caption: caption };
                });
  
                // Pause feature slider
                if (showFeature && autoplay) {
                  $("#" + featId).slick("slickPause");
                }
  
                if (typeof Fancybox !== "undefined") {
                  try {
                    Fancybox.show(items, {
                      infinite: true,
                      Toolbar: {
                        display: {
                          left: ["infobar"],
                          middle: [],
                          right: ["slideshow", "thumbs", "close"],
                        },
                      },
                      on: {
                        done: function () {
                          opening = false;
                        },
                        close: function () {
                          opening = false;
                          if (showFeature && autoplay) {
                            $("#" + featId).slick("slickPlay");
                          }
                        },
                      },
                    });
                  } catch (err) {
                    console.error("Fancybox error:", err);
                    opening = false;
                  }
                } else if ($.fancybox) {
                  $.fancybox.open(items, {
                    loop: true,
                    afterClose: function () {
                      opening = false;
                      if (showFeature && autoplay) {
                        $("#" + featId).slick("slickPlay");
                      }
                    },
                  });
                } else {
                  opening = false;
                  window.open(items[0].src, "_blank");
                }
  
                return false;
              }
  
              // Bind events
              $wrap.off("click.lightbox");
              $wrap.on(
                "click.lightbox",
                ".cfs-overlay-btn, .see-all-btn, .feature-slide img, .thumb img",
                openLightbox
              );
            }
          }, 100);
  
          $column.data("gallery-initialized", true);
        });
      }
  
      // Initialize
      function init() {
        if (typeof $.fn.slick === "undefined") {
          console.error("Slick Carousel not loaded");
          return;
        }
        // Wait a bit for car cards to be created
        setTimeout(function() {
          initGallery();
        }, 200);
      }
  
      // Wait for DOM and car cards to be ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
          setTimeout(init, 300);
        });
      } else {
        setTimeout(init, 300);
      }
      
      $(window).on("load", function() {
        setTimeout(init, 100);
      });
  
      if (typeof window.et_pb_custom !== "undefined") {
        $(document).on("et_pb_after_init_modules", init);
      }
    });
  })();
import { View, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

function ImageSlider() {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        autoplayDirection={true}
        directionalLockEnabled={true}
        dot={
          <View
            style={{
              backgroundColor: "#ccc",
              width: 10,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              elevation: 1,
              marginTop: 3,
              marginBottom: -3,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: "#edaa4b",
              elevation: 3,
              width: 20,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: -3,
            }}
          />
        }
      >
        <View style={styles.slide}>
          <Image
            source={{
              uri: "https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-6/321836975_561889852124610_8606023878537323024_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFbZnwO75eSm_ayj-NF2ZHnrFWOQX-josqsVY5Bf6OiyqwITJGFWhqCDws-PxHNa20qV1hUKrkQs5eSYuzgQwzI&_nc_ohc=VBtDAol2XjcAX9wK0dy&_nc_ht=scontent.fcai20-6.fna&oh=00_AfC83FZV3CYzMlfrC1Wmr2ZLDlHhth6-l2Nx4U0O8ZhnSg&oe=648EA289",
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={{
              uri: "https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-6/273214121_125129836693156_861512411518335180_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFsmjed6dfLJDWBT2ZMBa3oqtAFDBjKaPWq0AUMGMpo9dVMDptYWC0W-5hrkDSc3CFn8yrUKMU-qt9oKk3OQrJh&_nc_ohc=VMg1wsQ5MrgAX9JxDV6&_nc_ht=scontent.fcai20-6.fna&oh=00_AfBSy9V4zUW4k2JvSdqaZtie2iSyOhdaY7p7Cq05h-Vsig&oe=648DD5E5",
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={{
              uri: "https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-6/305713849_180713447801461_3559541962822513445_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEsmbLzgjuOs8D7viaR4lVbsRCEYnz4IDKxEIRifPggMqbgHscUelkpE2nNHVqGbuqa4CKxu4XFQYdsJp2AjBt9&_nc_ohc=jYiHgEPrpjYAX8-SsSh&_nc_ht=scontent.fcai20-6.fna&oh=00_AfAHrTO_83vO7wA6KX1orkCBROGdM7VOeCd_UXHvqzbnlA&oe=648F52B5",
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={{
              uri: "https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-6/316411490_195948906277915_9022765420341876558_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFEYyv7WWnH1mzHQS13kcdcOoYt-5TL8LA6hi37lMvwsChPNK_NTKmYD5jkYRX3IWdw4JbfiEkRhZVGLzCJ04FI&_nc_ohc=mlWfS0Dnh6gAX_QCg-R&_nc_ht=scontent.fcai20-6.fna&oh=00_AfDASAGnSb4I80c-CNdSYEt55Z8_2_EfQvDIoJ5rXB-zoA&oe=648E6A47",
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </Swiper>
    </View>
  );
}

export default ImageSlider;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
    marginVertical: 15,
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginHorizontal: 15,
    borderRadius: 12,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
});

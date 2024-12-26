import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

/**
 * Haber detay ekranı bileşeni
 * Seçilen haberin tüm detaylarını görüntüler
 * @param {object} route - Route parametreleri, haber verisini içerir
 */
const NewsDetailScreen = ({ route }) => {
  // Route params'dan haber verisini al
  const { news } = route.params;

  return (
    <ScrollView style={styles.detailContainer}>
      {/* Haber görseli - detay sayfasında daha büyük */}
      <Image
        source={{ uri: news.image }}
        style={styles.detailImage}
        resizeMode='cover'
      />
      <View style={styles.detailContent}>
        {/* Başlık ve meta bilgiler */}
        <View style={styles.detailHeader}>
          <Text style={styles.detailTitle}>{news.title}</Text>
          <View style={styles.detailInfo}>
            <Text style={styles.detailDate}>{news.date}</Text>
            <View style={styles.categoryContainer}>
              <Text style={styles.category}>{news.category}</Text>
            </View>
          </View>
        </View>
        {/* Haber özeti */}
        <Text style={styles.detailDescription}>{news.shortDescription}</Text>
        {/* Haberin tam içeriği */}
        <Text style={styles.detailText}>{news.content}</Text>
      </View>
    </ScrollView>
  );
};

// Stil tanımlamaları
const styles = StyleSheet.create({
  // Detay sayfası ana container'ı
  detailContainer: {
    flex: 1,
    backgroundColor: "#fff"
  },
  // Detay sayfası görsel stili
  detailImage: {
    width: "100%",
    height: 300
  },
  // Detay içerik container'ı
  detailContent: {
    padding: 16
  },
  // Detay başlık container'ı
  detailHeader: {
    marginBottom: 16
  },
  // Detay başlık stili
  detailTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8
  },
  // Detay bilgi container'ı
  detailInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16
  },
  // Detay tarih stili
  detailDate: {
    fontSize: 14,
    color: "#888"
  },
  // Kategori container stili
  categoryContainer: {
    backgroundColor: "#e3f2fd",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20
  },
  // Kategori text stili
  category: {
    fontSize: 12,
    color: "#1976d2"
  },
  // Detay açıklama stili
  detailDescription: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
    fontStyle: "italic"
  },
  // Detay metin stili
  detailText: {
    fontSize: 16,
    color: "#444",
    lineHeight: 24
  }
});

export default NewsDetailScreen;

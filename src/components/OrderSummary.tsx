import { useState } from "react";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../constants/styles";
import { CartItem, formatRupiah, hitungTotal } from "../constants/utils";

interface OrderSummaryProps {
    cartData: CartItem[];
    onDecrease: (id: string) => void;
    onClearCart: () => void; // Fungsi baru untuk mereset keranjang setelah sukses
}

const OrderSummary = ({ cartData, onDecrease, onClearCart }: OrderSummaryProps) => {
    // State untuk mengontrol pop-up struk terbuka/tertutup
    const [isModalVisible, setIsModalVisible] = useState(false);

    if (cartData.length === 0) {
        return null;
    }

    const totalBelanja = hitungTotal(cartData);

    // Buka Modal Struk
    const handleCheckout = () => {
        setIsModalVisible(true);
    };

    // Tutup Modal dan Kosongkan Keranjang (Checkout Selesai)
    const handleFinishCheckout = () => {
        setIsModalVisible(false);
        onClearCart();
    };

    // Tanggal saat ini untuk dicetak di struk
    const currentDate = new Date().toLocaleString("id-ID", {
        weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit"
    });

    return (
        <View style={styles.summaryContainer}>
            {/* List Item di Order Summary (Bawah) */}
            {cartData.map((item) => (
                <View key={item.id} style={styles.summaryItemRow}>
                    <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
                        <TouchableOpacity style={styles.qtyBtn} onPress={() => onDecrease(item.id)}>
                            <Text style={styles.qtyBtnText}>-</Text>
                        </TouchableOpacity>
                        <Text style={{ marginHorizontal: 10 }}>{item.qty}x {item.name}</Text>
                    </View>
                    <Text>{formatRupiah(item.price * item.qty)}</Text>
                </View>
            ))}

            <View style={styles.summaryTotalRow}>
                <Text style={styles.summaryTotalText}>Total Pembayaran</Text>
                <Text style={[styles.summaryTotalText, { color: "#059669" }]}>
                    {formatRupiah(totalBelanja)}
                </Text>
            </View>

            <Pressable style={styles.checkoutButton} onPress={handleCheckout}>
                <Text style={styles.checkoutText}>Pesan Sekarang</Text>
            </Pressable>

            {/* --- POP UP MODAL STRUK (RECEIPT) --- */}
            <Modal visible={isModalVisible} transparent={true} animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.receiptContainer}>

                        <Text style={styles.receiptHeader}>FlavorTrack</Text>
                        <Text style={styles.receiptDate}>{currentDate}</Text>

                        {/* Garis Putus-putus */}
                        <View style={styles.receiptDivider} />

                        {/* List Pesanan di Struk */}
                        {cartData.map((item) => (
                            <View key={`receipt-${item.id}`} style={styles.summaryItemRow}>
                                <Text style={styles.receiptItemText}>{item.qty}x {item.name}</Text>
                                <Text style={styles.receiptItemText}>{formatRupiah(item.price * item.qty)}</Text>
                            </View>
                        ))}

                        {/* Garis Putus-putus */}
                        <View style={styles.receiptDivider} />

                        {/* Total di Struk */}
                        <View style={styles.summaryTotalRow}>
                            <Text style={styles.summaryTotalText}>Total</Text>
                            <Text style={styles.receiptTotalText}>{formatRupiah(totalBelanja)}</Text>
                        </View>

                        <Text style={styles.receiptFooter}>Terima kasih atas pesanan Anda!</Text>

                        {/* Tombol Tutup Struk */}
                        <TouchableOpacity style={styles.doneButton} onPress={handleFinishCheckout}>
                            <Text style={styles.doneButtonText}>Selesai & Bayar</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default OrderSummary;
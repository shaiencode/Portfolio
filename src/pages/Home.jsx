import { motion } from "framer-motion";
import "../assets/styles.css";

function Home() {
  return (
    <main className="hero-wrapper">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="greeting"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span>welcome to my</span>
        </motion.div>

        <h1 className="main-title">
          portfolio
        </h1>

        <motion.div 
          className="sub-headings"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <span className="bold">graphic design</span> <br />
          <span className="italic">social media</span> <br />
          <span className="italic">ui/ux design</span>
        </motion.div>
      </motion.div>
    </main>
  );
}

export default Home;
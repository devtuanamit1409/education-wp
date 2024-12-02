<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'education' );

/** Database username */
define( 'DB_USER', 'education_user' );

/** Database password */
define( 'DB_PASSWORD', 'education@2024' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );


/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Lsfkw(`F`VMLd#F|q0+8RyL&1|-^4|YRgb|FkDx1FLel4j2m4|-e#4[*y|P-5,3g');
define('SECURE_AUTH_KEY',  '9:<kHj{d%Dq?#e-wp`pl;xp]Fva+M; =K{O~dh[gK}Pbg-%kVm5I79G[D~8]>;>i');
define('LOGGED_IN_KEY',    'pFfi:kf4;bWDs,;|kex,-^7K}^O6+-@K.>O5;lcE=FkfA$CyiKx[WRf|Js3o1fJD');
define('NONCE_KEY',        'OWR:R+8T9D%mC8Dok_m%T#pkx~XXH89Wt|EM}BnP xN$J?-I#+;#|~LL3w}}80>j');
define('AUTH_SALT',        '`Vuqx@.+3C^{T,EG&6-)EKL,6lan/xf=v3NJ`3?n]sk5*Y[W)jd|&g1>aTc;Sdhn');
define('SECURE_AUTH_SALT', '!]I6|@b@:avyk8rq}z|x+NUv3PwHnO--q)M.?G|kEE!e7D7Q[e HiW?+|l]tD#OS');
define('LOGGED_IN_SALT',   'rVksdG})G:vv4c84q**~T^f58e=+GT>LZ+ek 3F+}wS}Sy![|#e(O8<QS&2@EJ+^');
define('NONCE_SALT',       'YA,}i1[7duSR-oyJ{C1 -vjYO-&Pl+/XyFOJ_q,|h|H@?4vT!A:qqfR}-Ua~9fUn');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
